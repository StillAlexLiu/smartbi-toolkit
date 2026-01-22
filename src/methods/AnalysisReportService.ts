// 导入公共类型
import type {IResult, RunningInfo, IParameter, Parameter, NameValuePair, AllExportTypeMap} from '../types';

/**
 * 打开多维报表
 * @param reportId 报表ID
 * @returns 返回报表客户端ID
 */
export const openAnalysisReport = (reportId: string): Promise<string> => {
    return smartbi('AnalysisReportService', 'openAnalysisReport', [reportId])
}

/**
 * 打开多维报表（不初始化）
 * @param reportId 报表ID
 * @returns 返回报表客户端ID
 */
export const openOlapReportWithoutInit = (reportId: string): Promise<string> => {
    return smartbi('AnalysisReportService', 'openOlapReportWithoutInit', [reportId])
}

/**
 * 关闭多维报表
 * @param clientId 客户端ID
 * @returns 无返回值
 */
export const closeAnalysisReport = (clientId: string): Promise<void> => {
    return smartbi('AnalysisReportService', 'closeAnalysisReport', [clientId])
}

/**
 * 设置多维报表参数值
 * @param clientId 客户端ID
 * @param id 参数ID
 * @param value 参数值
 * @param displayValue 参数显示值
 * @returns 无返回值
 */
export const setParamValue = (
    clientId: string,
    id: string,
    value: string,
    displayValue: string
): Promise<void> => {
    return smartbi('AnalysisReportService', 'setParamValue', [clientId, id, value, displayValue])
}

/**
 * 执行多维查询
 * @param clientId 客户端ID
 * @returns 返回查询结果
 */
export const executeQuery = (clientId: string): Promise<IResult> => {
    return smartbi('AnalysisReportService', 'executeQuery', [clientId])
}

/**
 * 导出报表
 * @param clientId 客户端ID
 * @param exportType 导出类型
 * @param delimiter 分割符
 * @param os 输出流
 * @param resourceBasePath 资源路径前缀(可选)
 * @param valueType 值类型(可选)
 * @returns 无返回值
 */
export const doExport = (
    clientId: string,
    exportType: keyof AllExportTypeMap| string,
    delimiter: string,
    os: any, // 输出流
    resourceBasePath?: string,
    valueType?: string
): Promise<void> => {
    const params = [clientId, exportType, delimiter, os];
    if (resourceBasePath !== undefined) {
        params.push(resourceBasePath);
        if (valueType !== undefined) {
            params.push(valueType);
        }
    }
    return smartbi('AnalysisReportService', 'doExport', params)
}

/**
 * 设置参数为默认值
 * @param clientId 客户端ID
 * @param paramId 参数ID
 * @returns 无返回值
 */
export const setParameterValueAsDefault = (clientId: string, paramId: string): Promise<void> => {
    return smartbi('AnalysisReportService', 'setParameterValueAsDefault', [clientId, paramId])
}

/**
 * 获取参数
 * @param clientId 客户端ID
 * @param paramId 参数ID
 * @returns 返回参数信息
 */
export const getParameter = (clientId: string, paramId: string): Promise<IParameter> => {
    return smartbi('AnalysisReportService', 'getParameter', [clientId, paramId])
}

/**
 * 获取参数显示值
 * @param clientId 客户端ID
 * @param paramId 参数ID
 * @returns 返回参数显示值
 */
export const getParameterDisplayValue = (clientId: string, paramId: string): Promise<string> => {
    return smartbi('AnalysisReportService', 'getParameterDisplayValue', [clientId, paramId])
}

/**
 * 获取参数默认值
 * @param clientId 客户端ID
 * @param paramId 参数ID
 * @returns 返回参数默认值列表
 */
export const getParameterDefaultValue = (clientId: string, paramId: string): Promise<string[]> => {
    return smartbi('AnalysisReportService', 'getParameterDefaultValue', [clientId, paramId])
}

/**
 * 获取所有参数
 * @param clientId 客户端ID
 * @returns 返回参数列表
 */
export const getParameters = (clientId: string): Promise<Parameter[]> => {
    return smartbi('AnalysisReportService', 'getParameters', [clientId])
}

/**
 * 获取参数候选值列表
 * @param clientId 客户端ID
 * @param paramId 参数ID
 * @returns 返回候选值列表
 */
export const getParamStandbyValue = (clientId: string, paramId: string): Promise<NameValuePair[]> => {
    return smartbi('AnalysisReportService', 'getParamStandbyValue', [clientId, paramId])
}

/**
 * 获取执行状态
 * @param clientId 客户端ID
 * @returns 返回执行状态信息
 */
export const getExecutingState = (clientId: string): Promise<RunningInfo> => {
    return smartbi('AnalysisReportService', 'getExecutingState', [clientId])
}

import {smartbi} from "../index.ts";
