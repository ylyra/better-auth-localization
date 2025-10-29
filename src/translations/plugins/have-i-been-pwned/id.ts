import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const ID_ID = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"Kata sandi yang Anda masukkan telah dikompromikan. Silakan pilih kata sandi yang berbeda.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
