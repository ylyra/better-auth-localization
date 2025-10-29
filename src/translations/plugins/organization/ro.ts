import type { OrganizationErrorCodesType } from "../../../types";

export const RO_RO = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Nu aveți permisiunea să creați o organizație nouă",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Ați atins numărul maxim de organizații",
	ORGANIZATION_ALREADY_EXISTS: "Organizația există deja",
	ORGANIZATION_NOT_FOUND: "Organizația nu a fost găsită",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"Utilizatorul nu este membru al organizației",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Nu aveți permisiunea să actualizați această organizație",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Nu aveți permisiunea să ștergeți această organizație",
	NO_ACTIVE_ORGANIZATION: "Nicio organizație activă",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"Utilizatorul este deja membru al acestei organizații",
	MEMBER_NOT_FOUND: "Membrul nu a fost găsit",
	ROLE_NOT_FOUND: "Rolul nu a fost găsit",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Nu aveți permisiunea să creați o echipă nouă",
	TEAM_ALREADY_EXISTS: "Echipa există deja",
	TEAM_NOT_FOUND: "Echipa nu a fost găsită",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Nu puteți părăsi organizația ca singurul proprietar",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Nu puteți părăsi organizația fără un proprietar",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"Nu aveți permisiunea să ștergeți acest membru",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Nu aveți permisiunea să invitați utilizatori în această organizație",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"Utilizatorul a fost deja invitat în această organizație",
	INVITATION_NOT_FOUND: "Invitația nu a fost găsită",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"Nu sunteți destinatarul invitației",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"Verificarea email-ului este necesară înainte de acceptarea sau respingerea invitației",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Nu aveți permisiunea să anulați această invitație",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Invitantul nu mai este membru al organizației",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Nu aveți permisiunea să invitați un utilizator cu acest rol",
	FAILED_TO_RETRIEVE_INVITATION: "Nu s-a putut recupera invitația",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Ați atins numărul maxim de echipe",
	UNABLE_TO_REMOVE_LAST_TEAM: "Nu se poate elimina ultima echipă",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Nu aveți permisiunea să actualizați acest membru",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
		"Limita de membri ai organizației a fost atinsă",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Nu aveți permisiunea să creați echipe în această organizație",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Nu aveți permisiunea să ștergeți echipe în această organizație",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Nu aveți permisiunea să actualizați această echipă",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Nu aveți permisiunea să ștergeți această echipă",
	INVITATION_LIMIT_REACHED: "Limita de invitații a fost atinsă",
	TEAM_MEMBER_LIMIT_REACHED: "Limita de membri ai echipei a fost atinsă",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "Utilizatorul nu este membru al echipei",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Nu aveți permisiunea să accesați membrii acestei echipe",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Nu aveți o echipă activă",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Nu aveți permisiunea să creați un nou membru al echipei",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Nu aveți permisiunea să eliminați un membru al echipei",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Nu aveți permisiunea să accesați această organizație ca proprietar",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Nu sunteți membru al acestei organizații",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"ro-RO": RO_RO,
} as const;
