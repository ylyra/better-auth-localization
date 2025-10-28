import type { EmailOTPErrorCodesType } from "../../../types";

export const EL_GR = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "Πάρα πολλές προσπάθειες",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
