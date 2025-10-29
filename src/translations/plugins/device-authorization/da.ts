import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const DA_DK = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Ugyldig enhedskode",
	EXPIRED_DEVICE_CODE: "Enhedskode udløbet",
	EXPIRED_USER_CODE: "Brugerkode udløbet",
	AUTHORIZATION_PENDING: "Autorisation afventer",
	ACCESS_DENIED: "Adgang nægtet",
	INVALID_USER_CODE: "Ugyldig brugerkode",
	DEVICE_CODE_ALREADY_PROCESSED: "Enhedskode allerede behandlet",
	POLLING_TOO_FREQUENTLY: "For hyppige forespørgsler",
	INVALID_DEVICE_CODE_STATUS: "Ugyldig enhedskode status",
	AUTHENTICATION_REQUIRED: "Godkendelse påkrævet",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
