//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  // Obtém o nome inserido pelo usuário
  const nomeAmigo = document.getElementById("amigo").value.trim();

  // Verifica se o nome não está vazio e já não foi adicionado
  if (nomeAmigo && !amigos.includes(nomeAmigo)) {
    amigos.push(nomeAmigo);

    // Atualiza a lista visível de amigos
    exibirAmigos();

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";
  } else {
    alert("Nome inválido ou já adicionado.");
  }
}

// Função para exibir os amigos na lista
function exibirAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista existente

  // Cria a lista de amigos
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("É necessário pelo menos dois amigos para sortear.");
    return;
  }

  // Cria uma cópia da lista de amigos e embaralha
  const amigosSorteados = [...amigos];
  const resultados = [];

  while (amigosSorteados.length > 0) {
    const amigoSorteado = amigosSorteados.splice(
      Math.floor(Math.random() * amigosSorteados.length),
      1
    )[0];
    const amigoDestino = amigosSorteados.splice(
      Math.floor(Math.random() * amigosSorteados.length),
      1
    )[0];

    resultados.push(`${amigoSorteado} -> ${amigoDestino}`);
  }

  // Exibe os resultados no DOM
  exibirResultados(resultados);
}

// Função para exibir os resultados do sorteio
function exibirResultados(resultados) {
  const resultadoList = document.getElementById("resultado");
  resultadoList.innerHTML = ""; // Limpa a lista existente

  resultados.forEach((resultado) => {
    const li = document.createElement("li");
    li.textContent = resultado;
    resultadoList.appendChild(li);
  });
}
