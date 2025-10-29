import type { EmailOTPErrorCodesType } from "../../../types";

export const FR_FR = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "Trop de tentatives",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
