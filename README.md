# backend для [сайта](https://github.com/djaaba/blog-frontend) публикации постов

## Быстрый старт

#### `npm i` – установить зависимости проекта

#### `npm run dev` – запуск devServer на http://localhost:4444/

## Скрипты

#### `npm run dev` – запуск devServer на http://localhost:4444/

#### `npm run start` – запуск проекта без отслеживания изменений

## Используемые библиотеки
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js/)
- [express](https://github.com/expressjs/express)
- [cors](https://github.com/expressjs/cors)
- [express-validator](https://github.com/express-validator/express-validator)
- [mongoose](https://github.com/Automattic/mongoose)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [multer](https://github.com/expressjs/multer)
- [nodemon](https://github.com/remy/nodemon)

### Структура проекта

```
├── controllers/                     # Контроллеры проекта
│   ├── PostController.js            # Функционал для постов
│   └── UserController.js            # Фунционал для пользователя
├── models/                          # Модели проекта
│   ├── Post.js                      # Схема поста
│   └── User.js                      # Схема пользователя
├── uploads/                         # Загруженные пользовательские файлы 
├── utils/                           # Утилиты проекта
│   ├── checkAuth.js                 # Проверка токена
│   └── handleValidationErrors.js    # Проверка валидации
├── validators/                      # Валидация для проекта
│   ├── auth.js                      # Валидация для авторизации/регистрации
│   └── posts.js                     # Валидация для данных при создании поста
├── .gitignore                       # Список исключённых файлов из Git
├── index.js                         # Главный файл проекта
├── package.json                     # Список модулей и прочей информации
├── package-lock.json                # Зависимости верхнего уровня
└── README.md                        # Документация шаблона
```
