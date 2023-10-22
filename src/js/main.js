import '../scss/styles.scss'
// Импортируйте весь JS Bootstrap
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert'
// или укажите, какие плагины вам нужны:
import { Tooltip, Toast, Popover } from 'bootstrap'

// fetch("http://127.0.0.1:3000/api/v1/users", {
//   method: "GET",
// })
//   .then((data) => data.json())
//   .then((usersArr) => {
//     if (usersArr.data) usersArr.data.map(userItem => createUserCard(userItem))
//   })

function createUserCard(user) {
  document.body.innerHTML += `
    <div class="card">
      <h3>Имя: ${ user.name }</h3>
      <img src="${ user.avatar }" alt="${ user.username }">
      <p>Др: ${ convertDate(user.dob) }</p>
    </div>
  `
}

function convertDate(dateStr) {
  const date = new Date(dateStr);
  
  return [
    addLeadZero(date.getDate()),
    addLeadZero(date.getMonth() + 1),
    date.getFullYear()
  ].join('.');
}

function addLeadZero(val) {
  if (+val < 10) return '0' + val;
  return val;
}

// fetch("http://127.0.0.1:3000/api/v1/user/2", {
//   method: "GET",
// })
//   .then((data) => data.json())
//   .then((user) => {
//     console.log(user.data.name)
//   })

fetch("http://127.0.0.1:3000/api/v1/user/1", {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
})
  .then((data) => data.json())
  .then((data) => {
    document.body.innerHTML = ''
    if (data.data) data.data.map(userItem => createUserCard(userItem))
  })

