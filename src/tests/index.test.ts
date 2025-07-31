import { betterAuth } from "better-auth";
import { describe, expect, it } from "vitest";
import { localization } from "../index";

describe("localization", () => {
	describe("using built-in locale", () => {
		it("initializes without errors", () => {
			expect(() => {
				betterAuth({
					plugins: [
						localization({
							defaultLocale: "pt-BR",
						}),
					],
				});
			}).not.toThrow();
		});
	});

	describe("using custom locale", () => {
		it("initializes without errors", () => {
			expect(() => {
				betterAuth({
					plugins: [
						localization({
							defaultLocale: "fr",
							translations: {
								fr: {
									USER_NOT_FOUND: "Utilisateur non trouvé",
								},
							},
						}),
					],
				});
			}).not.toThrow();
		});
	});
});
