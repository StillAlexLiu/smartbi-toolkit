import {smartbi} from '../index';

/**
 * 创建业务对象
 * @param businessThemeId 业务主题ID
 * @param parentId 业务对象父ID
 * @param tableId 表ID
 * @returns 无返回值
 */
export const createBusinessThemeObject = (
    businessThemeId: string,
    parentId: string,
    tableId: string
): Promise<void> => {
    return smartbi('BusinessThemeService', 'createBusinessThemeObject', [businessThemeId, parentId, tableId]);
};
