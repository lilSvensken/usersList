const { USERS } = require('../bd/users.js');
let users = JSON.parse(JSON.stringify(USERS));

const getUsers = (router) => {
  router.get("/users", (request, response) => {
    response.json(users);
  });
}

module.exports = {
  getUsers
};
