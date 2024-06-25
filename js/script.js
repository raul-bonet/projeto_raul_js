
var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  adivinhamento();

});

function adivinhamento() {
  
  let numero_secreto = 2;
  let palpite = -1;
  let resultado = "";

  do {
    palpite = Number("Adivinhe o número secreto (entre 1 e 10): ");


    if (palpite === numero_secreto) {
      resultado = "Parabéns! Você acertou o número secreto.";
    } else if (palpite > numero_secreto) {
      resultado = "Seu palpite é muito alto.";
    } else {
      resultado = "Seu palpite é muito baixo.";
    }

    document.getElementById("resultado").value = resultado;
  } while (palpite !== numero_secreto);

}
