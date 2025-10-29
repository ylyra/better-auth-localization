import type { AdminErrorCodesType } from "../../../types";

export const ZH_HANT = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "您無法禁止自己",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: "您沒有權限更改用戶角色",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "您沒有權限創建用戶",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "您沒有權限列出用戶",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: "您沒有權限列出用戶會話",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "您沒有權限禁止用戶",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: "您沒有權限冒充其他用戶",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: "您沒有權限撤銷用戶會話",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "您沒有權限刪除用戶",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: "您沒有權限設置用戶密碼",
	BANNED_USER: "您已被此應用程式禁止",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "您沒有權限獲取用戶",
	NO_DATA_TO_UPDATE: "沒有要更新的數據",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: "您沒有權限更新用戶",
	YOU_CANNOT_REMOVE_YOURSELF: "您無法移除自己",
} satisfies AdminErrorCodesType;

export const ZH_HANS = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "您无法禁止自己",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: "您没有权限更改用户角色",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "您没有权限创建用户",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "您没有权限列出用户",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: "您没有权限列出用户会话",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "您没有权限禁止用户",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: "您没有权限冒充其他用户",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: "您没有权限撤销用户会话",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "您没有权限删除用户",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: "您没有权限设置用户密码",
	BANNED_USER: "您已被此应用程序禁止",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "您没有权限获取用户",
	NO_DATA_TO_UPDATE: "没有要更新的数据",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: "您没有权限更新用户",
	YOU_CANNOT_REMOVE_YOURSELF: "您无法移除自己",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
