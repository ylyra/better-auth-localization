import { BetterAuthPlugin, Auth } from "better-auth";
import { createAuthMiddleware } from "better-auth/plugins";
import {
	BuiltInLocales,
	LocalizationOptions,
	PartialErrorCodesType,
} from "./types";
import { defaultTranslations, getTranslation } from "./utils/translations";
import { hasBody, isErrorBody } from "./utils/helpers";

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
					// Validate locale exists in our translations
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
