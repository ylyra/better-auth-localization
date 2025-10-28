import type { PasskeyErrorCodesType } from "../../../types";

export const AR_SA = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "التحدي غير موجود",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"ليس لديك إذن لتسجيل مفتاح الوصول هذا",
	FAILED_TO_VERIFY_REGISTRATION: "فشل في التحقق من التسجيل",
	PASSKEY_NOT_FOUND: "مفتاح الوصول غير موجود",
	AUTHENTICATION_FAILED: "فشل في المصادقة",
	UNABLE_TO_CREATE_SESSION: "غير قادر على إنشاء الجلسة",
	FAILED_TO_UPDATE_PASSKEY: "فشل في تحديث مفتاح الوصول",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
