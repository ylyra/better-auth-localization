import type { AnonymousErrorCodesType } from "../../../types";

export const MR_MR = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "सत्र तयार करण्यात अयशस्वी",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"अज्ञात वापरकर्ते पुन्हा अज्ञात म्हणून साइन इन करू शकत नाहीत",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
