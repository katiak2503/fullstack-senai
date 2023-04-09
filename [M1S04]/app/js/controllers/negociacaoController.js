class NegociacaoController {
  constructor() {
    this.campoData = document.querySelector('#data');
    this.campoQuantidade = document.querySelector('#quantidade');
    this.campoValor = document.querySelector('#valor');
  }

  criarNegociacao() {
    const data = new Date(this.campoData.value);
    const quantidade = parseInt(this.campoQuantidade.value);
    const valor = parseFloat(this.campoValor.value);

    const negociacao = new Negociacao(data, quantidade, valor);
    
    const negociacao = new Negociacao(new Date(data), parseInt(quantidade), parseFloat(valor));

    this._listaNegociacoes.adiciona(negociacao);

    console.log(this._listaNegociacoes.negociacoes);
  }
}
}
