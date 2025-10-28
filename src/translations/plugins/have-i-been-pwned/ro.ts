import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const RO_RO = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"Parola pe care ați introdus-o a fost compromisă. Vă rugăm să alegeți o parolă diferită.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
