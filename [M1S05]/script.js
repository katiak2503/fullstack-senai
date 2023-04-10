
//exercício 1
const mensagemOla = () => {
  return "Olá, Mundo!";
}

console.log(mensagemOla());


//exercício 2
const mensagemOla = (nome) => {
  return `Olá, ${nome}!`;
}

console.log(mensagemOla("Kátia"));

//exercício 3

const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayInvertido = [];

const inverteArray = () => {
  for (let i = arrayNum.length - 1; i >= 0; i--) {
    arrayInvertido.push(arrayNum[i]);
  }
}

inverteArray();

console.log("Array Original:", arrayNum);
console.log("Array Invertido:", arrayInvertido);


//exercício 4

const arrayNum= [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayImpares;

const testarImpar = (valor) => {
  return valor % 2 !== 0;
}

arrayImpares = arrayNum.filter(testarImpar);

console.log("Array Inicial:", arrayNum);
console.log("Array de Ímpares:", arrayImpares);

const arrayTodosImpares = arrayNum.every(testarImpar);

if (arrayTodosImpares) {
  console.log("O vetor 'arrayImpares' possui todos os números ímpares da lista 'arrayNum'.");
} else {
  console.log("O vetor 'arrayImpares' NÃO possui todos os números da lista 'arrayNum'.");
}

//Exercício 5

const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const calculaQuadrado = (numero) => numero ** 2;

const arrayQuadrados = arrayNum.map(calculaQuadrado);

console.log(arrayQuadrados);

//Exercício 6

const listaFrutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra"];

listaFrutas.forEach((fruta, indice) => {
  localStorage.setItem(`fruta${indice}`, fruta);
});