import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const MR_MR = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"तुम्ही प्रविष्ट केलेला पासवर्ड समझौता झाला आहे. कृपया वेगळा पासवर्ड निवडा.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
