import type { GenericOAuthErrorCodesType } from "../../../types";

export const ID_ID = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Konfigurasi OAuth tidak valid",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
