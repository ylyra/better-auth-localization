import type { PhoneNumberErrorCodesType } from "../../../types";

export const HI_IN = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "अमान्य फोन नंबर",
	PHONE_NUMBER_EXIST: "फोन नंबर पहले से मौजूद है",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "अमान्य फोन नंबर या पासवर्ड",
	UNEXPECTED_ERROR: "अप्रत्याशित त्रुटि",
	OTP_NOT_FOUND: "OTP नहीं मिला",
	OTP_EXPIRED: "OTP समाप्त हो गया",
	INVALID_OTP: "अमान्य OTP",
	PHONE_NUMBER_NOT_VERIFIED: "फोन नंबर सत्यापित नहीं",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"hi-IN": HI_IN,
} as const;
