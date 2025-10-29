import type { EmailOTPErrorCodesType } from "../../../types";

export const IT_IT = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "Troppi tentativi",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
