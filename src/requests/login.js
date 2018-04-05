import fetch from 'universal-fetch';
import config from '../config';

export default (email, password) =>
  fetch(config.API_ENDPOINT, {
    body: JSON.stringify({
      username: email,
      password: password
    }),
    headers: {
      'accept': 'application/json'
    },
    method: 'POST'
  })
  .then(res => res.json())
  .then(payload => payload.results);
