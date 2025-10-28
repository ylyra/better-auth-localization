import type { TwoFactorErrorCodesType } from "../../../types";

export const AR_SA = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "كلمة المرور لمرة واحدة غير مفعلة",
	OTP_HAS_EXPIRED: "انتهت صلاحية كلمة المرور لمرة واحدة",
	TOTP_NOT_ENABLED: "كلمة المرور المؤقتة لمرة واحدة غير مفعلة",
	TWO_FACTOR_NOT_ENABLED: "المصادقة الثنائية غير مفعلة",
	BACKUP_CODES_NOT_ENABLED: "رموز النسخ الاحتياطي غير مفعلة",
	INVALID_BACKUP_CODE: "رمز النسخ الاحتياطي غير صالح",
	INVALID_CODE: "رمز غير صالح",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "محاولات كثيرة جداً. يرجى طلب رمز جديد.",
	INVALID_TWO_FACTOR_COOKIE: "ملف تعريف الارتباط للمصادقة الثنائية غير صالح",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
