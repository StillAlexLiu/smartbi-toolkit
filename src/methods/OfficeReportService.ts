// 导入公共类型
import type { NameValuePair } from '../types';

import { smartbi } from "../index";

/**
 * 打开报表
 * @param reportId 报表ID
 * @returns 返回报表的JSON对象
 */
export const openReport = (reportId: string): Promise<any> => {
    return smartbi('OfficeReportService', 'openReport', [reportId])
}

/**
 * 关闭报表
 * @param clientId 客户端ID
 * @returns 无返回值
 */
export const closeReport = (clientId: string): Promise<void> => {
    return smartbi('OfficeReportService', 'closeReport', [clientId])
}

/**
 * 获取参数备选值
 * @param panelId 参数面板会话ID
 * @param paramId 参数ID
 * @returns 返回参数备选值列表
 */
export const getParamStandbyValue = (panelId: string, paramId: string): Promise<NameValuePair[]> => {
    return smartbi('OfficeReportService', 'getParamStandbyValue', [panelId, paramId])
}

/**
 * 根据参数ID获取参数默认值
 * @param panelId 参数面板会话ID
 * @param paramId 参数ID
 * @returns 返回参数默认值的JSON数组
 */
export const getParamDefaultValueByPID = (panelId: string, paramId: string): Promise<any[]> => {
    return smartbi('OfficeReportService', 'getParamDefaultValueByPID', [panelId, paramId])
}

/**
 * 设置参数值
 * @param panelId 参数面板ID
 * @param paramId 参数ID
 * @param value 参数真实值
 * @param displayValue 参数显示值
 * @returns 返回是否设置成功的布尔值
 */
export const setParamValue = (panelId: string, paramId: string, value: string, displayValue: string): Promise<boolean> => {
    return smartbi('OfficeReportService', 'setParamValue', [panelId, paramId, value, displayValue])
}
