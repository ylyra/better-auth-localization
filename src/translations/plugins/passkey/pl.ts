import type { PasskeyErrorCodesType } from "../../../types";

export const PL_PL = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Wyzwanie nie znalezione",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Nie masz uprawnień do rejestracji tego klucza dostępu",
	FAILED_TO_VERIFY_REGISTRATION: "Weryfikacja rejestracji nie powiodła się",
	PASSKEY_NOT_FOUND: "Klucz dostępu nie znaleziony",
	AUTHENTICATION_FAILED: "Uwierzytelnienie nie powiodło się",
	UNABLE_TO_CREATE_SESSION: "Nie można utworzyć sesji",
	FAILED_TO_UPDATE_PASSKEY: "Aktualizacja klucza dostępu nie powiodła się",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"pl-PL": PL_PL,
} as const;
