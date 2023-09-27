let array
console.log("a. ", array)

array = null
console.log("b . ", array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log("c .", array.length)

let i = 0
console.log("d .", array[i])

array[i+1] = 19
console.log("e. ", array)

const valor = array[i + 6]
console.log("f .", valor)

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// const qualEmail = prompt("Digite seu Email.")
// const qualNome = prompt("Digite seu nome.")
// console.log(`O email ${qualEmail} foi cadastrado com sucesso. seja bem vinda(o), ${qualNome}.`)

// let arraycomidas
// arraycomidas = ["strogonoff", "macarrao", "guacamole", "pizza", "hamburguer"];
// console.log(arraycomidas)

// console.log(`Essas são as minhas comidas preferidas: ${arraycomidas}`)

// arraycomidas [1] = prompt(`Qual sua comida preferida?`)
// console.log(arraycomidas)

// let listaDeTarefas = []
// const primeiraTarefa = prompt("Liste uma tarefa que você precise fazer hoje.")
// const segundaTarefa = prompt("Liste outra tarefa que você precise fazer hoje.")
// const terceiraTarefa = prompt("Liste mais uma tarefa que você precise fazer hoje.")

// listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa)
// console.log(listaDeTarefas)

// let qualTarefa = prompt("digite uma das tarefas já realizada (0, 1, ou 2)")
// listaDeTarefas.splice(qualTarefa, 1)
// console.log(listaDeTarefas)

const frase = "hoje fui no mercado e padaria"
const separador = " "
console.log(frase.split(separador))

let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let acharAbacaxi = arrayFrutas[2]
console.log(arrayFrutas.indexOf(acharAbacaxi), arrayFrutas.length)