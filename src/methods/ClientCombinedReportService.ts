// 导入公共类型
import type { IClientCombinedReportView } from '../types';

// ClientCombinedReportService 服务方法

import {smartbi} from "../index.ts";

/**
 * 打开一个即席查询报表
 * @param queryId 报表ID
 * @returns 返回打开的报表视图，类型为IClientCombinedReportView
 */
export const openQuery = (queryId: string): Promise<IClientCombinedReportView> => {
    return smartbi('ClientCombinedReportService', 'openQuery', [queryId])
}

/**
 * 打开一个即席查询报表（不初始化）
 * @param queryId 报表ID
 * @returns 返回打开的报表视图，类型为IClientCombinedReportView
 */
export const openQueryWithoutInit = (queryId: string): Promise<IClientCombinedReportView> => {
    return smartbi('ClientCombinedReportService', 'openQueryWithoutInit', [queryId])
}

/**
 * 同步条件面板参数
 * @param combinedClientId combinedClientId
 * @param condPanelClientId condPanelClientId
 * @returns 无返回值
 */
export const updateConditionPanel = (
    combinedClientId: string,
    condPanelClientId: string
): Promise<void> => {
    return smartbi('ClientCombinedReportService', 'updateConditionPanel', [combinedClientId, condPanelClientId])
}

/**
 * 将报表信息从服务端的会话状态中清除
 * @param combinedClientId 客户ID
 * @returns 无返回值
 */
export const removeFromSession = (combinedClientId: string): Promise<void> => {
    return smartbi('ClientCombinedReportService', 'removeFromSession', [combinedClientId])
}

/**
 * 克隆查询
 * @param clientId 客户端ID
 * @param parentNodeId 父节点ID
 * @param name 名称
 * @param alias 别名
 * @param desc 描述
 * @returns 返回新客户端ID
 */
export const cloneQuery = (
    clientId: string,
    parentNodeId: string,
    name: string,
    alias: string,
    desc: string
): Promise<string> => {
    return smartbi('ClientCombinedReportService', 'cloneQuery', [clientId, parentNodeId, name, alias, desc])
}

/**
 * 导出报表
 * @param clientId 客户端ID
 * @param reportId 报表ID
 * @returns 无返回值
 */
export const dump = (
    clientId: string,
    reportId: string
): Promise<void> => {
    return smartbi('ClientCombinedReportService', 'dump', [clientId, reportId])
}

/**
 * 覆盖查询
 * @param clientId 客户端ID
 * @param replacedReportId 报表ID
 * @param desc 描述
 * @returns 返回true/false
 */
export const overwriteQuery = (
    clientId: string,
    replacedReportId: string,
    desc: string
): Promise<boolean> => {
    return smartbi('ClientCombinedReportService', 'overwriteQuery', [clientId, replacedReportId, desc])
}

/**
 * 获取即席查询的数据来源类型
 * @param queryId 即席查询id
 * @returns 返回数据来源类型
 */
export const getDataSourceType = (queryId: string): Promise<string> => {
    return smartbi('ClientCombinedReportService', 'getDataSourceType', [queryId])
}

/**
 * 获取即席查询的类型
 * @param reportId 即席查询id
 * @returns 返回类型
 */
export const getExtendedType = (reportId: string): Promise<string> => {
    return smartbi('ClientCombinedReportService', 'getExtendedType', [reportId])
}