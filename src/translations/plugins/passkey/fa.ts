import type { PasskeyErrorCodesType } from "../../../types";

export const FA_IR = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "چالش یافت نشد",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"شما مجاز به ثبت این کلید دسترسی نیستید",
	FAILED_TO_VERIFY_REGISTRATION: "تأیید ثبت نام با شکست مواجه شد",
	PASSKEY_NOT_FOUND: "کلید دسترسی یافت نشد",
	AUTHENTICATION_FAILED: "احراز هویت با شکست مواجه شد",
	UNABLE_TO_CREATE_SESSION: "قادر به ایجاد جلسه نیست",
	FAILED_TO_UPDATE_PASSKEY: "به‌روزرسانی کلید دسترسی با شکست مواجه شد",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
