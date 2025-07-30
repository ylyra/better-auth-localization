import type { ErrorCodesType } from "../types";

export const isErrorBody = (
	body: unknown,
): body is { code: keyof ErrorCodesType; message: string } => {
	return (
		body !== null &&
		body !== undefined &&
		typeof body === "object" &&
		"code" in body &&
		"message" in body
	);
};

export const hasBody = (returned: unknown): returned is { body: unknown } => {
	return (
		returned !== null &&
		returned !== undefined &&
		typeof returned === "object" &&
		"body" in returned
	);
};
