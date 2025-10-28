import type { PhoneNumberErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Ungültige Telefonnummer",
	PHONE_NUMBER_EXIST: "Telefonnummer existiert bereits",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Ungültige Telefonnummer oder Passwort",
	UNEXPECTED_ERROR: "Unerwarteter Fehler",
	OTP_NOT_FOUND: "Einmalpasswort nicht gefunden",
	OTP_EXPIRED: "Einmalpasswort abgelaufen",
	INVALID_OTP: "Ungültiges Einmalpasswort",
	PHONE_NUMBER_NOT_VERIFIED: "Telefonnummer nicht verifiziert",
} satisfies PhoneNumberErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
