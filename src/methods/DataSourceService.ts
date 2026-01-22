// 导入公共类型
import type {BasicField, DataSource, DriverType, JDBCTable, SDKGridData} from '../types';

import {smartbi} from "../index.ts";

/**
 * 创建数据源
 * @param name 数据源名称
 * @param connectUserName 连接用户名
 * @param connectPassword 连接密码
 * @param maxConnection 最大连接数
 * @param driverType 数据库类型
 * @param driverClassName 驱动程序类名
 * @param url 连接字符串
 * @returns 返回数据源ID
 */
export const createDataSource = (
    name: string,
    connectUserName: string,
    connectPassword: string,
    maxConnection: number,
    driverType: DriverType | string,
    driverClassName: string,
    url: string
): Promise<string> => {
    return smartbi('DataSourceService', 'createDataSource', [name, connectUserName, connectPassword, maxConnection, driverType, driverClassName, url])
}

/**
 * 创建数据源（带目录参数）
 * @param name 数据源名称
 * @param connectUserName 连接用户名
 * @param connectPassword 连接密码
 * @param maxConnection 最大连接数
 * @param driverType 数据库类型
 * @param driverClassName 驱动程序类名
 * @param url 连接字符串
 * @param driverCatalog 驱动目录
 * @returns 返回数据源ID
 */
export const createDataSourceWithCatalog = (
    name: string,
    connectUserName: string,
    connectPassword: string,
    maxConnection: number,
    driverType: DriverType | string,
    driverClassName: string,
    url: string,
    driverCatalog: string
): Promise<string> => {
    return smartbi('DataSourceService', 'createDataSource', [name, connectUserName, connectPassword, maxConnection, driverType, driverClassName, url, driverCatalog])
}

/**
 * 创建数据源（带事务隔离级别）
 * @param name 数据源名称
 * @param connectUserName 连接用户名
 * @param connectPassword 连接密码
 * @param maxConnection 最大连接数
 * @param driverType 数据库类型
 * @param driverClassName 驱动程序类名
 * @param url 连接字符串
 * @param driverCatalog 驱动目录
 * @param transactionIsolation 事务隔离级别
 * @returns 返回数据源ID
 */
export const createDataSourceWithTransactionIsolation = (
    name: string,
    connectUserName: string,
    connectPassword: string,
    maxConnection: number,
    driverType: DriverType | string,
    driverClassName: string,
    url: string,
    driverCatalog: string,
    transactionIsolation: number
): Promise<string> => {
    return smartbi('DataSourceService', 'createDataSource', [name, connectUserName, connectPassword, maxConnection, driverType, driverClassName, url, driverCatalog, transactionIsolation])
}

/**
 * 修改数据源
 * @param id 数据源ID
 * @param connectUserName 连接用户名
 * @param connectPassword 连接密码
 * @param maxConnection 最大连接数
 * @param driverType 数据库类型
 * @param driverClassName 驱动程序类名
 * @param url 连接字符串
 */
export const updateDataSource = (
    id: string,
    connectUserName: string,
    connectPassword: string,
    maxConnection: number,
    driverType: DriverType | string,
    driverClassName: string,
    url: string
): Promise<void> => {
    return smartbi('DataSourceService', 'updateDataSource', [id, connectUserName, connectPassword, maxConnection, driverType, driverClassName, url])
}

/**
 * 修改数据源（带目录参数）
 * @param id 数据源ID
 * @param connectUserName 连接用户名
 * @param connectPassword 连接密码
 * @param maxConnection 最大连接数
 * @param driverType 数据库类型
 * @param driverClassName 驱动程序类名
 * @param url 连接字符串
 * @param driverCatalog 驱动目录
 */
export const updateDataSourceWithCatalog = (
    id: string,
    connectUserName: string,
    connectPassword: string,
    maxConnection: number,
    driverType: DriverType | string,
    driverClassName: string,
    url: string,
    driverCatalog: string
): Promise<void> => {
    return smartbi('DataSourceService', 'updateDataSource', [id, connectUserName, connectPassword, maxConnection, driverType, driverClassName, url, driverCatalog])
}

/**
 * 修改数据源（带事务隔离级别）
 * @param id 数据源ID
 * @param connectUserName 连接用户名
 * @param connectPassword 连接密码
 * @param maxConnection 最大连接数
 * @param driverType 数据库类型
 * @param driverClassName 驱动程序类名
 * @param url 连接字符串
 * @param driverCatalog 驱动目录
 * @param transactionIsolation 事务隔离级别
 */
export const updateDataSourceWithTransactionIsolation = (
    id: string,
    connectUserName: string,
    connectPassword: string,
    maxConnection: number,
    driverType: DriverType | string,
    driverClassName: string,
    url: string,
    driverCatalog: string,
    transactionIsolation: number
): Promise<void> => {
    return smartbi('DataSourceService', 'updateDataSource', [id, connectUserName, connectPassword, maxConnection, driverType, driverClassName, url, driverCatalog, transactionIsolation])
}

/**
 * 删除数据源
 * @param dataSourceID 数据源ID
 */
export const deleteDataSource = (dataSourceID: string): Promise<void> => {
    return smartbi('DataSourceService', 'deleteDataSource', [dataSourceID])
}

/**
 * 获取数据源
 * @param dataSourceID 数据源ID
 * @returns 返回数据源对象
 */
export const getDataSource = (dataSourceID: string): Promise<DataSource> => {
    return smartbi('DataSourceService', 'getDataSource', [dataSourceID])
}

/**
 * 给数据源添加表
 * @param dataSourceId 数据源ID
 * @param tableList 表列表
 */
export const addTablesToDataSource = (
    dataSourceId: string,
    tableList: JDBCTable[]
): Promise<void> => {
    return smartbi('DataSourceService', 'addTablesToDataSource', [dataSourceId, tableList.toString()])
}

/**
 * 删除数据源的表、视图、存储过程
 * @param dataSourceId 数据源ID
 * @param schemaName 模式名称
 * @param tableNameList 表名列表
 */
export const removeTablesFromDataSource = (
    dataSourceId: string,
    schemaName: string,
    tableNameList: string[]
): Promise<void> => {
    return smartbi('DataSourceService', 'removeTablesFromDataSource', [dataSourceId, schemaName, tableNameList.toString()])
}

/**
 * 删除数据库表
 * @param dsId 数据源ID
 * @param schemaName 模式名称
 * @param tableNameList 表名列表
 */
export const removeTables = (
    dsId: string,
    schemaName: string,
    tableNameList: string[]
): Promise<void> => {
    return smartbi('DataSourceService', 'removeTables', [dsId, schemaName, tableNameList.toString()])
}

/**
 * 同步schema表
 * @param dataSourceID 数据源ID
 * @param schema 模式名称
 */
export const synchTablesToDataSource = (
    dataSourceID: string,
    schema: string
): Promise<void> => {
    return smartbi('DataSourceService', 'synchTablesToDataSource', [dataSourceID, schema])
}

/**
 * 同步catalog下面schema表
 * @param dataSourceID 数据源ID
 * @param catalog 目录名称
 * @param schema 模式名称
 */
export const synchTablesToDataSourceWithCatalog = (
    dataSourceID: string,
    catalog: string,
    schema: string
): Promise<void> => {
    return smartbi('DataSourceService', 'synchTablesToDataSourceWhitCatalog', [dataSourceID, catalog, schema])
}

/**
 * 同步表
 * @param tableId 表ID
 */
export const syncTable = (tableId: string): Promise<void> => {
    return smartbi('DataSourceService', 'syncTable', [tableId])
}

/**
 * 修改表属性
 * @param tableId 表ID
 * @param tableAlias 表别名
 * @param fieldList 字段列表
 */
export const updateTablePropertys = (
    tableId: string,
    tableAlias: string,
    fieldList: BasicField[]
): Promise<void> => {
    return smartbi('DataSourceService', 'updateTablePropertys', [tableId, tableAlias, fieldList.toString()])
}

/**
 * 获取表字段
 * @param tabelId 表ID
 * @returns 返回字段列表
 */
export const getFields = (tabelId: string): Promise<BasicField[]> => {
    return smartbi('DataSourceService', 'getFields', [tabelId])
}

/**
 * 获取"数据源"节点下某张表的数据
 * @param tableId 表ID
 * @param maxRows 最大行数
 * @returns 返回表数据
 */
export const getSampleTableData = (
    tableId: string,
    maxRows: number
): Promise<SDKGridData> => {
    return smartbi('DataSourceService', 'getSampleTableData', [tableId, maxRows])
}

/**
 * 执行指定SQL语句，返回相应结果集
 * @param dataSourceID 数据源ID
 * @param sql SQL语句
 * @param maxRows 最大行数
 * @param format 是否格式化
 * @param cacheable 是否缓存
 * @returns 返回结果集数据
 */
export const execute = (
    dataSourceID: string,
    sql: string,
    maxRows: number,
    format: boolean,
    cacheable: boolean
): Promise<SDKGridData> => {
    return smartbi('DataSourceService', 'execute', [dataSourceID, sql, maxRows, format, cacheable])
}

/**
 * 直接执行指定SQL语句，返回相应结果集，不从缓存中返回结果集
 * @param dataSourceID 数据源ID
 * @param sql SQL语句
 * @returns 返回结果集数据
 */
export const executeNoCacheable = (
    dataSourceID: string,
    sql: string
): Promise<SDKGridData> => {
    return smartbi('DataSourceService', 'executeNoCacheable', [dataSourceID, sql])
}

/**
 * 直接执行SQL语句，可以是INSERT, UPDATE, DELETE语句，也可以是SQL DDL语句
 * @param dataSourceID 数据源ID
 * @param sql SQL语句
 * @returns 返回影响的行数
 */
export const executeUpdate = (
    dataSourceID: string,
    sql: string
): Promise<number> => {
    return smartbi('DataSourceService', 'executeUpdate', [dataSourceID, sql])
}

/**
 * 获取未格式化的原始的结果集数据
 * @param dsId 数据源ID
 * @param sql SQL语句
 * @param pageNum 页码
 * @param rowPerPage 每页行数
 * @returns 返回结果集数据
 */
export const getDataByQuerySql = (
    dsId: string,
    sql: string,
    pageNum: number,
    rowPerPage: number
): Promise<SDKGridData> => {
    return smartbi('DataSourceService', 'getDataByQuerySql', [dsId, sql, pageNum, rowPerPage])
}
