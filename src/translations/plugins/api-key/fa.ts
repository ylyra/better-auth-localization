import type { ApiKeyErrorCodesType } from "../../../types";

export const FA_IR = {
	// Api key related errors
	INVALID_METADATA_TYPE: "متادیتا باید یک شیء یا تعریف نشده باشد",
	REFILL_AMOUNT_AND_INTERVAL_REQUIRED:
		"مقدار پر کردن مجدد هنگام ارائه فاصله پر کردن مجدد الزامی است",
	REFILL_INTERVAL_AND_AMOUNT_REQUIRED:
		"فاصله پر کردن مجدد هنگام ارائه مقدار پر کردن مجدد الزامی است",
	USER_BANNED: "کاربر ممنوع شده",
	UNAUTHORIZED_SESSION: "جلسه غیرمجاز یا نامعتبر",
	KEY_NOT_FOUND: "کلید API یافت نشد",
	KEY_DISABLED: "کلید API غیرفعال شده",
	KEY_EXPIRED: "کلید API منقضی شده",
	USAGE_EXCEEDED: "کلید API از حد استفاده فراتر رفته",
	KEY_NOT_RECOVERABLE: "کلید API قابل بازیابی نیست",
	EXPIRES_IN_IS_TOO_SMALL:
		"زمان انقضا کمتر از مقدار حداقل از پیش تعریف شده است.",
	EXPIRES_IN_IS_TOO_LARGE:
		"زمان انقضا بیشتر از مقدار حداکثر از پیش تعریف شده است.",
	INVALID_REMAINING: "مقدار باقی‌مانده خیلی بزرگ یا خیلی کوچک است.",
	INVALID_PREFIX_LENGTH: "اندازه پیشوند خیلی بزرگ یا خیلی کوچک است.",
	INVALID_NAME_LENGTH: "اندازه نام خیلی بزرگ یا خیلی کوچک است.",
	METADATA_DISABLED: "متادیتا غیرفعال است.",
	RATE_LIMIT_EXCEEDED: "حد درخواست فراتر رفته است.",
	NO_VALUES_TO_UPDATE: "هیچ مقداری برای به‌روزرسانی وجود ندارد.",
	KEY_DISABLED_EXPIRATION: "مقادیر سفارشی انقضای کلید غیرفعال هستند.",
	INVALID_API_KEY: "کلید API نامعتبر است.",
	INVALID_USER_ID_FROM_API_KEY: "شناسه کاربر از کلید API نامعتبر است.",
	INVALID_API_KEY_GETTER_RETURN_TYPE:
		"بازیاب کلید API نوع نامعتبری برگرداند. مورد انتظار: رشته.",
	SERVER_ONLY_PROPERTY:
		"خاصیتی که سعی می‌کنید تنظیم کنید فقط می‌تواند از نمونه احراز هویت سرور تنظیم شود.",
	FAILED_TO_UPDATE_API_KEY: "به‌روزرسانی کلید API با شکست مواجه شد",
	NAME_REQUIRED: "نام کلید API الزامی است.",
} satisfies ApiKeyErrorCodesType;

export const LOCALES = {
	"fa-IR": FA_IR,
} as const;
