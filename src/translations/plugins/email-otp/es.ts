import type { EmailOTPErrorCodesType } from "../../../types";

export const ES_ES = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "Demasiados intentos",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
