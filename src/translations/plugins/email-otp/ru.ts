import type { EmailOTPErrorCodesType } from "../../../types";

export const RU_RU = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "Слишком много попыток",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
