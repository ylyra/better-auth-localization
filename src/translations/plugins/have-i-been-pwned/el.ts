import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const EL_GR = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"Ο κωδικός που εισήγαγες έχει παραβιαστεί. Παρακαλώ διάλεξε έναν διαφορετικό κωδικό.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
