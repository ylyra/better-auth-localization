import type { EmailOTPErrorCodesType } from "../../../types";

export const RO_RO = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "Prea multe încercări",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
