import type { AnonymousErrorCodesType } from "../../../types";

export const ES_ES = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "No se pudo crear la sesión",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Los usuarios anónimos no pueden iniciar sesión nuevamente como anónimos",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
