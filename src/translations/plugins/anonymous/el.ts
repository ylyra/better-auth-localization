import type { AnonymousErrorCodesType } from "../../../types";

export const EL_GR = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Δεν ήταν δυνατή η δημιουργία συνεδρίας",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Οι ανώνυμοι χρήστες δεν μπορούν να συνδεθούν ξανά ανώνυμα",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
