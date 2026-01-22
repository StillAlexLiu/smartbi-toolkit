// 定义SmartBI计划任务服务相关的类型接口

import { smartbi } from "../index.ts";

/**
 * 执行计划任务
 * @param scheduleId 计划ID
 * @returns 返回执行结果的布尔值
 */
export const executeSchedule = (scheduleId: string): Promise<boolean> => {
    return smartbi('ScheduleTaskService', 'executeSchedule', [scheduleId])
}

/**
 * 执行任务
 * @param taskId 任务ID
 * @returns 返回执行结果的布尔值
 */
export const executeTask = (taskId: string): Promise<boolean> => {
    return smartbi('ScheduleTaskService', 'executeTask', [taskId])
}