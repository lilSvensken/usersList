import { BASE_URL } from "../utils/consts";

export function makeRequest(method = 'GET', path, body) {
  return fetch(`${ BASE_URL }/${ path }`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then((data) => data.json())
    .catch((err) => console.error(err))
}
