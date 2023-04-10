export class ListaNegociacoes {
  negociacoes

  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }

  get negociacoesFiltradas() {
    return this._negociacoes.filter(negociacao => negociacao.valor > 5000);
  }
}