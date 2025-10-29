import type { AnonymousErrorCodesType } from "../../../types";

export const TR_TR = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Oturum oluşturulamadı",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonim kullanıcılar tekrar anonim olarak giriş yapamaz",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
