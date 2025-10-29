import type { PasskeyErrorCodesType } from "../../../types";

export const RO_RO = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Provocarea nu a fost găsită",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Nu aveți permisiunea să înregistrați această cheie de acces",
	FAILED_TO_VERIFY_REGISTRATION: "Verificarea înregistrării a eșuat",
	PASSKEY_NOT_FOUND: "Cheia de acces nu a fost găsită",
	AUTHENTICATION_FAILED: "Autentificarea a eșuat",
	UNABLE_TO_CREATE_SESSION: "Nu se poate crea sesiunea",
	FAILED_TO_UPDATE_PASSKEY: "Actualizarea cheii de acces a eșuat",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
