import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"Das Passwort, das du eingegeben hast, wurde kompromittiert. Bitte wähle ein anderes Passwort.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
	PASSWORD_COMPROMISED:
		"Das Passwort, das Sie eingegeben haben, wurde kompromittiert. Bitte wählen Sie ein anderes Passwort.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
