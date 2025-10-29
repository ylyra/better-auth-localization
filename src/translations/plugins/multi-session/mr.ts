import type { MultiSessionErrorCodesType } from "../../../types";

export const MR_MR = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "अवैध सत्र टोकन",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
