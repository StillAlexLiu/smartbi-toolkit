// 导入公共类型
import type { IDocument, DocumentTreeNode, CategoryResource } from '../types';

import { smartbi } from "../index";

/**
 * 搜索被引用的资源(影响性分析)
 * @param resId 要搜索的资源ID
 * @param recursive 是否获取子节点
 * @returns 返回树结构的被引用的资源列表
 */
export const searchByReferenced = (
    resId: string,
    recursive: boolean
): Promise<DocumentTreeNode[]> => {
    return smartbi('MetadataService', 'searchByReferenced', [resId, recursive])
}

/**
 * 搜索引用到的资源(血统分析)
 * @param resId 要搜索的资源ID
 * @param recursive 是否获取子节点
 * @returns 返回树结构的被引用的资源列表
 */
export const searchReferringTo = (
    resId: string,
    recursive: boolean
): Promise<DocumentTreeNode[]> => {
    return smartbi('MetadataService', 'searchReferringTo', [resId, recursive])
}

/**
 * 检索当前用户是否具有权限检索对应的资源节点
 * @param docs 要搜索的所有资源节点
 * @returns 返回判断结果列表
 */
export const checkPermission = (
    docs: IDocument[]
): Promise<boolean[]> => {
    return smartbi('MetadataService', 'checkPermission', [docs.toString()])
}

/**
 * 搜索被引用的资源(影响性分析)
 * @param res 要搜索的资源
 * @param filters 允许返回的资源类型
 * @param recursive 是否递归
 * @returns 返回引用的资源
 */
export const searchByReferencedRecursive = (
    res: CategoryResource,
    filters: string[],
    recursive: boolean
): Promise<IDocument[]> => {
    return smartbi('MetadataService', 'searchByReferencedRecursive', [JSON.stringify(res), filters.toString(), recursive])
}

/**
 * 搜索引用到的资源(血统分析)
 * @param res 要搜索的资源
 * @param filters 允许返回的资源类型
 * @param recursive 是否递归
 * @returns 返回引用到的资源
 */
export const searchReferringToRecursive = (
    res: CategoryResource,
    filters: string[],
    recursive: boolean
): Promise<IDocument[]> => {
    return smartbi('MetadataService', 'searchReferringToRecursive', [JSON.stringify(res), filters.toString(), recursive])
}
