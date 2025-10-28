import type { PasskeyErrorCodesType } from "../../../types";

export const FR_FR = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Défi introuvable",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Vous n'êtes pas autorisé à enregistrer cette clé d'accès",
	FAILED_TO_VERIFY_REGISTRATION: "Échec de la vérification de l'enregistrement",
	PASSKEY_NOT_FOUND: "Clé d'accès introuvable",
	AUTHENTICATION_FAILED: "Échec de l'authentification",
	UNABLE_TO_CREATE_SESSION: "Impossible de créer la session",
	FAILED_TO_UPDATE_PASSKEY: "Échec de la mise à jour de la clé d'accès",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
