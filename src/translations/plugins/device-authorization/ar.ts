import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const AR_SA = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "رمز الجهاز غير صالح",
	EXPIRED_DEVICE_CODE: "رمز الجهاز منتهي الصلاحية",
	EXPIRED_USER_CODE: "رمز المستخدم منتهي الصلاحية",
	AUTHORIZATION_PENDING: "التفويض معلق",
	ACCESS_DENIED: "تم رفض الوصول",
	INVALID_USER_CODE: "رمز المستخدم غير صالح",
	DEVICE_CODE_ALREADY_PROCESSED: "رمز الجهاز تم معالجته بالفعل",
	POLLING_TOO_FREQUENTLY: "الاستعلامات متكررة جداً",
	INVALID_DEVICE_CODE_STATUS: "حالة رمز الجهاز غير صالحة",
	AUTHENTICATION_REQUIRED: "المصادقة مطلوبة",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
