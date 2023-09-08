    let cartasUsuario = []
    let cartasComputador = []
    let cartasSomadas = 0

   

   //  const pontuacaoUsuario = carta.valor 
   //  const pontuacaoComputador = cartaComputador.valor 
         
    
    if(confirm("Boas vindas ao jogo de Blackjack! Quer iniciar uma nova rodada?")) {
      cartasUsuario.push(comprarCarta())
      cartasUsuario.push(comprarCarta())
      cartasComputador.push(comprarCarta())
      } 

      else if (cartasUsuario.filter((carta) => {return carta.texto.numero && carta.texto.numero === "A"})) {
         cartasUsuario.push(comprarCarta())
         cartasUsuario.push(comprarCarta())
      } 

      else if (cartasComputador.filter((carta) => {return carta.texto.numero && carta.texto.numero === "A"})){
         cartasComputador.push(comprarCarta())
         } 
        
       for (let i = 0; i < cartasUsuario.length; i++) {
            cartasSomadas += cartasUsuario[i]
          }
         
      if(confirm(`Suas cartas são ${[cartasUsuario.map((carta) => {return carta.texto})]}. A carta revelada do computador é ${cartasComputador.map((carta) => {return carta.texto})}. Deseja comprar mais uma carta?`)) {
         cartasUsuario.push(comprarCarta())
      } else {
         
         (cartasUsuario.map(() => {return cartasSomadas > 21}) ) 
         alert(`Usuário - Cartas: ${cartasUsuario.texto} - Pontuação: ${cartasUsuario.valor} 
         Computador - Cartas: ${cartasComputador.texto} - Pontuação: ${cartasComputador.valor}
         O Computador ganhou!`)
      }
      
      if(confirm(`Suas cartas são ${[cartasUsuario.map((carta) => {return carta.texto})]}. A carta revelada do computador é ${cartasComputador.map((carta) => {return carta.texto})}. Deseja comprar mais uma carta?`)) {
         cartasUsuario.push(comprarCarta())
         }  else {
             (cartasUsuario.map((carta) => {return carta.valor > 21}) ) 
               alert(`Usuário - Cartas: ${cartasUsuario.texto} - Pontuação: ${cartasUsuario.valor} 
               Computador - Cartas: ${cartasComputador.texto} - Pontuação: ${cartasComputador.valor}
               O Computador ganhou!`)
         }
         
            
      
          
      
         
         
      // if (a){
      //    (confirm(`Suas cartas são ${[cartasUsuario]}. A carta revelada do computador é ${cartaComputador.texto}. Deseja comprar mais uma carta?`))
      // }
      
     
    
   
   
     
       
       
   
   





   //     if (pontuacaoUsuario > pontuacaoComputador) {
   //        console.log("O usuário ganhou!")
   //     } else if (pontuacaoUsuario < pontuacaoComputador) {
   //        console.log("O computador ganhou ):")
   //     } else if (pontuacaoComputador === pontuacaoUsuario) {
   //        console.log("Empate!")
   //     }
    
    