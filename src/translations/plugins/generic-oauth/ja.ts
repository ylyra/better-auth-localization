import type { GenericOAuthErrorCodesType } from "../../../types";

export const JA_JP = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "無効なOAuth設定",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
