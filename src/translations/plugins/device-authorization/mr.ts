import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const MR_IN = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "अवैध डिव्हाइस कोड",
	EXPIRED_DEVICE_CODE: "डिव्हाइस कोड कालबाह्य झाले",
	EXPIRED_USER_CODE: "वापरकर्ता कोड कालबाह्य झाले",
	AUTHORIZATION_PENDING: "अधिकृतता प्रलंबित",
	ACCESS_DENIED: "प्रवेश नाकारले",
	INVALID_USER_CODE: "अवैध वापरकर्ता कोड",
	DEVICE_CODE_ALREADY_PROCESSED: "डिव्हाइस कोड आधीच प्रक्रिया केले",
	POLLING_TOO_FREQUENTLY: "खूप वेळा विचारणे",
	INVALID_DEVICE_CODE_STATUS: "अवैध डिव्हाइस कोड स्थिती",
	AUTHENTICATION_REQUIRED: "प्रमाणीकरण आवश्यक",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"mr-IN": MR_IN,
} as const;
