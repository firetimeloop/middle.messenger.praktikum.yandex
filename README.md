# Чат

## Описание

Проект - чат. На данный момент готова разметка страниц. Parcel собирает проект из шаблонов handlebars и SCSS на клиенте. Добавлен TypeScript, ESLint, Stylelint. Реализован компонентный подход с помощью классов EventBus и Block.
Данные из форм собираются при условии прохождения валидации - добавленны проверки для полей: first_name, second_name, login, email, password, phone, message. Добавьте класс для работы с запросами - HTTPTransport.

Макеты дефолтные - https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=0%3A1

## Установка

- `npm install` — установка пакетов,
- `npm start` — запуск версии для разработчика,
- `npm run dev` — запуск проекта в hmr.