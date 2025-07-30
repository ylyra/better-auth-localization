import { BetterAuthPlugin, Auth } from "better-auth";
import { createAuthMiddleware } from "better-auth/plugins";
import {
	BuiltInLocales,
	LocalizationOptions,
	PartialErrorCodesType,
} from "./types";
import { getTranslation } from "./utils/translations";
import { hasBody, isErrorBody } from "./utils/helpers";
import { defaultTranslations } from "./translations";

/**
 * Better Auth localization plugin
 *
 * @param options - The options for the plugin
 * @param options.defaultLocale - Default locale to use (available options: "default" | "pt-BR").
 * @param options.fallbackLocale - Fallback locale to use when the locale is not found in the translations. Default: "default"
 * @param options.translations - Add custom locales or override the current translations
 * @param options.getLocale - Function to get the locale from a request
 *
 * @example
 * ```typescript
 * betterLocalization({
 *   defaultLocale: "pt-BR",
 *   fallbackLocale: "default"
 * })
 * ```
 *
 * @example
 * ```typescript
 * betterLocalization({
 *   defaultLocale: "es-ES",
 *   fallbackLocale: "default",
 *   translations: {
 *     "es-ES": {
 *       USER_NOT_FOUND: "Usuario no encontrado",
 *     },
 *     "pt-BR": {
 *       USER_NOT_FOUND: "Overwrite the available pt-BR translation",
 *     }
 *   }
 * })
 * ```
 *
 * @example Dynamic locale detection
 * ```typescript
 * betterLocalization({
 *   defaultLocale: "pt-BR",
 *   fallbackLocale: "default",
 *   getLocale: async (request) => {
 *     // Get from cookie, header, or database
 *     return request.headers.get('x-locale') || 'pt-BR';
 *   }
 * })
 * ```
 */
export const betterLocalization = <
	TCustomTranslations extends Record<string, PartialErrorCodesType>,
>(
	options: LocalizationOptions<
		TCustomTranslations extends Record<string, PartialErrorCodesType>
			? TCustomTranslations
			: never
	>,
) => {
	const {
		defaultLocale = "default",
		fallbackLocale = "default",
		translations,
		getLocale,
	} = options;

	const mergedTranslations = {
		...defaultTranslations,
		...translations,
	} as Record<
		BuiltInLocales | keyof TCustomTranslations,
		PartialErrorCodesType
	>;

	const resolveLocale = getLocale
		? async (request: Request) => {
				try {
					const locale = await getLocale(request);
					if (locale in mergedTranslations || locale === "default") {
						return locale;
					}

					console.warn(
						`[better-localization] Locale "${locale}" not found in translations. ` +
							`Available locales: ${Object.keys(mergedTranslations).join(
								", ",
							)}. ` +
							`Falling back to "${defaultLocale}"`,
					);
					return defaultLocale;
				} catch (error) {
					console.error(
						`[better-localization] Error resolving locale: ${error}`,
					);
					return defaultLocale;
				}
			}
		: () => defaultLocale;

	return {
		id: "better-localization",
		hooks: {
			after: [
				{
					matcher: () => true,
					handler: createAuthMiddleware(async (ctx) => {
						const { request } = ctx;

						if (!request) return;

						const { returned } = ctx.context;

						if (!hasBody(returned) || !isErrorBody(returned.body)) return;

						const { body } = returned;

						const locale = await resolveLocale(request);

						if (locale === "default") return;

						const translatedMessage = getTranslation(
							body.code,
							locale,
							fallbackLocale,
							mergedTranslations,
							body.message,
						);

						if (translatedMessage) {
							body.message = translatedMessage;
						}
					}),
				},
			],
		},
	} satisfies BetterAuthPlugin;
};

export type {
	LocalizationOptions,
	BuiltInLocales,
	PartialErrorCodesType,
} from "./types";
