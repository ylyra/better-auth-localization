import type { MultiSessionErrorCodesType } from "../../../types";

export const IT_IT = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Token di sessione non valido",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
