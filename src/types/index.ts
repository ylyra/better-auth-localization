import type { Auth } from "better-auth";
import { defaultTranslations } from "../translations";

export type ErrorCodesType = Auth["$ERROR_CODES"];
/**
 * Partial better-auth error codes type for translations
 */
export type PartialErrorCodesType = Partial<ErrorCodesType>;

/**
 * Built-in locales supported by the plugin.
 */
export type BuiltInLocales = keyof typeof defaultTranslations | "default";

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
			/**
			 * The default locale to use for translations
			 * When using a built-in locale, translations are optional since defaults exist
			 */
			defaultLocale: BuiltInLocales;
			/**
			 * Optional translation mappings
			 * Can override built-in translations or add custom locales
			 *
			 * @example Override built-in translations
			 * ```typescript
			 * translations: {
			 *   "pt-BR": { USER_NOT_FOUND: "Mensagem customizada" }
			 * }
			 * ```
			 */
			translations?: SuggestedTranslations<TCustomTranslations>;
	  }
	| {
			/**
			 * The default locale to use for translations
			 * When using a custom locale, translations must be provided
			 */
			defaultLocale: ExtractCustomLocales<TCustomTranslations>;
			/**
			 * Required translation mappings for custom locales
			 * Must include translations for the custom defaultLocale at minimum
			 *
			 * @example Custom locale with translations
			 * ```typescript
			 * translations: {
			 *   "fr": {
			 *     USER_NOT_FOUND: "Utilisateur non trouvé",
			 *     INVALID_PASSWORD: "Mot de passe invalide"
			 *   }
			 * }
			 * ```
			 */
			translations: SuggestedTranslations<TCustomTranslations>;
	  };

export type ExtraProps<
	TCustomTranslations extends Record<string, PartialErrorCodesType>,
> = {
	/**
	 * Fallback locale when translation is not found
	 * @default "default"
	 */
	fallbackLocale?: BuiltInLocales | ExtractCustomLocales<TCustomTranslations>;
	/**
	 * Function to determine locale from request
	 * Can be async and should return a valid locale string
	 *
	 * @param request - The incoming request object
	 * @returns Locale string or Promise resolving to locale string
	 *
	 * @example
	 * ```typescript
	 * getLocale: (request) => request.headers.get('accept-language')?.split(',')[0] || 'en'
	 * ```
	 */
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
