// 导入公共类型
import type {NameValuePair, Parameter, RunningInfo, SSReportExportType} from '../types';
import {smartbi} from "../index.ts";

/**
 * 打开电子表格报表
 * @param id 报表ID
 * @returns 无返回值
 */
export const openSSReport = (id: string): Promise<void> => {
    return smartbi('SSReport', 'open', [id])
}

/**
 * 关闭电子表格报表
 * @returns 无返回值
 */
export const closeSSReport = (): Promise<void> => {
    return smartbi('SSReport', 'close', [])
}

/**
 * 获取参数列表
 * @returns 返回参数列表
 */
export const getSSReportParamList = (): Promise<Parameter[]> => {
    return smartbi('SSReport', 'getParamList', [])
}

/**
 * 根据参数ID获取参数备选值
 * @param paramId 参数ID
 * @returns 返回参数键值对
 */
export const getSSReportParamStandbyValue = (paramId: string): Promise<NameValuePair[]> => {
    return smartbi('SSReport', 'getParamStandbyValue', [paramId])
}

/**
 * 根据参数ID获取参数默认值
 * @param pid 参数ID
 * @returns 返回参数默认值
 */
export const getSSReportParamDefaultValueByPID = (pid: string): Promise<string> => {
    return smartbi('SSReport', 'getParamDefaultValueByPID', [pid])
}

/**
 * 导出电子表格（基础版）
 * @param type 导出类型
 * @param os 输出流
 * @returns 无返回值
 */
export const exportSSReport = (type: SSReportExportType | string, os: any): Promise<void> => {
    return smartbi('SSReport', 'doExport', [type, os])
}

/**
 * 导出电子表格（带参数版）
 * @param type 导出格式
 * @param os 输出流
 * @param postData 请求参数
 * @returns 无返回值
 */
export const exportSSReportWithPostData = (type: SSReportExportType | string, os: any, postData: string): Promise<void> => {
    return smartbi('SSReport', 'doExport', [type, os, postData])
}

/**
 * 设置参数值
 * @param id 参数ID
 * @param value 值
 * @param displayValue 显示值
 * @returns 无返回值
 */
export const setSSReportParamValue = (id: string, value: string, displayValue: string): Promise<void> => {
    return smartbi('SSReport', 'setParamValue', [id, value, displayValue])
}

/**
 * 设置导出工作单的索引
 * @param exportSheetIndexes 导出工作单的索引
 * @returns 无返回值
 */
export const setSSReportExportSheetIndexes = (exportSheetIndexes: string): Promise<void> => {
    return smartbi('SSReport', 'setExportSheetIndexes', [exportSheetIndexes])
}

/**
 * 设置是否导出公式
 * @param exportFormula 是否导出公式
 * @returns 无返回值
 */
export const setSSReportExportFormula = (exportFormula: boolean): Promise<void> => {
    return smartbi('SSReport', 'setExportFormula', [exportFormula])
}

/**
 * 获取执行状态
 * @returns 返回执行状态
 */
export const getSSReportExecutingState = (): Promise<RunningInfo> => {
    return smartbi('SSReport', 'getExecutingState', [])
}

/**
 * 获取操作
 * @returns 返回操作
 */
export const getSSReportOperation = (): Promise<string> => {
    return smartbi('SSReport', 'getOperation', [])
}

/**
 * 设置操作
 * @param operation 操作
 * @returns 无返回值
 */
export const setSSReportOperation = (operation: string): Promise<void> => {
    return smartbi('SSReport', 'setOperation', [operation])
}

/**
 * 设置筛选条件
 * @param filtersRule 筛选条件json
 * @returns 无返回值
 */
export const setSSReportFiltersRule = (filtersRule: string): Promise<void> => {
    return smartbi('SSReport', 'setFiltersRule', [filtersRule])
}
