import type { PhoneNumberErrorCodesType } from "../../../types";

export const KO_KR = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "유효하지 않은 전화번호",
	PHONE_NUMBER_EXIST: "전화번호가 이미 존재합니다",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "유효하지 않은 전화번호 또는 비밀번호",
	UNEXPECTED_ERROR: "예상치 못한 오류",
	OTP_NOT_FOUND: "인증 코드를 찾을 수 없습니다",
	OTP_EXPIRED: "인증 코드가 만료되었습니다",
	INVALID_OTP: "유효하지 않은 인증 코드",
	PHONE_NUMBER_NOT_VERIFIED: "전화번호가 인증되지 않았습니다",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
