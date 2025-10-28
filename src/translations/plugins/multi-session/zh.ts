import type { MultiSessionErrorCodesType } from "../../../types";

export const ZH_HANT = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "無效的會話令牌",
} satisfies MultiSessionErrorCodesType;

export const ZH_HANS = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "无效的会话令牌",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"zh-Hant": ZH_HANT,
	"zh-Hans": ZH_HANS,
} as const;
