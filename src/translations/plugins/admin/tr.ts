import type { AdminErrorCodesType } from "../../../types";

export const TR_TR = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Kendinizi yasaklayamazsınız",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"Kullanıcı rollerini değiştirme izniniz yok",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "Kullanıcı oluşturma izniniz yok",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "Kullanıcıları listeleme izniniz yok",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"Kullanıcı oturumlarını listeleme izniniz yok",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "Kullanıcıları yasaklama izniniz yok",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"Diğer kullanıcıları taklit etme izniniz yok",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"Kullanıcı oturumlarını iptal etme izniniz yok",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "Kullanıcıları silme izniniz yok",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"Kullanıcı şifrelerini ayarlama izniniz yok",
	BANNED_USER: "Bu uygulamadan yasaklandınız",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "Kullanıcı alma izniniz yok",
	NO_DATA_TO_UPDATE: "Güncellenecek veri yok",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: "Kullanıcıları güncelleme izniniz yok",
	YOU_CANNOT_REMOVE_YOURSELF: "Kendinizi kaldıramazsınız",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"tr-TR": TR_TR,
} as const;
