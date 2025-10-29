import type { MultiSessionErrorCodesType } from "../../../types";

export const EL_GR = {
	// Multi session related errors
	INVALID_SESSION_TOKEN: "Μη έγκυρο token συνεδρίας",
} satisfies MultiSessionErrorCodesType;

export const LOCALES = {
	"el-GR": EL_GR,
} as const;
