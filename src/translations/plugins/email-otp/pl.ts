import type { EmailOTPErrorCodesType } from "../../../types";

export const PL_PL = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "Zbyt wiele prób",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
