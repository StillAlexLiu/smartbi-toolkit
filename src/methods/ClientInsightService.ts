// 导入公共类型
import type {NameValuePair, ReportData, SystemConfig} from '../types';
import {smartbi} from "../index";

/**
 * 清空透视分析临时表
 * @returns 无返回值
 */
export const cleanTempTablePool = (): Promise<void> => {
    return smartbi('ClientInsightService', 'cleanTempTablePool', [])
}

/**
 * 打开透视分析
 * @param reportId 报表Id
 * @param pageId 页面Id
 * @returns 返回JSON对象
 */
export const openQuery = (reportId: string, pageId: string): Promise<any> => {
    return smartbi('ClientInsightService', 'openQuery', [reportId, pageId])
}

/**
 * 获取参数备选值
 * @param panelId 参数面板ClientId
 * @param paramId 参数Id
 * @returns 返回键值对列表
 */
export const getParamStandbyValue = (
    panelId: string,
    paramId: string
): Promise<NameValuePair[]> => {
    return smartbi('ClientInsightService', 'getParamStandbyValue', [panelId, paramId])
}

/**
 * 根据参数Id获取参数默认值
 * @param panelId 参数面板ClientId
 * @param paramId 参数Id
 * @returns 返回JSON数组
 */
export const getParamDefaultValueByPID = (
    panelId: string,
    paramId: string
): Promise<any[]> => {
    return smartbi('ClientInsightService', 'getParamDefaultValueByPID', [panelId, paramId])
}

/**
 * 设置参数值
 * @param panelId 参数面板ClientId
 * @param paramId 参数Id
 * @param value 参数真实值
 * @param displayValue 参数显示值
 * @returns 无返回值
 */
export const setParamValue = (
    panelId: string,
    paramId: string,
    value: string,
    displayValue: string
): Promise<void> => {
    return smartbi('ClientInsightService', 'setParamValue', [panelId, paramId, value, displayValue])
}

/**
 * 关闭透视分析
 * @param clientId clientId
 * @returns 无返回值
 */
export const close = (clientId: string): Promise<void> => {
    return smartbi('ClientInsightService', 'close', [clientId])
}

/**
 * 创建透视分析
 * @param businessViewId 业务查询ID
 * @param name 名称
 * @param alias 别名
 * @param desc 描述
 * @param folderId 保存目录的ID
 * @returns 返回透视分析ID
 */
export const createInsightQuery = (
    businessViewId: string,
    name: string,
    alias: string,
    desc: string,
    folderId: string
): Promise<string> => {
    return smartbi('ClientInsightService', 'createInsightQuery', [businessViewId, name, alias, desc, folderId])
}

/**
 * 重新获取报表对象的当前状态
 * @param clientId clientId
 * @returns 返回查询结果JSON对象
 */
export const getInsightQuery = (clientId: string): Promise<any> => {
    return smartbi('ClientInsightService', 'getInsightQuery', [clientId])
}

/**
 * 获取透视分析系统选项导出使用缓存默认值
 * @returns 返回systemconfig
 */
export const getExportWithCacheConfig = (): Promise<SystemConfig> => {
    return smartbi('ClientInsightService', 'getExportWithCacheConfig', [])
}

/**
 * 获取原始报表数据
 * @param clientId 客户端ID
 * @param pageNum 页码
 * @returns 返回原始报表数据
 */
export const getRawReportData = (
    clientId: string,
    pageNum: number
): Promise<ReportData> => {
    return smartbi('ClientInsightService', 'getRawReportData', [clientId, pageNum])
}

/**
 * 取得一个表达式的值
 * @param clientId 客户ID
 * @param func 表达式
 * @returns 返回表达式的值
 */
export const getFunctionValue = (
    clientId: string,
    func: string
): Promise<string> => {
    return smartbi('ClientInsightService', 'getFunctionValue', [clientId, func])
}

/**
 * 取得clientConfig
 * @param clientId 客户ID
 * @returns 返回clientConfig
 */
export const getClientConfig = (clientId: string): Promise<string> => {
    return smartbi('ClientInsightService', 'getClientConfig', [clientId])
}

