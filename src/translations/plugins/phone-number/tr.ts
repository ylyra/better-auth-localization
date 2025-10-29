import type { PhoneNumberErrorCodesType } from "../../../types";

export const TR_TR = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Geçersiz telefon numarası",
	PHONE_NUMBER_EXIST: "Telefon numarası zaten mevcut",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Geçersiz telefon numarası veya şifre",
	UNEXPECTED_ERROR: "Beklenmeyen hata",
	OTP_NOT_FOUND: "Doğrulama kodu bulunamadı",
	OTP_EXPIRED: "Doğrulama kodu süresi doldu",
	INVALID_OTP: "Geçersiz doğrulama kodu",
	PHONE_NUMBER_NOT_VERIFIED: "Telefon numarası doğrulanmadı",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
