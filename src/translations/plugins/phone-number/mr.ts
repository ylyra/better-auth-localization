import type { PhoneNumberErrorCodesType } from "../../../types";

export const MR_IN = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "अवैध फोन नंबर",
	PHONE_NUMBER_EXIST: "फोन नंबर आधीपासून अस्तित्वात आहे",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "अवैध फोन नंबर किंवा पासवर्ड",
	UNEXPECTED_ERROR: "अनपेक्षित त्रुटी",
	OTP_NOT_FOUND: "OTP सापडले नाही",
	OTP_EXPIRED: "OTP कालबाह्य झाले",
	INVALID_OTP: "अवैध OTP",
	PHONE_NUMBER_NOT_VERIFIED: "फोन नंबर सत्यापित नाही",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"mr-IN": MR_IN,
} as const;
