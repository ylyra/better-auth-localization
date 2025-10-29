import type { EmailOTPErrorCodesType } from "../../../types";

export const HI_HI = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "बहुत अधिक प्रयास",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
