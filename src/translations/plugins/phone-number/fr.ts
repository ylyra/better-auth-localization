import type { PhoneNumberErrorCodesType } from "../../../types";

export const FR_FR = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Numéro de téléphone invalide",
	PHONE_NUMBER_EXIST: "Le numéro de téléphone existe déjà",
	INVALID_PHONE_NUMBER_OR_PASSWORD:
		"Numéro de téléphone ou mot de passe invalide",
	UNEXPECTED_ERROR: "Erreur inattendue",
	OTP_NOT_FOUND: "Code de vérification introuvable",
	OTP_EXPIRED: "Code de vérification expiré",
	INVALID_OTP: "Code de vérification invalide",
	PHONE_NUMBER_NOT_VERIFIED: "Numéro de téléphone non vérifié",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
