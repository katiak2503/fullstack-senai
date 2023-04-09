class NegociacoesView {
  constructor(elemento) {
    this._elemento = elemento;
  }

  update(negociacoes) {
    this._elemento.innerHTML = `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
          <td id="data" style="display: none;"></td>
          <td id="quantidade" style="display: none;"></td>
          <td id="valor" style="display: none;"></td>
          </tr>
        </thead>
        <tbody>
          ${negociacoes.map(negociacao => `
            <tr>
              <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
            </tr>
          `).join('')}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3"></td>
          </tr>
        </tfoot>
      </table>
    `;
  }
}
