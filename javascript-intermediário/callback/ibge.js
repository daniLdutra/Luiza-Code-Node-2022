function consumirApi() {
  let opts = {
    method: 'GET',
    headers: {},
  };
  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados', opts)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      document.getElementById('listaEstados').innerHTML = '';

      for (let index in response) {
        let uf = response[index];
        let paragrafo = document.createElement('p');
        let texto = document.createTextNode(
          `${uf.id} - ${uf.sigla} - ${uf.nome}`
        );

        paragrafo.appendChild(texto);

        document.getElementById('listaEstados').appendChild(paragrafo);
      }
    });
}
