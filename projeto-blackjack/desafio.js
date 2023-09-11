    let cartasUsuario = [comprarCarta(), comprarCarta()]
    let cartasComputador = [comprarCarta(), comprarCarta()]
    let comecaJogo = false

   const mostrarCartas = (arrayDeCartas) => {
       return arrayDeCartas.reduce((prev, next) => {
         return prev += next.texto+" "
      }, "")
   }

   const somarPontos = (arrayDeCartas) => {
       return arrayDeCartas.reduce((prev, next) => {
         return prev += next.valor
      }, 0)
   }

   const eParDeAs = () => {
      if (somarPontos(cartasUsuario) === 22 || somarPontos(cartasComputador) === 22) {
         cartasUsuario = [comprarCarta(), comprarCarta()]
         cartasComputador = [comprarCarta(), comprarCarta()]
      }
   }

   const retornaPontuacao = (usuario) => {
      let quemGanhou = "O computador ganhou"
      if (usuario) {
         quemGanhou = "O usuário ganhou"
      }
      return alert(`
            Usuário - Cartas: ${mostrarCartas(cartasUsuario)} - Pontuação: ${somarPontos(cartasUsuario)} 
            Computador - Cartas: ${mostrarCartas(cartasComputador)} - Pontuação: ${somarPontos(cartasComputador)}
            ${quemGanhou}!`)
   }
   
    if(confirm("Boas vindas ao jogo de Blackjack! Quer iniciar uma nova rodada?")) {
      comecaJogo = true
      eParDeAs()
   } else {
      alert("O jogo acabou.")
   }
   while (comecaJogo) {
      if (confirm(`  
      Suas cartas são: ${mostrarCartas(cartasUsuario)}
      A carta revelada do computador é ${cartasComputador[0].texto}. 
      Deseja comprar mais uma carta?`)) {
         cartasUsuario.push(comprarCarta())
         if (somarPontos(cartasUsuario) > 21 ) {
            comecaJogo = false
            retornaPontuacao(false)
         }
      } else {
         comecaJogo = false
         if (somarPontos(cartasComputador) < somarPontos(cartasUsuario)) {
            retornaPontuacao(true)
         } else {
            retornaPontuacao(false)
         }
      }
   }


      
    
     
      

     
   
   
            
      
          
      
      
     
    
   
   
     
       
       
   
   



