import type { MultiSessionErrorCodesType } from "../../../types";

export const AR_SA = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "رمز جلسة غير صالح",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
