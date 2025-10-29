import type { PasskeyErrorCodesType } from "../../../types";

export const HI_IN = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "चुनौती नहीं मिली",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"आपको इस पासकी को पंजीकृत करने की अनुमति नहीं है",
	FAILED_TO_VERIFY_REGISTRATION: "पंजीकरण सत्यापन में विफल",
	PASSKEY_NOT_FOUND: "पासकी नहीं मिली",
	AUTHENTICATION_FAILED: "प्रमाणीकरण विफल",
	UNABLE_TO_CREATE_SESSION: "सत्र बनाने में असमर्थ",
	FAILED_TO_UPDATE_PASSKEY: "पासकी अपडेट करने में विफल",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"hi-IN": HI_IN,
} as const;
