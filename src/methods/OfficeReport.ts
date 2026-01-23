// 导入公共类型
import type {OfficeReportExportType, Parameter, RunningInfo} from '../types';

import {smartbi} from "../index";

/**
 * 打开Word分析报告
 * @param id Word分析报告id
 * @returns 无返回值
 */
export const openOfficeReport = (id: string): Promise<void> => {
    return smartbi('OfficeReport', 'open', [id])
}

/**
 * 关闭Word分析报告
 * @returns 无返回值
 */
export const closeOfficeReport = (): Promise<void> => {
    return smartbi('OfficeReport', 'close', [])
}

/**
 * 获取Word分析报告参数列表
 * @returns 返回参数列表
 */
export const getOfficeReportParamList = (): Promise<Parameter[]> => {
    return smartbi('OfficeReport', 'getParamList', [])
}

/**
 * 根据参数ID获取参数备选值
 * @param paramId 参数ID
 * @returns 返回参数备选值列表
 */
export const getOfficeReportParamStandbyValue = (paramId: string): Promise<any[]> => {
    return smartbi('OfficeReport', 'getParamStandbyValue', [paramId])
}

/**
 * 根据参数ID获取参数默认值
 * @param pid 参数ID
 * @returns 返回参数默认值
 */
export const getOfficeReportParamDefaultValueByPID = (pid: string): Promise<string> => {
    return smartbi('OfficeReport', 'getParamDefaultValueByPID', [pid])
}

/**
 * 设置参数值
 * @param id 参数ID
 * @param value 参数真实值
 * @param displayValue 参数显示值
 * @returns 无返回值
 */
export const setOfficeReportParamValue = (id: string, value: string, displayValue: string): Promise<void> => {
    return smartbi('OfficeReport', 'setParamValue', [id, value, displayValue])
}

/**
 * 导出Word分析报告
 * @param type 导出类型
 * @param os 输出流
 * @returns 无返回值
 */
export const exportOfficeReport = (type: OfficeReportExportType | string, os: any): Promise<void> => {
    return smartbi('OfficeReport', 'doExport', [type, os])
}

/**
 * 获取执行状态
 * @returns 返回执行状态信息
 */
export const getOfficeReportExecutingState = (): Promise<RunningInfo> => {
    return smartbi('OfficeReport', 'getExecutingState', [])
}
