export default function handleResponseFromAPI(promise) {
  .then(() => return ({ status: 200, body: 'success' }))
  .catch(() => throw Error())
  .finally(() => {
    console.log('Got a response from the API')
  });
}
