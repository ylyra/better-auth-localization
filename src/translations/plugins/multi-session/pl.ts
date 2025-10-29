import type { MultiSessionErrorCodesType } from "../../../types";

export const PL_PL = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Nieprawidłowy token sesji",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
