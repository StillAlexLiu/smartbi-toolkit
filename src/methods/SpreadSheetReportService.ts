// 导入公共类型
import type {NameValuePair} from '../types';
import {smartbi} from "../index.ts";

/**
 * 打开电子表格报表
 * @param reportId 报表ID
 * @returns 返回客户端ID
 */
export const openSpreadSheetReportQuery = (reportId: string): Promise<any> => {
    return smartbi('SpreadSheetReportService', 'openQuery', [reportId])
}

/**
 * 关闭电子表格报表
 * @param clientId 客户端ID
 * @returns 无返回值
 */
export const closeSpreadSheetReportQuery = (clientId: string): Promise<void> => {
    return smartbi('SpreadSheetReportService', 'closeQuery', [clientId])
}

/**
 * 根据参数ID获取参数默认值
 * @param panelId 参数面板ID
 * @param paramId 参数ID
 * @returns 返回参数默认值
 */
export const getSpreadSheetReportParamDefaultValueByPID = (panelId: string, paramId: string): Promise<any[]> => {
    return smartbi('SpreadSheetReportService', 'getParamDefaultValueByPID', [panelId, paramId])
}

/**
 * 获取参数备选值
 * @param panelId 参数面板ID
 * @param paramId 参数ID
 * @returns 返回参数标准值
 */
export const getSpreadSheetReportParamStandbyValue = (panelId: string, paramId: string): Promise<NameValuePair[]> => {
    return smartbi('SpreadSheetReportService', 'getParamStandbyValue', [panelId, paramId])
}

/**
 * 获取报表层面的参数默认值
 * @param contextId 报表上下文会话id
 * @param paramId 参数id
 * @returns 返回报表参数默认值
 */
export const getSpreadSheetReportParamDefaultValueByContext = (contextId: string, paramId: string): Promise<any[]> => {
    return smartbi('SpreadSheetReportService', 'getReportParamDefaultValueByPID', [contextId, paramId])
}

/**
 * 设置参数值
 * @param panelId 参数面板ID
 * @param paramId 参数ID
 * @param value 值
 * @param displayValue 显示值
 * @returns 返回是否设置成功的布尔值
 */
export const setSpreadSheetReportParamValue = (panelId: string, paramId: string, value: string, displayValue: string): Promise<boolean> => {
    return smartbi('SpreadSheetReportService', 'setParamValue', [panelId, paramId, value, displayValue])
}
