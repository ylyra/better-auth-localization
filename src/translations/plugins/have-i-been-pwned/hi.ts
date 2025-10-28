import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const HI_HI = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"आपने जो पासवर्ड दर्ज किया है वह समझौता हो गया है। कृपया एक अलग पासवर्ड चुनें।",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
