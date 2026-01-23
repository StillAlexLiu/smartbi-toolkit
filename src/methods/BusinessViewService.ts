// 导入公共类型
import type {FieldProperty, ViewMetaData} from '../types';

import {smartbi} from "../index";

/**
 * 根据数据集（可视化查询、原生SQL查询、SQL查询）的ID查询其SQL语句
 * @param bizViewId （可视化查询、原生SQL查询、SQL查询）的ID
 * @returns 返回其SQL语句
 */
export const getSqlString = (bizViewId: string): Promise<string> => {
    return smartbi('BusinessViewService', 'getSqlString', [bizViewId])
}

/**
 * 打开业务查询以备读取结果集数据
 * @param bizViewId 业务查询ID
 * @param paramsJsonArrStr 报表的参数信息
 * @param rowsPerPage 加载数据时每页返回的行数
 * @param getTotalRows 是否获取总行数
 * @returns 返回查询基本元数据信息
 */
export const openLoadDataView = (
    bizViewId: string,
    paramsJsonArrStr: string,
    rowsPerPage: number,
    getTotalRows: boolean
): Promise<ViewMetaData> => {
    return smartbi('BusinessViewService', 'openLoadDataView', [bizViewId, paramsJsonArrStr, rowsPerPage, getTotalRows])
}

/**
 * 按页读取结果集数据
 * @param loadDataClientId 打开查询后的客户端标识
 * @param pageNum 页码(第1页的页码为0，第2页的页码为1，如此类推)
 * @returns 返回原始报表数据
 */
export const loadViewData = (
    loadDataClientId: string,
    pageNum: number
): Promise<string[][]> => {
    return smartbi('BusinessViewService', 'loadViewData', [loadDataClientId, pageNum])
}

/**
 * 按页读取结果集数据
 * @param loadDataClientId 打开查询后的客户端标识
 * @param pageNum 页码(第1页的页码为0，第2页的页码为1，如此类推)
 * @param dataFormatMap 数据格式映射，如："DOUBLE", "<浮点型-默认值>"，目前仅支持double
 * @returns 返回原始报表数据
 */
export const loadViewDataWithDataformat = (
    loadDataClientId: string,
    pageNum: number,
    dataFormatMap: Map<string, string>
): Promise<string[][]> => {
    return smartbi('BusinessViewService', 'loadViewDataWithDataformat', [loadDataClientId, pageNum, dataFormatMap.toString()])
}

/**
 * 关闭业务查询
 * @param loadDataClientId 打开查询后的客户端标识
 * @returns 无返回值
 */
export const closeLoadDataView = (loadDataClientId: string): Promise<void> => {
    return smartbi('BusinessViewService', 'closeLoadDataView', [loadDataClientId])
}

/**
 * 打开业务查询
 * @param bizViewId 打开业务查询ID
 * @returns 返回业务查询结果
 */
export const openBusinessView = (bizViewId: string): Promise<any[]> => {
    return smartbi('BusinessViewService', 'openBusinessView', [bizViewId])
}

/**
 * 关闭业务查询
 * @param bizViewClientId 打开查询后的客户端标识
 * @returns 无返回值
 */
export const closeBusinessView = (bizViewClientId: string): Promise<void> => {
    return smartbi('BusinessViewService', 'closeBusinessView', [bizViewClientId])
}

/**
 * 检测输出字段
 * @param bizViewClientId 打开查询后的客户端标识
 * @returns 无返回值
 */
export const getRawSqlOutputField = (bizViewClientId: string): Promise<void> => {
    return smartbi('BusinessViewService', 'getRawSqlOutputField', [bizViewClientId])
}

/**
 * 检测输出字段
 * @param clientId 客户端ID
 * @returns 返回输出字段
 */
export const detectOutputFields = (clientId: string): Promise<any[]> => {
    return smartbi('BusinessViewService', 'detectOutputFields', [clientId])
}

/**
 * 覆盖业务视图
 * @param bizViewClientId 业务视图ID
 * @returns 无返回值
 */
export const overwriteBusinessView = (bizViewClientId: string): Promise<void> => {
    return smartbi('BusinessViewService', 'overwriteBusinessView', [bizViewClientId])
}

/**
 * 创建"原生SQL查询"数据集，并保存到指定目录下
 * @param datasourceId 数据源ID
 * @param sql "原生SQL查询"的SQL语句
 * @param name 数据集的名称
 * @param alias 数据集的别名
 * @param desc 数据集的描述
 * @param folderId 用来保存数据集的指定目录ID
 * @returns 返回所创建的"原生SQL查询"数据集ID
 */
export const createRawSqlQueryBusinessViewAndSave = (
    datasourceId: string,
    sql: string,
    name: string,
    alias: string,
    desc: string,
    folderId: string
): Promise<string> => {
    return smartbi('BusinessViewService', 'createRawSqlQueryBusinessViewAndSave', [datasourceId, sql, name, alias, desc, folderId])
}

/**
 * 更新指定的"原生SQL查询"数据集的SQL语句，并自动检测输出字段
 * @param businessViewId "原生SQL查询"数据集ID
 * @param sql 新的SQL语句
 * @returns 返回数据集ID
 */
export const updateRawSqlQueryBusinessView = (
    businessViewId: string,
    sql: string
): Promise<string> => {
    return smartbi('BusinessViewService', 'updateRawSqlQueryBusinessView', [businessViewId, sql])
}

/**
 * 设置输出字段信息
 * @param businessViewClientId clientId
 * @param fieldId 字段信息
 * @param propertyName 属性名，如alias,desc,dataType,dataFormat,orderby,transformRule
 * @param propertyValue 属性值
 * @returns 无返回值
 */
export const setOutputFieldInfo = (
    businessViewClientId: string,
    fieldId: string,
    propertyName: FieldProperty,
    propertyValue: string
): Promise<void> => {
    return smartbi('BusinessViewService', 'setOutputFieldInfo', [businessViewClientId, fieldId, propertyName, propertyValue])
}
