import type { AdminErrorCodesType } from "../../../types";

export const MR_MR = {
	// Admin related errors
	YOU_CANNOT_BAN_YOURSELF: "तुम्ही स्वतःला बंदी घालू शकत नाही",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE:
		"तुम्हाला वापरकर्त्यांच्या भूमिका बदलण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS:
		"तुम्हाला वापरकर्ते तयार करण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS:
		"तुम्हाला वापरकर्त्यांची यादी पाहण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS:
		"तुम्हाला वापरकर्त्यांच्या सत्रांची यादी पाहण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS:
		"तुम्हाला वापरकर्त्यांना बंदी घालण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS:
		"तुम्हाला इतर वापरकर्त्यांची नक्कल करण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS:
		"तुम्हाला वापरकर्त्यांची सत्रे रद्द करण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "तुम्हाला वापरकर्ते हटवण्याची परवानगी नाही",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD:
		"तुम्हाला वापरकर्त्यांची पासवर्ड सेट करण्याची परवानगी नाही",
	BANNED_USER: "तुम्हाला या अनुप्रयोगातून बंदी घालण्यात आली आहे",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "तुम्हाला वापरकर्ता मिळवण्याची परवानगी नाही",
	NO_DATA_TO_UPDATE: "अद्यतन करण्यासाठी कोणतेही डेटा नाही",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS:
		"तुम्हाला वापरकर्त्यांना अद्यतन करण्याची परवानगी नाही",
	YOU_CANNOT_REMOVE_YOURSELF: "तुम्ही स्वतःला काढू शकत नाही",
} satisfies AdminErrorCodesType;

export const LOCALES = {
	"mr-MR": MR_MR,
} as const;
