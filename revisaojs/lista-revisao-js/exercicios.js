// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
//   return array.reverse()
    let arrayInvertido = []
    for (let i = array.length-1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let crescente = array.sort((a, b) => a - b)
    return crescente
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
//    const numerosPares = array.filter((par) => {
//     return par % 2 === 0
//    })
//    return numerosPares
    let numerosPares = []
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 2 === 0) {
    //         numerosPares.push(array[i])
    //     }
    // }

    // for (let pares of array) {
    //     if (pares % 2 === 0) {
    //         numerosPares.push(pares)
    //     }
    // }
    let i = 0
    while (i < array.length) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i])
        }
        i++
    }
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   const pares = retornaNumerosPares(array)
   const paresElevados = pares.map((numero) => {
    return numero * numero
   })
    return paresElevados     
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
    let maiorNumero = num1
    let menorNumero = num2
    
    if (menorNumero - maiorNumero > 0) {
        maiorNumero = num2
        menorNumero = num1
    }

    const objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
        diferenca: maiorNumero - menorNumero
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let primeirosPares = []
   for (let i = 0; i < n; i++) {
    primeirosPares.push(i * 2)
   }
   return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } 
        
    if ((ladoA === ladoB && ladoB !== ladoC) || 
        (ladoB === ladoC && ladoC !== ladoA) || 
        (ladoA === ladoC && ladoB !== ladoA)){
        return "Isósceles"
    } 
    
    if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayOrdenado = retornaArrayOrdenado(array)
    let segundoMenor = arrayOrdenado[1]
    let segundoMaior = arrayOrdenado[array.length-2]
    return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa, nome: "ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let novoArray = []
   for (let i = 0; i < pessoas.length; i++) {
   const pessoa = pessoas[i]
   if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
        novoArray.push(pessoa)
   }
}
   return novoArray
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let arrayRemover = pessoas.filter((pessoa) => {
   return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60 
   })
   return arrayRemover
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
   for (let c of contas) {
    let debito = 0
    for (let item of c.compras) {
        debito += item
    }
    c.saldoTotal -= debito
    c.compras = []
   }
   return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const arrayOrdenado = consultas.sort((a, b) => {
        if (a.nome < b.nome) {
            return -1
        }
        if (a.nome > b.nome) {
            return 1
        }
        return 0
    })
    return arrayOrdenado
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const arrayOrdenado = consultas.sort((a, b) => {
        const dA = a.dataDaConsulta
        const dataA = new Date (
            dA.substring(6, 10),
            dA.substring(3, 5) - 1,
            dA.substring(0, 2)
        )

        const db = b.dataDaConsulta
        const dataB = new Date (
            db.substring(6, 10),
            db.substring(3,5) -1,
            db.substring(0, 2)
        )

        if (dataA > dataB) {
            return 1
        }
        if (dataA < dataB) {
            return -1
        }
        return 0
    })
    return arrayOrdenado
}