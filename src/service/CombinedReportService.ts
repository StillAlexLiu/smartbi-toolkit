// 导入公共类型
import type { ICombinedReport } from '../types';

// CombinedReportService 服务方法

import {smartbi} from "../index";

/**
 * 创建并打开一个报表
 * @param reportId 报表ID
 * @returns 返回打开的报表对象，类型为ICombinedReport
 */
export const openReport = (reportId: string): Promise<ICombinedReport> => {
    return smartbi('CombinedReportService', 'openReport', [reportId])
}
