// 导入公共类型
import type { SystemConfig } from '../types';


import { smartbi } from "../index";

/**
 * 获取系统设置
 * @returns 返回系统设置对象列表
 */
export const getSystemConfigs = (): Promise<SystemConfig[]> => {
    return smartbi('SystemConfigService', 'getSystemConfigs', [])
}

/**
 * 根据键获取系统配置
 * @param key 配置键
 * @returns 返回系统配置对象
 */
export const getSystemConfig = (key: string): Promise<SystemConfig> => {
    return smartbi('SystemConfigService', 'getSystemConfig', [key])
}

/**
 * 清空缓存
 * @returns 无返回值
 */
export const clearSystemConfigCache = (): Promise<void> => {
    return smartbi('SystemConfigService', 'clearCache', [])
}
