// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = +prompt("Digite a altura do retângulo")
  const largura = +prompt("Digite a largura do retângulo")
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = +prompt("Qual o ano atual?")
  const anoNascimento = +prompt("Que ano você nasceu?")
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc
  return imc = peso / (altura * altura) 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario = prompt("Qual seu nome?")
  const idadeUsuario = +prompt("Qual a sua idade?")
  const emailUsuario = prompt("Qual seu email?")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let array = []
  const umaCor = prompt("Qual sua cor favorita?")
  const outraCor = prompt("Qual sua segunda cor favorita?")
  const terceiraCor = prompt("Qual sua terceira cor favorita?")
  array.push(umaCor, outraCor, terceiraCor)
  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let ingressosVendidos
  return ingressosVendidos = custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length == string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array
  return ultimoElemento[ultimoElemento.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let arrayTemp = array[0]
  let outroArrayTemp = array[array.length - 1]
  array[0] = outroArrayTemp
  array[array.length - 1] = arrayTemp
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let toUpper1 = string1.toUpperCase()
  let toUpper2 = string2.toUpperCase()
  return toUpper1 == toUpper2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = +prompt("Digite o ano atual")
  const anoNasceu = +prompt("Digite o ano de nascimento?")
  const anoCarteira = +prompt("Digite o ano de emissão do documento")

  const vinteOuMenos = anoAtual - anoNasceu <= 20 && anoAtual - anoCarteira >= 5  
  const vinteOuCinquenta = anoAtual - anoNasceu > 20 && anoAtual - anoNasceu <= 50 && anoAtual - anoCarteira >= 10 
  const maisQueCinquenta = anoAtual - anoNasceu > 50 && anoAtual - anoCarteira >= 15 

  console.log(vinteOuMenos || vinteOuCinquenta || maisQueCinquenta)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let anoBissexto 
  const multiplosDe400 = ano % 400 === 0 
  const multiplosde4 =( ano % 4 === 0) && (ano % 100 !== 0)
  anoBissexto = multiplosDe400 || multiplosde4
  return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDeIdade = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  console.log(maiorDeIdade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim" === true, maiorDeIdade === "não" || ensinoMedio === "não" || disponibilidade === "não" === false  )

}