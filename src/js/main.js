import '../scss/styles.scss'
import { convertDate } from "./utils/convertDate";

// получение списка пользователей
fetch("http://127.0.0.1:3000/api/v1/users", {
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
})
  .then((data) => data.json())
  .then((data) => {
    console.log(data.data)
  })
  
// добавление нового пользователя
fetch("http://127.0.0.1:3000/api/v1/user", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    "name": "Анну",
    "fullName": "Анна Петрова",
    "avatar": "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
    "dob": "2000-01-01T21:00:00.000Z",
    "faculty": 4
  })
})
  .then((data) => data.json())
  .then((data) => {
    console.log(data.data)
  })


// // удаление пользователя
fetch("http://127.0.0.1:3000/api/v1/user/11", {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
  .then((data) => data.json())
  .then((data) => {
    console.log(data.data)
  })

// замена некоторых полей пользователя по его id
fetch("http://127.0.0.1:3000/api/v1/user/2", {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    name: "Гермиона-2",
  })
})
  .then((data) => data.json())
  .then((data) => {
    console.log(data.data)
  })

// замена всех полей пользователя по его id
fetch("http://127.0.0.1:3000/api/v1/user/2", {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    name: "Гермиона",
    "fullName": "!!!!!!!!!",
    "avatar": "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
    "dob": "2000-01-01T21:00:00.000Z",
    "faculty": 2
  })
})
  .then((data) => data.json())
  .then((data) => {
    console.log(data.data)
  })
  
// получение отфильтрованного списка
fetch("http://127.0.0.1:3000/api/v1/filter?name=ж", {
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
  .then((data) => data.json())
  .then((data) => {
    console.log(data.data)
  })
