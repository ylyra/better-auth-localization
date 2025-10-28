import type { EmailOTPErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "Te veel pogingen",
} satisfies EmailOTPErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
