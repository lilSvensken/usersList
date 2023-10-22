const { getUsers, getUserById, sendNewUser, deleteUser, changeUser, replaceUser } = require('./api/users.js');

const HOST_URL = 'http://localhost:8080';
const PORT = 3000;

// Подключение новых запросов:
function initRequests(router) {
  getUsers(router)
  getUserById(router)
  sendNewUser(router)
  deleteUser(router)
  changeUser(router)
  replaceUser(router)
}

const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());
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

initRequests(router)

app.use((err, request, response, next) => {
  console.log(`Завершён с ошибкой: ${ err }`);
});

app.use('/api/v1', router);
app.listen(PORT);

console.log(`Сервер запущен на хосте 127.0.0.1:${ PORT }`);
