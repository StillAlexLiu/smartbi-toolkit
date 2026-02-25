// 公共类型定义
// 通用接口类型
export interface IResult {
    // 查询结果接口，具体字段取决于实际返回值
    cells: Array<any>
    axes: Array<any>

    [key: string]: any;
}

export interface RunningInfoItem {
    name: string;      // 名称
    startTime: number;  // 开始时间
    cost: number;       // 耗时
}

export interface RunningInfo {
    currentItem: RunningInfoItem;           // 当前项
    currentItemFinished: boolean;           // 当前项是否已完成
    allItems: RunningInfoItem[];            // 所有项列表
    asyncInfos: RunningInfo[];              // 异步信息列表
    resId?: string;                         // 资源ID
    startTime: number;                      // 开始时间
    isFinished: boolean;                    // 是否已完成
}

export interface IParameter {
    // 参数接口
    id: string;
    name: string;

    // 其他可能的属性
    [key: string]: any;
}

export interface Parameter {
    id: string;              // ID
    name: string;            // 名称
    alias?: string;          // 别名
    desc?: string;           // 描述
    type?: string;           // 类型
    defaultValue?: string;   // 默认值
    componentType?: string;  // 组件类型
    displayValue?: string;   // 显示值
    value?: string;          // 值
}

export interface NameValuePair {
    // 键值对接口
    name: string;
    value: string;

    // 其他可能的属性
    [key: string]: any;
}

// 业务视图相关类型
export interface ViewMetaData {
    clientId?: string;           // 客户端ID
    totalRowCount: number;       // 总行数
    fieldNames: string[];        // 字段名称列表
    fieldTypes: string[];        // 字段类型列表
}


export type PropertyName = 'alias' | 'desc' | 'dataType' | 'dataFormat' | 'orderby' | 'transformRule';


export type BusinessViewType = 'RAW_SQL_QUERY' | 'VISUAL_QUERY' | 'SQL_QUERY';


// 目录服务相关类型
export interface CatalogElement {
    id: string;                    // 资源ID
    name: string;                  // 资源名称
    alias: string;                 // 别名
    desc?: string;                 // 描述（可选）
    type: string;                  // 资源类型
    hasChild: boolean;             // 是否有子节点
    order: number;                 // 顺序
    extended?: string;             // 扩展信息（可选）
    hiddenInBrowse: boolean;       // 是否在浏览模块中隐藏
    showOnPC: boolean;             // 是否在PC端显示
    showOnPad: boolean;            // 是否在平板端显示
    showOnPhone: boolean;          // 是否在手机端显示
    customImage?: string;          // 自定义图片（可选）
    customMobileImage?: string;    // 自定义移动图片（可选）
    mobileImageId?: string;        // 移动图片ID（可选）
    detectChild: boolean;          // 是否检测子节点
    lastModifiedDate?: Date;       // 最后修改日期（可选）
    fullPath?: string;             // 完整路径（可选，默认为""）
    parentId?: string;             // 父节点ID（可选，默认为null）
    // 其他可能的属性
    [key: string]: any;
}

export interface ResourcePermission {
    permissions: ResourcePermissionItem[];
    inherited: boolean;
    owner: IAssignee;
    resid: string;

    // 其他可能的属性
    [key: string]: any;
}


export interface ICatalogSearchResult {

    catalogElement?: any; // ICatalogElement类型
    idPath?: string[]; // 路径ID列表
    aliasPath?: string[]; // 别名路径列表

}

// 访问类型定义
export type AccessType = 'REF' | 'READ' | 'WRITE';


// 目录元素类型定义
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


// Assignee 类型定义
export interface IAssignee {
    id: string;
    name: string;
    alias: string;
    type: string;
}

// ResourcePermissionItem 类型定义
export interface ResourcePermissionItem {
    assignee: IAssignee;
    purviewType: string;
    permissionApplyToScope: string;
    groupDescend: boolean;
    id: string;
    fromresid: string;
    expiresTime: string;
    sourceUser?: any;
}

// 权限类型定义
export type PermissionType = 'NONE' | 'REF' | 'READ' | 'WRITE' | 'OVERVIEW' | 'GRANT'


export type PermissionDescendType = 'NONE' | 'FOLDER_ONLY' | 'FILE_ONLY' | 'FOLDER_FILE';


export type HiddenInBrowse = boolean;

// 客户端组合报表相关类型
export interface IClientCombinedReportView extends ClientReportView {
    queryClientId?: string;
    condPanelClientId?: string;
    paramPanelId?: string;
}

// 客户端报表服务相关类型
export interface ReportData {
    matrix: any[][];
}

export interface CustomFilterDataBean {
    fieldId: string;      // 字段ID
    operator1: string;    // 操作符1
    value1: string;       // 值1
    groupType: string;    // 组类型
    operator2?: string;   // 操作符2（可选）
    value2?: string;      // 值2（可选）

    // 其他可能的属性
    [key: string]: any;
}

export type AggregateType =
    | 'SUM'         // 求和
    | 'MIN'         // 最小值
    | 'MAX'         // 最大值
    | 'COUNT'       // 计数
    | 'DISTINCT_COUNT' // 去重计数
    | 'AVG'         // 平均值
    | 'NULL';       // 无聚合


export type OrderType =
    | 'ASC'         // 升序
    | 'DESC'        // 降序
    | 'NONE';       // 无排序


export type OperatorType =
    | '='
    | '>'
    | '<'


// 数据源服务相关类型
export interface DataSource {
    id: string;
    name: string;
    alias?: string;
    desc?: string;
    user: string;
    password?: string;
    driverType: DriverType | string;
    driver: string;
    url: string;
    maxConnection: number;
    dbCharset?: string;
    validationQuery?: string;
    transactionIsolation: number; // 默认值为-1
    validationQueryMethod: number;
    authenticationType?: string;
    driverCatalog?: string;

}

export type JDBCTableType =
    | 'TABLE'
    | 'VIEW'
    | 'PROC'
    | 'MACRO';


export interface JDBCTable {
    catalog?: string;
    schema?: string;
    name: string;
    desc?: string;
    type: JDBCTableType;

}

export interface BasicField {
    id: string;
    name: string;
    alias?: string;
    desc?: string;
    dataType: string;
    dataFormat?: string;

}

export interface SDKCellData {
    type?: string; // ValueType enum equivalent
    isNull?: boolean;
    displayValue?: string;
    stringValue?: string;
    intValue?: number;
    doubleValue?: number;
    dateValue?: Date;
    longValue?: number;
    byteArrayValue?: Uint8Array | string | string[]; // equivalent to byte[]
    extendValue?: string;
    useTransformRule?: boolean;
    bigIntValue?: bigint;
    bigDecimalValue?: number; // Using number as JS doesn't have BigDecimal
    // 其他可能的属性
}

export interface SDKGridData {
    totalRowsCount: number;
    stringHeaders?: string[];
    columnNames?: string[];
    columnLabels?: string[];
    data?: SDKCellData[][];

}

// DriverType 类型定义
export type DriverType =
    | 'KINGBASE'      // kingbase数据库
    | 'ODBC'          // odbc连接方式
    | 'MSSQL'         // Ms SQL Server数据库
    | 'MYSQL'         // Mysql数据库
    | 'ORACLE'        // Oracle数据库
    | 'DB2_400'       // DB2数据库
    | 'DB2'           // DB2数据库
    | 'DB2_V9'        // DB2_V9数据库
    | 'INFORMIX'      // Informix数据库
    | 'SYBASE'        // Sybase数据库
    | 'TERADATA'      // Teradata数据库
    | 'TERADATA_V12'  // Teradata_v12数据库
    | 'ACCESS'        // Access数据库
    | 'EXCEL'         // Excel
    | 'POSTGRESQL'    // PostgreSQL数据库
    | 'GREENPLUM'     // Greenplum数据库
    | 'DEFAULT';      // 其它类型数据库


// 系统配置相关类型
export interface SystemConfig {
    key: string;
    value: string;
    longValue?: string;

    // 其他可能的属性
    [key: string]: any;
}


// 元数据服务相关类型
export interface IDocument {
    id: string;
    name: string;
    alias?: string;
    cnAlias?: string;
    enAlias?: string;
    twAlias?: string;
    desc?: string;
    cnDesc?: string;
    enDesc?: string;
    twDesc?: string;
    type: string;
    path?: string;
    content?: string;
    refid?: string[];
    affid?: string[];
    flag?: string;
    docOrder?: number;
    lastModified?: string;
    indexLastModified?: string;
    extended?: string;

    // 其他可能的属性
    [key: string]: any;
}

export interface DocumentTreeNode extends IDocument {
    children?: DocumentTreeNode[];
    parent?: DocumentTreeNode;

    // 其他可能的属性
    [key: string]: any;
}

export interface CategoryResource {
    id: string;
    name: string;
    alias: string;
    desc: string;
    type: string;

}

// OLTP元数据服务相关类型
export interface CalcField {
    id: string;
    name: string;
    alias?: string;
    desc?: string;
    expression: string;
    dataType: string;
    dataFormat?: string;
    condition?: string;
    isInGroup?: string;
    isBuildSql?: boolean;

    // 其他可能的属性
    [key: string]: any;
}

export interface TableField {
    id: string;
    name: string;
    dateType: string;
    columnSize: number;
    decimalDigits: number;

    // 其他可能的属性
    [key: string]: any;
}

// 图形报表服务相关类型
export interface GraphicReport {
    clientId: string;
    width: string;
    height: string;
    flashBasePath: string;
    parameterPanelId: string;
    params: Parameter[];
    serviceName: string;
    timeConsuming: any;

    // 其他可能的属性
    [key: string]: any;
}

// 用户管理服务相关类型
export interface User {
    id: string;
    name: string;
    alias?: string;
    password?: string;
    desc?: string;
    enabled: string; // 对应Java类中的enabledCol字段
    cellPhoneNumber?: string;
    emailAddress?: string;
    validityType?: string;
    validityStartTime?: Date;
    validityEndTime?: Date;
    pwdLastModifyTime?: Date;
    lastLoginTime?: Date;
    assignedGroups?: any[]; // 对应Java类中的List<GroupToUser>
    assignedRoles?: any[]; // 对应Java类中的List<Role>
    createTime?: Date;
    updateTime?: Date;
    cellPhoneDecoded?: boolean;
    emailDecoded?: boolean;

    // 其他可能的属性
    [key: string]: any;
}

export interface Role {
    id: string;
    name: string;
    alias?: string;
    desc?: string;
    systemId?: string;
    groupId?: string;
    componentDefine?: string;
    creatorGroup?: any; // 对应Java类中的Group类型
    groupToRole?: any[]; // 对应Java类中的List<GroupToRole>
    functions?: any[]; // 对应Java类中的List<Function>
    assignedUsers?: any[]; // 对应Java类中的List<User>
    enabled?: string;

    // 其他可能的属性
    [key: string]: any;
}

export interface Department {
    id: string;                // 组ID
    name: string;              // 组名称
    alias?: string;            // 组别名
    desc?: string;             // 描述
    orgId?: string;            // 组织ID
    departmentCode?: string;   // 部门代码
    systemId?: string;         // 系统ID
    createTime?: Date;         // 创建时间
    updateTime?: Date;         // 更新时间
    enabled?: string;          // 启用状态
    parentGroup?: Department;  // 父组
    subGroups?: Department[];  // 子组列表
    assignedUsers?: User[];    // 已分配用户列表
    groupToRole?: any[];       // 组角色关联
    createdRoles?: Role[];     // 创建的角色列表

    // 其他可能的属性
    [key: string]: any;
}

export interface FunctionPermission {
    id: string;              // 功能ID
    name: string;            // 功能名称
    alias?: string;          // 功能别名
    desc?: string;           // 功能描述
    systemId?: string;       // 系统ID
    isBuiltIn?: string;      // 是否内置功能
    order?: number;          // 排序
    parentFunction?: FunctionPermission;  // 父功能
    subFunctions?: FunctionPermission[];  // 子功能列表
    rolesToFunction?: Role[];             // 关联角色列表

    // 其他可能的属性
    [key: string]: any;
}

export interface ExtensionAttribute {
    id: string;
    key: string;
    value: string;
    longValue?: string;

    // 其他可能的属性
    [key: string]: any;
}

// 统一导出类型定义
export interface AllExportTypeMap {
    EXCEL: 'EXCEL';         // Excel格式
    TXT: 'TXT';             // 文本格式
    CSV: 'CSV';             // CSV格式
    WORD: 'WORD';           // 输出docx
    WORD2003: 'WORD2003';   // 输出doc
    POWERPOINT: 'POWERPOINT'; // 输出pptx
    PDF: 'PDF';             // 输出pdf
    PNG: 'PNG';             // PNG图片格式
    EXCEL2007: 'EXCEL2007'; // Excel 2007格式 (常用)
    LIST_EXCEL: 'LIST_EXCEL'; // 清单表导出Excel专用格式
    HTML: 'HTML';            // HTML格式
}

// 为不同服务定义特定的导出类型
export type ReportExportType = keyof Pick<AllExportTypeMap, 'EXCEL' | 'TXT' | 'CSV'>;
export type OfficeReportExportType = keyof Pick<AllExportTypeMap, 'WORD' | 'WORD2003' | 'POWERPOINT' | 'PDF'>;
export type SSReportExportType = keyof Pick<AllExportTypeMap, 'PDF' | 'PNG' | 'WORD' | 'EXCEL2007' | 'LIST_EXCEL' | 'EXCEL' | 'HTML' | 'CSV'>;


export type JSONArray = any[];

// CombinedReportService 相关类型
// 客户端简单报表相关类型
export interface ReportBean {
    params?: any[];
    fields?: any[];
    clientConfig?: string;
}

export interface ClientReportView {
    clientId?: string;
    reportBean?: ReportBean;
}

export interface ICombinedReport {
    currentReportName: string;
    rowsPerPage: number;
    parameters?: any[];
    fields?: any[];

    // 其他可能的属性
    [key: string]: any;
}
