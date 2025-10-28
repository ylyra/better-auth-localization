import type { PasskeyErrorCodesType } from "../../../types";

export const EL_GR = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "Η πρόκληση δεν βρέθηκε",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"Δεν έχετε άδεια να καταχωρίσετε αυτό το κλειδί πρόσβασης",
	FAILED_TO_VERIFY_REGISTRATION: "Αποτυχία επαλήθευσης εγγραφής",
	PASSKEY_NOT_FOUND: "Το κλειδί πρόσβασης δεν βρέθηκε",
	AUTHENTICATION_FAILED: "Αποτυχία πιστοποίησης",
	UNABLE_TO_CREATE_SESSION: "Αδυναμία δημιουργίας συνεδρίας",
	FAILED_TO_UPDATE_PASSKEY: "Αποτυχία ενημέρωσης κλειδιού πρόσβασης",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
