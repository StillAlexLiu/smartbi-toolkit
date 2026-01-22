// 定义SmartBI相关的类型接口
export interface ICatalogElement {
    id: string;
    name: string;
    alias: string;
    description?: string;
    type: string;
    parentId?: string;
    children?: ICatalogElement[];
    createTime?: Date;
    updateTime?: Date;
    // 其他可能的属性
    [key: string]: any;
}

export interface IResourcePermission {
    resourceId: string;
    permissions: string[];
    grantedBy: string;
    grantTime: Date;
    // 其他可能的属性
    [key: string]: any;
}

export interface IResourcePermissionItem {
    itemId: string;
    itemName: string;
    permissionType: string;
    inherited: boolean;
    // 其他可能的属性
    [key: string]: any;
}

export interface ICatalogSearchResult {
    id: string;
    name: string;
    alias: string;
    type: string;
    parentId: string;
    score: number; // 搜索匹配度
    // 其他可能的属性
    [key: string]: any;
}

// 定义类型别名
export type AccessType = 'REF' | 'READ' | 'WRITE';

// 定义常量对象
export const AccessType = {
    REF: 'REF' as const,    // 引用权限
    READ: 'READ' as const,  // 查看权限
    WRITE: 'WRITE' as const // 编辑权限
};

// CatalogElementType 类型定义
export type CatalogElementType = 
    // 文件夹类型
    | 'FOLDER'
    
    // 报表类型
    | 'SIMPLE_REPORT'           // 简单报表
    | 'ANALYSIS_REPORT'         // 分析报表
    | 'COMBINED_QUERY'          // 即席查询
    | 'INSIGHT'                 // 透视分析
    | 'OLAP_REPORT'             // 多维分析
    
    // 仪表盘类型
    | 'DASHBOARD'               // 传统仪表盘
    | 'SMARTBIX_PAGE'           // 交互式仪表盘
    
    // 数据集类型
    | 'DATASET'                 // 通用数据集
    | 'VISUAL'                  // 可视化数据集
    | 'SQL'                     // SQL数据集
    | 'PROCEDURE'               // 存储过程数据集
    | 'NATIVE_SQL'              // 原生SQL数据集
    | 'JAVA'                    // JAVA数据集
    | 'SMARTBIX_DATASET'        // 自助数据集
    | 'AUGMENTED_DATASET'       // 数据模型
    
    // 业务对象类型
    | 'BUSINESS_VIEW'           // 业务视图
    | 'BUSINESS_SUBJECT'        // 业务主题
    | 'BUSINESS_QUERY'          // 业务查询
    
    // 电子表格类型
    | 'SPREADSHEET_REPORT'      // 电子表格报表
    | 'WEB_SPREADSHEET_REPORT'  // WEB电子表格
    
    // 数据处理类型
    | 'SMARTBI_DATAPROCESS'     // 自助ETL
    | 'ETL_AUTOMATION'          // ETL自动化
    | 'JOB_FLOW'                // 作业流
    | 'SMARTBI_MINING'          // 数据挖掘
    
    // 其他类型
    | 'URL'                     // WEB链接
    | 'excelimport'             // Excel导入模板
    | 'TXTQUERYOBJECT'          // 查询对象
    | 'TXTDATASOURCE'           // 数据源
    | 'SCHEMA'                  // 模式
    
    // 旧版类型
    | 'OLD_DATASET';            // 旧数据集

// CatalogElementType 常量对象
export const CatalogElementType = {
    // 文件夹类型
    FOLDER: 'FOLDER' as const,
    
    // 报表类型
    SIMPLE_REPORT: 'SIMPLE_REPORT' as const,           // 简单报表
    ANALYSIS_REPORT: 'ANALYSIS_REPORT' as const,       // 分析报表
    COMBINED_QUERY: 'COMBINED_QUERY' as const,         // 即席查询
    INSIGHT: 'INSIGHT' as const,                       // 透视分析
    OLAP_REPORT: 'OLAP_REPORT' as const,               // 多维分析
    
    // 仪表盘类型
    DASHBOARD: 'DASHBOARD' as const,                   // 传统仪表盘
    SMARTBIX_PAGE: 'SMARTBIX_PAGE' as const,           // 交互式仪表盘
    
    // 数据集类型
    DATASET: 'DATASET' as const,                       // 通用数据集
    VISUAL: 'VISUAL' as const,                         // 可视化数据集
    SQL: 'SQL' as const,                               // SQL数据集
    PROCEDURE: 'PROCEDURE' as const,                   // 存储过程数据集
    NATIVE_SQL: 'NATIVE_SQL' as const,                 // 原生SQL数据集
    JAVA: 'JAVA' as const,                             // JAVA数据集
    SMARTBIX_DATASET: 'SMARTBIX_DATASET' as const,     // 自助数据集
    AUGMENTED_DATASET: 'AUGMENTED_DATASET' as const,   // 数据模型
    
    // 业务对象类型
    BUSINESS_VIEW: 'BUSINESS_VIEW' as const,           // 业务视图
    BUSINESS_SUBJECT: 'BUSINESS_SUBJECT' as const,     // 业务主题
    BUSINESS_QUERY: 'BUSINESS_QUERY' as const,         // 业务查询
    
    // 电子表格类型
    SPREADSHEET_REPORT: 'SPREADSHEET_REPORT' as const, // 电子表格报表
    WEB_SPREADSHEET_REPORT: 'WEB_SPREADSHEET_REPORT' as const, // WEB电子表格
    
    // 数据处理类型
    DATA_PROCESS: 'SMARTBI_DATAPROCESS' as const,      // 自助ETL
    ETL_AUTOMATION: 'ETL_AUTOMATION' as const,         // ETL自动化
    JOB_FLOW: 'JOB_FLOW' as const,                     // 作业流
    DATA_MINING: 'SMARTBI_MINING' as const,            // 数据挖掘
    
    // 其他类型
    URL_LINK: 'URL' as const,                          // WEB链接
    EXCEL_IMPORT_TEMPLATE: 'excelimport' as const,     // Excel导入模板
    TXT_QUERY_OBJECT: 'TXTQUERYOBJECT' as const,       // 查询对象
    TXT_DATA_SOURCE: 'TXTDATASOURCE' as const,         // 数据源
    SCHEMA: 'SCHEMA' as const,                         // 模式
    
    // 旧版类型
    OLD_DATASET: 'OLD_DATASET' as const                // 旧数据集
};

// PermissionType 类型定义
export type PermissionType = 'REF' | 'READ' | 'WRITE';

// PermissionType 常量对象
export const PermissionType = {
    REF: 'REF' as const,
    READ: 'READ' as const,
    WRITE: 'WRITE' as const
};

// PermissionDescendType 类型定义
export type PermissionDescendType = 'ALL' | 'NONE' | 'READ_WRITE';

// PermissionDescendType 常量对象
export const PermissionDescendType = {
    ALL: 'ALL' as const,
    NONE: 'NONE' as const,
    READ_WRITE: 'READ_WRITE' as const
};

export type HiddenInBrowse = boolean;

import {smartbi} from "../index.ts";

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