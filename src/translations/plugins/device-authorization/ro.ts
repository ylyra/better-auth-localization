import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const RO_RO = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Cod dispozitiv invalid",
	EXPIRED_DEVICE_CODE: "Cod dispozitiv expirat",
	EXPIRED_USER_CODE: "Cod utilizator expirat",
	AUTHORIZATION_PENDING: "Autorizare în așteptare",
	ACCESS_DENIED: "Acces refuzat",
	INVALID_USER_CODE: "Cod utilizator invalid",
	DEVICE_CODE_ALREADY_PROCESSED: "Cod dispozitiv deja procesat",
	POLLING_TOO_FREQUENTLY: "Interogări prea frecvente",
	INVALID_DEVICE_CODE_STATUS: "Status cod dispozitiv invalid",
	AUTHENTICATION_REQUIRED: "Autentificare necesară",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
