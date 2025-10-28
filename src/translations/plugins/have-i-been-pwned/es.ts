import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const ES_ES = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"La contraseña que ingresaste ha sido comprometida. Por favor, elige una contraseña diferente.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
