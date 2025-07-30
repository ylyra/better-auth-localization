import { betterAuth } from "better-auth";
import { describe, expect, it } from "vitest";
import { betterAuthLocalization } from "../index";

describe("betterAuthLocalization", () => {
	describe("using built-in locale", () => {
		it("initializes without errors", () => {
			expect(() => {
				betterAuth({
					plugins: [
						betterAuthLocalization({
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
						betterAuthLocalization({
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
