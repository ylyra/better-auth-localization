import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const ZH_HANT = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED: "您輸入的密碼已被洩露。請選擇不同的密碼。",
} satisfies HaveIBeenPwnedErrorCodesType;

export const ZH_HANS = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED: "您输入的密码已被泄露。请选择不同的密码。",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
