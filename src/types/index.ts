
import type { Auth } from "better-auth";
import type {
	AdminOptions,
	OrganizationOptions,
	TWO_FACTOR_ERROR_CODES,
	USERNAME_ERROR_CODES,
	admin,
	anonymous,
	apiKey,
	deviceAuthorization,
	emailOTP,
	genericOAuth,
	haveIBeenPwned,
	multiSession,
	organization,
	phoneNumber
} from "better-auth/plugins";
import type { passkey } from "better-auth/plugins/passkey";
import type { defaultTranslations } from "../translations";

type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

type RemoveReadonly<T> = {
	-readonly [K in keyof T]: string;
};

type RemoveReadonlyFromUnion<T> = T extends any ? RemoveReadonly<T> : never;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type AuthErrorCodesType = Auth["$ERROR_CODES"]

type OrganizationErrorCodesType = 
	ReturnType<typeof organization<OrganizationOptions>>["$ERROR_CODES"]

type TwoFactorErrorCodesType = typeof TWO_FACTOR_ERROR_CODES

type UsernameErrorCodesType = typeof USERNAME_ERROR_CODES

type AnonymousErrorCodesType = 
	ReturnType<typeof anonymous>["$ERROR_CODES"]

type PhoneNumberErrorCodesType = 
	ReturnType<typeof phoneNumber>["$ERROR_CODES"]

type EmailOTPErrorCodesType = 
	ReturnType<typeof emailOTP>["$ERROR_CODES"]

type GenericOAuthErrorCodesType = 
	ReturnType<typeof genericOAuth>["$ERROR_CODES"]

type AdminErrorCodesType = 
	ReturnType<typeof admin<AdminOptions>>["$ERROR_CODES"]

type ApiKeyErrorCodesType = 
	ReturnType<typeof apiKey>["$ERROR_CODES"]

type DeviceAuthorizationErrorCodesType = 
	ReturnType<typeof deviceAuthorization>["$ERROR_CODES"]

type HaveIBeenPwnedErrorCodesType = 
	ReturnType<typeof haveIBeenPwned>["$ERROR_CODES"]

type MultiSessionErrorCodesType = 
	ReturnType<typeof multiSession>["$ERROR_CODES"]

type PasskeyErrorCodesType = 
	ReturnType<typeof passkey>["$ERROR_CODES"]

export type ErrorCodesType = Partial<UnionToIntersection<
	RemoveReadonlyFromUnion<
		| AuthErrorCodesType
		| OrganizationErrorCodesType
		| TwoFactorErrorCodesType
		| UsernameErrorCodesType
		| AnonymousErrorCodesType
		| PhoneNumberErrorCodesType
		| EmailOTPErrorCodesType
		| GenericOAuthErrorCodesType
		| AdminErrorCodesType
		| ApiKeyErrorCodesType
		| DeviceAuthorizationErrorCodesType
		| HaveIBeenPwnedErrorCodesType
		| MultiSessionErrorCodesType
		| PasskeyErrorCodesType
	>
>>
	/**
 * Partial better-auth error codes type for translations
 */
export type PartialErrorCodesType = Partial<ErrorCodesType>;

/**
 * Built-in locales supported by the plugin.
 */
export type BuiltInLocales = keyof typeof defaultTranslations | "default";

/**
 * Extract custom locales from a translations object
 */
export type ExtractCustomLocales<T> = T extends Record<infer K, any>
	? Exclude<K, BuiltInLocales>
	: never;

export type AvailableLocales<TCustomTranslations> =
	| BuiltInLocales
	| ExtractCustomLocales<TCustomTranslations>;
export type PrettifiedAvailableLocales<TCustomTranslations> = Prettify<
	BuiltInLocales | ExtractCustomLocales<TCustomTranslations>
>;

export type Translations<
	TCustomTranslations extends Record<string, PartialErrorCodesType> = {},
> = {
	[K in BuiltInLocales | keyof TCustomTranslations]?: PartialErrorCodesType;
} & TCustomTranslations;
/**
 * Options for the localization plugin
 */
export type LocalizationOptions<
	TCustomTranslations extends Record<string, PartialErrorCodesType> = {},
> = {
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
	translations?: Translations<TCustomTranslations>;
	/**
	 * The default locale to use for translations
	 * When using a built-in locale, translations are optional since defaults exist
	 */
	defaultLocale: Prettify<PrettifiedAvailableLocales<TCustomTranslations>>;
	/**
	 * Fallback locale when translation is not found
	 * @default "default"
	 */
	fallbackLocale?: Prettify<PrettifiedAvailableLocales<TCustomTranslations>>;
	/**
	 * Function to determine locale from request
	 * Can be async and should return a valid locale string
	 * For server side calls, request is undefined
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
		request: Request | undefined,
	) =>
		| Prettify<PrettifiedAvailableLocales<TCustomTranslations>>
		| Promise<Prettify<PrettifiedAvailableLocales<TCustomTranslations>>>;
};
