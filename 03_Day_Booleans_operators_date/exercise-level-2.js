function triangleBase() {
  let base = prompt("Qual é a base do triângulo?");
  let height = prompt("Qual é a altura do triângulo?");
  let triangleArea = 0.5 * Number(base) * Number(height);
  alert(triangleArea);
}

function trianglePerimenter() {
  let sideA = prompt("Qual é o tamanho do lado A do triângulo?");
  let sideB = prompt("Qual é o tamanho do lado B do triângulo?");
  let sideC = prompt("Qual é o tamanho do lado C do triângulo?");
  let trianglePerimeter = Number(sideA) + Number(sideB) + Number(sideC);
  alert(trianglePerimeter);
}

function rectangleArea() {
  let length = prompt("Qual é o cumprimento do retângulo?");
  let width = prompt("Qual é a largura do retângulo?");
  let rectangleArea = Number(length) * Number(width);
  alert(rectangleArea);
}

function rectanglePerimeter() {
  let length = prompt("Qual é o comprimento do retângulo?");
  let width = prompt("Qual é a largura do retângulo?");
  let rectanglePerimeter = 2 * (Number(length) + Number(width));
  alert(rectanglePerimeter);
}

function circleArea() {
  let pi = 3.14;
  let radius = prompt("Qual é o raio do círculo?");
  let circleArea = 2 * pi * Number(radius);
  alert(circleArea);
}

function slope() {
  let x2 = 0;
  let y1 = 0;
  let y2 = -2;
  let x1 = 3;
  let m = 2;
  alert(m);
  return m;
  // Calculate the slope, x-intercept and y-intercept of y = 2x -2
}

function slopeFormula() {
  let x1 = 2;
  let x2 = 6;
  let y1 = 2;
  let y2 = 10;
  let m = (y2 - y1) / (x2 - x1);
  alert(m);
  return m;
}

function slopeComparation() {
  let comparation = slope.value === slopeFormula.value;
  alert(comparation);
}

function calculeY() {
  let x = Number(prompt("Qual é o valor de x"));
  let y = x ** 2 + 6 * x + 9;
  alert(y);
}

function payPerson() {
  let hours = Number(prompt("Quantas horas você trabalhou?"));
  let ratePerHour = Number(prompt("Quanto você ganha por hora?"));
  let payPerson = hours * ratePerHour;
  alert(`Você vai ganhar ${payPerson}.`);
}

function lenghtName() {
  let name = prompt("Qual é o seu nome?");
  if (name.length > 7) {
    alert("Your name is long.");
  } else {
    alert("Your name is short.");
  }
}

function compareName() {
  let firstName = prompt("Qual é o seu nome?");
  let lastName = prompt("Qual é o seu sobrenome?");
  if (firstName.length > lastName.length) {
    alert(
      `Your first name, ${firstName}, is longer than your family name, ${lastName}.`
    );
  } else {
    alert(
      `Your family name, ${lastName}, is longer than your first name, ${firstName}.`
    );
  }
}

function compareAge() {
  let myAge = Number(prompt("Qual a minha idade?"));
  let yourAge = Number(prompt("Qual a sua idade?"));
  let diference;
  if (myAge > yourAge) {
    diference = myAge - yourAge;
    alert(`I am ${diference} years older than you.`);
  } else {
    diference = yourAge - myAge;
    alert(`You are ${diference} years older than me.`);
  }
}

function driveAge() {
  const date = new Date();
  const year = date.getFullYear();
  let birthYear = Number(prompt("Enter birth year"));
  let age = year - birthYear;
  if (age >= 18) {
    alert(`You are ${age}. You are old enough to drive.`);
  } else {
    let driveAge = 18 - age;
    alert(
      `You are ${age}. You will be allowed to drive after ${driveAge} years.`
    );
  }
}

function calculateSeconds() {
  let numberOfYears = Number(prompt("Enter number of years you live:"));
  let secondsLived = (numberOfYears * 365.25 * 24 * 60 * 60) / 1000;
  alert(`You lived ${secondsLived} seconds.`);
}

function timeFormat() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  alert(`i.${year}-${month}-${day} ${hours}:${minutes} \nii.${day}-${month}-${year} ${hours}:${minutes} \niii.${day}/${month}/${year} ${hours}:${minutes}`);
}