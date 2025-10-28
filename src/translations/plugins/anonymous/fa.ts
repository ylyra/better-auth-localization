import type { AnonymousErrorCodesType } from "../../../types";

export const FA_IR = {
	// Anonymous related errors
	COULD_NOT_CREATE_SESSION: "نشست ایجاد نشد",
	ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY:
		"کاربران ناشناس نمی‌توانند دوباره به صورت ناشناس وارد شوند",
} satisfies AnonymousErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
