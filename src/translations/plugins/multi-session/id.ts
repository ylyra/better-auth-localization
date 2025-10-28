import type { MultiSessionErrorCodesType } from "../../../types";

export const ID_ID = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Token sesi tidak valid",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
