

const frutas = ['maçã', 'banana', 'uva', 'melancia', 'pera'];
const frutasLongas = frutas.filter(fruta => fruta.length > 5);

function adicionarFruta() {
  vetor.push(fruta);

  const tabela = document.getElementById('tabelaFrutas').getElementsByTagName('tbody')[0];
  const novalinha = tabela.insertRow();
  const celula = novalinha.insertCell();
  celula.textContent = fruta;

  document.getElementById('fruta').value = '';
}

function mostrarPares() {
  const tabela = document.getElementById("tabelaCinco").getElementsByTagName("tbody")[0];


  for (let i = 0; i < vetor.length; i++) {
    const valor = vetor[i];
    if (valor % 2 === 0) {
      const linha = tabela.insertRow();
      const celula = linha.insertCell();
      celula.textContent = valor;
    }
  }
}
