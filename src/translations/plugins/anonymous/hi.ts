import type { AnonymousErrorCodesType } from "../../../types";

export const HI_HI = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "सत्र बनाने में विफल",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"अज्ञात उपयोगकर्ता फिर से अज्ञात रूप से साइन इन नहीं कर सकते",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
