import type { EmailOTPErrorCodesType } from "../../../types";

export const AR_SA = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "محاولات كثيرة جداً",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
