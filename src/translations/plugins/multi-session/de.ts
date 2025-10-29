import type { MultiSessionErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Ungültiges Sitzungstoken",
} satisfies MultiSessionErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
