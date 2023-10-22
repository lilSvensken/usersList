const HOST_URL = 'http://127.0.0.1:8080'

const ITEMS_DEFAULT = [
  { id: "1", name: "Samsung" },
  { id: "2", name: "Apple" },
  { id: "3", name: "Asus" },
  { id: "4", name: "Huawei" },
  { id: "5", name: "Lenovo" },
  { id: "6", name: "LG" }
]

const express = require('express')
const app = express()
const router = express.Router();

let items = JSON.parse(JSON.stringify(ITEMS_DEFAULT));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', HOST_URL);
  next();
});

app.use((request, response, next) => {
  console.log(`Получен запрос на ${request.url}`);
  next()
});

app.use('/app', express.static('app'));

// FIXME ЗАПРОСЫ START:
/***
 Запросы:
 */
router.get("/items", (request, response) => {
  response.json(items);
});

router.post("/select/:id", (request, response) => {
  let id = request.params.id;
  let index = ((value) => {
    for (var i = 0; i < items.length; i++) {
      if (items[i].id === value) {
        return i;
      }
    }
    return -1;
  })(id);
  if (index >= 0) {
    items.splice(index, 1);
  }
  response.json({ status: (index >= 0) ? 'ok' : 'err' });
});

// FIXME ЗАПРОСЫ END:

app.use((err, request, response, next) => {
  console.log(`Завершён с ошибкой: ${err}`);
});

app.use('/', router);
app.listen(3000);

console.log('Сервер запущен на хосте 127.0.0.1:3000');
