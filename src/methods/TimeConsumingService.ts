// 导入公共类型
import {smartbi} from "../index";

/**
 * 获取执行时间信息
 * @returns 返回执行时间信息的JSON对象
 */
export const loadRunningTimeConsuming = (): Promise<any> => {
    return smartbi('TimeConsumingService', 'loadRunning', [])
};
