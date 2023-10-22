const { USERS } = require('../bd/users.js');
const { send } = require('../common/send.js');

// получение списка пользователей
const getUsers = (router) => {
  router.get("/users", (request, response) => {
    send(response, USERS, 200);
  });
}

// получение пользователя по id
const getUserById = (router) => {
  router.get("/user/:id", (request, response) => {
    let id = request.params.id;
    const user = USERS.find((user) => user.id === +id)
    if (user) {
      send(response, user, 200);
    } else {
      send(response, `Пользователя с id ${ id } не существует`, 404);
    }
  });
}

// добавление нового пользователя
const sendNewUser = (router) => {
  router.post("/user", (request, response) => {
    const newUser = request.body;
    // добавить еще обязательные поля
    if (!newUser.name) {
      send(response, `Нет обязательного поля name`, 404);
    } else if (!newUser.fullName) {
      send(response, `Нет обязательного поля fullName`, 404);
    } else {
      const newId = USERS.reduce((a, b) => a > b.id ? a : b.id) + 1;
      USERS.push({
        id: newId,
        ...newUser
      });
      send(response, USERS, 200);
    }
  });
}

module.exports = {
  getUsers,
  getUserById,
  sendNewUser
};
