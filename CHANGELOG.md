# better-auth-localization

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
