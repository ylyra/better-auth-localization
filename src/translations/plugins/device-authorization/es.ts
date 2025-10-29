import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const ES_ES = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Código de dispositivo inválido",
	EXPIRED_DEVICE_CODE: "Código de dispositivo expirado",
	EXPIRED_USER_CODE: "Código de usuario expirado",
	AUTHORIZATION_PENDING: "Autorización pendiente",
	ACCESS_DENIED: "Acceso denegado",
	INVALID_USER_CODE: "Código de usuario inválido",
	DEVICE_CODE_ALREADY_PROCESSED: "Código de dispositivo ya procesado",
	POLLING_TOO_FREQUENTLY: "Consultas demasiado frecuentes",
	INVALID_DEVICE_CODE_STATUS: "Estado del código de dispositivo inválido",
	AUTHENTICATION_REQUIRED: "Autenticación requerida",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
