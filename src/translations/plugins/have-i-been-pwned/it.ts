import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const IT_IT = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"La password che hai inserito è stata compromessa. Scegli una password diversa.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
