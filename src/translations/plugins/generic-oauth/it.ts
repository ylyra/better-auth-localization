import type { GenericOAuthErrorCodesType } from "../../../types";

export const IT_IT = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Configurazione OAuth non valida",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
