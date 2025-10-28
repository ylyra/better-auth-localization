import type { AnonymousErrorCodesType } from "../../../types";

export const RO_RO = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Nu s-a putut crea sesiunea",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Utilizatorii anonimi nu se pot conecta din nou anonim",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
