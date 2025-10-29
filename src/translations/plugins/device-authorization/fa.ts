import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const FA_IR = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "کد دستگاه نامعتبر",
	EXPIRED_DEVICE_CODE: "کد دستگاه منقضی شده",
	EXPIRED_USER_CODE: "کد کاربر منقضی شده",
	AUTHORIZATION_PENDING: "مجوز در انتظار",
	ACCESS_DENIED: "دسترسی رد شد",
	INVALID_USER_CODE: "کد کاربر نامعتبر",
	DEVICE_CODE_ALREADY_PROCESSED: "کد دستگاه قبلاً پردازش شده",
	POLLING_TOO_FREQUENTLY: "درخواست‌های بیش از حد مکرر",
	INVALID_DEVICE_CODE_STATUS: "وضعیت کد دستگاه نامعتبر",
	AUTHENTICATION_REQUIRED: "احراز هویت مورد نیاز",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
