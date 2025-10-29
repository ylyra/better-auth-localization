import type { TwoFactorErrorCodesType } from "../../../types";

export const TR_TR = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "Tek kullanımlık şifre etkin değil",
	OTP_HAS_EXPIRED: "Tek kullanımlık şifre süresi doldu",
	TOTP_NOT_ENABLED: "Zaman tabanlı tek kullanımlık şifre etkin değil",
	TWO_FACTOR_NOT_ENABLED: "İki faktörlü kimlik doğrulama etkin değil",
	BACKUP_CODES_NOT_ENABLED: "Yedek kodlar etkin değil",
	INVALID_BACKUP_CODE: "Geçersiz yedek kod",
	INVALID_CODE: "Geçersiz kod",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"Çok fazla deneme. Lütfen yeni bir kod isteyin.",
	INVALID_TWO_FACTOR_COOKIE: "Geçersiz iki faktörlü kimlik doğrulama çerezi",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
