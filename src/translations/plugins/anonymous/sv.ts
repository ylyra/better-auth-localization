import type { AnonymousErrorCodesType } from "../../../types";

export const SV_SE = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Kunde inte skapa session",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonyma användare kan inte logga in igen anonymt",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"sv-SE": SV_SE,
} as const;
