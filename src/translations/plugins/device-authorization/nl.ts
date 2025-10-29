import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const NL_NL_INFORMAL = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Ongeldige apparaatcode",
	EXPIRED_DEVICE_CODE: "Apparaatcode verlopen",
	EXPIRED_USER_CODE: "Gebruikerscode verlopen",
	AUTHORIZATION_PENDING: "Autorisatie in behandeling",
	ACCESS_DENIED: "Toegang geweigerd",
	INVALID_USER_CODE: "Ongeldige gebruikerscode",
	DEVICE_CODE_ALREADY_PROCESSED: "Apparaatcode al verwerkt",
	POLLING_TOO_FREQUENTLY: "Te frequente polls",
	INVALID_DEVICE_CODE_STATUS: "Ongeldige apparaatcode status",
	AUTHENTICATION_REQUIRED: "Authenticatie vereist",
} satisfies DeviceAuthorizationErrorCodesType;

export const NL_NL_FORMAL = {
	...NL_NL_INFORMAL,
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"nl-NL": NL_NL_INFORMAL,
	"nl-NL-formal": NL_NL_FORMAL,
	"nl-NL-informal": NL_NL_INFORMAL,
} as const;
