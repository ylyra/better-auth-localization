import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const FA_IR = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"رمز عبوری که وارد کردید به خطر افتاده است. لطفاً رمز عبور دیگری انتخاب کنید.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
