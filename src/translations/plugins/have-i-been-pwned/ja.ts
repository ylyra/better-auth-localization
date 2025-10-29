import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const JA_JP = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"入力したパスワードは侵害されています。別のパスワードを選択してください。",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
