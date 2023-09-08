// let valor = 0
// for (let i = 0; i < 5; i++) {
//     valor += i
// }
// console.log(valor)

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let i = 0
// for (let numero of lista) {
//     if (numero > 18) {
//         console.log(numero, "indice", i)
//     }
//     i++
// }

// const quantidadeTotal = +prompt("Digite a quantidade de linhas: ")
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal) {
//     let linha = ""
//     for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos ++) {
//         linha += "*"
//     }
//     console.log(linha)
//     quantidadeAtual++
// }

// const quantosBichinhos = +prompt("Quantos bichinhos você tem?")

// if (quantosBichinhos == 0) {
//     console.log( "Que pena! Você pode adotar um pet.")
// }
// else {
//     let bichinhos = []
//     for (let i = 0; i < quantosBichinhos; i++) {
//         bichinhos.push(prompt("Diga o nome deles, um por um."))
//     }
//     console.log(bichinhos)
// }

let arrayOriginal = [81, 9, 28, 40, 99, 1, 3, 58]

// const imprimeOriginal = () => {
// for (let i = 0; i < arrayOriginal.length; i++) {
//     console.log(arrayOriginal[i])
// }
// }
// imprimeOriginal()

// const imprimeOriginalPor10 = () => {
//     for (let i = 0; i < arrayOriginal.length; i++) {
//         console.log(arrayOriginal[i] / 10)
//     }
// }
// imprimeOriginalPor10()

// const imprimeNumerosPares = () => {
//     let novoArray = []
//     for (let i = 0; i < arrayOriginal.length; i++) {
//         if (arrayOriginal[i] % 2 === 0){
//             novoArray.push(arrayOriginal[i])
//         }
//     }
//     console.log(novoArray)
// }
// imprimeNumerosPares()

// let arrayStrings = []
// const imprimeStrings = () => {
//     for (let i  = 0; i < arrayOriginal.length; i++) {
//         arrayStrings.push(`O elemento index ${[i]} é ${arrayOriginal[i]}`)
//     }
//     console.log(arrayStrings)
// }
// imprimeStrings()

// const imprimeMaiorEMenor = () => {
//     let valorMaximo = 0
//     let valorMinimo = Infinity
//     let arrayMaiorMenor = []
//     for (let i = 0; i < arrayOriginal.length; i++) {
//         if (valorMinimo > arrayOriginal[i]){
//             valorMinimo = arrayOriginal[i]
//         }
//         else if (valorMaximo < arrayOriginal[i]) {
//            valorMaximo = arrayOriginal[i]
//         }
//     }
//     arrayMaiorMenor.push(valorMaximo, valorMinimo)
//     console.log(`O maior e menor número são: ${arrayMaiorMenor}`)
// }
// imprimeMaiorEMenor()

// const numeroPensado = +prompt("Insira um número qualquer.")
// console.log("Vamos jogar!")
// let numeroTentativas = 1

// for (let i = 0; i < numeroPensado; i++) {
//     const chutaNumero = +prompt("Chute um número até acertar.")
//     console.log(`O número chutado foi: ${chutaNumero}`)
//     if (chutaNumero === numeroPensado) {
//         console.log("Acertou!!")
//         console.log(`O número de tentativas foi: ${numeroTentativas++}`)
//         break;
//     } else if (chutaNumero < numeroPensado) {
//         numeroTentativas++
//         console.log("Errrrrrou! É maior!")
//     } else if (chutaNumero > numeroPensado) {
//         console.log("Errrrrrou! É menor.")
//         numeroTentativas++
//     }
// }
console.log("Vamos jogar!")
const numeroEscolhido = Math.floor(Math.random() * 100) + 1
let numeroTentativas = 1

for (let i = 0; i < numeroEscolhido; i++) {
    const chutaNumero = +prompt("Chute um número até acertar.")
    console.log(`O número chutado foi: ${chutaNumero}`)
    if (chutaNumero === numeroEscolhido) {
        console.log("Acertou!!")
        console.log(`O número de tentativas foi: ${numeroTentativas++}`)
        break;
    } else if (chutaNumero < numeroEscolhido) {
        numeroTentativas++
        console.log("Errrrrrou! É maior!")
    } else if (chutaNumero > numeroEscolhido) {
        console.log("Errrrrrou! É menor.")
        numeroTentativas++
    }
}
