import type { MultiSessionErrorCodesType } from "../../../types";

export const FA_IR = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "توکن نشست نامعتبر",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
