import { BetterAuthClientPlugin } from "better-auth";
import type { betterLocalization } from "./index"; // make sure to import the server plugin as a type
 
type BetterLocalizationPlugin = typeof betterLocalization;
 
export const betterLocalizationClientPlugin = () => {
  return {
    id: "betterLocalization",
    $InferServerPlugin: {} as ReturnType<BetterLocalizationPlugin>,
  } satisfies BetterAuthClientPlugin;
};