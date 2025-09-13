import { describe, expect, it } from "vitest";
import { getTranslation } from "../../utils/translations";
import { deepMergeTranslations } from "../../utils/helpers";

describe("getTranslation", () => {
	const mockTranslations = {
		"pt-BR": {
			USER_NOT_FOUND: "Usuário não encontrado",
			INVALID_PASSWORD: "Senha inválida",
		},
		es: {
			USER_NOT_FOUND: "Usuario no encontrado",
		},
	} as const;

	it("should return original message for default locale", () => {
		const result = getTranslation(
			"USER_NOT_FOUND",
			"default",
			"default",
			mockTranslations,
			"Original message",
		);
		expect(result).toBe("Original message");
	});

	it("should return translated message for built-in locale", () => {
		const result = getTranslation(
			"USER_NOT_FOUND",
			"pt-BR",
			"default",
			mockTranslations,
			"Original message",
		);
		expect(result).toBe("Usuário não encontrado");
	});

	it("should return translated message for custom locale", () => {
		const result = getTranslation(
			"USER_NOT_FOUND",
			"es",
			"default",
			mockTranslations,
		);
		expect(result).toBe("Usuario no encontrado");
	});

	it("should return fallback translation when key not found in locale", () => {
		const result = getTranslation(
			"INVALID_PASSWORD",
			"es",
			"pt-BR",
			mockTranslations,
			"Original message",
		);
		expect(result).toBe("Senha inválida");
	});

	it("should handle when fallback locale equals current locale", () => {
		const result = getTranslation(
			"INVALID_PASSWORD",
			"es",
			"es",
			mockTranslations,
			"Original message",
		);
		expect(result).toBe("Original message");
	});

	it("should return error code when translation not found and no original message", () => {
		const result = getTranslation(
			"SOME_UNKNOWN_ERROR" as any,
			"pt-BR",
			"default",
			mockTranslations,
		);
		expect(result).toBe("SOME_UNKNOWN_ERROR");
	});

	it("should handle when locale exists but translation key does not", () => {
		const result = getTranslation(
			"NON_EXISTENT_KEY" as any,
			"pt-BR",
			"default",
			mockTranslations,
			"Original message",
		);
		expect(result).toBe("Original message");
	});
});


describe("deepMergeTranslations", () => {
	const defaultTranslations = {
		"pt-BR": {
			USER_NOT_FOUND: "Usuário não encontrado",
			INVALID_PASSWORD: "Senha inválida",
			ACCOUNT_NOT_FOUND: "Conta não encontrada",
		},
		"en-US": {
			USER_NOT_FOUND: "User not found",
			INVALID_PASSWORD: "Invalid password",
			ACCOUNT_NOT_FOUND: "Account not found",
		},
	};

	it("should return default translations when no custom translations provided", () => {
		const result = deepMergeTranslations(defaultTranslations);
		expect(result).toEqual(defaultTranslations);
	});

	it("should return default translations when custom translations is undefined", () => {
		const result = deepMergeTranslations(defaultTranslations, undefined);
		expect(result).toEqual(defaultTranslations);
	});

	it("should merge custom translations at individual key level", () => {
		const customTranslations = {
			"pt-BR": {
				ACCOUNT_NOT_FOUND: "Custom account message",
			},
		};

		const result = deepMergeTranslations(defaultTranslations, customTranslations);

		expect(result["pt-BR"]).toEqual({
			USER_NOT_FOUND: "Usuário não encontrado", // preserved from default
			INVALID_PASSWORD: "Senha inválida", // preserved from default
			ACCOUNT_NOT_FOUND: "Custom account message", // overridden by custom
		});

		expect(result["en-US"]).toEqual(defaultTranslations["en-US"]); // unchanged
	});

	it("should add new locale when not present in defaults", () => {
		const customTranslations = {
			"fr-FR": {
				USER_NOT_FOUND: "Utilisateur non trouvé",
				INVALID_PASSWORD: "Mot de passe invalide",
			},
		};

		const result = deepMergeTranslations(defaultTranslations, customTranslations);

		expect(result["fr-FR"]).toEqual({
			USER_NOT_FOUND: "Utilisateur non trouvé",
			INVALID_PASSWORD: "Mot de passe invalide",
		});

		// Original locales should remain unchanged
		expect(result["pt-BR"]).toEqual(defaultTranslations["pt-BR"]);
		expect(result["en-US"]).toEqual(defaultTranslations["en-US"]);
	});

	it("should handle multiple custom translations for different locales", () => {
		const customTranslations = {
			"pt-BR": {
				USER_NOT_FOUND: "Custom user message",
			},
			"en-US": {
				INVALID_PASSWORD: "Custom password message",
			},
		};

		const result = deepMergeTranslations(defaultTranslations, customTranslations);

		expect(result["pt-BR"]).toEqual({
			USER_NOT_FOUND: "Custom user message", // overridden
			INVALID_PASSWORD: "Senha inválida", // preserved
			ACCOUNT_NOT_FOUND: "Conta não encontrada", // preserved
		});

		expect(result["en-US"]).toEqual({
			USER_NOT_FOUND: "User not found", // preserved
			INVALID_PASSWORD: "Custom password message", // overridden
			ACCOUNT_NOT_FOUND: "Account not found", // preserved
		});
	});

	it("should handle empty custom translation objects", () => {
		const customTranslations = {
			"pt-BR": {},
		};

		const result = deepMergeTranslations(defaultTranslations, customTranslations);

		// Should remain unchanged since custom translation is empty
		expect(result["pt-BR"]).toEqual(defaultTranslations["pt-BR"]);
	});

	it("should handle null/undefined values in custom translations", () => {
		const customTranslations = {
			"pt-BR": {
				USER_NOT_FOUND: "Custom message",
			},
			"en-US": undefined, // This should be ignored
		} as any;

		const result = deepMergeTranslations(defaultTranslations, customTranslations);

		expect(result["pt-BR"]).toEqual({
			USER_NOT_FOUND: "Custom message",
			INVALID_PASSWORD: "Senha inválida",
			ACCOUNT_NOT_FOUND: "Conta não encontrada",
		});

		expect(result["en-US"]).toEqual(defaultTranslations["en-US"]); // unchanged
	});
});