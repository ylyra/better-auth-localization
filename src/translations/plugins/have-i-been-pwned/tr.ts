import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const TR_TR = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"Girdiğiniz şifre tehlikeye girmiş. Lütfen farklı bir şifre seçin.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
