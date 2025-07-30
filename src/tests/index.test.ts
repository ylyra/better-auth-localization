import { betterAuth } from "better-auth";
import { describe, expect, it } from "vitest";
import { betterLocalization } from "../index";

describe("betterLocalization", () => {
	describe("using built-in locale", () => {
		it("initializes without errors", () => {
			expect(() => {
				betterAuth({
					plugins: [
						betterLocalization({
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
						betterLocalization({
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
