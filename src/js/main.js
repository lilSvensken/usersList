import '../scss/styles.scss'
import { convertDate } from "./utils/convertDate";

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
