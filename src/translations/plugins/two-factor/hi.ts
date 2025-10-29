import type { TwoFactorErrorCodesType } from "../../../types";

export const HI_IN = {
	// Two Factor related errors
	OTP_NOT_ENABLED: "वन-टाइम पासवर्ड सक्षम नहीं है",
	OTP_HAS_EXPIRED: "वन-टाइम पासवर्ड समाप्त हो गया है",
	TOTP_NOT_ENABLED: "समय-आधारित वन-टाइम पासवर्ड सक्षम नहीं है",
	TWO_FACTOR_NOT_ENABLED: "दो-कारक प्रमाणीकरण सक्षम नहीं है",
	BACKUP_CODES_NOT_ENABLED: "बैकअप कोड सक्षम नहीं हैं",
	INVALID_BACKUP_CODE: "अमान्य बैकअप कोड",
	INVALID_CODE: "अमान्य कोड",
	TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "बहुत अधिक प्रयास। कृपया नया कोड अनुरोध करें।",
	INVALID_TWO_FACTOR_COOKIE: "अमान्य दो-कारक प्रमाणीकरण कुकी",
} satisfies TwoFactorErrorCodesType;

export const LOCALES = {
	"hi-IN": HI_IN,
} as const;
