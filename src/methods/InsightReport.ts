// 导入公共类型
import type {Parameter, NameValuePair, ReportData, RunningInfo, JSONArray} from '../types';
import {smartbi} from "../index.ts";

/**
 * 打开透视分析
 * @param reportId 报表Id
 * @returns 无返回值
 */
export const open = (reportId: string): Promise<void> => {
    return smartbi('InsightReport', 'open', [reportId])
}

/**
 * 获取参数列表
 * @returns 返回参数列表
 */
export const getParamList = (): Promise<Parameter[]> => {
    return smartbi('InsightReport', 'getParamList', [])
}

/**
 * 获取参数备选值
 * @param paramId 参数Id
 * @returns 返回备选值列表
 */
export const getParamStandbyValue = (paramId: string): Promise<NameValuePair[]> => {
    return smartbi('InsightReport', 'getParamStandbyValue', [paramId])
}

/**
 * 根据参数Id获取参数默认值
 * @param pid 参数Id
 * @returns 返回默认值字符串
 */
export const getParamDefaultValueByPID = (pid: string): Promise<string> => {
    return smartbi('InsightReport', 'getParamDefaultValueByPID', [pid])
}

/**
 * 根据参数Id获取参数默认值
 * @param pid 参数Id
 * @returns 返回默认值JSONArray
 */
export const getParamDefaultValueByPID2 = (pid: string): Promise<JSONArray> => {
    return smartbi('InsightReport', 'getParamDefaultValueByPID2', [pid])
}
/**
 * 导出
 * @param type 导出类型
 * @param delimiter 分隔符
 * @param maxRow 最大行数
 * @param resourceBasePath 资源基础路径
 * @param valueType 值类型
 * @param contentType 内容类型
 * @param paramArr 可选参数数组
 * @returns 无返回值
 */
export const doExport = (
    type:  string,
    delimiter: string,
    maxRow: string,
    resourceBasePath: string,
    valueType: string,
    contentType: string,
    paramArr?: JSONArray
): Promise<void> => {
    if (paramArr !== undefined) {
        return smartbi('InsightReport', 'doExportWithParams', [type, delimiter, maxRow, resourceBasePath, valueType, contentType, paramArr.toString()])
    } else {
        return smartbi('InsightReport', 'doExport', [type, delimiter, maxRow, resourceBasePath, valueType, contentType])
    }
}


/**
 * 设置参数值
 * @param id 参数Id
 * @param value 参数真实值
 * @param displayValue 参数显示值
 * @returns 无返回值
 */
export const setParamValue = (
    id: string,
    value: string,
    displayValue: string
): Promise<void> => {
    return smartbi('InsightReport', 'setParamValue', [id, value, displayValue])
}

/**
 * 刷新对象
 * @returns 无返回值
 */
export const refreshObject = (): Promise<void> => {
    return smartbi('InsightReport', 'refreshObject', [])
}

/**
 * 关闭透视分析
 * @returns 无返回值
 */
export const close = (): Promise<void> => {
    return smartbi('InsightReport', 'close', [])
}

/**
 * 获取执行状态
 * @returns 返回执行状态信息
 */
export const getExecutingState = (): Promise<RunningInfo> => {
    return smartbi('InsightReport', 'getExecutingState', [])
}

/**
 * 取得报表的指定页
 * @param pageIndex 页码
 * @returns 返回报表数据
 */
export const getPage = (pageIndex: number): Promise<ReportData> => {
    return smartbi('InsightReport', 'getPage', [pageIndex])
}
