// 定义SmartBI简单报表服务相关的类型接口

import { smartbi } from "../index";

/**
 * 创建并打开一个报表
 * @param reportId 报表ID
 * @returns 返回打开的报表对象
 */
export const openReport = (reportId: string): Promise<any> => {
    return smartbi('SimpleReportService', 'openReport', [reportId])
}

/**
 * 打开一个报表不初始化数据库链接
 * @param reportId 报表ID
 * @returns 返回打开的报表对象
 */
export const openReportWithoutInit = (reportId: string): Promise<any> => {
    return smartbi('SimpleReportService', 'openReportWithoutInit', [reportId])
}
