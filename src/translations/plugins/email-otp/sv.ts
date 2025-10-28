import type { EmailOTPErrorCodesType } from "../../../types";

export const SV_SE = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "För många försök",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
