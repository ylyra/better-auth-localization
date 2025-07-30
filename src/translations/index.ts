import type { ErrorCodesType } from "../types";

export const PT_BR = {
	// User related errors
	USER_NOT_FOUND: "Usuário não encontrado",
	FAILED_TO_CREATE_USER: "Falha ao criar usuário",
	FAILED_TO_UPDATE_USER: "Falha ao atualizar usuário",
	USER_ALREADY_EXISTS: "Usuário já existe",
	USER_EMAIL_NOT_FOUND: "Email do usuário não encontrado",
	USER_ALREADY_HAS_PASSWORD:
		"Usuário já possui uma senha. Forneça-a para excluir a conta.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Falha ao criar sessão",
	FAILED_TO_GET_SESSION: "Falha ao obter sessão",
	SESSION_EXPIRED:
		"Sessão expirada. Autentique-se novamente para realizar esta ação.",

	// Authentication errors
	INVALID_PASSWORD: "Senha inválida",
	INVALID_EMAIL: "Email inválido",
	INVALID_EMAIL_OR_PASSWORD: "Email ou senha inválidos",
	INVALID_TOKEN: "Token inválido",
	EMAIL_NOT_VERIFIED: "Email não verificado",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Conta de credenciais não encontrada",

	// Password related errors
	PASSWORD_TOO_SHORT: "Senha muito curta",
	PASSWORD_TOO_LONG: "Senha muito longa",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Conta já vinculada",
	PROVIDER_NOT_FOUND: "Provedor não encontrado",
	ID_TOKEN_NOT_SUPPORTED: "id_token não suportado",
	FAILED_TO_GET_USER_INFO: "Falha ao obter informações do usuário",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Email não pode ser atualizado",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "Você não pode desvincular sua última conta",
	ACCOUNT_NOT_FOUND: "Conta não encontrada",
} satisfies ErrorCodesType;

export const ES_ES = {
	// User related errors
	USER_NOT_FOUND: "Usuario no encontrado",
	FAILED_TO_CREATE_USER: "Error al crear usuario",
	FAILED_TO_UPDATE_USER: "Error al actualizar usuario",
	USER_ALREADY_EXISTS: "Usuario ya existe",
	USER_EMAIL_NOT_FOUND: "Email del usuario no encontrado",
	USER_ALREADY_HAS_PASSWORD: "El usuario ya tiene una contraseña. Proporcione esa contraseña para eliminar la cuenta.",

	// Session related errors
	FAILED_TO_CREATE_SESSION: "Error al crear sesión",
	FAILED_TO_GET_SESSION: "Error al obtener sesión",
	SESSION_EXPIRED: "Sesión expirada. Inicie sesión nuevamente para realizar esta acción.",

	// Authentication errors
	INVALID_PASSWORD: "Contraseña inválida",
	INVALID_EMAIL: "Email inválido",
	INVALID_EMAIL_OR_PASSWORD: "Email o contraseña inválidos",
	INVALID_TOKEN: "Token inválido",
	EMAIL_NOT_VERIFIED: "Email no verificado",
	CREDENTIAL_ACCOUNT_NOT_FOUND: "Cuenta de credenciales no encontrada",

	// Password related errors
	PASSWORD_TOO_SHORT: "Contraseña demasiado corta",
	PASSWORD_TOO_LONG: "Contraseña demasiado larga",

	// Social auth errors
	SOCIAL_ACCOUNT_ALREADY_LINKED: "Cuenta ya vinculada",
	PROVIDER_NOT_FOUND: "Proveedor no encontrado",
	ID_TOKEN_NOT_SUPPORTED: "id_token no soportado",
	FAILED_TO_GET_USER_INFO: "Error al obtener información del usuario",

	// Account management errors
	EMAIL_CAN_NOT_BE_UPDATED: "Email no puede ser actualizado",
	FAILED_TO_UNLINK_LAST_ACCOUNT: "No puede desvincular su última cuenta",
	ACCOUNT_NOT_FOUND: "Cuenta no encontrada",	
} satisfies ErrorCodesType;


export const defaultTranslations = {
	"pt-BR": PT_BR,
	"es-ES": ES_ES,
};
