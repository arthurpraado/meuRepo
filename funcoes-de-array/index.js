// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi"},
//     { nome: "Laís Petra", apelido: "Laura"},
//     { nome: "Letícia Chijo", apelido: "Chijo"}
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//     console.log(item, index, array)
// })

// const usuariosDois = [
//     { nome: "Amanda Rangel", apelido: "Mandi"},
//     { nome: "Laís Petra", apelido: "Laura"},
//     { nome: "Letícia Chijo", apelido: "Chijo"}
// ]

// const novoArrayB = usuariosDois.map((item, index, array) => {
//     return item.nome
// })
// console.log(novoArrayB)

// const usuariosTres = [
//     { nome: "Amanda Rangel", apelido: "Mandi"},
//     { nome: "Laís Petra", apelido: "Laura"},
//     { nome: "Letícia Chijo", apelido: "Chijo"}
// ]

// const novoArrayC = usuariosTres.filter((item, index, array) => {
//     return item.apelido !== "Chijo"
// })
// console.log(novoArrayC)

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const arrayNomes = pets.map((nome) => {
    return nome.nome
})
console.log(arrayNomes)

const cachorrosSalsicha = pets.filter((raca) => {
    return raca.raca === "Salsicha"
})
console.log(cachorrosSalsicha)

const clientesPoodles = pets.filter((raca) => {
    if (raca.raca === "Poodle") {
        return raca
    }
}).map((nome) => {
    return(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nome.nome}`)
})
console.log(clientesPoodles)

const produtos = [
    { nome:"Alface Lavada", categoria:"Hortifruti", preco: 2.5},
    { nome:"Guaraná 21", categoria:"Bebidas", preco: 7.8},
    { nome: "Veja Multiuso", categoria:"Limpeza", preco: 12.6},
    { nome: "Dúzia de Banana", categoria:"Hortifruti", preco: 5.7},
    { nome: "Leite", categoria: "Bebidas", preco: 2.99},
    { nome: "Cândida", categoria:"Limpeza", preco: 3.30},
    { nome: "Detergente Ypê", categoria:"Limpeza", preco: 2.20},
    { nome: "Vinho Tinto", categoria:"Bebidas", preco: 55},
    { nome: "Berinjela Kg", categoria:"Hortifruti", preco: 8.99},
    { nome: "Sabão em Pó Ypê", categoria:"Limpeza", preco: 10.80},
]

const nomesProdutos = produtos.map((item) => {
    return item.nome
})
console.log(nomesProdutos)

const arrayDesconto = produtos.map((item) => {
    return [item.nome, item.preco * 0.95]
})
console.log(arrayDesconto)

const arrayBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
console.log(arrayBebidas)

const arrayYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
console.log(arrayYpe)

const arrayFrase = produtos.filter((item) => {
    return item.nome.includes("Ypê")
}).map((item) => {
    return (`Compre ${item.nome} por ${item.preco}`)
})
console.log(arrayFrase)

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama"},
    { nome: "Bellsprout", tipo: "grama"},
    { nome: "Charmander", tipo: "fogo"},
    { nome: "Vulpix", tipo: "fogo"},
    { nome: "Squirtle", tipo: "água"},
    { nome: "Psyduck", tipo: "água"},
]

const arrayNomesPokemons = pokemons.map((item) => {
    return item.nome
}).sort()
console.log(arrayNomesPokemons)

const arrayTipos = pokemons.map((item) => {
    return item.tipo
})
const semRepetidos = [... new Set(arrayTipos)]
console.log(semRepetidos)