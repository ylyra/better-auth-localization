import type { MultiSessionErrorCodesType } from "../../../types";

export const JA_JP = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "無効なセッショントークン",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
