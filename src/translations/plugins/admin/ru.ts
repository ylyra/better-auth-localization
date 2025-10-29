import type { AdminErrorCodesType } from "../../../types";

export const RU_RU = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "Вы не можете забанить себя",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"У вас нет разрешения изменять роли пользователей",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"У вас нет разрешения создавать пользователей",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"У вас нет разрешения просматривать список пользователей",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"У вас нет разрешения просматривать сессии пользователей",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "У вас нет разрешения банить пользователей",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"У вас нет разрешения выдавать себя за других пользователей",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"У вас нет разрешения отзывать сессии пользователей",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"У вас нет разрешения удалять пользователей",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"У вас нет разрешения устанавливать пароли пользователей",
	BANNED_USER: "Вы заблокированы в этом приложении",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "У вас нет разрешения получать пользователя",
	NO_DATA_TO_UPDATE: "Нет данных для обновления",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"У вас нет разрешения обновлять пользователей",
	YOU_CANNOT_REMOVE_YOURSELF: "Вы не можете удалить себя",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
