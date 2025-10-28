import type { EmailOTPErrorCodesType } from "../../../types";

export const DA_DK = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "For mange forsøg",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
