export function convertDate(dateStr) {
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
