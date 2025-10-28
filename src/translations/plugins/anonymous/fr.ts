import type { AnonymousErrorCodesType } from "../../../types";

export const FR_FR = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Impossible de créer la session",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Les utilisateurs anonymes ne peuvent pas se connecter à nouveau de manière anonyme",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"fr-FR": FR_FR,
} as const;
