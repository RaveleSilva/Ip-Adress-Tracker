
const logradouroDiv = document.querySelector('.ip-address span');
const bairroDiv = document.querySelector('.location span');
const cidadeDiv = document.querySelector('.timezone span');
const estadoDiv = document.querySelector('.isp span');
const botaoBusca = document.querySelector('.input-ip button');
const cepElement = document.querySelector('.input-ip input');

function atualizarEndereco(data) {
  //Pega os dados da API
  const logradouro = data.logradouro;
  const bairro = data.bairro;
  const cidade = data.localidade;
  const estado = data.uf;

  //Atualiza os campos do site com os dados obtidos
  logradouroDiv.innerHTML = logradouro;
  bairroDiv.innerHTML = bairro;
  cidadeDiv.innerHTML = cidade;
  estadoDiv.innerHTML = estado;
}

function validarCep(cep) {
  if (cep.length != 8) {
    window.alert('CEP Inválido')
  } else {
    return true
  }
}

//Função para buscar os dados de endereço na API
function buscarEndereco() {
  const cep = cepElement.value;
  if(validarCep(cep)) {
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => atualizarEndereco(data));
  }
};

botaoBusca.addEventListener('click', buscarEndereco);
