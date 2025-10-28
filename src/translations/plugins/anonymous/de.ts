import type { AnonymousErrorCodesType } from "../../../types";

export const DE_DE_INFORMAL = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Sitzung konnte nicht erstellt werden",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonyme Benutzer können sich nicht erneut anonym anmelden",
} satisfies AnonymousErrorCodesType;

export const DE_DE_FORMAL = {
	...DE_DE_INFORMAL,
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonyme Benutzer können sich nicht erneut anonym anmelden",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"de-DE": DE_DE_INFORMAL,
	"de-DE-formal": DE_DE_FORMAL,
	"de-DE-informal": DE_DE_INFORMAL,
} as const;
