import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const PL_PL = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"Hasło, które wprowadziłeś, zostało naruszone. Wybierz inne hasło.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
