import type { GenericOAuthErrorCodesType } from "../../../types";

export const AR_SA = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "تكوين OAuth غير صالح",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"ar-SA": AR_SA,
} as const;
