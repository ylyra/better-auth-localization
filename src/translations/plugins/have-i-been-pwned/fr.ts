import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const FR_FR = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"Le mot de passe que vous avez saisi a été compromis. Veuillez choisir un mot de passe différent.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
