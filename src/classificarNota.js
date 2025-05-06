// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  let aprovado = "Aprovado"
  let reprovado = "Reprovado"
  let notaInvalida = "Nota inválida"
  if ((nota != Number(nota)) || (nota > 10) || (nota < 0)) {
    return notaInvalida
  }
  else if (nota >= 6) {
    return aprovado
  }
  else {
    return reprovado
  }
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };