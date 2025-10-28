import type { PhoneNumberErrorCodesType } from "../../../types";

export const RU_RU = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Неверный номер телефона",
	PHONE_NUMBER_EXIST: "Номер телефона уже существует",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Неверный номер телефона или пароль",
	UNEXPECTED_ERROR: "Неожиданная ошибка",
	OTP_NOT_FOUND: "Код подтверждения не найден",
	OTP_EXPIRED: "Код подтверждения истек",
	INVALID_OTP: "Неверный код подтверждения",
	PHONE_NUMBER_NOT_VERIFIED: "Номер телефона не подтвержден",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
