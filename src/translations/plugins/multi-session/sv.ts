import type { MultiSessionErrorCodesType } from "../../../types";

export const SV_SE = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Ogiltigt sessionstoken",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
