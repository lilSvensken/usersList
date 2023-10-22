# Клиент-серверное приложение для имитации api-запросов
### webpack + JS + Node.js
<br/>

#### Для начала работы запустите эти 2 команды:
```shell
npm run client
```
```shell
npm run server
```
фронт часть откроется на http://localhost:8080

сервер будет доступен по адресу http://127.0.0.1:3000 (по этому хосту и нужно делать fetch запросы)

JSON, имитирующий ответ из БД находится здесь: `./nodeServer/bd/users.js`

## Доступные запросы:

1. `GET` `/api/v1/users` - получение списка пользователей
2. `GET` `/api/v1/user/:id` - получение пользователя по id (н-р: `/user/2`)
3. `POST` `/api/v1/user` - добавление нового пользователя. В `body запроса` ожидается:
```
  {
    name: string, // Имя
    fullName: string, // Полное имя
    avatar: string, // ссылка на изображение 
    dob: Date, // дата рождения в формате Date или "1980-03-01T21:00:00.000Z"
    patronus: string // патронус персонажа
  }
```
4. `DELETE` `/api/v1/user/:id` - удаление пользователя по id (н-р: `/user/2`)
5. `PUT` `/api/v1/user/:id` - замена некоторых полей пользователя по его id. В `body` ожидаются те же поля, что в пункте 3, но здесь не обязательно передавать все поля
6. `PATCH` `/api/v1/user/:id` - замена всех полей пользователя по его id. В `body` ожидаются те же поля, что в пункте 3, но здесь НЕОБХОДИМО обязательно передавать ВСЕ поля (кроме id)
7. `GET` `/api/v1/filter?name=Пр&patronus=ыдр` - получение отфильтрованного списка (в БД они не удаляются), поиск происходит по query параметрам, в которых ключи - это ключи модели персонажа в БД, а значение параметра - часть строки значения

