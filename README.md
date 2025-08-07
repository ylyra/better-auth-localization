# Better Auth Localization Plugin

A localization plugin for [Better Auth](https://github.com/better-auth/better-auth) that automatically translates error messages.
![ezgif-6723e2cdfd4aa9](https://github.com/user-attachments/assets/af185757-1772-4022-9820-eb437d23c86f)

## Features

- 🌍 **Multi-language support** - Built-in translations with easy custom locale addition
- 🔄 **Automatic translation** - Seamlessly translates error messages without changing your application logic
- 🎯 **Type-safe** - Full TypeScript support with autocomplete for custom translations
- 🛡️ **Fallback system** - Fallback to default messages when translations are missing
- 🔧 **Flexible locale detection** - Support for custom locale resolution from headers, cookies, or databases
- ⚡ **Zero runtime overhead** - Translations are bundled at build time

### Language Support Status

Currently supported languages:
- 🇧🇷 **Portuguese (pt-BR)** - ✅ Complete
- 🇵🇹 **Portuguese (pt-PT)** - ✅ Complete
- 🇪🇸 **Spanish (es-ES)** - ✅ Complete
- 🇫🇷 **French (fr-FR)** - ✅ Complete
- 🇵🇱 **Polish (pl-PL)** - ✅ Complete (Thanks @stripsior)
- 🇮🇩 **Indonesian (id-ID)** - ✅ Complete (Thanks @finly)
- 🇯🇵 **Japanese (ja-JP)** - ✅ Complete (Thanks @HRTK92)
- 🇸🇦 **Arabic (ar-SA)** - ✅ Complete (Thanks @mosaleh-dev)
- 🇬🇷 **Greek (el-GR)** - ✅ Complete (Thanks @DomVournias)
- 🇮🇹 **Italian (it-IT)** - ✅ Complete (Thanks @mattiamalonni)
- 🇩🇪 **German (de-DE)** - ✅ Complete (Thanks @NiklasDah)
  - 🇩🇪 **German (informal, "du") (de-DE-informal) (default)** - ✅ Complete (Thanks @NiklasDah)
  - 🇩🇪 **German (formal, "Sie") (de-DE-formal)** - ✅ Complete (Thanks @NiklasDah)

## Installation

```bash
npm install better-auth-localization
# or
yarn add better-auth-localization
# or
pnpm add better-auth-localization
```

## Quick Start

### Basic Usage with Built-in Locale

```typescript
import { betterAuth } from "better-auth";
import { localization } from "better-auth-localization";

export const auth = betterAuth({
  // ... your config
  plugins: [
    localization({
      defaultLocale: "pt-BR", // Use built-in Portuguese translations
      fallbackLocale: "default" // Fallback to English
    })
  ]
});
```

### Dynamic Locale Detection

```typescript
localization({
  defaultLocale: "pt-BR",
  fallbackLocale: "default",
  getLocale: async (request) => {
    try {
      // Use your existing locale detection logic
      // This could come from cookies, database, JWT tokens, etc.
      const userLocale = await getUserLocale(request);
      
      return userLocale || 'default';
    } catch (error) {
      console.warn('Error detecting locale:', error);
      return 'default'; // Safe fallback
    }
  }
})

// Example getUserLocale implementation (adapt to your needs)
async function getUserLocale(request: Request): Promise<string | null> {
  // Could check user preferences from database, cookies, headers, etc.
  // return await db.user.getLocale(userId);
  // return getCookieValue(request, 'locale');
  // return request.headers.get('x-user-locale');
}
```

### Custom Translations

```typescript
localization({
  defaultLocale: "fr",
  fallbackLocale: "pt-BR", // Can also use built-in locales as fallback
  translations: {
    "fr": {
      USER_NOT_FOUND: "Utilisateur non trouvé",
      INVALID_PASSWORD: "Mot de passe invalide",
      INVALID_EMAIL: "Email invalide",
      SESSION_EXPIRED: "Session expirée"
    },
    "es": {
      USER_NOT_FOUND: "Usuario no encontrado",
      INVALID_PASSWORD: "Contraseña inválida",
      INVALID_EMAIL: "Email inválido",
      SESSION_EXPIRED: "Sesión expirada"
    }
  },
});
```

### Overriding Built-in Translations

```typescript
localization({
  defaultLocale: "pt-BR",
  translations: {
    "pt-BR": {
      // Override specific messages
      USER_NOT_FOUND: "Usuário não foi encontrado no sistema",
      INVALID_PASSWORD: "A senha fornecida está incorreta"
    }
  }
});
```


## Built-in Translations

The plugin comes with built-in translations for all Better Auth error codes:

- User-related errors (USER_NOT_FOUND, USER_ALREADY_EXISTS, etc.)
- Session errors (SESSION_EXPIRED, FAILED_TO_CREATE_SESSION, etc.)
- Authentication errors (INVALID_PASSWORD, INVALID_EMAIL, etc.)
- Password validation (PASSWORD_TOO_SHORT, PASSWORD_TOO_LONG)
- Social authentication errors
- Account management errors

For a complete and specific list, refer to the Better Auth documentation.

## Contributing

We welcome and appreciate contributions! Help us expand language support by adding new translations.

To add a new language:

1. Create a new translation file in `src/utils/translations/`
2. Add all error code translations
3. Export it in the main translations object
4. Submit a pull request


## License

MIT © Marcel Losso Forte
