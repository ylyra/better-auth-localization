import type { PasskeyErrorCodesType } from "../../../types";

export const IT_IT = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Sfida non trovata",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Non sei autorizzato a registrare questa chiave di accesso",
	FAILED_TO_VERIFY_REGISTRATION: "Verifica della registrazione fallita",
	PASSKEY_NOT_FOUND: "Chiave di accesso non trovata",
	AUTHENTICATION_FAILED: "Autenticazione fallita",
	UNABLE_TO_CREATE_SESSION: "Impossibile creare la sessione",
	FAILED_TO_UPDATE_PASSKEY: "Aggiornamento della chiave di accesso fallito",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
