// 导入公共类型
import type {
    AggregateType,
    ClientReportView,
    CustomFilterDataBean,
    OperatorType,
    OrderType,
    ReportData
} from '../types';

import {smartbi} from "../index";

/**
 * 打开一个报表
 * @param queryId 报表ID
 * @returns 返回打开的报表视图
 */
export const openQuery = (queryId: string): Promise<ClientReportView> => {
    return smartbi('ClientReportService', 'openQuery', [queryId])
}

/**
 * 打开一个报表（不初始化）
 * @param queryId 报表ID
 * @returns 返回打开的报表视图
 */
export const openQueryWithoutInit = (queryId: string): Promise<ClientReportView> => {
    return smartbi('ClientReportService', 'openQueryWithoutInit', [queryId])
}

/**
 * 取得一个表达式的值
 * @param clientId 客户ID
 * @param func 表达式
 * @returns 表达式的值
 */
export const getFunctionValue = (clientId: string, func: string): Promise<string> => {
    return smartbi('ClientReportService', 'getFunctionValue', [clientId, func])
}

/**
 * 设置每页的行数
 * @param clientId 客户ID
 * @param rowsPerPage 每页行数
 * @returns 无返回值
 */
export const setRowsPerPage = (clientId: string, rowsPerPage: number): Promise<void> => {
    return smartbi('ClientReportService', 'setRowsPerPage', [clientId, rowsPerPage])
}

/**
 * 获取每页的行数
 * @param clientId 客户ID
 * @returns 每页行数
 */
export const getRowsPerPage = (clientId: string): Promise<number> => {
    return smartbi('ClientReportService', 'getRowsPerPage', [clientId])
}

/**
 * 执行报表（新接口）
 * @param clientId 客户ID
 * @returns 报表的总行数
 */
export const executeQueryLong = (clientId: string): Promise<number> => {
    return smartbi('ClientReportService', 'executeQueryLong', [clientId])
}

/**
 * 获得报表数据
 * @param clientId 客户ID
 * @param pageNum 报表页码，指定获取报表的第几页，从0算起
 * @returns 报表数据
 */
export const getReportData = (clientId: string, pageNum: number): Promise<ReportData> => {
    return smartbi('ClientReportService', 'getReportData', [clientId, pageNum])
}

/**
 * 获得原始报表数据
 * @param clientId 客户ID
 * @param pageNum 报表页码，指定获取报表的第几页，从0算起
 * @returns 原始报表数据
 */
export const getRawReportData = (clientId: string, pageNum: number): Promise<ReportData> => {
    return smartbi('ClientReportService', 'getRawReportData', [clientId, pageNum])
}

/**
 * 将报表信息从服务端的会话状态中清除
 * @param clientId 客户ID
 * @returns 无返回值
 */
export const removeFromSession = (clientId: string): Promise<void> => {
    return smartbi('ClientReportService', 'removeFromSession', [clientId])
}

/**
 * 设置参数值
 * @param clientId 客户ID
 * @param paramId 参数ID
 * @param paramValue 参数值
 * @param paramDisplayValue 参数显示值
 * @returns 是否设置成功
 */
export const setParamValue = (clientId: string, paramId: string, paramValue: string, paramDisplayValue: string): Promise<boolean> => {
    return smartbi('ClientReportService', 'setParamValue', [clientId, paramId, paramValue, paramDisplayValue])
}

/**
 * 设置参数值（按名称）
 * @param clientId 客户ID
 * @param paramId 参数ID
 * @param paramValue 参数值
 * @param paramDisplayValue 参数显示值
 * @returns 是否设置成功
 */
export const setParamValueByName = (clientId: string, paramId: string, paramValue: string, paramDisplayValue: string): Promise<boolean> => {
    return smartbi('ClientReportService', 'setParamValueByName', [clientId, paramId, paramValue, paramDisplayValue])
}

/**
 * 获得某个参数的默认值
 * @param clientId 客户ID
 * @param paramId 参数ID
 * @returns 参数的默认值列表
 */
export const getParamDefaultValue = (clientId: string, paramId: string): Promise<string[]> => {
    return smartbi('ClientReportService', 'getParamDefaultValue', [clientId, paramId])
}

/**
 * 获得某个参数的候选值列表
 * @param clientId 客户ID
 * @param paramId 参数ID
 * @returns 参数的候选值列表
 */
export const getParamStandbyValue = (clientId: string, paramId: string): Promise<string[]> => {
    return smartbi('ClientReportService', 'getParamStandbyValue', [clientId, paramId])
}

/**
 * 设置报表的排序字段
 * @param clientId 客户ID
 * @param fieldId 字段ID
 * @param orderType 排序方式, ASC, DESC, NONE
 * @returns 是否设置成功
 */
export const setOrderByType = (clientId: string, fieldId: string, orderType: OrderType | string): Promise<boolean> => {
    return smartbi('ClientReportService', 'setOrderByType', [clientId, fieldId, orderType])
}

/**
 * 设置字段聚合方式
 * @param clientId 客户ID
 * @param fieldId 字段ID
 * @param aggregate 聚合方式 SUM, MIN, MAX, COUNT, DISTINCT_COUNT, AVG, NULL
 * @returns 是否设置成功
 */
export const setFieldAggregate = (clientId: string, fieldId: string, aggregate: AggregateType | string): Promise<boolean> => {
    return smartbi('ClientReportService', 'setFieldAggregate', [clientId, fieldId, aggregate])
}

/**
 * 获取报表中某字段的所有可能值
 * @param clientId 客户ID
 * @param fieldId 字段ID
 * @returns 字段的所有可能值列表
 */
export const getFieldDistinctValues = (clientId: string, fieldId: string): Promise<string[]> => {
    return smartbi('ClientReportService', 'getFieldDistinctValues', [clientId, fieldId])
}

/**
 * 设置过滤条件
 * @param clientId 客户ID
 * @param fieldId 字段ID
 * @param operator 操作符
 * @param value 值
 * @returns 是否设置成功
 */
export const setAutoCondition = (clientId: string, fieldId: string, operator: OperatorType | string, value: string): Promise<boolean> => {
    return smartbi('ClientReportService', 'setAutoCondition', [clientId, fieldId, operator, value])
}

/**
 * 设置自定义过滤条件
 * @param clientId 客户ID
 * @param filterData 过滤条件数据
 * @returns 是否设置成功
 */
export const setCustomCondition = (clientId: string, filterData: CustomFilterDataBean): Promise<boolean> => {
    return smartbi('ClientReportService', 'setCustomCondition', [clientId, filterData.toString()])
}

/**
 * 设置客户端配置
 * @param clientId 客户ID
 * @param clientConfig 客户端配置
 * @returns 无返回值
 */
export const setClientConfig = (clientId: string, clientConfig: string): Promise<void> => {
    return smartbi('ClientReportService', 'setClientConfig', [clientId, clientConfig])
}

/**
 * 克隆查询
 * @param clientId 客户ID
 * @param parentNodeId 父节点ID
 * * @param name 名称
 * @param alias 别名
 * @param desc 描述
 * @returns 新克隆的查询ID
 */
export const cloneQuery = (clientId: string, parentNodeId: string, name: string, alias: string, desc: string): Promise<string> => {
    return smartbi('ClientReportService', 'cloneQuery', [clientId, parentNodeId, name, alias, desc])
}

/**
 * 覆盖查询
 * @param clientId 客户ID
 * @param replacedReportId 被替换的报表ID
 * @param desc 描述
 * @returns 是否覆盖成功
 */
export const overwriteQuery = (clientId: string, replacedReportId: string, desc: string): Promise<boolean> => {
    return smartbi('ClientReportService', 'overwriteQuery', [clientId, replacedReportId, desc])
}

/**
 * 导出报表
 * @param clientId 客户ID
 * @param reportId 报表ID
 * @returns 无返回值
 */
export const dump = (clientId: string, reportId: string): Promise<void> => {
    return smartbi('ClientReportService', 'dump', [clientId, reportId])
}
