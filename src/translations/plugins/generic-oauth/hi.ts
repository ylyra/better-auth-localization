import type { GenericOAuthErrorCodesType } from "../../../types";

export const HI_HI = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "अमान्य OAuth कॉन्फ़िगरेशन",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
