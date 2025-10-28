import type { AdminErrorCodesType } from "../../../types";

export const ES_ES = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "No puedes banearte a ti mismo",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"No tienes permiso para cambiar los roles de los usuarios",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "No tienes permiso para crear usuarios",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "No tienes permiso para listar usuarios",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"No tienes permiso para listar sesiones de usuarios",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "No tienes permiso para banear usuarios",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"No tienes permiso para suplantar a otros usuarios",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"No tienes permiso para revocar sesiones de usuarios",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS:
		"No tienes permiso para eliminar usuarios",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"No tienes permiso para establecer contraseñas de usuarios",
	BANNED_USER: "Has sido baneado de esta aplicación",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "No tienes permiso para obtener usuario",
	NO_DATA_TO_UPDATE: "No hay datos para actualizar",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"No tienes permiso para actualizar usuarios",
	YOU_CANNOT_REMOVE_YOURSELF: "No puedes eliminarte a ti mismo",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"es-ES": ES_ES,
} as const;
