import type { GenericOAuthErrorCodesType } from "../../../types";

export const TR_TR = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Geçersiz OAuth yapılandırması",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
