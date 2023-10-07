function solveLinEquation(a, b, c, x, y) {
  // Linear equation: ax + by + c = 0
  const linearEquation = a * x + b * y + c;
  return linearEquation;
}
console.log(solveLinEquation(1, 5, 6, 3, 4));
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveQuadEquation(a = 0, b = 0, c = 0) {
  // Quadratic equation: ax2 + bx + c = 0
  let delta = b ** 2 - 4 * a * c;
  let xOne = ((-b + Math.sqrt(delta)) / 2) * a;
  let xtwo = ((-b - Math.sqrt(delta)) / 2) * a;
  return `(${xOne}, ${xtwo})`;
}
console.log(solveQuadEquation()); // {0}
console.log(solveQuadEquation(1, 4, 4)); // {-2}
console.log(solveQuadEquation(1, -1, -2)); // {2, -1}
console.log(solveQuadEquation(1, 7, 12)); // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)); //{2, -2}
console.log(solveQuadEquation(1, -1, 0)); //{1, 0}

function printArray(array) {
  const auxArray = [];
  for (let i = 0; i < 10; i++) {
    auxArray.push(array[i]);
  }
  return auxArray.toString();
}
const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(printArray(oneToTen));

function showDateTime() {
  const now = new Date();
  let day = now.getDay().toString().padStart(2, "0");
  let month = now.getMonth().toString().padStart(2, "0");
  let year = now.getFullYear();
  let hours = now.getHours().toString().padStart(2, "0");
  let min = now.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${min}`;
}
console.log(showDateTime());

function swapValues(x, y) {
  let xSwapped = y;
  let ySwapped = x;

  return `x => ${xSwapped}, y => ${ySwapped}`;
}
console.log(swapValues(3, 4)); // x => 4, y=>3
console.log(swapValues(4, 5)); // x = 5, y = 4

function reverseArray(array) {
  const arrayReverse = [];
  for (let i = array.length; i >= 0; i--) {
    arrayReverse.push(array[i]);
  }
  return arrayReverse;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A']

function capitalizeArray(array) {
  const capitalizedarray = [];
  for (let i = 0; i < array.length; i++) {
    capitalizedarray.push(array[i].toUpperCase());
  }
  return capitalizedarray;
}
console.log(capitalizeArray(["casa", "carro", "brinquedo", "violão"]));

function addItem(item) {
  const array = ["casa", "carro", "brinquedo", "violão"];
  array.push(item);
  return array;
}
console.log(addItem("bola"));

function removeItem(itemIndex) {
  const arr = ["casa", "carro", "brinquedo", "violão", "bola"];
  arr.splice(itemIndex, 1);

  return arr;
}
console.log(removeItem(1));

function sumOfNumbers(x, y) {
  let sum = 0;
  if (x < y) {
    while (x <= y) {
      sum += x;
      x++;
    }
  } else {
    while (y <= x) {
      sum += y;
      y++;
    }
  }
  return sum;
}
console.log(sumOfNumbers(5, 1));

function sumOfOdds(x, y) {
  let sum = 0;
  if (x < y) {
    while (x <= y) {
      if (x % 2 !== 0) {
        sum += x;
      }
      x++;
    }
  } else {
    while (y <= x) {
      if (y % 2 !== 0) {
        sum += y;
      }
      y++;
    }
  }
  return sum;
}
console.log(sumOfOdds(1, 5));

function sumOfEven(x, y) {
  let sum = 0;
  if (x < y) {
    while (x <= y) {
      if (x % 2 === 0) {
        sum += x;
      }
      x++;
    }
  } else {
    while (y <= x) {
      if (y % 2 === 0) {
        sum += y;
      }
      y++;
    }
  }
  return sum;
}
console.log(sumOfEven(1, 5));

function evensAndOdds(number) {
  let numberOfOdds = 0;
  let numberOfEvens = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      numberOfOdds++;
    } else {
      numberOfEvens++;
    }
  }

  return `The number of odds are ${numberOfOdds}. \nThe number of evens are ${numberOfEvens}.`;
}
console.log(evensAndOdds(100));

function sumOfAgurments(params) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}
console.log(sumOfAgurments(1, 2, 3)); // -> 6
console.log(sumOfAgurments(1, 2, 3, 4)); // -> 10

function randomUserIp() {
  const ipArray = Array(4);
  for (let i = 0; i < ipArray.length; i++) {
    let randomNumberIp = Math.floor(Math.random() * 256);
    ipArray[i] = randomNumberIp;
  }
  return ipArray.join(".");
}
console.log(randomUserIp());

function randomMacAddress() {
  const hexadecimalSymbols = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const randomMacAddress = Array(6);
  for (let i = 0; i < randomMacAddress.length; i++) {
    randomMacAddress[i] = "";
    for (let c = 1; c <= 2; c++) {
      let index = Math.floor(Math.random() * hexadecimalSymbols.length);
      randomMacAddress[i] += hexadecimalSymbols[index];
    }
  }

  return randomMacAddress.join(":");
}
console.log(randomMacAddress());

function randomHexaNumberGenerator() {
  const hexadecimalSymbols = "0123456789abcdef";
  let hexadecimalCode = "";
  for (let i = 1; i <= 6; i++) {
    let index = Math.floor(Math.random() * hexadecimalSymbols.length);
    hexadecimalCode += hexadecimalSymbols.charAt(index);
  }
  return `#${hexadecimalCode}`;
}
console.log(randomHexaNumberGenerator());

function userIdGenerator() {
  const alphanumeric = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "W",
    "Y",
    "Z",
  ];
  let randomCharacters = "";
  for (let i = 1; i <= 7; i++) {
    let index = Math.floor(Math.random() * alphanumeric.length);
    randomCharacters += alphanumeric[index];
  }
  return randomCharacters;
}
console.log(userIdGenerator());
