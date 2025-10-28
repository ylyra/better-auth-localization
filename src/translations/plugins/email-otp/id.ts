import type { EmailOTPErrorCodesType } from "../../../types";

export const ID_ID = {
	// Email OTP related errors
	TOO_MANY_ATTEMPTS: "Terlalu banyak percobaan",
} satisfies EmailOTPErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
