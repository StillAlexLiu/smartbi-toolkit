// 公共类型定义
// 通用接口类型
export interface IResult {
    // 查询结果接口，具体字段取决于实际返回值
    [key: string]: any;
}

export interface RunningInfo {
    // 执行状态信息接口
    state: string; // 执行状态
    progress: number; // 执行进度
    // 其他可能的属性
    [key: string]: any;
}

export interface IParameter {
    // 参数接口
    id: string;
    name: string;
    value: string;
    displayValue: string;

    // 其他可能的属性
    [key: string]: any;
}

export interface Parameter {
    // 参数接口（另一种形式）
    id: string;
    name: string;
    value: string;
    displayValue: string;

    // 其他可能的属性
    [key: string]: any;
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
    // 业务查询的基本元数据信息
    id: string;
    name: string;
    alias: string;
    description?: string;
    datasourceId: string;
    sql: string;

    // 其他可能的属性
    [key: string]: any;
}

export interface OutputField {
    id: string;
    name: string;
    alias: string;
    description?: string;
    dataType: string;
    dataFormat?: string;

    // 其他可能的属性
    [key: string]: any;
}

export type FieldProperty = 'alias' | 'desc' | 'dataType' | 'dataFormat' | 'orderby' | 'transformRule';

export const FieldProperty = {
    ALIAS: 'alias',
    DESC: 'desc',
    DATA_TYPE: 'dataType',
    DATA_FORMAT: 'dataFormat',
    ORDER_BY: 'orderby',
    TRANSFORM_RULE: 'transformRule'
};

export type BusinessViewType = 'RAW_SQL_QUERY' | 'VISUAL_QUERY' | 'SQL_QUERY';

export const BusinessViewType = {
    RAW_SQL_QUERY: 'RAW_SQL_QUERY',
    VISUAL_QUERY: 'VISUAL_QUERY',
    SQL_QUERY: 'SQL_QUERY'
};

// 目录服务相关类型
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

// 访问类型定义
export type AccessType = 'REF' | 'READ' | 'WRITE';

export const AccessType = {
    REF: 'REF',    // 引用权限
    READ: 'READ',  // 查看权限
    WRITE: 'WRITE' // 编辑权限
};

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

// CatalogElementType 常量对象
export const CatalogElementType = {
    // 文件夹类型
    FOLDER: 'FOLDER',

    // 报表类型
    SIMPLE_REPORT: 'SIMPLE_REPORT',           // 简单报表
    ANALYSIS_REPORT: 'ANALYSIS_REPORT',       // 分析报表
    COMBINED_QUERY: 'COMBINED_QUERY',         // 即席查询
    INSIGHT: 'INSIGHT',                       // 透视分析
    OLAP_REPORT: 'OLAP_REPORT',               // 多维分析

    // 仪表盘类型
    DASHBOARD: 'DASHBOARD',                   // 传统仪表盘
    SMARTBIX_PAGE: 'SMARTBIX_PAGE',           // 交互式仪表盘

    // 数据集类型
    DATASET: 'DATASET',                       // 通用数据集
    VISUAL: 'VISUAL',                         // 可视化数据集
    SQL: 'SQL',                               // SQL数据集
    PROCEDURE: 'PROCEDURE',                   // 存储过程数据集
    NATIVE_SQL: 'NATIVE_SQL',                 // 原生SQL数据集
    JAVA: 'JAVA',                             // JAVA数据集
    SMARTBIX_DATASET: 'SMARTBIX_DATASET',     // 自助数据集
    AUGMENTED_DATASET: 'AUGMENTED_DATASET',   // 数据模型

    // 业务对象类型
    BUSINESS_VIEW: 'BUSINESS_VIEW',           // 业务视图
    BUSINESS_SUBJECT: 'BUSINESS_SUBJECT',     // 业务主题
    BUSINESS_QUERY: 'BUSINESS_QUERY',         // 业务查询

    // 电子表格类型
    SPREADSHEET_REPORT: 'SPREADSHEET_REPORT', // 电子表格报表
    WEB_SPREADSHEET_REPORT: 'WEB_SPREADSHEET_REPORT', // WEB电子表格

    // 数据处理类型
    DATA_PROCESS: 'SMARTBI_DATAPROCESS',      // 自助ETL
    ETL_AUTOMATION: 'ETL_AUTOMATION',         // ETL自动化
    JOB_FLOW: 'JOB_FLOW',                     // 作业流
    DATA_MINING: 'SMARTBI_MINING',            // 数据挖掘

    // 其他类型
    URL_LINK: 'URL',                          // WEB链接
    EXCEL_IMPORT_TEMPLATE: 'excelimport',     // Excel导入模板
    TXT_QUERY_OBJECT: 'TXTQUERYOBJECT',       // 查询对象
    TXT_DATA_SOURCE: 'TXTDATASOURCE',         // 数据源
    SCHEMA: 'SCHEMA',                         // 模式

    // 旧版类型
    OLD_DATASET: 'OLD_DATASET'                // 旧数据集
};

// 权限类型定义
export type PermissionType = 'REF' | 'READ' | 'WRITE';

export const PermissionType = {
    REF: 'REF',
    READ: 'READ',
    WRITE: 'WRITE'
};

export type PermissionDescendType = 'ALL' | 'NONE' | 'READ_WRITE';

export const PermissionDescendType = {
    ALL: 'ALL',
    NONE: 'NONE',
    READ_WRITE: 'READ_WRITE'
};

export type HiddenInBrowse = boolean;

// 客户端组合报表相关类型
export interface IClientCombinedReportView {
    clientId: string;
    reportBean?: any;
    queryClientId?: string;
    reportClientId?: string;
    condPanelClientId?: string;
    paramPanelId?: string;
}

// 客户端报表服务相关类型
export interface ReportData {
    id: string;
    name: string;
    alias?: string;
    data: any[]; // 报表数据
    totalRows: number; // 总行数
    currentPage: number; // 当前页码
    rowsPerPage: number; // 每页行数
    // 其他可能的属性
    [key: string]: any;
}

export interface ClientReportView {
    id: string;
    name: string;
    alias?: string;
    clientId: string;
    reportId: string;

    // 其他可能的属性
    [key: string]: any;
}

export interface CustomFilterDataBean {
    id: string;
    name: string;
    condition: string;

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

export const AggregateType = {
    SUM: 'SUM',
    MIN: 'MIN',
    MAX: 'MAX',
    COUNT: 'COUNT',
    DISTINCT_COUNT: 'DISTINCT_COUNT',
    AVG: 'AVG',
    NULL: 'NULL'
};

export type OrderType =
    | 'ASC'         // 升序
    | 'DESC'        // 降序
    | 'NONE';       // 无排序

export const OrderType = {
    ASC: 'ASC',
    DESC: 'DESC',
    NONE: 'NONE'
};

export type OperatorType =
    | 'EQ'          // 等于
    | 'NE'          // 不等于
    | 'GT'          // 大于
    | 'GE'          // 大于等于
    | 'LT'          // 小于
    | 'LE'          // 小于等于
    | 'LIKE'        // 模糊匹配
    | 'IN'          // 包含
    | 'NOT_IN'      // 不包含
    | 'IS_NULL'     // 为空
    | 'NOT_NULL';   // 不为空

export const OperatorType = {
    EQ: 'EQ',
    NE: 'NE',
    GT: 'GT',
    GE: 'GE',
    LT: 'LT',
    LE: 'LE',
    LIKE: 'LIKE',
    IN: 'IN',
    NOT_IN: 'NOT_IN',
    IS_NULL: 'IS_NULL',
    NOT_NULL: 'NOT_NULL'
};

// 数据源服务相关类型
export interface DataSource {
    id: string;
    name: string;
    alias?: string;
    desc?: string;
    user: string;
    password?: string;
    driverType: string;
    driver: string;
    url: string;
    maxConnection: number;
    dbCharset?: string;
    validationQuery?: string;
    transactionIsolation?: number;
    validationQueryMethod?: number;
    authenticationType?: string;
    driverCatalog?: string;

    // 其他可能的属性
    [key: string]: any;
}

export type JDBCTableType =
    | 'TABLE'
    | 'VIEW'
    | 'PROC'
    | 'MACRO';

export const JDBCTableType = {
    TABLE: 'TABLE',
    VIEW: 'VIEW',
    PROC: 'PROC',
    MACRO: 'MACRO'
};

export interface JDBCTable {
    catalog?: string;
    schema?: string;
    name: string;
    desc?: string;
    type: JDBCTableType;

    // 其他可能的属性
    [key: string]: any;
}

export interface BasicField {
    id: string;
    name: string;
    alias?: string;
    desc?: string;
    dataType: string;
    dataFormat?: string;

    // 其他可能的属性
    [key: string]: any;
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
    byteArrayValue?: Uint8Array; // equivalent to byte[]
    extendValue?: string;
    useTransformRule?: boolean;
    bigIntValue?: bigint;
    bigDecimalValue?: number; // Using number as JS doesn't have BigDecimal
    // 其他可能的属性
    [key: string]: any;
}

export interface SDKGridData {
    totalRowsCount: number;
    stringHeaders?: string[];
    columnNames?: string[];
    columnLabels?: string[];
    data?: SDKCellData[][];

    // 其他可能的属性
    [key: string]: any;
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

// DriverType 常量对象
export const DriverType = {
    KINGBASE: 'KINGBASE',        // kingbase数据库
    ODBC: 'ODBC',                // odbc连接方式
    MSSQL: 'MSSQL',              // Ms SQL Server数据库
    MYSQL: 'MYSQL',              // Mysql数据库
    ORACLE: 'ORACLE',            // Oracle数据库
    DB2_400: 'DB2_400',          // DB2数据库
    DB2: 'DB2',                  // DB2数据库
    DB2_V9: 'DB2_V9',            // DB2_V9数据库
    INFORMIX: 'INFORMIX',        // Informix数据库
    SYBASE: 'SYBASE',            // Sybase数据库
    TERADATA: 'TERADATA',        // Teradata数据库
    TERADATA_V12: 'TERADATA_V12',// Teradata_v12数据库
    ACCESS: 'ACCESS',            // Access数据库
    EXCEL: 'EXCEL',              // Excel
    POSTGRESQL: 'POSTGRESQL',    // PostgreSQL数据库
    GREENPLUM: 'GREENPLUM',      // Greenplum数据库
    DEFAULT: 'DEFAULT'           // 其它类型数据库
};

// 洞察分析相关类型
export interface SystemConfig {
    id: string;
    name: string;
    value: string;
    desc?: string;

    // 其他可能的属性
    [key: string]: any;
}

export interface InsightConfig {
    // 洞察配置接口
    [key: string]: any;
}

// 元数据服务相关类型
export interface IDocument {
    id: string;
    name: string;
    type: string;
    parentId?: string;

    // 其他可能的属性
    [key: string]: any;
}

export interface DocumentTreeNode {
    id: string;
    name: string;
    type: string;
    parentId?: string;
    children?: DocumentTreeNode[];

    // 其他可能的属性
    [key: string]: any;
}

export interface CategoryResource {
    id: string;
    name: string;
    type: string;
    parentId?: string;

    // 其他可能的属性
    [key: string]: any;
}

// OLTP元数据服务相关类型
export interface CalcField {
    id: string;
    name: string;
    alias?: string;
    desc?: string;
    expression: string;
    dataType: string;
    format?: string;

    // 其他可能的属性
    [key: string]: any;
}

export interface TableField {
    id: string;
    name: string;
    alias?: string;
    desc?: string;
    dataType: string;
    length?: number;
    precision?: number;
    scale?: number;
    nullable?: boolean;
    primaryKey?: boolean;
    defaultValue?: string;

    // 其他可能的属性
    [key: string]: any;
}

// 图形报表服务相关类型
export interface GraphicReport {
    id: string;
    name: string;
    alias: string;
    description?: string;
    type: string;
    params?: any[];
    parameterPanelId?: string;
    clientId?: string;
    width?: string;
    height?: string;
    flashBasePath?: string;
    timeConsuming?: any;

    // 其他可能的属性
    [key: string]: any;
}

// 时间消耗相关类型
export interface TimeConsumingInfo {
    id: string;
    name: string;
    startTime: Date;
    endTime: Date;
    duration: number; // 持续时间（毫秒）
    status: string; // 状态
    progress: number; // 进度
    // 其他可能的属性
    [key: string]: any;
}

// 用户管理服务相关类型
export interface User {
    id: string;
    name: string;
    alias?: string;
    description?: string;
    password?: string;
    isEnabled: boolean;
    forceChangePassword?: boolean;

    // 其他可能的属性
    [key: string]: any;
}

export interface Role {
    id: string;
    name: string;
    alias?: string;
    description?: string;

    // 其他可能的属性
    [key: string]: any;
}

export interface Department {
    id: string;
    name: string;
    alias?: string;
    description?: string;
    departmentCode?: string;

    // 其他可能的属性
    [key: string]: any;
}

export interface FunctionPermission {
    id: string;
    name: string;
    alias?: string;
    description?: string;
    parentId?: string;

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
export interface ICombinedReport {
    currentReportName: string;
    rowsPerPage: number;
    parameters?: any[];
    fields?: any[];

    // 其他可能的属性
    [key: string]: any;
}
