import type { TwoFactorErrorCodesType } from "../../../types";

export const PL_PL = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Hasło jednorazowe nie włączone",
	OTP_HAS_EXPIRED: "Hasło jednorazowe wygasło",
	TOTP_NOT_ENABLED: "Czasowe hasło jednorazowe nie włączone",
	TWO_FACTOR_NOT_ENABLED: "Uwierzytelnianie dwuskładnikowe nie włączone",
	BACKUP_CODES_NOT_ENABLED: "Kody zapasowe nie włączone",
	INVALID_BACKUP_CODE: "Nieprawidłowy kod zapasowy",
	INVALID_CODE: "Nieprawidłowy kod",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "Zbyt wiele prób. Poproś o nowy kod.",
	INVALID_TWO_FACTOR_COOKIE:
		"Nieprawidłowy cookie uwierzytelniania dwuskładnikowego",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
