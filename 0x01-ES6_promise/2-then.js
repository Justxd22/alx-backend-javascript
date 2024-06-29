export default function getFullResponseFromAPI(Promise) {
  return Promise
    .then(() => ({ status: 200, body: 'Success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
