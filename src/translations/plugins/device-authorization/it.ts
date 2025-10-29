import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const IT_IT = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Codice dispositivo non valido",
	EXPIRED_DEVICE_CODE: "Codice dispositivo scaduto",
	EXPIRED_USER_CODE: "Codice utente scaduto",
	AUTHORIZATION_PENDING: "Autorizzazione in sospeso",
	ACCESS_DENIED: "Accesso negato",
	INVALID_USER_CODE: "Codice utente non valido",
	DEVICE_CODE_ALREADY_PROCESSED: "Codice dispositivo già elaborato",
	POLLING_TOO_FREQUENTLY: "Richieste troppo frequenti",
	INVALID_DEVICE_CODE_STATUS: "Stato codice dispositivo non valido",
	AUTHENTICATION_REQUIRED: "Autenticazione richiesta",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
