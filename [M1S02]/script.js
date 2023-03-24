
var idade = prompt("Qual é a sua idade?");
var cidade = prompt("Qual é a sua cidade?");
var sobrenome = prompt('Qual é o seu sobrenome?');
var nome = prompt('Qual é o seu nome?');

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Cidade: " + cidade);

if (nome === null || nome === "") {
    nome = "visitante";
}
alert('Olá, seja bem-vind@ ' + nome + ' ' + sobrenome + '!');

function enviarForm() {
    // Pergunta ao usuário se deseja matricular-se no curso
    if (confirm("Você quer matricular-se neste curso?")) {
        // Altera a cor do botão
        document.querySelector('button[type="submit"]').style.backgroundColor = 'grey';
        // Exibe a mensagem de sucesso
        document.querySelector('button[type="submit"]').disabled = true;
        alert('Sua inscrição foi enviada!');
        document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
        });
    }
    // Limpa os campos do formulário
    document.querySelector('form').reset();
}
