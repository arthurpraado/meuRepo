// const respostaDoUsuario = +prompt("Digite o número que você quer testar.")

// if (respostaDoUsuario % 2 === 0) {
//     console.log("Passou no teste.")
// } else {
//     console.log("Não passou no teste.")
// }

// let fruta = prompt("Escolha uma fruta.")
// let preco
// switch(fruta) {
//     case "Laranja":
//         preco = 3,5
//         break;
//     case "Maçã":
//         preco = 2.25
//         break;
//     case "Uva":
//         preco = 0.30
//         break;
//     case "Pêra":
//         preco = 0.30
//         break;
//     default:
//         preco = 5
//         break;
// }
// console.log("O preço da fruta ", fruta, " é " , "R$ ", preco)

// const numero = +prompt("Digite o primeiro número.")

// if (numero > 0) {
//     console.log("Esse número passou no teste.")
// } else {
//     console.log("Esse número não passou no teste")
// }

// const perguntaUsuario = +prompt("Qual sua idade?")
// const idade = +perguntaUsuario

// if (idade >= 18) {
//     console.log("Você pode dirigir.")
// } else {
//     console.log("Você não pode dirigir.")
// }

// const outraPergunta = prompt("Que turno você estuda? M para matutino, V para vespertino e N para noturno.")

// if (outraPergunta == "M") {
//     console.log("Bom dia!")
// } else if(outraPergunta == "V") {
//     console.log("Boa tarde!")
// } else if (outraPergunta == "N") {
//     console.log("Boa noite!")
// } else {
//     console.log("Resposta errada.")
// }

// switch(outraPergunta){
//     case "M":
//         console.log("Bom dia!")
//         break;
//     case "V":
//         console.log("Boa tarde!")
//         break;
//     case "N":
//         console.log("Boa noite!")
//         break;
//     default:
//         console.log("Resposta errada...")
// }

// const qualGenero = prompt("Qual o gênero do filme?").toLowerCase()
// const qualPreco = +prompt("Qual o preço do ingresso?")
// const qualLanchinho = prompt("Qual lanchinho você vai comer?")

// if (qualGenero == "fantasia" && qualPreco < 15) {
//     console.log(`Bom filme! Aproveite o seu ${qualLanchinho}!`)
// } else {
//     console.log("Escolha outro filme ):")
// }

const nomeUsuario = prompt("Qual o seu nome?")
const tipoDeJogo = prompt("Qual o Tipo de jogo? IN para internaciona, DO para doméstico").toUpperCase()
const etapaDoJogo = prompt("Qual a etapa do Jogo? SF para semi-final, DT para terceiro lugar, FI para final").toUpperCase()
const categoria = +prompt("Qual a categoria? 1, 2, 3 ou 4?")
const quantidadeIngressos = +prompt("Qual a quantidade de ingressos?")
let valorDoIngresso
let valorTotal
let casaOuFora
let etapa
let cat
let quantidade
let nome

if (tipoDeJogo == "IN" && etapaDoJogo == "SF" && categoria == 1) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Semifinal"
    casaOuFora = "Tipo do jogo: Internacional"
    valorDoIngresso = `Valor do Ingresso: R$ 1320`
    valorTotal = `Valor total: ${1320 * 4.10 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "IN" && etapaDoJogo == "SF" && categoria == 2) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Semifinal"
    casaOuFora = "Tipo do jogo: Internacional"
    valorDoIngresso = `Valor do Ingresso: R$ 880`
    valorTotal = `Valor total: ${880 * 4.10 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "IN" && etapaDoJogo == "SF" && categoria == 3) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Semifinal"
    casaOuFora = "Tipo do jogo: Internacional"
    valorDoIngresso = `Valor do Ingresso: R$ 550`
    valorTotal = `Valor total: ${550 * 4.10 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "IN" && etapaDoJogo == "SF" && categoria == 4) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Semifinal"
    casaOuFora = "Tipo do jogo: Internacional"
    valorDoIngresso = `Valor do Ingresso: R$ 220`
    valorTotal = `Valor total: ${220 * 4.10 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "IN" && etapaDoJogo == "DT" && categoria == 1) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Decisão do terceiro lugar"
    casaOuFora = "Tipo do jogo: Internacional"
    valorDoIngresso = `Valor do Ingresso: R$ 660`
    valorTotal = `Valor total: ${660 * 4.10 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "IN" && etapaDoJogo == "DT" && categoria == 2) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Decisão do terceiro lugar"
    casaOuFora = "Tipo do jogo: Internacional"
    valorDoIngresso = `Valor do Ingresso: R$ 440`
    valorTotal = `Valor total: ${440 * 4.10 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "IN" && etapaDoJogo == "DT" && categoria == 3) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Decisão do terceiro lugar"
    casaOuFora = "Tipo do jogo: Internacional"
    valorDoIngresso = `Valor do Ingresso: R$ 330`
    valorTotal = `Valor total: ${330 * 4.10 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "IN" && etapaDoJogo == "DT" && categoria == 4) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Decisão do terceiro lugar"
    casaOuFora = "Tipo do jogo: Internacional"
    valorDoIngresso = `Valor do Ingresso: R$ 170`
    valorTotal = `Valor total: ${170 * 4.10 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "IN" && etapaDoJogo == "FI" && categoria == 1) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Final"
    casaOuFora = "Tipo do jogo: Internacional"
    valorDoIngresso = `Valor do Ingresso: R$ 1980`
    valorTotal = `Valor total: ${1980 * 4.10 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "IN" && etapaDoJogo == "FI" && categoria == 2) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Final"
    casaOuFora = "Tipo do jogo: Internacional"
    valorDoIngresso = `Valor do Ingresso: R$ 1320`
    valorTotal = `Valor total: ${1320 * 4.10 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "IN" && etapaDoJogo == "FI" && categoria == 3) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Final"
    casaOuFora = "Tipo do jogo: Internacional"
    valorDoIngresso = `Valor do Ingresso: R$ 880`
    valorTotal = `Valor total: ${880 * 4.10 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "IN" && etapaDoJogo == "FI" && categoria == 4) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Final"
    casaOuFora = "Tipo do jogo: Internacional"
    valorDoIngresso = `Valor do Ingresso: R$ 330`
    valorTotal = `Valor total: ${330 * 4.10 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "DO" && etapaDoJogo == "SF" && categoria == 1) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Semifinal"
    casaOuFora = "Tipo do jogo: Nacional"
    valorDoIngresso = `Valor do Ingresso: R$ 1320`
    valorTotal = `Valor total: ${1320 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "DO" && etapaDoJogo == "SF" && categoria == 2) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Semifinal"
    casaOuFora = "Tipo do jogo: Nacional"
    valorDoIngresso = `Valor do Ingresso: R$ 880`
    valorTotal = `Valor total: ${880 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "DO" && etapaDoJogo == "SF" && categoria == 3) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Semifinal"
    casaOuFora = "Tipo do jogo: Nacional"
    valorDoIngresso = `Valor do Ingresso: R$ 550`
    valorTotal = `Valor total: ${550 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "DO" && etapaDoJogo == "SF" && categoria == 4) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Semifinal"
    casaOuFora = "Tipo do jogo: Nacional"
    valorDoIngresso = `Valor do Ingresso: R$ 220`
    valorTotal = `Valor total: ${220 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "DO" && etapaDoJogo == "DT" && categoria == 1) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Decisão de Terceiro Lugar"
    casaOuFora = "Tipo do jogo: Nacional"
    valorDoIngresso = `Valor do Ingresso: R$ 660`
    valorTotal = `Valor total: ${660 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "DO" && etapaDoJogo == "DT" && categoria == 2) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Decisão de Terceiro Lugar"
    casaOuFora = "Tipo do jogo: Nacional"
    valorDoIngresso = `Valor do Ingresso: R$ 440`
    valorTotal = `Valor total: ${440 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "DO" && etapaDoJogo == "DT" && categoria == 3) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Decisão de Terceiro Lugar"
    casaOuFora = "Tipo do jogo: Nacional"
    valorDoIngresso = `Valor do Ingresso: R$ 330`
    valorTotal = `Valor total: ${330 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "DO" && etapaDoJogo == "DT" && categoria == 4) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Decisão de Terceiro Lugar"
    casaOuFora = "Tipo do jogo: Nacional"
    valorDoIngresso = `Valor do Ingresso: R$ 170`
    valorTotal = `Valor total: ${170 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "DO" && etapaDoJogo == "FI" && categoria == 1) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Final"
    casaOuFora = "Tipo do jogo: Nacional"
    valorDoIngresso = `Valor do Ingresso: R$ 1980`
    valorTotal = `Valor total: ${1980 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "DO" && etapaDoJogo == "FI" && categoria == 2) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Final"
    casaOuFora = "Tipo do jogo: Nacional"
    valorDoIngresso = `Valor do Ingresso: R$ 1320`
    valorTotal = `Valor total: ${1320 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "DO" && etapaDoJogo == "FI" && categoria == 3) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Final"
    casaOuFora = "Tipo do jogo: Nacional"
    valorDoIngresso = `Valor do Ingresso: R$ 880`
    valorTotal = `Valor total: ${880 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else if (tipoDeJogo == "DO" && etapaDoJogo == "FI" && categoria == 4) {
    nome = `Nome do cliente: ${nomeUsuario}`
    quantidade = `Quantidade de ingressos: ${quantidadeIngressos} ingressos`
    cat = `Categoria: ${categoria}`
    etapa = "Etapa do jogo: Final"
    casaOuFora = "Tipo do jogo: Nacional"
    valorDoIngresso = `Valor do Ingresso: R$ 330`
    valorTotal = `Valor total: ${330 * quantidadeIngressos}`
    console.log([nome, casaOuFora, etapa, cat, quantidade, valorDoIngresso, valorTotal])
} else {
    console.log("Inválido.")
}