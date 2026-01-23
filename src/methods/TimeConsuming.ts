// 定义SmartBI耗时分析相关的类型接口

import type { RunningInfo } from '../types';
import { smartbi } from "../index";

/**
 * 获取状态信息
 * @returns 返回执行状态信息
 */
export const loadTimeConsuming = (): Promise<RunningInfo> => {
    return smartbi('TimeConsuming', 'load', [])
};
