const { ITEMS_DEFAULT } = require('../bd/items.js');
let items = JSON.parse(JSON.stringify(ITEMS_DEFAULT));

const getItems = (router) => {
  router.get("/items", (request, response) => {
    response.json(items);
  });
}

const setItems = (router) => {
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
}

module.exports = {
  getItems,
  setItems
};
