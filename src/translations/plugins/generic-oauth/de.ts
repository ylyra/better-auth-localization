import type { GenericOAuthErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Ungültige OAuth-Konfiguration",
} satisfies GenericOAuthErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
