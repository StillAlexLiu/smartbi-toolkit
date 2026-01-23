// 导入公共类型
import type {
    AccessType,
    CatalogElementType,
    HiddenInBrowse,
    ICatalogElement,
    ICatalogSearchResult,
    IResourcePermission,
    IResourcePermissionItem,
    PermissionDescendType,
    PermissionType
} from '../types';

import {smartbi} from "../index";

/**
 * 判断某个资源是否可访问。
 * 参数:
 * elementId - 资源ID
 * type - 访问类型:
 * 1.引用权限：REF
 * 2.查看权限：READ
 * 3.编辑权限：WRITE
 * @param elementId 资源ID
 * @param type 访问类型
 * @returns 返回是否有权限的布尔值
 */
export const isCatalogElementAccessible = (elementId: string, type: AccessType): Promise<boolean> => {
    return smartbi('CatalogService', 'isCatalogElementAccessible', [elementId, type])
}

/**
 * 获取资源树的顶层节点列表
 * @returns 返回顶层节点列表，节点类型为ICatalogElement
 */
export const getRootElements = (): Promise<ICatalogElement[]> => {
    return smartbi('CatalogService', 'getRootElements', [])
}

/**
 * 获得指定节点的子节点列表
 * @param nodeId 指定节点ID
 * @returns 返回子节点列表，节点类型为ICatalogElement
 */
export const getChildElements = (nodeId: string): Promise<ICatalogElement[]> => {
    return smartbi('CatalogService', 'getChildElements', [nodeId])
}

/**
 * 创建目录
 * @param parentNodeId 父目录ID
 * @param name 目录名称
 * @param alias 目录别名
 * @param desc 目录描述
 * @param type 目录类型,此项可为空,系统会自动根据父目录的类型进行设置
 * @param hiddenInBrowse 是否在浏览模块中隐藏此目录
 * @returns 返回创建的目录对象，类型为ICatalogElement
 */
export const createFolder = (
    parentNodeId: string,
    name: string,
    alias: string,
    desc: string,
    type: CatalogElementType | string,
    hiddenInBrowse: HiddenInBrowse
): Promise<ICatalogElement> => {
    return smartbi('CatalogService', 'createFolder', [parentNodeId, name, alias, desc, type, hiddenInBrowse])
}

/**
 * 通过ID创建目录
 * @param parentNodeId 父目录ID
 * @param id 目录ID
 * @param name 目录名称
 * @param alias 目录别名
 * @param desc 目录描述
 * @param type 目录类型,此项可为空,系统会自动根据父目录的类型进行设置
 * @param hiddenInBrowse 是否在浏览模块中隐藏此目录
 * @returns 返回创建的目录对象，类型为ICatalogElement
 */
export const createFolderById = (
    parentNodeId: string,
    id: string,
    name: string,
    alias: string,
    desc: string,
    type: CatalogElementType | string,
    hiddenInBrowse: HiddenInBrowse
): Promise<ICatalogElement> => {
    return smartbi('CatalogService', 'createFolderById', [parentNodeId, id, name, alias, desc, type, hiddenInBrowse])
}

/**
 * 通过ID访问资源
 * @param elementId 资源ID
 * @returns 返回资源对象，类型为ICatalogElement
 */
export const getCatalogElementById = (elementId: string): Promise<ICatalogElement> => {
    return smartbi('CatalogService', 'getCatalogElementById', [elementId])
}

/**
 * 通过类型获取结点
 * @param type 节点类型
 * @returns 返回指定类型的节点列表，节点类型为ICatalogElement
 */
export const getCatalogElementByType = (type: CatalogElementType | string): Promise<ICatalogElement[]> => {
    return smartbi('CatalogService', 'getCatalogElementByType', [type])
}

/**
 * 获取目录下指定类型的子元素
 * @param parentNodeId 父节点ID
 * @param types 要获取的子元素类型数组
 * @returns 返回指定类型的子元素列表，节点类型为ICatalogElement
 */
export const getChildElementsByTypes = (parentNodeId: string, types: (CatalogElementType | string)[]): Promise<ICatalogElement[]> => {
    return smartbi('CatalogService', 'getChildElementsByTypes', [parentNodeId, types.toString()])
}

/**
 * 获取资源直接被授予的权限信息
 * @param resId 资源ID
 * @returns 返回资源直接被授予的权限信息，类型为IResourcePermission
 */
export const getAssignedPermissions = (resId: string): Promise<IResourcePermission> => {
    return smartbi('CatalogService', 'getAssignedPermissions', [resId])
}

/**
 * 获取资源继承的权限信息
 * @param resId 资源ID
 * @returns 返回资源继承的权限信息列表，类型为IResourcePermissionItem[]
 */
export const getInheritedPermissions = (resId: string): Promise<IResourcePermissionItem[]> => {
    return smartbi('CatalogService', 'getInheritedPermissions', [resId])
}

/**
 * 通过ID删除资源
 * @param id 资源ID
 * @returns 无返回值
 */
export const deleteCatalogElement = (id: string): Promise<void> => {
    return smartbi('CatalogService', 'deleteCatalogElement', [id])
}

/**
 * 根据别名或名称模糊查询资源信息
 * @param alias 别名或名称关键字
 * @param purview 权限范围
 * @returns 返回搜索结果列表，类型为ICatalogSearchResult[]
 */
export const searchCatalogElementLikeAlias = (alias: string, purview: string): Promise<ICatalogSearchResult[]> => {
    return smartbi('CatalogService', 'searchCatalogElementLikeAlias', [alias, purview])
}

/**
 * 设置该资源的组权限
 * @param elementId 资源ID
 * @param groupId 组ID
 * @param type 权限类型
 * @param inherited 是否继承
 * @param permissionDescendType 权限下降类型
 * @param isGroupDescend 是否组下降
 * @returns 无返回值
 */
export const setAssignedPermissionByGroup = (
    elementId: string,
    groupId: string,
    type: PermissionType,
    inherited: boolean,
    permissionDescendType: PermissionDescendType,
    isGroupDescend: boolean
): Promise<void> => {
    return smartbi('CatalogService', 'setAssignedPermissionByGroup', [elementId, groupId, type, inherited, permissionDescendType, isGroupDescend])
}

/**
 * 设置该资源的角色权限
 * @param elementId 资源ID
 * @param roleId 角色ID
 * @param type 权限类型
 * @param inherited 是否继承
 * @param permissionDescendType 权限下降类型
 * @returns 无返回值
 */
export const setAssignedPermissionByRole = (
    elementId: string,
    roleId: string,
    type: PermissionType,
    inherited: boolean,
    permissionDescendType: PermissionDescendType
): Promise<void> => {
    return smartbi('CatalogService', 'setAssignedPermissionByRole', [elementId, roleId, type, inherited, permissionDescendType])
}

/**
 * 设置该资源的用户权限
 * @param elementId 资源ID
 * @param userId 用户ID
 * @param type 权限类型
 * @param inherited 是否继承
 * @param permissionDescendType 权限下降类型
 * @returns 无返回值
 */
export const setAssignedPermissionByUser = (
    elementId: string,
    userId: string,
    type: PermissionType,
    inherited: boolean,
    permissionDescendType: PermissionDescendType
): Promise<void> => {
    return smartbi('CatalogService', 'setAssignedPermissionByUser', [elementId, userId, type, inherited, permissionDescendType])
}

/**
 * 更换资源节点的图片
 * @param id 资源ID
 * @param image 图片路径或图片数据
 * @returns 无返回值
 */
export const updateCatalogElementImage = (id: string, image: string): Promise<void> => {
    return smartbi('CatalogService', 'updateCatalogElementImage', [id, image])
}

/**
 * 根据ID修改资源信息
 * @param id 资源ID
 * @param jsonNodeConfig JSON节点配置
 * @param wholeExtended 完整扩展信息
 * @returns 无返回值
 */
export const updateCatalogNode = (id: string, jsonNodeConfig: string, wholeExtended: string): Promise<void> => {
    return smartbi('CatalogService', 'updateCatalogNode', [id, jsonNodeConfig, wholeExtended])
}

/**
 * 创建WEB链接
 * @param parentFolderId 父文件夹ID
 * @param urlName URL名称
 * @param urlAlias URL别名
 * @param urlDesc URL描述
 * @param url URL地址
 * @param setting 设置参数
 * @returns 返回新创建的URL链接ID
 */
export const createURLLink = (
    parentFolderId: string,
    urlName: string,
    urlAlias: string,
    urlDesc: string,
    url: string,
    setting: string
): Promise<string> => {
    return smartbi('CatalogService', 'createURLLink', [parentFolderId, urlName, urlAlias, urlDesc, url, setting])
}

/**
 * 更新WEB链接
 * @param urlID URL ID
 * @param urlAlias URL别名
 * @param urlDesc URL描述
 * @param url URL地址
 * @param setting 设置参数
 * @returns 无返回值
 */
export const updateURLLink = (
    urlID: string,
    urlAlias: string,
    urlDesc: string,
    url: string,
    setting: string
): Promise<void> => {
    return smartbi('CatalogService', 'updateURLLink', [urlID, urlAlias, urlDesc, url, setting])
}

/**
 * 复制粘贴并返回新ID
 * @param toId 目标ID
 * @param srcId 源ID
 * @param name 名称
 * @param alias 别名
 * @param desc 描述
 * @returns 返回新创建元素的ID
 */
export const copyAndPasteReturnNewId = (
    toId: string,
    srcId: string,
    name: string,
    alias: string,
    desc: string
): Promise<string> => {
    return smartbi('CatalogService', 'copyAndPasteReturnNewId', [toId, srcId, name, alias, desc])
}

/**
 * 创建资源树结点
 * 注意：此方法是单纯新建一个树结点，调用此方法前，必须存在此结点类型的实体资源.
 * @param parentId 父ID
 * @param id ID
 * @param name 名称
 * @param alias 别名
 * @param desc 描述
 * @param order 顺序
 * @param type 类型
 * @returns 返回创建的资源节点，类型为ICatalogElement
 */
export const createCatalogElement = (
    parentId: string,
    id: string,
    name: string,
    alias: string,
    desc: string,
    order: number,
    type: CatalogElementType | string
): Promise<ICatalogElement> => {
    return smartbi('CatalogService', 'createCatalogElement', [parentId, id, name, alias, desc, order, type])
}
