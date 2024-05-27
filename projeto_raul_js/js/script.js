var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  bissexto();

});



function bissexto() {
  
  
  let ano = Number(document.getElementById("ano").value);

  if (ano%400 == 0)
    resultado_ano = `O ano ${ano} é bissexto`;
    else
    if(ano%4==0 && ano%100!=0)
      resultado_ano= `O ano ${ano} é bissexto`;
    else
      resultado_ano = `O ano ${ano} não é bissexto`;
    

    document.getElementById("resultado_ano").value = resultado_ano;
  
  
  
}
