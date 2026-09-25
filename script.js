  const botoes = document.querySelectorAll("button");

     botoes.forEach(function(botao) {
       // Controla se ESTE botão específico já foi clicado
       let curtiu = false;

       botao.addEventListener("click", function() {
         let texto = botao.querySelector("span");

         if (curtiu === false) {
           texto.textContent++;
           curtiu = true;
         } else {
           texto.textContent--;
           curtiu = false;
         }
       });
     });
     