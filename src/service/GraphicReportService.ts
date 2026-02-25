// 导入公共类型
import {smartbi} from "../index";
import type {GraphicReport} from "../types";

/**
 * 打开图形分析报表
 * @param reportId 报表ID
 * @returns 返回报表客户端ID
 */
export const openGraphicReport = (reportId: string): Promise<GraphicReport> => {
    return smartbi('GraphicReportService', 'openGraphicReport', [reportId])
}
