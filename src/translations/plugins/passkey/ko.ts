import type { PasskeyErrorCodesType } from "../../../types";

export const KO_KR = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "챌린지를 찾을 수 없습니다",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"이 패스키를 등록할 권한이 없습니다",
	FAILED_TO_VERIFY_REGISTRATION: "등록 확인에 실패했습니다",
	PASSKEY_NOT_FOUND: "패스키를 찾을 수 없습니다",
	AUTHENTICATION_FAILED: "인증에 실패했습니다",
	UNABLE_TO_CREATE_SESSION: "세션을 생성할 수 없습니다",
	FAILED_TO_UPDATE_PASSKEY: "패스키 업데이트에 실패했습니다",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"ko-KR": KO_KR,
} as const;
