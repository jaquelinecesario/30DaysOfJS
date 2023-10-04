for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
do {
  console.log(i);
  i++;
} while (i <= 10);

for (let c = 10; c >= 0; c--) {
  console.log(c);
}
let c = 10;
while (c >= 0) {
  console.log(c);
  c--;
}
do {
  console.log(c);
  c--;
} while (c >= 0);

for (let n = 0; n < 21; n++) {
  console.log(n);
}

let hashtag = "";
for (let i = 1; i <= 7; i++) {
  hashtag += "#";
  console.log(hashtag);
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

console.log("i i^² i^³");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
    if (i === 2 || i === 3 || i === 5 || i === 7) {
      console.log(i);
    }
    continue;
  }
  console.log(i);
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

let sumEvensNumbers = 0;
let sumOddsNumbers = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvensNumbers += i;
  } else if (i % 2 === 1) {
    sumOddsNumbers += i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${sumEvensNumbers}. And the sum of all odds from 0 to 100 is ${sumOddsNumbers}.`
);

const sumArray = [];
let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvens += i;
  } else if (i % 2 === 1) {
    sumOdds += i;
  }
}
sumArray.push(sumEvens);
sumArray.push(sumOdds);
console.log(sumArray);

const randomNumbers = [];
for (let i = 1; i <= 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 11));
}
console.log(randomNumbers);

const randomNumbersUnique = [];
while (randomNumbersUnique.length < 5) {
  let randomNum = Math.floor(Math.random() * 11);
  if (randomNumbersUnique.indexOf(randomNum) === -1) {
    randomNumbersUnique.push(randomNum);
  }
}
console.log(randomNumbersUnique);

const alphanumeric = "0123456789abcdefghijklmnopqrstuvxyz";
let randomCharacters = "";
for (let i = 1; i <= 6; i++) {
  let index = Math.floor(Math.random() * alphanumeric.length);
  randomCharacters = randomCharacters.concat(alphanumeric.charAt(index));
}
console.log(randomCharacters);