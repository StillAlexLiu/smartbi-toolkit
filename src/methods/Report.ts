// 导入公共类型
import type {CustomFilterDataBean, ReportData, ReportExportType, RunningInfo} from '../types';
import {smartbi} from "../index.ts";

/**
 * 取得当前报表名
 * @returns 当前报表名
 */
export const getCurrentReportName = (): Promise<string> => {
    return smartbi('Report', 'getCurrentReportName', [])
}

/**
 * 取得每页行数
 * @returns 每页行数
 */
export const getRowsPerPage = (): Promise<number> => {
    return smartbi('Report', 'getRowsPerPage', [])
}

/**
 * 取得报表的参数信息
 * @returns 参数列表
 */
export const getReportParameters = (): Promise<any[]> => {
    return smartbi('Report', 'getParameters', [])
}

/**
 * 取得报表的字段信息
 * @returns 字段列表
 */
export const getReportFields = (): Promise<any[]> => {
    return smartbi('Report', 'getFields', [])
}

/**
 * 打开一个报表
 * @param reportId 报表ID
 * @returns 无返回值
 */
export const openReport = (reportId: string): Promise<void> => {
    return smartbi('Report', 'open', [reportId])
}

/**
 * 打开一个报表（不初始化）
 * @param reportId 报表ID
 * @returns 无返回值
 */
export const openReportWithoutInit = (reportId: string): Promise<void> => {
    return smartbi('Report', 'openWithoutInit', [reportId])
}

/**
 * 执行报表
 * @param rowsPerPage 指定每页行数
 * @returns 报表总行数
 */
export const executeReport = (rowsPerPage: number): Promise<number> => {
    return smartbi('Report', 'execute', [rowsPerPage])
}

/**
 * 取得报表的指定页
 * @param pageIndex 页码
 * @returns 报表数据
 */
export const getPage = (pageIndex: number): Promise<ReportData> => {
    return smartbi('Report', 'getPage', [pageIndex])
}

/**
 * 关闭报表
 * @returns 无返回值
 */
export const closeReport = (): Promise<void> => {
    return smartbi('Report', 'close', [])
}

/**
 * 设置参数值（仅值）
 * @param paramId 参数ID
 * @param paramValue 参数值
 * @returns 无返回值
 */
export const setReportParamValueOnly = (paramId: string, paramValue: string): Promise<void> => {
    return smartbi('Report', 'setParamValue', [paramId, paramValue])
}

/**
 * 设置参数值
 * @param paramId 参数ID
 * @param paramValue 参数值
 * @param displayValue 参数显示值
 * @returns 无返回值
 */
export const setReportParamValue = (paramId: string, paramValue: string, displayValue: string): Promise<void> => {
    return smartbi('Report', 'setParamValue', [paramId, paramValue, displayValue])
}

/**
 * 导出报表（基础版）
 * @param type 指定导出类型 EXCEL, TXT, CSV
 * @param delimiter 指定分割符（EXCEL类型不需要）
 * @param maxRow 指定最大行数
 * @param os 指定报表输出流
 * @returns 无返回值
 */
export const doExport = (
    type: ReportExportType | string,
    delimiter: string,
    maxRow: string,
    os: any
): Promise<void> => {
    return smartbi('Report', 'doExport', [type, delimiter, maxRow, os])
}

/**
 * 导出报表（带资源路径）
 * @param type 指定导出类型 EXCEL, TXT, CSV
 * @param delimiter 指定分割符（EXCEL类型不需要）
 * @param maxRow 指定最大行数
 * @param os 指定报表输出流
 * @param resourceBasePath 资源基础路径
 * @returns 无返回值
 */
export const doExportWithResourcePath = (
    type: ReportExportType | string,
    delimiter: string,
    maxRow: string,
    os: any,
    resourceBasePath: string
): Promise<void> => {
    return smartbi('Report', 'doExport', [type, delimiter, maxRow, os, resourceBasePath])
}

/**
 * 导出报表（带值类型）
 * @param type 指定导出类型 EXCEL, TXT, CSV
 * @param delimiter 指定分割符（EXCEL类型不需要）
 * @param maxRow 指定最大行数
 * @param os 指定报表输出流
 * @param resourceBasePath 资源基础路径
 * @param valueType 值类型
 * @returns 无返回值
 */
export const doExportWithValueType = (
    type: ReportExportType | string,
    delimiter: string,
    maxRow: string,
    os: any,
    resourceBasePath: string,
    valueType: string
): Promise<void> => {
    return smartbi('Report', 'doExport', [type, delimiter, maxRow, os, resourceBasePath, valueType])
}

/**
 * 导出报表（完整版）
 * @param type 指定导出类型 EXCEL, TXT, CSV
 * @param delimiter 指定分割符（EXCEL类型不需要）
 * @param maxRow 指定最大行数
 * @param os 指定报表输出流
 * @param resourceBasePath 资源基础路径
 * @param valueType 值类型
 * @param postData 数据
 * @returns 无返回值
 */
export const doExportFull = (
    type: ReportExportType | string,
    delimiter: string,
    maxRow: string,
    os: any,
    resourceBasePath: string,
    valueType: string,
    postData: string
): Promise<void> => {
    return smartbi('Report', 'doExport', [type, delimiter, maxRow, os, resourceBasePath, valueType, postData])
}

/**
 * 指定某个字段的排序方式
 * @param fieldId 字段ID
 * @param orderType 排序方式 ASC, DESC, NONE
 * @returns 无返回值
 */
export const setReportOrderByType = (fieldId: string, orderType: string): Promise<void> => {
    return smartbi('Report', 'setOrderByType', [fieldId, orderType])
}

/**
 * 指定某个字段的聚合方式
 * @param fieldId 字段ID
 * @param aggregate 聚合方式
 * @returns 无返回值
 */
export const setReportFieldAggregate = (fieldId: string, aggregate: string): Promise<void> => {
    return smartbi('Report', 'setFieldAggregate', [fieldId, aggregate])
}

/**
 * 指定报表过滤条件
 * @param fieldId 字段ID
 * @param operator 操作符
 * @param value 值
 * @returns 无返回值
 */
export const setReportAutoCondition = (fieldId: string, operator: string, value: string): Promise<void> => {
    return smartbi('Report', 'setAutoCondition', [fieldId, operator, value])
}

/**
 * 设置自定义过滤条件
 * @param filterData 过滤条件数据
 * @returns 是否设置成功
 */
export const setReportCustomCondition = (filterData: CustomFilterDataBean): Promise<boolean> => {
    return smartbi('Report', 'setCustomCondition', [filterData.toString()])
}

/**
 * 读取报表数据
 * @param reportId 报表ID
 * @returns 无返回值
 */
export const dumpReport = (reportId: string): Promise<void> => {
    return smartbi('Report', 'dump', [reportId])
}

/**
 * 修改报表
 * @returns 无返回值
 */
export const updateReportQuery = (): Promise<void> => {
    return smartbi('Report', 'updateQuery', [])
}

/**
 * 获得某个参数的候选值列表
 * @param paramId 参数ID
 * @returns 参数的候选值列表
 */
export const getReportParamStandbyValue = (paramId: string): Promise<any[]> => {
    return smartbi('Report', 'getParamStandbyValue', [paramId])
}

/**
 * 获取执行状态
 * @returns 执行状态
 */
export const getReportExecutingState = (): Promise<RunningInfo> => {
    return smartbi('Report', 'getExecutingState', [])
}

/**
 * 把报表查询结果复制在另一张新的报表中
 * @param reportId 报表ID
 * @param parentNodeId 父节点ID
 * @param name 名称
 * @param alias 别名
 * @param desc 描述
 * @returns 新的报表ID
 */
export const cloneReportQuery = (
    reportId: string,
    parentNodeId: string,
    name: string,
    alias: string,
    desc: string
): Promise<string> => {
    return smartbi('Report', 'cloneQuery', [reportId, parentNodeId, name, alias, desc])
}

/**
 * 获取客户端配置
 * @returns 客户端配置
 */
export const getReportClientConfig = (): Promise<string> => {
    return smartbi('Report', 'getClientConfig', [])
}

/**
 * 设置客户端配置
 * @param clientConfig 客户端配置
 * @returns 无返回值
 */
export const setReportClientConfig = (clientConfig: string): Promise<void> => {
    return smartbi('Report', 'setClientConfig', [clientConfig])
}
