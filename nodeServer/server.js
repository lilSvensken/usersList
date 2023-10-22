const { getUsers, getUserById } = require('./api/users.js');

const HOST_URL = 'http://localhost:8080';
const PORT = 3000;

const express = require('express')
const app = express()
const router = express.Router();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', HOST_URL);
  next();
});

app.use((request, response, next) => {
  console.log(`Получен запрос на ${ request.url }`);
  next()
});

app.use('/app', express.static('app'));

// ЗАПРОСЫ:
getUsers(router)
getUserById(router)

app.use((err, request, response, next) => {
  console.log(`Завершён с ошибкой: ${ err }`);
});

app.use('/api/v1', router);
app.listen(PORT);

console.log(`Сервер запущен на хосте 127.0.0.1:${ PORT }`);
