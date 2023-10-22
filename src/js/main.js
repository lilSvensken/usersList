import '../scss/styles.scss'
// Импортируйте весь JS Bootstrap
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert'
// или укажите, какие плагины вам нужны:
import { Tooltip, Toast, Popover } from 'bootstrap'


fetch("http://127.0.0.1:3000/users", {
  method: 'GET'
})
  .then(response => response.json()).then(data => {
  console.log(data)
})
