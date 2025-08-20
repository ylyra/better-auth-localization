# better-auth-localization

## 2.1.1

### Patch Changes

- Added support for Turkish (Thanks @furkanczay)

## 2.1.0

### Minor Changes

- Now translations index is automatically generated on build through the generate-translations-index.cjs script, this was done to avoid manually updating the translations index file which was generating merge conflicts.
  This is a breaking change when adding new translations from now on, as we now need to export a LOCALES object from the translation file.

  ```ts
  export const LOCALES = {
    "pt-BR": PT_BR,
    "pt-PT": PT_PT,
  } as const;
  ```

  To generate the translations index locally for testing purposes, run:

  ```bash
  pnpm generate:translations
  ```

- Added support for Dutch nl-NL (thanks @InvixGG)

## 2.0.8

### Patch Changes

- Added support for new languages:
  - 🇨🇳 **Traditional Chinese (zh-Hant)** (Thanks @MarkLee425)
  - 🇨🇳 **Simplified Chinese (zh-Hans)** (Thanks @MarkLee425)
  - 🇰🇷 **Korean (ko-KR)** (Thanks @MarkLee425)
  - 🇮🇳 **Hindi (hi-HI)** (Thanks @MarkLee425)

## 2.0.7

### Patch Changes

- Added support for new languages:
  - 🇸🇪 **Swedish (sv-SE)** (Thanks @yamanadamnor)
  - 🇮🇹 **Italian (it-IT)** (Thanks @mattiamalonni)
  - 🇩🇪 **German (de-DE)** (Thanks @NiklasDah)

## 2.0.6

### Patch Changes

- Support for Greek (Thanks @DomVournias)

## 2.0.5

### Patch Changes

- - Support for Japanese (Thanks @HRTK92)
  - Support for Arabic (Thanks @mosaleh-dev)

## 2.0.4

### Patch Changes

- Support for Indonesian (Thanks @finly)

## 2.0.3

### Patch Changes

- Wrong repo URL 🤦

## 2.0.2

### Patch Changes

- Support for Polish (Thanks @stripsior)

## 2.0.1

### Patch Changes

- Small JSDocs update

## 2.0.0

### Major Changes

- **BREAKING CHANGE**: Rename main function from `betterAuthLocalization` to `localization`

  The main plugin function has been renamed for better consistency and DX.

  **Migration:**

  ```diff
  - import { betterAuthLocalization } from 'better-auth-localization';
  + import { localization } from 'better-auth-localization';

  betterAuth({
    plugins: [
  -   betterAuthLocalization({
  +   localization({
        defaultLocale: "pt-BR"
      })
    ]
  });
  ```

  **New Language Support**

  - 🇵🇹 **OG Portuguese (pt-PT)** - ✅ Complete
  - 🇫🇷 **French (fr-FR)** - ✅ Complete
    (I don't speak French, so if it is bad you can ~~fix it~~ blame AI)

## 1.3.0

### Minor Changes

- Added support for spanish

## 1.2.5

### Patch Changes

- translation type missing error codes on custom locale

## 1.2.4

### Patch Changes

- Added type prettify

## 1.2.3

### Patch Changes

- Type fixes for better DX

## 1.2.2

### Patch Changes

- Missing some types when exporting them

## 1.2.1

### Patch Changes

- Changes in readme to show which languages are supported

## 1.2.0

### Minor Changes

- Package Rename: "better-localization" -> "better-auth-localization"
