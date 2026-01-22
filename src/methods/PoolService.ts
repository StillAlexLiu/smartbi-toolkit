// 定义SmartBI连接池服务相关的类型接口

import { smartbi } from "../index.ts";

/**
 * 清除所有连接池
 * @returns 无返回值
 */
export const clearAllPools = (): Promise<void> => {
    return smartbi('PoolService', 'clearAllPools', [])
}

/**
 * 根据连接池名称清除连接池
 * @param poolName 连接池名称
 * @returns 无返回值
 */
export const clearPoolByName = (poolName: string): Promise<void> => {
    return smartbi('PoolService', 'clearPoolByName', [poolName])
}