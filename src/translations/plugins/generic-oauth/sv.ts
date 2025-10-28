import type { GenericOAuthErrorCodesType } from "../../../types";

export const SV_SE = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Ogiltig OAuth-konfiguration",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
