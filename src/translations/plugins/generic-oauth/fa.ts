import type { GenericOAuthErrorCodesType } from "../../../types";

export const FA_IR = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "پیکربندی OAuth نامعتبر",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
