import type { AnonymousErrorCodesType } from "../../../types";

export const KO_KR = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "세션을 생성할 수 없습니다",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"익명 사용자는 다시 익명으로 로그인할 수 없습니다",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
