const alphanumeric = "0123456789abcdefghijklmnopqrstuvwxyz";
let charactersNumber = Math.floor(Math.random() * 51);
let randomCharacters = "";
for (let i = 1; i <= charactersNumber; i++) {
  let index = Math.floor(Math.random() * alphanumeric.length);
  randomCharacters = randomCharacters.concat(alphanumeric.charAt(index));
}
console.log(randomCharacters);

const hexadecimalSymbols = "0123456789abcdef";
let hexadecimalCode = "";
for (let i = 1; i <= 6; i++) {
  let index = Math.floor(Math.random() * hexadecimalSymbols.length);
  hexadecimalCode = hexadecimalCode.concat(hexadecimalSymbols.charAt(index));
}
console.log(`#${hexadecimalCode}`);

let firstRGB = "";
let secondRGB = "";
let thirdRGB = "";
for (let i = 1; i <= 3; i++) {
  let rgbCode = Math.floor(Math.random() * 256);
  if (firstRGB.length === 0) {
    firstRGB = rgbCode;
  } else if (secondRGB.length === 0) {
    secondRGB = rgbCode;
  } else if (thirdRGB.length === 0) {
    thirdRGB = rgbCode;
  }
}
console.log(`rgb(${firstRGB}, ${secondRGB}, ${thirdRGB})`);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  // "Iceland",
  "Japan",
  "Kenya",
];

const newCountries = [];
for (let i = 0; i < countries.length; i++) {
  newCountries[i] = countries[i].toUpperCase();
}
console.log(newCountries);

const countriesLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}
console.log(countriesLength);

const arrayOfArraysCountries = [];
for (let i = 0; i < countries.length; i++) {
  const auxArray = [];
  auxArray[0] = countries
  [i];
  auxArray[1] = countries[i].slice(0, 3).toUpperCase()
  auxArray[2] = countries[i].length
  if (auxArray.length === 3) {
    arrayOfArraysCountries.push(auxArray);
  }
}
console.log(arrayOfArraysCountries);
const countriesWithLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    countriesWithLand.push(countries[i])
  }
}
console.log(countriesWithLand);

const countriesEndWithIa = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].endsWith("ia")) {
    countriesEndWithIa.push(countries[i])
  }
}
console.log(countriesEndWithIa);

let biggestNumCharacters = "";
for (let i = 0; i < countries.length; i++) {
  if (biggestNumCharacters.length < countries[i].length) {
    biggestNumCharacters = countries[i];
  }
}
console.log(biggestNumCharacters);

const fiveCharacters = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    fiveCharacters.push(countries[i])
  }
}
console.log(fiveCharacters);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let longestWord = "";
for (let i = 0; i < webTechs.length; i++) {
  if (longestWord.length < webTechs[i].length) {
    longestWord = webTechs[i];
  }
}
console.log(longestWord);

const arrayOfArraysWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
  const auxArray = [];
  auxArray[0] = webTechs
  [i];
  auxArray[1] = webTechs[i].length
  if (auxArray.length === 2) {
    arrayOfArraysWebTechs.push(auxArray);
  }
}
console.log(arrayOfArraysWebTechs);

const mernStack = ["MongoDB", "Express", "React", "Node"];

let merm = "";
for (let i = 0; i < mernStack.length; i++) {
  merm += mernStack[i].charAt(0)
}
console.log(merm);

const devLanguages = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

for (const language of devLanguages) {
  console.log(language);
}

const fruits = ["banana", "orange", "mango", "lemon"];
const fruisReverse = [];
let i = fruits.length - 1
while (i >= 0) {
  fruisReverse.push(fruits[i])
  i--
}
console.log(fruisReverse);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

let c = 0
while (c < fullStack.length) {
  for (let i = 0; i < fullStack[c].length; i++) {
    console.log(fullStack[c][i].toUpperCase());    
  }
  c++
}