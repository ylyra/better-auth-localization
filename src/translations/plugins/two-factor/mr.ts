import type { TwoFactorErrorCodesType } from "../../../types";

export const MR_IN = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "वन-टाइम पासवर्ड सक्षम नाही",
	OTP_HAS_EXPIRED: "वन-टाइम पासवर्ड कालबाह्य झाले",
	TOTP_NOT_ENABLED: "वेळ-आधारित वन-टाइम पासवर्ड सक्षम नाही",
	TWO_FACTOR_NOT_ENABLED: "दोन-कारक प्रमाणीकरण सक्षम नाही",
	BACKUP_CODES_NOT_ENABLED: "बॅकअप कोड सक्षम नाहीत",
	INVALID_BACKUP_CODE: "अवैध बॅकअप कोड",
	INVALID_CODE: "अवैध कोड",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "खूप जास्त प्रयत्न. कृपया नवीन कोड विनंती करा.",
	INVALID_TWO_FACTOR_COOKIE: "अवैध दोन-कारक प्रमाणीकरण कुकी",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"mr-IN": MR_IN,
} as const;
