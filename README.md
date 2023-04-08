# Чат

## Описание

Проект - чат. На данный момент готова разметка страниц. Parcel собирает проект из шаблонов handlebars и SCSS на клиенте. Добавлен TypeScript, ESLint, Stylelint. Реализован компонентный подход с помощью классов EventBus и Block.
Данные из форм собираются при условии прохождения валидации - добавленны проверки для полей: first_name, second_name, login, email, password, phone, message. Добавьте класс для работы с запросами - HTTPTransport.

В проект добавлен клиентский роутинг.

Внедрено HTTP API чатов, авторизации и пользователей.

Подключены WebSocket для работы с real-time сообщениями.

Добавлена CSP для Express, для защиты от XSS и DOS.

Написаны тесты для роутера, компонента, модуля отправки запросов.

Настроена сборка билда с помощью Webpack.

Настроена Docker-сборка приложения.

Проект с Docker-сборкой размещен - https://bbaoj4ive9i7ts4l8mq2.containers.yandexcloud.net/

Настроен precommit на проект.

Проведите аудит пакетов продакшен сборки (npm audit --production).


Макеты дефолтные - https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=0%3A1

Задеплоен на Netlify - https://astonishing-valkyrie-1a706b.netlify.app/
## Установка

- `npm install` — установка пакетов,
- `npm start` — запуск версии для разработчика,
- `npm run dev` — запуск проекта в hmr.
