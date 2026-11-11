# MiniAppHub template

Шаблон мини-приложения MiniAppHub: чистый HTML5 + Vanilla JS (ES Modules), без сборки.

## Быстрый старт
1. Fork этого репозитория (или «Use this template») в свой аккаунт.
2. Отредактируйте `mapp/mapp.manifest.json`: `id` (вида `author.app-name`), `author`, `name`, `version`, `description`, `permissions`.
3. Пишите интерфейс в `mapp/public/`. Вызовы оболочки — через `api/sdk.js` (`new MiniApp().call('system.info')`).
4. Локальная проверка: `npm run check` и `npm run pack` (создаст ZIP в `dist/`).
5. Pull Request в `MiniAppHub/template` или свой репозиторий: CI проверит манифест.
6. Релиз: создайте тег `vX.Y.Z`, совпадающий с `version` в манифесте. Workflow `publish` соберёт ZIP и создаст GitHub Release. Портал подхватит его при следующей синхронизации каталога.

## Разрешения (permissions)
`filesystem.external`, `apps.manage`, `apps.execute`, `network.server`, `network.bluetooth`, `shell.launcher`, `system.contacts`.
Запрашивайте только нужные: пользователь видит их при установке.

Лицензия: MIT.
