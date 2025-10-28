import type { EmailOTPErrorCodesType } from "../../../types";

export const FA_IR = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "تلاش‌های بیش از حد",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
