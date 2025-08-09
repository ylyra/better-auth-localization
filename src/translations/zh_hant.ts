import { ErrorCodesType } from "../types";

export const ZH_HANT = {
	// User related errors
	USER_NOT_FOUND: "找不到用戶",
	FAILED_TO_CREATE_USER: "創建用戶失敗",
	FAILED_TO_UPDATE_USER: "更新用戶失敗",
	USER_ALREADY_EXISTS: "用戶已存在",
	USER_EMAIL_NOT_FOUND: "找不到用戶的電子郵件",
	USER_ALREADY_HAS_PASSWORD: "用戶已設置密碼。請提供該密碼以刪除帳戶。",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "創建會話失敗",
	FAILED_TO_GET_SESSION: "獲取會話失敗",
	SESSION_EXPIRED: "會話已過期。請重新登錄以執行此操作。",

	// Authentication errors
	INVALID_PASSWORD: "密碼無效",
	INVALID_EMAIL: "電子郵件無效",
	INVALID_EMAIL_OR_PASSWORD: "電子郵件或密碼無效",
	INVALID_TOKEN: "令牌無效",
	EMAIL_NOT_VERIFIED: "電子郵件未驗證",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "找不到憑證帳戶",

	// Password related errors
	PASSWORD_TOO_SHORT: "密碼過短",
	PASSWORD_TOO_LONG: "密碼過長",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "帳戶已連結",
	PROVIDER_NOT_FOUND: "找不到提供者",
	ID_TOKEN_NOT_SUPPORTED: "不支援 id_token",
	FAILED_TO_GET_USER_INFO: "獲取用戶資訊失敗",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "無法更新電子郵件",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "無法解除最後一個帳戶的連結",
	ACCOUNT_NOT_FOUND: "找不到帳戶",
} satisfies ErrorCodesType;