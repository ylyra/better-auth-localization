import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const SV_SE = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"Lösenordet du angav har komprometterats. Välj ett annat lösenord.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
