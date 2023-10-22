const { USERS } = require('../bd/users.js');
const { send } = require('../common/send.js');

const getUsers = (router) => {
  router.get("/users", (request, response) => {
    send(response, USERS, 200);
  });
}

const getUserById = (router) => {
  router.get("/user/:id", (request, response) => {
    let id = request.params.id;
    const user = USERS.find((user) => user.id === +id)
    if (user) {
      send(response, user, 200);
    } else {
      send(response, `Пользователя с id ${id} не существует`, 404);
    }
  });
}

module.exports = {
  getUsers,
  getUserById
};
