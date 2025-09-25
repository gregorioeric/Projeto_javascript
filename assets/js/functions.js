// Função simples sem parâmetro
function mensagemBoasVindas() {
  console.log("Bem-vindo ao sistema!");
}

mensagemBoasVindas();

function msgError() {
  console.log("Erro ao tentar acessar o sistema!");
}

msgError();

// Função simples com parâmetro
function receberParametro(recebendoTexto) {
  console.log(recebendoTexto);
}

receberParametro("Enviando texto para a função!");

function receberNumero(recebendoNumero) {
  console.log(recebendoNumero);
}

receberNumero(5);

function funcionario(nome, email, salario) {
  const func = `
    O nome do funcionario é ${nome}, o email é ${email}, o salario é ${salario}.
  `;
  console.log(func);
}

funcionario("Eric Greghorio", "eric@eric.com", 10000.55);

function vendaFrutas(fruta, preco, peso) {
  const frutaSelecionada = `
    Fruta escolhida ${fruta}, preço por kg ${preco}, o peso ${peso}kg.
  `;
  console.log(frutaSelecionada);
}

vendaFrutas("Morango", 12.5, 0.3);
