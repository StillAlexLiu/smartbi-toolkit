import axios, {type AxiosResponse} from "axios";

export type SmartbiDev = {
    username: string,
    password: string,
}

const __smartbi_env: SmartbiDev & {
    smartbiPath: string,
    mode: 'dev' | 'prod',
    noop?: number,
} = {
    username: '',
    password: '',
    smartbiPath: '/smartbi',
    mode: 'prod',
    noop: 30000
}
const HEADERS: Readonly<Record<string, string>> = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
}
export const setSmartbiEnv = ({
                                  path = '/smartbi',
                                  dev,
                                  noop = 30000,
                                  mode = 'prod'
                              }: {
    path?: '/smartbi' | '' | string,
    dev?: SmartbiDev,
    mode?: 'dev' | 'prod',
    noop?: number,
}) => {
    __smartbi_env.username = dev?.username || ''
    __smartbi_env.password = dev?.password || ''
    __smartbi_env.smartbiPath = path
    __smartbi_env.mode = mode
    __smartbi_env.noop = noop
    if (dev) {
        console.log("请勿将账号信息直接赋值到username和password中，避免暴露账号密码，如需要，可考虑从环境变量.env文件中获取")
    }
}
/**
 * pending：登录中
 * online：已登录
 * offline：未登录
 */
type Status = 'pending' | 'online' | 'offline'
type PostStack = () => void
const smartbiInit = () => {
    const postList = new Set<PostStack>()
    let timer: any = 0
    let status: Status = 'offline'

    return {
        /**
         * 停止心跳
         */
        stopHeatBeat() {
            try {
                clearInterval(timer)
            } catch (e) {
                console.error(e)
            }
        },
        /**
         * 开始心跳循环，默认30秒，通过环境变量noop修改，登录后可用
         *
         */
        startHeatBeat() {
            this.stopHeatBeat()
            timer = setInterval(() => {
                if (status === 'online') {
                    noop().then(() => {

                    })
                }

            }, __smartbi_env.noop)
        },
        /**
         * 修改状态
         * @param value {Status}
         */
        setStatus(value: Status) {
            status = value
        },
        /**
         * 获取当前状态
         */
        getStatus(): Status {
            return status
        },
        emit() {
            postList.forEach(call => {
                call()
            })
            postList.clear()
        },
        on(call: PostStack) {
            postList.add(call)
        },
        /**
         * 等待登录完成的Promise，确保处于已登录状态
         * @param requireLogin 是否需要登录
         */
        ensureLogin(requireLogin: boolean): Promise<void> {
            return new Promise(resolve => {
                if (requireLogin) {
                    if (status === 'offline') {
                        status = 'pending'
                        login().then(() => {
                            emit()
                            resolve()
                        })
                    } else if (status === 'online') {
                        resolve()
                    } else if (status === 'pending') {
                        on(() => {
                            resolve()
                        })
                    }
                } else {
                    resolve()
                }
            })
        }
    }
}
const {emit, on, ensureLogin, setStatus, getStatus, startHeatBeat, stopHeatBeat} = smartbiInit()
export {emit, on, ensureLogin, setStatus, getStatus, startHeatBeat, stopHeatBeat}
export const smartbi = <T>(
    className: string,
    methodName: string,
    params: Array<string | number | boolean | null | undefined>,
    requireLogin: boolean = __smartbi_env.mode === 'dev', // 开发环境需要登录，生产环境需要自行实现登录，或者在扩展包下进行
): Promise<T> => {
    return new Promise((resolve, reject) => {
        ensureLogin(requireLogin)
            .then(() => {
                return axios.post(`${__smartbi_env.smartbiPath}/vision/RMIServlet`, {
                    className,
                    methodName,
                    params: JSON.stringify(params),
                }, {
                    headers: HEADERS
                })
            })
            .then(res => {
                if (res.data.retCode === 0) {
                    resolve(res.data.result)
                } else {
                    console.error('smartbi返回状态错误')
                    console.error(res.data.stackTrace)
                    reject(new Error(res.data.stackTrace))
                }
            })
            .catch(e => {
                reject(e)
            })
    })
}

/**
 * 通用GET请求，流程同smartbi()，内部使用axios.get
 * @param url 请求地址
 * @param config axios请求配置
 * @param requireLogin 是否需要登录
 */
export const smartbiGet = <T = any>(
    url: string,
    config?: Parameters<typeof axios.get>[1],
    requireLogin: boolean = __smartbi_env.mode === 'dev',
): Promise<T> => {
    return new Promise((resolve, reject) => {
        ensureLogin(requireLogin)
            .then(() => {
                return axios.get(`${__smartbi_env.smartbiPath}/vision/${url}`, {
                    headers: HEADERS,
                    ...config,
                })
            })
            .then(res => resolve(res as T))
            .catch(e => reject(e))
    })
}
/**
 * 通用POST请求，流程同smartbi()，内部使用axios.post
 * @param url 请求地址
 * @param data 请求体数据
 * @param config axios请求配置
 * @param requireLogin 是否需要登录
 */
export const smartbiPost = <T = any>(
    url: string,
    data?: any,
    config?: Parameters<typeof axios.post>[2],
    requireLogin: boolean = __smartbi_env.mode === 'dev',
): Promise<T> => {
    return new Promise((resolve, reject) => {
        ensureLogin(requireLogin)
            .then(() => {
                return axios.post(`${__smartbi_env.smartbiPath}/vision/${url}`, data, {
                    headers: HEADERS,
                    ...config,
                })
            })
            .then(res => resolve(res as T))
            .catch(e => reject(e))
    })
}

/**
 * 登录smartbi服务
 */
export const login = (form?: {
    username: string,
    password: string
}) => {
    return new Promise(resolve => {
        smartbi('UserService', 'login', [form?.username || __smartbi_env.username, form?.password || __smartbi_env.password], false).then(value => {
            setStatus('online')
            resolve(value)
        })
    })
}
/**
 * 心跳
 */
export const noop = (): Promise<AxiosResponse> => {
    return axios.get(__smartbi_env.smartbiPath + '/vision/noop.jsp', {
        headers: HEADERS
    })
}
