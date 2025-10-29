import type { HaveIBeenPwnedErrorCodesType } from "../../../types";

export const KO_KR = {
	// Have I Been Pwned related errors
	PASSWORD_COMPROMISED:
		"입력하신 비밀번호가 유출되었습니다. 다른 비밀번호를 선택해 주세요.",
} satisfies HaveIBeenPwnedErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
