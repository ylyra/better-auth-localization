import type { PhoneNumberErrorCodesType } from "../../../types";

export const DA_DK = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Ugyldigt telefonnummer",
	PHONE_NUMBER_EXIST: "Telefonnummer eksisterer allerede",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Ugyldigt telefonnummer eller adgangskode",
	UNEXPECTED_ERROR: "Uventet fejl",
	OTP_NOT_FOUND: "Engangskode ikke fundet",
	OTP_EXPIRED: "Engangskode udløbet",
	INVALID_OTP: "Ugyldig engangskode",
	PHONE_NUMBER_NOT_VERIFIED: "Telefonnummer ikke verificeret",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
