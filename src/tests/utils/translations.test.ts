import { describe, expect, it } from "vitest";
import { getTranslation } from "../../utils/translations";

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
