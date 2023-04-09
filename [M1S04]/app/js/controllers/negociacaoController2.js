class NegociacaoController {
  constructor() {
    this.campoData = document.querySelector("#data");
    this.campoQuantidade = document.querySelector("#quantidade");
    this.campoValor = document.querySelector("#valor");
  }

  criarNegociacao(event) {
    event.preventDefault();
    const data = new Date(this.campoData.value);
    const quantidade = parseInt(this.campoQuantidade.value);
    const valor = parseFloat(this.campoValor.value);

    const negociacao = new Negociacao(data, quantidade, valor);
    console.log(negociacao);
  }
}
