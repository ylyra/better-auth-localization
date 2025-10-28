import type { PasskeyErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Uitdaging niet gevonden",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Je hebt geen toestemming om deze toegangssleutel te registreren",
	FAILED_TO_VERIFY_REGISTRATION: "Registratieverificatie mislukt",
	PASSKEY_NOT_FOUND: "Toegangssleutel niet gevonden",
	AUTHENTICATION_FAILED: "Authenticatie mislukt",
	UNABLE_TO_CREATE_SESSION: "Kan geen sessie maken",
	FAILED_TO_UPDATE_PASSKEY: "Toegangssleutel bijwerken mislukt",
} satisfies PasskeyErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
