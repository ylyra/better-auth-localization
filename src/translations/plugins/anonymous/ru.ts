import type { AnonymousErrorCodesType } from "../../../types";

export const RU_RU = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Не удалось создать сессию",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Анонимные пользователи не могут войти снова анонимно",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
