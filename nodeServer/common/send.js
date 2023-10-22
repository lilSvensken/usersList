const send = (response, dataRes, status = 200, totalItems) => {
  let res = {};
  
  if (!dataRes) {
    status = 500;
    dataRes = "Необработанная ошибка сервера";
  }
  
  if (status < 400) {
    res = { data: dataRes };
    if (totalItems) res.totalItems = totalItems;
  } else {
    res = { error: dataRes };
  }
  
  response.status(status);
  response.json(res);
}

module.exports = {
  send
}
