import { ErrorCodesType } from "../types";

export const ZH_HANS = {
	// User related errors
	USER_NOT_FOUND: "找不到此用户",
	FAILED_TO_CREATE_USER: "创建用户失败",
	FAILED_TO_UPDATE_USER: "更新用户失败",
	USER_ALREADY_EXISTS: "此用户已存在",
	USER_EMAIL_NOT_FOUND: "找不到此用户的电子邮件",
	USER_ALREADY_HAS_PASSWORD: "此用户已设置密码。请提供该密码以删除账户。",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "创建会话失败",
	FAILED_TO_GET_SESSION: "获取会话失败",
	SESSION_EXPIRED: "会话已过期。请重新登录以执行此操作。",

	// Authentication errors
	INVALID_PASSWORD: "密码无效",
	INVALID_EMAIL: "电子邮件无效",
	INVALID_EMAIL_OR_PASSWORD: "电子邮件或密码无效",
	INVALID_TOKEN: "令牌无效",
	EMAIL_NOT_VERIFIED: "电子邮件未验证",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "找不到凭证账户",

	// Password related errors
	PASSWORD_TOO_SHORT: "密码过短",
	PASSWORD_TOO_LONG: "密码过长",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "账户已链接",
	PROVIDER_NOT_FOUND: "找不到服务提供商",
	ID_TOKEN_NOT_SUPPORTED: "不支持 id_token",
	FAILED_TO_GET_USER_INFO: "获取用户信息失败",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "无法更新电子邮件",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "无法解除最后一个账户的链接",
	ACCOUNT_NOT_FOUND: "找不到账户",
} satisfies ErrorCodesType;