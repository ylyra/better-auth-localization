import type { EmailOTPErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "Zu viele Versuche",
} satisfies EmailOTPErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
