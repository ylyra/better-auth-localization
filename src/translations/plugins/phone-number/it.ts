import type { PhoneNumberErrorCodesType } from "../../../types";

export const IT_IT = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Numero di telefono non valido",
	PHONE_NUMBER_EXIST: "Il numero di telefono esiste già",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Numero di telefono o password non validi",
	UNEXPECTED_ERROR: "Errore imprevisto",
	OTP_NOT_FOUND: "Codice di verifica non trovato",
	OTP_EXPIRED: "Codice di verifica scaduto",
	INVALID_OTP: "Codice di verifica non valido",
	PHONE_NUMBER_NOT_VERIFIED: "Numero di telefono non verificato",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
