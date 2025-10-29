import type { MultiSessionErrorCodesType } from "../../../types";

export const ES_ES = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Token de sesión inválido",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
