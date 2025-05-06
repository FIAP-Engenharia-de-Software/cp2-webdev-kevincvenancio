// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  let erroP = "Erro: parâmetros inválidos"
  let erroD = "Erro: divisão por zero"
  let erroO = "Erro: operação inválida"
  let mais = num1 + num2
  let menos = num1 - num2
  let multiplicacao = num1 * num2
  let divisao = num1 / num2
  let resto = num1 % num2
  if ((num1 || num2) != (Number(num1) || Number(num2))) {
    return erroP
  }
  else if (num1 / num2 == Error) {
    return erroD
  }
  else if (operador != ("+" || "-" || "/" || "*" || "%")) {
    return erroO
  }
  else if (operador == "+") {
    return mais
  }
  else if (operador == "-") {
    return menos
  }
  else if (operador == "*") {
    return multiplicacao
  }
  else if (operador == "%") {
    return resto
  }
  else {
    return divisao
  }
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };