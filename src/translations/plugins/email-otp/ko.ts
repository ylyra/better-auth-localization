import type { EmailOTPErrorCodesType } from "../../../types";

export const KO_KR = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "시도 횟수가 너무 많습니다",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
