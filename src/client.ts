import type { BetterAuthClientPlugin } from "better-auth";
import type { betterAuthLocalization } from "./index";

type BetterAuthLocalizationPlugin = typeof betterAuthLocalization;

export const betterAuthLocalizationClientPlugin = () => {
	return {
		id: "betterAuthLocalization",
		$InferServerPlugin: {} as ReturnType<BetterAuthLocalizationPlugin>,
	} satisfies BetterAuthClientPlugin;
};
