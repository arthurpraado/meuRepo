function minhaFuncao(variavel) {
    return variavel * 5
}

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
// minhaFuncao(2)

// let textoDoUsuario = prompt("Insira um texto.");
// const outraFuncao = function(texto) {
//     return texto.toLowerCase().includes("cenoura")
// }
// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// function sobreMim() {
//     return "Eu sou Arthur, tenho 28 anos, moro em São Paulo e sou estudante."
// }
// console.log(sobreMim())

// const nome = prompt("Qual seu nome?")
// const idade = +prompt("Qual sua idade?")
// const cidade = prompt("Que cidade você mora?")
// const profissao = prompt("Qual sua profissão?")
// function infoPessoa(nome, idade, cidade, profissao) {
//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
// }
// console.log(infoPessoa(nome, idade, cidade, profissao))

// function doisNumeros(primeiroNumero, segundoNumero) {
//     return primeiroNumero + segundoNumero
// }
// console.log(doisNumeros(2, 5))

// function outrosDois(primeiroNumero, segundoNumero) {
//     return primeiroNumero >= segundoNumero
// }
// console.log(outrosDois(2, 5))

// function ePar(numero) {
//     return numero % 2 === 0
// }
// console.log(ePar(8))

// function eString(string) {
//     console.log(string.length)
//     return string.toLowerCase()
// }
// console.log(eString(`Hello World!`))

// const numero1 = +prompt("Insira um número.")
// const numero2 = +prompt ("Insira outro número.")
// function somar () {
//     return numero1 + numero2
// }
// function subtrair() {
//     return numero1 - numero2
// }
// function multiplicar() {
//     return numero1 * numero2
// }
// function dividir() {
//     return numero1 / numero2
// }
// console.log(somar(), subtrair(), multiplicar(), dividir())

const arrowFunction = (parametro) => {
    return parametro
}
console.log(arrowFunction("Hello World!"))

const outraArrow = (valor1, valor2) => {
    const soma = valor1 + valor2
    console.log(arrowFunction(soma))
}
outraArrow(10, 20)

const teoremando = (cat1, cat2) => {
    let hip
    hip = Math.sqrt(cat1*cat1 + cat2*cat2)
    return hip
}
console.log(teoremando(6, 8))


