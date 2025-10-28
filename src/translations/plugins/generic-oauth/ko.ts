import type { GenericOAuthErrorCodesType } from "../../../types";

export const KO_KR = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "유효하지 않은 OAuth 구성",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
