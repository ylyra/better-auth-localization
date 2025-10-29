import type { DeviceAuthorizationErrorCodesType } from "../../../types";

export const EL_GR = {
	// Device authorization related errors
	INVALID_DEVICE_CODE: "Μη έγκυρος κωδικός συσκευής",
	EXPIRED_DEVICE_CODE: "Ο κωδικός συσκευής έχει λήξει",
	EXPIRED_USER_CODE: "Ο κωδικός χρήστη έχει λήξει",
	AUTHORIZATION_PENDING: "Εξουσιοδότηση σε αναμονή",
	ACCESS_DENIED: "Πρόσβαση απορρίφθηκε",
	INVALID_USER_CODE: "Μη έγκυρος κωδικός χρήστη",
	DEVICE_CODE_ALREADY_PROCESSED: "Ο κωδικός συσκευής έχει ήδη επεξεργαστεί",
	POLLING_TOO_FREQUENTLY: "Πάρα πολλές ερωτήσεις",
	INVALID_DEVICE_CODE_STATUS: "Μη έγκυρη κατάσταση κωδικού συσκευής",
	AUTHENTICATION_REQUIRED: "Απαιτείται πιστοποίηση",
} satisfies DeviceAuthorizationErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
