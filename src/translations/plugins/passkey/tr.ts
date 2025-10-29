import type { PasskeyErrorCodesType } from "../../../types";

export const TR_TR = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Meydan okuma bulunamadı",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Bu erişim anahtarını kaydetme izniniz yok",
	FAILED_TO_VERIFY_REGISTRATION: "Kayıt doğrulaması başarısız",
	PASSKEY_NOT_FOUND: "Erişim anahtarı bulunamadı",
	AUTHENTICATION_FAILED: "Kimlik doğrulama başarısız",
	UNABLE_TO_CREATE_SESSION: "Oturum oluşturulamadı",
	FAILED_TO_UPDATE_PASSKEY: "Erişim anahtarı güncelleme başarısız",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
