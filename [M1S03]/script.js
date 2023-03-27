
// Ex01
const num = parseInt(prompt("Digite um número: "));
if (num % 2 === 0) {
  console.log(num + " é um número par");
} else {
  console.log(num + " é um número ímpar");
}

//Ex02
const idade = parseInt(prompt("Digite sua idade: "));
if (idade >= 0 && idade <= 12) {
  console.log("Criança");
} else if (idade >= 13 && idade <= 17) {
  console.log("Adolescente");
} else if (idade >= 18 && idade <= 65) {
  console.log("Adulto");
} else if (idade >= 66 && idade <= 110) {
  console.log("Sênior");
} else {
  console.log("Idade inválida");
}

//Ex03
const peso = parseFloat(prompt("Digite o peso do carro (em kg): "));
const comprimento = parseFloat(prompt("Digite o comprimento do carro (em metros): "));
if (peso <= 1500 && comprimento <= 5) {
  console.log("O carro pode passar pela ponte.");
} else {
  console.log("O carro não pode passar pela ponte.");
}

//Ex04
const valorPedido = parseFloat(prompt("Digite o valor do pedido: "));
if (valorPedido <= 10000) {
  console.log("Classificaçã do Pedido: Bronze");
} else if (valorPedido > 10000 && valorPedido <= 50000) {
  console.log("Classificaçã do Pedido: Prata");
} else if (valorPedido > 50000 && valorPedido <= 500000) {
  console.log("Classificaçã do Pedido: Ouro");
} else {
  console.log("Classificaçã do Pedido: Platinum");
}

//Ex05
let tentativas = 0;
while (tentativas < 3) {
  const senha = prompt("Digite a senha: ");
  if (senha === "1234") {
    console.log("ACESSO PERMITIDO");
    break;
  } else {
    console.log("ACESSO NEGADO");
    tentativas++;
  }
}
if (tentativas === 3) {
  console.log("Você excedeu o número máximo de tentativas!");
}

//Ex06
const valor1 = parseFloat(prompt("Digite um número: "));
const valor2 = parseFloat(prompt("Digite outro número: "));
if (valor1 > valor2) {
  console.log("O maior valor é: " + valor1);
} else {
  console.log("O maior valor é: " + valor2);
}
