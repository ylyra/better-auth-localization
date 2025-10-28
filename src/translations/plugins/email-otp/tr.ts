import type { EmailOTPErrorCodesType } from "../../../types";

export const TR_TR = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "Çok fazla deneme",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
