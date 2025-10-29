import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const DA_DK = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"Adgangskoden du indtastede er blevet kompromitteret. Vælg venligst en anden adgangskode.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
