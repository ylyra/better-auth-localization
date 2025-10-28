import type { EmailOTPErrorCodesType } from "../../../types";

export const JA_JP = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "試行回数が多すぎます",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
