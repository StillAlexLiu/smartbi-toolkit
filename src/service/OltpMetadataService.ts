// 导入公共类型
import type { CalcField, TableField, DataSource } from '../types';
import { smartbi } from "../index";

/**
 * 获取计算字段对象的基本信息
 * @param calcFieldById 计算字段ID
 * @returns 返回计算字段对象
 */
export const getCalcFieldById = (calcFieldById: string): Promise<CalcField> => {
    return smartbi('OltpMetadataService', 'getCalcFieldById', [calcFieldById])
}

/**
 * 获取指定的数据源的详细信息
 * @param dataSourceID 数据源连接的ID值
 * @returns 返回数据源对象
 */
export const getOltpDataSource = (dataSourceID: string): Promise<DataSource> => {
    return smartbi('OltpMetadataService', 'getDataSource', [dataSourceID])
}

/**
 * 获取指定的表的字段的详细信息，包括：数据类型、字段长度
 * @param fieldId 表的字段
 * @returns 返回表的字段的详细信息
 */
export const getFieldAttribute = (fieldId: string): Promise<TableField> => {
    return smartbi('OltpMetadataService', 'getFieldAttribute', [fieldId])
}
