// 导入公共类型
import type { User, Role, Department, FunctionPermission, ExtensionAttribute } from '../types';

import { smartbi } from "../index";

/**
 * 创建用户
 * @param parentGroupId 父组ID
 * @param userName 用户名
 * @param userAlias 用户别名
 * @param desc 描述
 * @param password 密码
 * @param isEnabled 是否启用
 * @param forceChangePassword 是否强制修改密码(可选)
 * @returns 返回新创建的用户ID
 */
export const createUser = (parentGroupId: string, userName: string, userAlias: string, desc: string, password: string, isEnabled: boolean, forceChangePassword?: boolean): Promise<string> => {
    const params = forceChangePassword !== undefined 
        ? [parentGroupId, userName, userAlias, desc, password, isEnabled, forceChangePassword]
        : [parentGroupId, userName, userAlias, desc, password, isEnabled];
    return smartbi('UserManagerService', 'createUser', params);
}

/**
 * 指定ID创建用户
 * @param parentGroupId 父组ID
 * @param userId 用户ID
 * @param userName 用户名
 * @param userAlias 用户别名
 * @param desc 描述
 * @param password 密码
 * @param isEnabled 是否启用
 * @param forceChangePassword 是否强制修改密码(可选)
 */
export const createUserById = (parentGroupId: string, userId: string, userName: string, userAlias: string, desc: string, password: string, isEnabled: boolean, forceChangePassword?: boolean): Promise<void> => {
    const params = forceChangePassword !== undefined 
        ? [parentGroupId, userId, userName, userAlias, desc, password, isEnabled, forceChangePassword]
        : [parentGroupId, userId, userName, userAlias, desc, password, isEnabled];
    return smartbi('UserManagerService', 'createUserById', params);
}

/**
 * 删除用户
 * @param userId 用户ID
 * @returns 返回是否删除成功的布尔值
 */
export const deleteUser = (userId: string): Promise<boolean> => {
    return smartbi('UserManagerService', 'deleteUser', [userId])
}

/**
 * 通过用户ID获取用户信息
 * @param id 用户ID
 * @returns 返回用户信息
 */
export const getUserById = (id: string): Promise<User> => {
    return smartbi('UserManagerService', 'getUserById', [id])
}

/**
 * 通过用户名称获取用户信息
 * @param name 用户名称
 * @returns 返回用户信息
 */
export const getUserByName = (name: string): Promise<User> => {
    return smartbi('UserManagerService', 'getUserByName', [name])
}

/**
 * 根据用户扩展属性获取用户信息
 * @param key 属性键
 * @param value 属性值
 * @returns 返回用户列表
 */
export const getUserByAttribute = (key: string, value: string): Promise<User[]> => {
    return smartbi('UserManagerService', 'getUserByAttribute', [key, value])
}

/**
 * 获取系统中的用户列表
 * @returns 返回用户列表
 */
export const getAllUsers = (): Promise<User[]> => {
    return smartbi('UserManagerService', 'getAllUsers', [])
}

/**
 * 获取当前登录用户信息
 * @returns 返回当前用户信息
 */
export const getCurrentUser = (): Promise<User> => {
    return smartbi('UserManagerService', 'getCurrentUser', [])
}

/**
 * 修改当前用户的密码
 * @param oldPassword 旧密码
 * @param newPassword 新密码
 */
export const changePassword = (oldPassword: string, newPassword: string): Promise<void> => {
    return smartbi('UserManagerService', 'changePassword', [oldPassword, newPassword])
}

/**
 * 获取用户密码
 * @param userName 用户名
 * @returns 返回用户密码
 */
export const getPassword = (userName: string): Promise<string> => {
    return smartbi('UserManagerService', 'getPassword', [userName])
}

/**
 * 创建角色
 * @param roleName 角色名称
 * @param roleAlias 角色别名
 * @param desc 描述
 * @param groupId 组ID
 * @returns 返回新创建的角色ID
 */
export const createRole = (roleName: string, roleAlias: string, desc: string, groupId: string): Promise<string> => {
    return smartbi('UserManagerService', 'createRole', [roleName, roleAlias, desc, groupId])
}

/**
 * 删除角色
 * @param roleId 角色ID
 * @returns 返回是否删除成功的布尔值
 */
export const deleteRole = (roleId: string): Promise<boolean> => {
    return smartbi('UserManagerService', 'deleteRole', [roleId])
}

/**
 * 通过ID获取角色
 * @param id 角色ID
 * @returns 返回角色信息
 */
export const getRoleById = (id: string): Promise<Role> => {
    return smartbi('UserManagerService', 'getRoleById', [id])
}

/**
 * 通过角色名称获取角色对象
 * @param name 角色名称
 * @returns 返回角色信息
 */
export const getRoleByName = (name: string): Promise<Role> => {
    return smartbi('UserManagerService', 'getRoleByName', [name])
}

/**
 * 获取系统中的角色列表
 * @returns 返回角色列表
 */
export const getAllRoles = (): Promise<Role[]> => {
    return smartbi('UserManagerService', 'getAllRoles', [])
}

/**
 * 给用户分配角色
 * @param userId 用户ID
 * @param roleIdList 角色ID列表
 * @returns 返回是否分配成功的布尔值
 */
export const assignRolesToUser = (userId: string, roleIdList: string[]): Promise<boolean> => {
    return smartbi('UserManagerService', 'assignRolesToUser', [userId, roleIdList.toString()])
}

/**
 * 给角色分配用户
 * @param roleId 角色ID
 * @param userIdList 用户ID列表
 * @returns 返回是否分配成功的布尔值
 */
export const assignUsersToRole = (roleId: string, userIdList: string[]): Promise<boolean> => {
    return smartbi('UserManagerService', 'assignUsersToRole', [roleId, userIdList.toString()])
}

/**
 * 创建组
 * @param parentGroupId 父组ID
 * @param groupName 组名称
 * @param groupAlias 组别名
 * @param desc 描述
 * @param departmentCode 组编号
 * @returns 返回新创建的组ID
 */
export const createDepartment = (parentGroupId: string, groupName: string, groupAlias: string, desc: string, departmentCode: string): Promise<string> => {
    return smartbi('UserManagerService', 'createDepartment', [parentGroupId, groupName, groupAlias, desc, departmentCode])
}

/**
 * 删除组
 * @param groupId 组ID
 * @returns 返回是否删除成功的布尔值
 */
export const deleteDepartment = (groupId: string): Promise<boolean> => {
    return smartbi('UserManagerService', 'deleteDepartment', [groupId])
}

/**
 * 通过ID获取组对象
 * @param id 组ID
 * @returns 返回组信息
 */
export const getDepartmentById = (id: string): Promise<Department> => {
    return smartbi('UserManagerService', 'getDepartmentById', [id])
}

/**
 * 通过组名称获取组对象
 * @param name 组名称
 * @returns 返回组信息
 */
export const getDepartmentByName = (name: string): Promise<Department> => {
    return smartbi('UserManagerService', 'getDepartmentByName', [name])
}

/**
 * 通过组编号获取组对象
 * @param code 组编号
 * @returns 返回组信息
 */
export const getDepartmentByCode = (code: string): Promise<Department> => {
    return smartbi('UserManagerService', 'getDepartmentByCode', [code])
}

/**
 * 获取系统中的组列表
 * @returns 返回组列表
 */
export const getAllDepartments = (): Promise<Department[]> => {
    return smartbi('UserManagerService', 'getAllDepartments', [])
}

/**
 * 获取用户的所属组
 * @param userId 用户ID
 * @returns 返回用户所属组列表
 */
export const getDepartmentsOfUser = (userId: string): Promise<Department[]> => {
    return smartbi('UserManagerService', 'getDepartmentsOfUser', [userId])
}

/**
 * 修改组所拥有的用户
 * @param groupId 组ID
 * @param userIdList 用户ID列表
 * @returns 返回是否修改成功的布尔值
 */
export const assignUsersToGroup = (groupId: string, userIdList: string[]): Promise<boolean> => {
    return smartbi('UserManagerService', 'assignUsersToGroup', [groupId, userIdList.toString()])
}

/**
 * 修改用户的所属组
 * @param userId 用户ID
 * @param groupId 组ID列表
 * @returns 返回是否修改成功的布尔值
 */
export const assignDepartmentsToUser = (userId: string, groupId: string[]): Promise<boolean> => {
    return smartbi('UserManagerService', 'assignDepartmentsToUser', [userId, groupId.toString()])
}

/**
 * 添加扩展属性
 * @param userId 用户ID
 * @param key 属性键
 * @param value 属性值
 * @param longValue 长值
 * @returns 返回是否添加成功的布尔值
 */
export const addUserAttribute = (userId: string, key: string, value: string, longValue: string): Promise<boolean> => {
    return smartbi('UserManagerService', 'addUserAttribute', [userId, key, value, longValue])
}

/**
 * 获取指定的属性值
 * @param userId 用户ID
 * @param key 属性键
 * @returns 返回扩展属性
 */
export const getUserAttribute = (userId: string, key: string): Promise<ExtensionAttribute> => {
    return smartbi('UserManagerService', 'getUserAttribute', [userId, key])
}

/**
 * 获取某用户所有的属性值
 * @param userId 用户ID
 * @returns 返回用户所有扩展属性列表
 */
export const getAllUserAttributes = (userId: string): Promise<ExtensionAttribute[]> => {
    return smartbi('UserManagerService', 'getAllUserAttributes', [userId])
}

/**
 * 创建操作权限
 * @param funcId 权限ID
 * @param parentFuncId 父权限ID
 * @param funcName 权限名称
 * @param funcAlias 权限别名
 * @param funcDesc 权限描述
 * @returns 返回是否创建成功的布尔值
 */
export const createFunction = (funcId: string, parentFuncId: string, funcName: string, funcAlias: string, funcDesc: string): Promise<boolean> => {
    return smartbi('UserManagerService', 'createFunction', [funcId, parentFuncId, funcName, funcAlias, funcDesc])
}

/**
 * 删除操作权限
 * @param funcId 权限ID
 * @returns 返回是否删除成功的布尔值
 */
export const deleteFunction = (funcId: string): Promise<boolean> => {
    return smartbi('UserManagerService', 'deleteFunction', [funcId])
}

/**
 * 通过操作权限ID获取操作权限对象
 * @param funcId 权限ID
 * @returns 返回权限信息
 */
export const getFunctionById = (funcId: string): Promise<FunctionPermission> => {
    return smartbi('UserManagerService', 'getFunctionById', [funcId])
}

/**
 * 获取所有操作权限列表
 * @returns 返回权限列表
 */
export const getAllFunctions = (): Promise<FunctionPermission[]> => {
    return smartbi('UserManagerService', 'getAllFunctions', [])
}

/**
 * 获取License中的关键信息
 * @returns 返回License信息
 */
export const getLicenseInfo = (): Promise<any> => {
    return smartbi('UserManagerService', 'getLicenseInfo', [])
}

/**
 * 获取系统中所有License模块名称列表
 * @returns 返回License模块名称列表
 */
export const getLicenses = (): Promise<string[]> => {
    return smartbi('UserManagerService', 'getLicenses', [])
}
