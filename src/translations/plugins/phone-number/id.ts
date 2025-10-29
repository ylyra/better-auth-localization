import type { PhoneNumberErrorCodesType } from "../../../types";

export const ID_ID = {
	// Phone number related errors
	INVALID_PHONE_NUMBER: "Nomor telepon tidak valid",
	PHONE_NUMBER_EXIST: "Nomor telepon sudah ada",
	INVALID_PHONE_NUMBER_OR_PASSWORD: "Nomor telepon atau kata sandi tidak valid",
	UNEXPECTED_ERROR: "Kesalahan tidak terduga",
	OTP_NOT_FOUND: "Kode verifikasi tidak ditemukan",
	OTP_EXPIRED: "Kode verifikasi telah kedaluwarsa",
	INVALID_OTP: "Kode verifikasi tidak valid",
	PHONE_NUMBER_NOT_VERIFIED: "Nomor telepon belum diverifikasi",
} satisfies PhoneNumberErrorCodesType;

export const LOCALES = {
	"id-ID": ID_ID,
} as const;
