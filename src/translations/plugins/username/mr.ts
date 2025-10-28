import type { UsernameErrorCodesType } from "../../../types";

export const MR_IN = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "अवैध वापरकर्ता नाव किंवा पासवर्ड",
	USERNAME_IS_ALREADY_TAKEN:
		"वापरकर्ता नाव आधीपासून वापरले आहे. कृपया दुसरे नाव वापरा.",
	USERNAME_TOO_SHORT: "वापरकर्ता नाव खूप लहान आहे",
	USERNAME_TOO_LONG: "वापरकर्ता नाव खूप मोठे आहे",
	INVALID_USERNAME: "अवैध वापरकर्ता नाव",
	INVALID_DISPLAY_USERNAME: "अवैध प्रदर्शन नाव",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"mr-IN": MR_IN,
} as const;
