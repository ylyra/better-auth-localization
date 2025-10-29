import type { OrganizationErrorCodesType } from "../../../types";

export const DA_DK = {
	// Organization related errors
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION:
		"Du har ikke tilladelse til at oprette en ny organisation",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS:
		"Du har nået det maksimale antal organisationer",
	ORGANIZATION_ALREADY_EXISTS: "Organisationen eksisterer allerede",
	ORGANIZATION_NOT_FOUND: "Organisationen blev ikke fundet",
	USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION:
		"Brugeren er ikke medlem af organisationen",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION:
		"Du har ikke tilladelse til at opdatere denne organisation",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION:
		"Du har ikke tilladelse til at slette denne organisation",
	NO_ACTIVE_ORGANIZATION: "Ingen aktiv organisation",
	USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION:
		"Brugeren er allerede medlem af denne organisation",
	MEMBER_NOT_FOUND: "Medlemmet blev ikke fundet",
	ROLE_NOT_FOUND: "Rollen blev ikke fundet",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM:
		"Du har ikke tilladelse til at oprette et nyt team",
	TEAM_ALREADY_EXISTS: "Teamet eksisterer allerede",
	TEAM_NOT_FOUND: "Teamet blev ikke fundet",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER:
		"Du kan ikke forlade organisationen som den eneste ejer",
	YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER:
		"Du kan ikke forlade organisationen uden en ejer",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER:
		"Du har ikke tilladelse til at slette dette medlem",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION:
		"Du har ikke tilladelse til at invitere brugere til denne organisation",
	USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION:
		"Brugeren er allerede inviteret til denne organisation",
	INVITATION_NOT_FOUND: "Invitationen blev ikke fundet",
	YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION:
		"Du er ikke modtageren af invitationen",
	EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION:
		"E-mail verifikation påkrævet før acceptering eller afvisning af invitationen",
	YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION:
		"Du har ikke tilladelse til at annullere denne invitation",
	INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION:
		"Inviteren er ikke længere medlem af organisationen",
	YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE:
		"Du har ikke tilladelse til at invitere en bruger med denne rolle",
	FAILED_TO_RETRIEVE_INVITATION: "Kunne ikke hente invitationen",
	YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS:
		"Du har nået det maksimale antal teams",
	UNABLE_TO_REMOVE_LAST_TEAM: "Kan ikke fjerne det sidste team",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER:
		"Du har ikke tilladelse til at opdatere dette medlem",
	ORGANIZATION_MEMBERSHIP_LIMIT_REACHED:
		"Organisationsmedlemskabsgrænsen er nået",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION:
		"Du har ikke tilladelse til at oprette teams i denne organisation",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION:
		"Du har ikke tilladelse til at slette teams i denne organisation",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM:
		"Du har ikke tilladelse til at opdatere dette team",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM:
		"Du har ikke tilladelse til at slette dette team",
	INVITATION_LIMIT_REACHED: "Invitationsgrænsen er nået",
	TEAM_MEMBER_LIMIT_REACHED: "Teammedlemsgrænsen er nået",
	USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "Brugeren er ikke medlem af teamet",
	YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM:
		"Du har ikke tilladelse til at få adgang til medlemmerne af dette team",
	YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "Du har ikke et aktivt team",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER:
		"Du har ikke tilladelse til at oprette et nyt teammedlem",
	YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER:
		"Du har ikke tilladelse til at fjerne et teammedlem",
	YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION:
		"Du har ikke tilladelse til at få adgang til denne organisation som ejer",
	YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION:
		"Du er ikke medlem af denne organisation",
} satisfies OrganizationErrorCodesType;

export const LOCALES = {
	"da-DK": DA_DK,
} as const;
