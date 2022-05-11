import fetch from 'node-fetch';

// Fetch request na API do GitHub
// Fetch API

const username = 'daniLdutra';

fetch(`http://api.github.com/users/${username}`, {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
})
  .then((response) => {
    //console.log(typeof response);
    //console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(`O nome do usuário é: ${data.name}`);
  })
  .catch((err) => {
    console.log(`Ocorreu um erro: ${err}`);
  });
