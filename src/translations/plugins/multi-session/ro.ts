import type { MultiSessionErrorCodesType } from "../../../types";

export const RO_RO = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Token de sesiune nevalid",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
