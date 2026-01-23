// 定义SmartBI系统配置服务相关的类型接口

export interface SystemConfig {
    id: string;
    key: string;
    name: string;
    value: string;
    description?: string;
    category?: string;
    dataType?: string; // 数据类型，如STRING, NUMBER, BOOLEAN等
    defaultValue?: string;
    editable?: boolean; // 是否可编辑
    // 其他可能的属性
    [key: string]: any;
}

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
