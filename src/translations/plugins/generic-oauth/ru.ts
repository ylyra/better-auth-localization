import type { GenericOAuthErrorCodesType } from "../../../types";

export const RU_RU = {
	// Generic OAuth related errors
	INVALID_OAUTH_CONFIGURATION: "Неверная конфигурация OAuth",
} satisfies GenericOAuthErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
