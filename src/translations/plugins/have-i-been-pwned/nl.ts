import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"Het wachtwoord dat je hebt ingevoerd is gecompromitteerd. Kies een ander wachtwoord.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
	PASSWORD_COMPROMISED:
		"Het wachtwoord dat u heeft ingevoerd is gecompromitteerd. Kies een ander wachtwoord.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
