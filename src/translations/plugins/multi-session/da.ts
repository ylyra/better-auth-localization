import type { MultiSessionErrorCodesType } from "../../../types";

export const DA_DK = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Ugyldigt sessionstoken",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
