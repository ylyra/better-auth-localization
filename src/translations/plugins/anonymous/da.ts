import type { AnonymousErrorCodesType } from "../../../types";

export const DA_DK = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Kunne ikke oprette session",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Anonyme brugere kan ikke logge ind igen anonymt",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
