import type { TwoFactorErrorCodesType } from "../../../types";

export const RU_RU = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Одноразовый пароль не включен",
	OTP_HAS_EXPIRED: "Одноразовый пароль истек",
	TOTP_NOT_ENABLED: "Временный одноразовый пароль не включен",
	TWO_FACTOR_NOT_ENABLED: "Двухфакторная аутентификация не включена",
	BACKUP_CODES_NOT_ENABLED: "Резервные коды не включены",
	INVALID_BACKUP_CODE: "Неверный резервный код",
	INVALID_CODE: "Неверный код",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Слишком много попыток. Запросите новый код.",
	INVALID_TWO_FACTOR_COOKIE: "Неверный cookie двухфакторной аутентификации",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
