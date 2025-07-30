import { PT_BR } from "../translations";
import type {
	BuiltInLocales,
	ErrorCodesType,
	PartialErrorCodesType,
} from "../types";

export const defaultTranslations: Record<
	Exclude<BuiltInLocales, "default">,
	ErrorCodesType
> = {
	"pt-BR": PT_BR,
};

export const getTranslation = <
	TCustomTranslations extends Record<string, PartialErrorCodesType>,
>(
	code: keyof ErrorCodesType,
	locale: BuiltInLocales | keyof TCustomTranslations,
	fallbackLocale: BuiltInLocales | keyof TCustomTranslations,
	mergedTranslations: Record<
		BuiltInLocales | keyof TCustomTranslations,
		PartialErrorCodesType
	>,
	originalMessage?: string,
) => {
	if (locale === "default") return originalMessage || code;

	const translation = mergedTranslations[locale]?.[code];
	if (translation) return translation;

	if (fallbackLocale !== locale && fallbackLocale !== "default") {
		const fallbackTranslation = mergedTranslations[fallbackLocale]?.[code];
		if (fallbackTranslation) return fallbackTranslation;
	}

	return originalMessage || code;
};
