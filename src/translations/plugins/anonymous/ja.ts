import type { AnonymousErrorCodesType } from "../../../types";

export const JA_JP = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "セッションを作成できませんでした",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"匿名ユーザーは再度匿名でサインインできません",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
