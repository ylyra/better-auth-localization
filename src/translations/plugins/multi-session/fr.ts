import type { MultiSessionErrorCodesType } from "../../../types";

export const FR_FR = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Token de session invalide",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
