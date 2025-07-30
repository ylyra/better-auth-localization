import { describe, expect, it } from "vitest";
import { hasBody, isErrorBody } from "../../utils/helpers";

describe("hasBody", () => {
	it("should return true for object with body property", () => {
		const objectWithBody = {
			body: { some: "data" },
		};
		expect(hasBody(objectWithBody)).toBe(true);
	});

	it("should return false for non-object types", () => {
		expect(hasBody("string")).toBe(false);
		expect(hasBody(123)).toBe(false);
		expect(hasBody(true)).toBe(false);
		expect(hasBody([])).toBe(false);
	});

	it("should return false for object without body property", () => {
		const objectWithoutBody = {
			data: "some data",
			status: 200,
		};
		expect(hasBody(objectWithoutBody)).toBe(false);
	});

	it("should return false for empty object", () => {
		expect(hasBody({})).toBe(false);
	});
});

describe("isErrorBody", () => {
	it("should return true for valid error body", () => {
		const validErrorBody = {
			code: "USER_NOT_FOUND",
			message: "User not found",
		};
		expect(isErrorBody(validErrorBody)).toBe(true);
	});

	it("should return false for non-object types", () => {
		expect(isErrorBody("string")).toBe(false);
		expect(isErrorBody(123)).toBe(false);
		expect(isErrorBody(true)).toBe(false);
		expect(isErrorBody([])).toBe(false);
	});

	it("should return false for object missing code property", () => {
		const bodyWithoutCode = {
			message: "Some message",
		};
		expect(isErrorBody(bodyWithoutCode)).toBe(false);
	});

	it("should return false for object missing message property", () => {
		const bodyWithoutMessage = {
			code: "USER_NOT_FOUND",
		};
		expect(isErrorBody(bodyWithoutMessage)).toBe(false);
	});
});
