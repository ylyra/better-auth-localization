import type { PasskeyErrorCodesType } from "../../../types";

export const MR_IN = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "आव्हान सापडले नाही",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"तुम्हाला ही पासकी नोंदणी करण्याची परवानगी नाही",
	FAILED_TO_VERIFY_REGISTRATION: "नोंदणी सत्यापन अयशस्वी",
	PASSKEY_NOT_FOUND: "पासकी सापडली नाही",
	AUTHENTICATION_FAILED: "प्रमाणीकरण अयशस्वी",
	UNABLE_TO_CREATE_SESSION: "सत्र तयार करू शकत नाही",
	FAILED_TO_UPDATE_PASSKEY: "पासकी अपडेट करणे अयशस्वी",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"mr-IN": MR_IN,
} as const;
