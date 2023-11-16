const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

/* 
forEach - designa uma ação que será executada com todos o elementos de um array. recisa de uma callback function, do index e do próprio array, os dois últimos são opcionais.

map - modifica um elemento de um array. Precisa de uma callback function, do index e do array parameter. Retorna uma novo array.

filter - filtra os itens do array a partir de uma condição e retorna um novo array.

reduce - retorna um valor usando uma callback function. Esta precisa de um accumulator, current e, opciolmente, o valor iniciar como parâmetri. É bom colocar o valor inicial, se não tiver, por padrão, vai usar o primeiro valor, caso o array esteja vazio, será apresentado um erro.
*/

const callback = (element) => {
  console.log(element);
};

countries.forEach(callback);

names.forEach(callback);

numbers.forEach(callback);

console.log(countries.map((country) => country.toUpperCase()));

console.log(countries.map((country) => country.length));

console.log(numbers.map((num) => num ** 2));

console.log(names.map((name) => name.toUpperCase()));

console.log(products.map((product) => product.price));

console.log(
  countries.filter((country) => country.toLowerCase().includes("land"))
);

console.log(countries.filter((country) => country.length === 6));

console.log(countries.filter((country) => country.length >= 6));

console.log(countries.filter((country) => country.startsWith("E")));

console.log(products.filter((product) => product.price != 0));

function getStringLists(arr) {
  return arr.filter((element) => typeof element == "string");
}
console.log(
  getStringLists([10, "home", "day", false, null, "ball", undefined])
);

console.log(numbers.reduce((acc, cur) => acc + cur, 0));

const result = countries.reduce((acc, cur) => acc + ", " + cur);
console.log(`${result} are north European countries`);

/* 
some - verifica se algum elemento é similar a um certo aspecto e retorna um boleano.

every - verifica se todos os elementos de um array são semelhantes em algum aspectos e retorna um boleano.
*/

console.log(names.some((name) => name.length > 7));

/* 
find - procura um elemento a partir de uma conditação e retorna o primeiro elemento.

findIndex - retorna o índice do primeiro elemento que satisfaz a condição.
*/

console.log(countries.find((country) => country.length === 6));

console.log(countries.findIndex((country) => country.length === 6));

console.log(countries.findIndex((country) => country === "Norway"));

console.log(countries.findIndex((country) => country === "Russia"));
