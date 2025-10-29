import type { UsernameErrorCodesType } from "../../../types";

export const EL_GR = {
	// Username related errors
	INVALID_USERNAME_OR_PASSWORD: "Μη έγκυρο όνομα χρήστη ή κωδικός πρόσβασης",
	USERNAME_IS_ALREADY_TAKEN:
		"Το όνομα χρήστη χρησιμοποιείται ήδη. Παρακαλώ δοκιμάστε άλλο.",
	USERNAME_TOO_SHORT: "Το όνομα χρήστη είναι πολύ σύντομο",
	USERNAME_TOO_LONG: "Το όνομα χρήστη είναι πολύ μακρύ",
	INVALID_USERNAME: "Μη έγκυρο όνομα χρήστη",
	INVALID_DISPLAY_USERNAME: "Μη έγκυρο όνομα εμφάνισης",
} satisfies UsernameErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
