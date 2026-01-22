// 定义SmartBI参数服务相关的类型接口

import { smartbi } from "../index.ts";

/**
 * 根据参数ID获取参数默认值SQL语句
 * @param paramId 参数ID
 * @returns 返回SQL语句
 */
export const getParameterDefaultSQLById = (paramId: string): Promise<string> => {
    return smartbi('ParameterService', 'getParameterDefaultSQLById', [paramId])
}

/**
 * 根据参数ID获取参数备选值SQL语句
 * @param paramId 参数ID
 * @returns 返回SQL语句
 */
export const getParameterStandbySQLById = (paramId: string): Promise<string> => {
    return smartbi('ParameterService', 'getParameterStandbySQLById', [paramId])
}