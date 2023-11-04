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
    
    const err = getErrorByRequiredFields(newUser);
    if (err) {
      send(response, `Нет обязательных полей: ${ err }`, 404);
    } else {
      const newId = USERS.reduce((a, b) => a > b.id ? a : b.id) + 1;
      USERS.push({
        id: newId,
        ...newUser,
        faculty: Number(newUser.faculty)
      });
      send(response, USERS, 200);
    }
  });
}

// удаление пользователя
const deleteUser = (router) => {
  router.delete("/user/:id", (request, response) => {
    let id = request.params.id;
    const index = USERS.findIndex((user) => user.id === +id);
    if (index >= 0) {
      USERS.splice(index, 1);
      send(response, USERS, 200);
    } else {
      send(response, `Пользователя с id ${ id } не существует`, 404);
    }
  });
}

// замена некоторых полей пользователя
const changeUser = (router) => {
  router.put("/user/:id", (request, response) => {
    let id = request.params.id;
    const body = request.body;
    const currentUser = USERS.find(user => user.id === +id)
    if (currentUser) {
      const newUser = {
        id: +id,
        name: body.name || currentUser.name,
        fullName: body.fullName || currentUser.fullName,
        avatar: body.avatar || currentUser.avatar,
        dob: body.dob || currentUser.dob,
        faculty: body.faculty || currentUser.faculty,
      }
      USERS.splice(USERS.indexOf(currentUser), 1, newUser)
      send(response, USERS, 200);
    } else {
      send(response, `Пользователя с id ${id} не существует`, 404);
    }
  });
}

// замена пользователя
const replaceUser = (router) => {
  router.patch("/user/:id", (request, response) => {
    const newUser = request.body;
    let id = request.params.id;
    const index = USERS.findIndex((user) => user.id === +id);
    if (index >= 0) {
      const err = getErrorByRequiredFields(newUser);
      if (err) {
        send(response, `Нет обязательных полей: ${ err }`, 404);
      }
      
      USERS.splice(index, 1, {
        id: +id,
        name: newUser.name,
        fullName: newUser.fullName,
        avatar: newUser.avatar,
        dob: newUser.dob,
        faculty: newUser.faculty,
      });
      send(response, USERS, 200);
    } else {
      send(response, `Пользователя с id ${ id } не существует`, 404);
    }
  });
}

const filterUser = (router) => {
  router.get("/filter", (request, response) => {
    console.log(request.query)
    let newList = USERS;
    Object.entries(request.query).forEach(([key, value]) => {
      newList = newList.filter(user => user[key].toLowerCase()?.includes(value.toLowerCase()))
    })
    send(response, newList, 200);
  });
}

function getErrorByRequiredFields(obj) {
  const FIELDS_REQUIRED = ['name', 'fullName', 'avatar', 'dob', 'faculty'];
  const emptyFields = [];
  FIELDS_REQUIRED.forEach((field) => {
    if (!obj[field]) {
      emptyFields.push(field);
    }
  })
  
  return emptyFields.length ? emptyFields.join(', ') : null;
}

module.exports = {
  getUsers,
  getUserById,
  sendNewUser,
  deleteUser,
  changeUser,
  replaceUser,
  filterUser,
};
