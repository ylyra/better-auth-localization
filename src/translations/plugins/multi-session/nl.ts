import type { MultiSessionErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Ongeldig sessietoken",
} satisfies MultiSessionErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
