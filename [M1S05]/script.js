
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

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayInvertido = [];

const inverteArray = () => {
  for (let i = arrayNumeros.length - 1; i >= 0; i--) {
    arrayInvertido.push(arrayNumeros[i]);
  }
}

inverteArray();

console.log("Array Original:", arrayNumeros);
console.log("Array Invertido:", arrayInvertido);


//exercício 4

const arrayNumeros= [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayImpares;

const testarImpar = (valor) => {
  return valor % 2 !== 0;
}

arrayImpares = arrayNumeros.filter(testarImpar);

console.log("Array Inicial:", arrayNumeros);
console.log("Array de Ímpares:", arrayImpares);

const arrayTodosImpares = arrayNumeros.every(testarImpar);

if (arrayTodosImpares) {
  console.log("O vetor 'arrayImpares' possui todos os números ímpares da lista 'arrayNumeros'.");
} else {
  console.log("O vetor 'arrayImpares' NÃO possui todos os números da lista 'arrayNumeros'.");
}

//Exercício 5

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const calculaQuadrado = (numero) => numero ** 2;

const arrayQuadrados = arrayNumeros.map(calculaQuadrado);

console.log(arrayQuadrados);

//Exercício 6

const listaFrutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra"];

listaFrutas.forEach((fruta, indice) => {
  localStorage.setItem(`fruta${indice}`, fruta);
});