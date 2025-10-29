import type { AdminErrorCodesType } from "../../../types";

export const JA_JP = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "自分自身を禁止することはできません",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"ユーザーの役割を変更する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "ユーザーを作成する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "ユーザーを一覧表示する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"ユーザーのセッションを一覧表示する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "ユーザーを禁止する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"他のユーザーになりすます権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"ユーザーのセッションを取り消す権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "ユーザーを削除する権限がありません",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"ユーザーのパスワードを設定する権限がありません",
	BANNED_USER: "このアプリケーションから禁止されました",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "ユーザーを取得する権限がありません",
	NO_DATA_TO_UPDATE: "更新するデータがありません",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: "ユーザーを更新する権限がありません",
	YOU_CANNOT_REMOVE_YOURSELF: "自分自身を削除することはできません",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"ja-JP": JA_JP,
} as const;
