import type { AnonymousErrorCodesType } from "../../../types";

export const ID_ID = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "Tidak dapat membuat sesi",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"Pengguna anonim tidak dapat masuk lagi secara anonim",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
