import type { MultiSessionErrorCodesType } from "../../../types";

export const HI_HI = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "अमान्य सत्र टोकन",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"hi-HI": HI_HI,
} as const;
