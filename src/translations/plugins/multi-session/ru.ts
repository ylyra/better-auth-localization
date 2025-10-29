import type { MultiSessionErrorCodesType } from "../../../types";

export const RU_RU = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Неверный токен сессии",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
