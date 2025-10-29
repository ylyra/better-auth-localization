import type { AnonymousErrorCodesType } from "../../../types";

export const IT_IT = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Impossibile creare la sessione",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Gli utenti anonimi non possono accedere nuovamente in modo anonimo",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"it-IT": IT_IT,
} as const;
