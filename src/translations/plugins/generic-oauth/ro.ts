import type { GenericOAuthErrorCodesType } from "../../../types";

export const RO_RO = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Configurare OAuth nevalidă",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
