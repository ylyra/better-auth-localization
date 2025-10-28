import type { EmailOTPErrorCodesType } from "../../../types";

export const ZH_HANT = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "嘗試次數過多",
} satisfies EmailOTPErrorCodesType;

export const ZH_HANS = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "尝试次数过多",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
