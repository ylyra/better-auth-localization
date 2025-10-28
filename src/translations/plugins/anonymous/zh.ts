import type { AnonymousErrorCodesType } from "../../../types";

export const ZH_HANT = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "無法創建會話",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: "匿名用戶無法再次匿名登入",
} satisfies AnonymousErrorCodesType;

export const ZH_HANS = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "无法创建会话",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: "匿名用户无法再次匿名登录",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
