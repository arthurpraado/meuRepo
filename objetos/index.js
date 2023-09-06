// const filme = {
//     nome: "Auto da Compadecida",
//     ano: 2000,
//     elenco: [
//         "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish"
//     ],
//     transmissoesHoje: [
//         {canal: "Telecine", horario: "21h"},
//         {canal: "Canal Brasil", horario: "19h"},
//         {canal: "Globo", horario: "14h"}
//     ]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// const cachorro = {
//     nome: "Juca",
//     idade: 3,
//     raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// const minhaFuncao = (objeto, propriedade) => {
//     return objeto[propriedade]
// }

// const pessoa = {
//     nome: "Caio",
//     idade: 23,
//     backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// const pessoa = {
//     nome: "Arthur",
//     apelidos: ["Tuba", "Tinky", "Beibe"]
// }

// const minhaPessoa = (objeto) => {
//     console.log(`Eu me chamo ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`)
// }
// minhaPessoa(pessoa)

// const novosApelidos = {...pessoa, apelidos: ["Tu", "Tutu","Etu"]}
// minhaPessoa(novosApelidos)

// const primeiraPessoa = {
//     nome: "João",
//     idade: 28,
//     profissao: "Estudante"
// }

// const segundaPessoa = {
//     nome: "José",
//     idade: 800,
//     profissao: "Programador"
// }

// const pessoas = (propriedade) => {
//     return [propriedade.nome, propriedade.nome.length, propriedade.idade, propriedade.profissao, propriedade.profissao.length]
// }
// console.log(pessoas (primeiraPessoa))
// console.log(pessoas (segundaPessoa))

let carrinho = []

const frutaUm = {
    nome: "Maçã",
    disponibilidade: true,
}
const frutaDois = {
    nome: "Pera",
    disponibilidade: true,
}
const frutaTres = {
    nome: "Banana",
    disponibilidade: true,
}

const adicionaSacolao = (fruta) => {
    return carrinho.push(fruta) 
}
adicionaSacolao([frutaUm, frutaDois, frutaTres])
console.log(carrinho)

const perguntaUsuario = () => {
    const usuario = {
    nome: prompt("Qual o seu nome?"),
    idade: +prompt("Qual sua idade?"),
    profissao: prompt("Qual sua profissão?"),
}
console.log(usuario)
console.log(typeof usuario)
}
perguntaUsuario()



const filmeUm = {
    nome: "Unlimited",
    lançamento: 2010
}
const filmeDois = {
    nome: "Avengers",
    lançamento: 2014
}
const recebeFilmes = (filme) => {
    return filme
}
console.log(recebeFilmes(`O primeiro filme foi lançado antes do segundo? ${filmeUm.lançamento < filmeDois.lançamento}`))
console.log(recebeFilmes(`O primeiro filme foi lançado no mesmo ano do segundo? ${filmeUm.lancamento == filmeDois.lançamento}`))

const auxiliaSacolao = (fruta) => {
    return {...fruta, nome:fruta.nome, disponibilidade: !fruta.disponibilidade}
}
console.log(auxiliaSacolao(frutaUm))
console.log(auxiliaSacolao(frutaDois))
console.log(auxiliaSacolao(frutaTres))