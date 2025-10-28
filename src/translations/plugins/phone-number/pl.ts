import type { PhoneNumberErrorCodesType } from "../../../types";

export const PL_PL = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Nieprawidłowy numer telefonu",
	PHONE_NUMBER_EXIST: "Numer telefonu już istnieje",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Nieprawidłowy numer telefonu lub hasło",
	UNEXPECTED_ERROR: "Nieoczekiwany błąd",
	OTP_NOT_FOUND: "Kod weryfikacyjny nie znaleziony",
	OTP_EXPIRED: "Kod weryfikacyjny wygasł",
	INVALID_OTP: "Nieprawidłowy kod weryfikacyjny",
	PHONE_NUMBER_NOT_VERIFIED: "Numer telefonu nie został zweryfikowany",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
