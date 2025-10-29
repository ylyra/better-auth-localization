import type { MultiSessionErrorCodesType } from "../../../types";

export const KO_KR = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "유효하지 않은 세션 토큰",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
