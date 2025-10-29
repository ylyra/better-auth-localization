import type { MultiSessionErrorCodesType } from "../../../types";

export const TR_TR = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Geçersiz oturum belirteci",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
