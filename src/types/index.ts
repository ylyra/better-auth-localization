import type { Auth } from "better-auth";

export type ErrorCodesType = Auth["$ERROR_CODES"];
export type PartialErrorCodesType = Partial<ErrorCodesType>;

export type BuiltInLocales = "pt-BR" | "default";

type ExtractCustomLocales<T> = T extends Record<infer K, unknown>
	? Exclude<K, BuiltInLocales>
	: never;

type TranslationsWithAutocomplete<T extends Record<string, unknown>> =
	T extends Record<string, PartialErrorCodesType> ? T : never;

export type SuggestedTranslations<
	TCustomTranslations extends Record<string, unknown>,
> = TranslationsWithAutocomplete<TCustomTranslations> & {
	[K in BuiltInLocales]?: PartialErrorCodesType;
} & {
	[K in ExtractCustomLocales<TCustomTranslations>]: PartialErrorCodesType;
};

export type LocaleProps<
	TCustomTranslations extends Record<string, PartialErrorCodesType>,
> =
	| {
			defaultLocale: BuiltInLocales;
			translations?: SuggestedTranslations<TCustomTranslations>;
	  }
	| {
			defaultLocale: ExtractCustomLocales<TCustomTranslations>;
			translations: SuggestedTranslations<TCustomTranslations>;
	  };

export type ExtraProps<
	TCustomTranslations extends Record<string, PartialErrorCodesType>,
> = {
	fallbackLocale?: BuiltInLocales | ExtractCustomLocales<TCustomTranslations>;
	getLocale?: (
		request: Request,
	) =>
		| BuiltInLocales
		| ExtractCustomLocales<TCustomTranslations>
		| Promise<BuiltInLocales | ExtractCustomLocales<TCustomTranslations>>;
};

export type LocalizationOptions<
	TCustomTranslations extends Record<string, PartialErrorCodesType>,
> = LocaleProps<TCustomTranslations> & ExtraProps<TCustomTranslations>;
