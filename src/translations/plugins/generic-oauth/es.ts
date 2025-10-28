import type { GenericOAuthErrorCodesType } from "../../../types";

export const ES_ES = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Configuración OAuth inválida",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
