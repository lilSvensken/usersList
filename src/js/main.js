import '../scss/styles.scss'
import { UsersList } from "./components/usersList.js";
import { AddUser } from "./components/addUser";

class Main {
  constructor() {
    const userListClass = new UsersList();
    new AddUser(userListClass);
  }
}

new Main();


// import { makeRequest } from './api/api.js';
//
// makeRequest('GET')
//   .then((data) => {
//     console.log(data.data)
//   })
