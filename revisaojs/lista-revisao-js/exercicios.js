// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
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
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i])
        }
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
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}