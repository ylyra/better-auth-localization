import type { TwoFactorErrorCodesType } from "../../../types";

export const DA_DK = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Engangskode ikke aktiveret",
	OTP_HAS_EXPIRED: "Engangskode er udløbet",
	TOTP_NOT_ENABLED: "Tidsbaseret engangskode ikke aktiveret",
	TWO_FACTOR_NOT_ENABLED: "Totrinsgodkendelse ikke aktiveret",
	BACKUP_CODES_NOT_ENABLED: "Backup-koder ikke aktiveret",
	INVALID_BACKUP_CODE: "Ugyldig backup-kode",
	INVALID_CODE: "Ugyldig kode",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "For mange forsøg. Anmod om en ny kode.",
	INVALID_TWO_FACTOR_COOKIE: "Ugyldig totrinsgodkendelse cookie",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
