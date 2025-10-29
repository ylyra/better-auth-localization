import type { OrganizationErrorCodesType } from "../../../types";

export const RU_RU = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"У вас нет разрешения на создание новой организации",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Вы достигли максимального количества организаций",
	ORGANIZATION_ALREADY_EXISTS: "Организация уже существует",
	ORGANIZATION_NOT_FOUND: "Организация не найдена",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"Пользователь не является членом организации",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"У вас нет разрешения на обновление этой организации",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"У вас нет разрешения на удаление этой организации",
	NO_ACTIVE_ORGANIZATION: "Нет активной организации",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"Пользователь уже является членом этой организации",
	MEMBER_NOT_FOUND: "Член не найден",
	ROLE_NOT_FOUND: "Роль не найдена",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"У вас нет разрешения на создание новой команды",
	TEAM_ALREADY_EXISTS: "Команда уже существует",
	TEAM_NOT_FOUND: "Команда не найдена",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Вы не можете покинуть организацию как единственный владелец",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Вы не можете покинуть организацию без владельца",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"У вас нет разрешения на удаление этого члена",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"У вас нет разрешения на приглашение пользователей в эту организацию",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"Пользователь уже приглашен в эту организацию",
	INVITATION_NOT_FOUND: "Приглашение не найдено",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"Вы не являетесь получателем приглашения",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"Требуется проверка электронной почты перед принятием или отклонением приглашения",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"У вас нет разрешения на отмену этого приглашения",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Приглашающий больше не является членом организации",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"У вас нет разрешения на приглашение пользователя с этой ролью",
	FAILED_TO_RETRIEVE_INVITATION: "Не удалось получить приглашение",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Вы достигли максимального количества команд",
	UNABLE_TO_REMOVE_LAST_TEAM: "Невозможно удалить последнюю команду",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"У вас нет разрешения на обновление этого члена",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
		"Достигнут лимит членства в организации",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"У вас нет разрешения на создание команд в этой организации",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"У вас нет разрешения на удаление команд в этой организации",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"У вас нет разрешения на обновление этой команды",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"У вас нет разрешения на удаление этой команды",
	INVITATION_LIMIT_REACHED: "Достигнут лимит приглашений",
	TEAM_MEMBER_LIMIT_REACHED: "Достигнут лимит членов команды",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "Пользователь не является членом команды",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"У вас нет разрешения на доступ к членам этой команды",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "У вас нет активной команды",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"У вас нет разрешения на создание нового члена команды",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"У вас нет разрешения на удаление члена команды",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"У вас нет разрешения на доступ к этой организации как владелец",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Вы не являетесь членом этой организации",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"ru-RU": RU_RU,
} as const;
