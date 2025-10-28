import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const AR_SA = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"كلمة المرور التي أدخلتها تم اختراقها. يرجى اختيار كلمة مرور مختلفة.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
