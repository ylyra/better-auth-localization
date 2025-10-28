import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const RU_RU = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"Пароль, который вы ввели, был скомпрометирован. Пожалуйста, выберите другой пароль.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
