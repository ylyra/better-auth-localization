import type { PasskeyErrorCodesType } from "../../../types";

export const JA_JP = {
	// Passkey related errors
	CHALLENGE_NOT_FOUND: "チャレンジが見つかりません",
	YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY:
		"このパスキーを登録する権限がありません",
	FAILED_TO_VERIFY_REGISTRATION: "登録の検証に失敗しました",
	PASSKEY_NOT_FOUND: "パスキーが見つかりません",
	AUTHENTICATION_FAILED: "認証に失敗しました",
	UNABLE_TO_CREATE_SESSION: "セッションを作成できません",
	FAILED_TO_UPDATE_PASSKEY: "パスキーの更新に失敗しました",
} satisfies PasskeyErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
