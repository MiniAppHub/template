# MiniAppHub template

Шаблон для создания мини-приложения MiniAppHub на чистом HTML5 + Vanilla JS (ES Modules), без сборки.

## Быстрый старт
1. Fork этого репозитория в свой аккаунт.
2. Отредактируйте `mapp/mapp.manifest.json` (`author`, `name`, `version`, `description`, `permissions`).
3. Пишите интерфейс в `mapp/public/`. Вызовы оболочки — через `api/sdk.js` (`MiniApp.call('method', params)`).
4. Проверка локально: `npm run check`.
5. Откройте Pull Request в `MiniAppHub/template`: GitHub Actions проверит манифест.

## Структура
```
mapp/
  mapp.manifest.json   манифест (id, name, version, author, permissions, dependencies, routers)
  public/              веб-интерфейс (index.html, app.js, style.css)
  public/api/          фоновые API-модули, которые можно экспортировать другим приложениям
```

## Разрешения (permissions)
`filesystem.external`, `apps.manage`, `apps.execute`, `network.server`, `network.bluetooth`, `shell.launcher`, `system.contacts`.
Запрашивайте только нужные: пользователь видит их при установке.

Лицензия: MIT.
