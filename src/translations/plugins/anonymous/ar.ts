import type { AnonymousErrorCodesType } from "../../../types";

export const AR_SA = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "لا يمكن إنشاء الجلسة",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"لا يمكن للمستخدمين المجهولين تسجيل الدخول مرة أخرى كمجهولين",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
