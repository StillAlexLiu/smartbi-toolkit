// 导入公共类型
import type {Parameter, NameValuePair} from '../types';
import {smartbi} from "../index.ts";

/**
 * 打开整个页面
 * @param pageId 页面ID
 * @returns 返回客户端ID
 */
export const openEntirePage = (pageId: string): Promise<string> => {
    return smartbi('PortalService', 'openEntirePage', [pageId])
}

/**
 * 执行页面中所有的查询
 * @param clientId 客户端ID
 * @param portletType 组件类型
 * @returns 无返回值
 */
export const excuteAllQueryInPage = (clientId: string, portletType: string[]): Promise<void> => {
    return smartbi('PortalService', 'excuteAllQueryInPage', [clientId, portletType.toString()])
}

/**
 * 关闭整个页面
 * @param clientId 客户端ID
 * @returns 无返回值
 */
export const closeEntirePage = (clientId: string): Promise<void> => {
    return smartbi('PortalService', 'closeEntirePage', [clientId])
}

/**
 * 导出页面
 * @param clientId 客户端ID
 * @param exportType 导出类型
 * @param pageWidth 页面大小
 * @param os 输出流
 * @param postData 可选参数 - 参数
 * @returns 无返回值
 */
export const doExport = (clientId: string, exportType: string, pageWidth: number, os: any, postData?: string): Promise<void> => {
    if (postData !== undefined) {
        return smartbi('PortalService', 'doExport', [clientId, exportType, pageWidth, os, postData])
    } else {
        return smartbi('PortalService', 'doExport', [clientId, exportType, pageWidth, os])
    }
}

/**
 * 根据参数ID获取参数默认值
 * @param clientId 客户端ID
 * @param paramId 参数ID
 * @returns 返回参数默认值
 */
export const getParamDefaultValue = (clientId: string, paramId: string): Promise<string> => {
    return smartbi('PortalService', 'getParamDefaultValue', [clientId, paramId])
}

/**
 * 根据参数ID获取参数默认值列表
 * @param clientId 客户端ID
 * @param paramId 参数ID
 * @returns 返回参数默认值列表
 */
export const getParamDefaultValues = (clientId: string, paramId: string): Promise<string[]> => {
    return smartbi('PortalService', 'getParamDefaultValues', [clientId, paramId])
}

/**
 * 设置参数值
 * @param clientId 客户端ID
 * @param paramId 参数ID
 * @param paramValue 参数值
 * @param paramDisplayValue 参数显示值
 * @returns 无返回值
 */
export const setParamValue = (clientId: string, paramId: string, paramValue: string, paramDisplayValue: string): Promise<void> => {
    return smartbi('PortalService', 'setParamValue', [clientId, paramId, paramValue, paramDisplayValue])
}

/**
 * 获取页面的参数列表
 * @param pageId 页面ID
 * @returns 返回参数列表
 */
export const getParameters = (pageId: string): Promise<Parameter[]> => {
    return smartbi('PortalService', 'getParameters', [pageId])
}

/**
 * 获取参数备选值
 * @param clientId 客户端ID
 * @param paramId 参数ID
 * @returns 返回参数标准值
 */
export const getParamStandbyValue = (clientId: string, paramId: string): Promise<NameValuePair[]> => {
    return smartbi('PortalService', 'getParamStandbyValue', [clientId, paramId])
}
