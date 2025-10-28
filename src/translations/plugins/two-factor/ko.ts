import type { TwoFactorErrorCodesType } from "../../../types";

export const KO_KR = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "일회용 비밀번호가 활성화되지 않음",
	OTP_HAS_EXPIRED: "일회용 비밀번호가 만료됨",
	TOTP_NOT_ENABLED: "시간 기반 일회용 비밀번호가 활성화되지 않음",
	TWO_FACTOR_NOT_ENABLED: "2단계 인증이 활성화되지 않음",
	BACKUP_CODES_NOT_ENABLED: "백업 코드가 활성화되지 않음",
	INVALID_BACKUP_CODE: "유효하지 않은 백업 코드",
	INVALID_CODE: "유효하지 않은 코드",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE:
		"시도 횟수가 너무 많습니다. 새 코드를 요청하세요.",
	INVALID_TWO_FACTOR_COOKIE: "유효하지 않은 2단계 인증 쿠키",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
