function fullName() {
  const firstName = "Jaqueline";
  const lastName = "Cesário";
  return `${firstName} ${lastName}`;
}
console.log(fullName());

function fullName(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  return fullName;
}
console.log(fullName("Jaqueline", "Cesário"));

function addNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}
console.log(addNumbers(2, 5));

function rectangleArea(length, width) {
  let area = length * width;
  return area;
}
console.log(rectangleArea(5, 10));

function rectanglePerimeter(length, width) {
  let area = 2 * (length + width);
  return area;
}
console.log(rectanglePerimeter(5, 10));

function rectanglePrismVolume(length, width, height) {
  let volume = length * width * height;
  return volume;
}
console.log(rectanglePrismVolume(2, 3, 10));

function circleArea(r) {
  let area = Math.PI * r * r;
  return area;
}
console.log(circleArea(2));

function circleCircumference(r) {
  let circumference = 2 * Math.PI * r;
  return circumference;
}
console.log(circleCircumference(2));
console.log(Math.PI);

function substanceDensity(mass, volume) {
  let density = mass / volume;
  return density;
}
console.log(substanceDensity(30, 60));

function speed(distance, time) {
  let speed = distance / time;
  return speed;
}
console.log(speed(60, 30));

function subastaWeight(mass, gravity = 9.8) {
  let weight = mass * gravity;
  return weight;
}
console.log(subastaWeight(3, 10));

function convertCelsiusToFahrenheit(c) {
  let f = (c * 9) / 5 + 32;
  return f;
}
console.log(convertCelsiusToFahrenheit(37));

function bodyMassIndex(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi <= 24.9) {
    return "Normal Weight";
  } else if (bmi <= 29.9) {
    return "Overweight";
  } else if (bmi >= 30) {
    return "Obese";
  }
}
console.log(bodyMassIndex(71, 1.66));

let monthUserInput = "December";
let month = monthUserInput.toLowerCase();
function checkSeason(month) {
  const autumn = ["september", "october", "november"];
  const winter = ["december", "january", "february"];
  const spring = ["march", "april", "may"];
  const summer = ["june", "july", "august"];
  let monthLowerCase = month;
  monthLowerCase.toLowerCase();

  if (autumn.includes(month)) {
    return "Autumn";
  } else if (winter.includes(month)) {
    return "Winter";
  } else if (spring.includes(month)) {
    return "Spring";
  } else if (summer.includes(month)) {
    return "Summer";
  }
}
console.log(checkSeason(month));

function findMax(a, b, c) {
  let maximumWidth = Math.max(a, b, c);
  return maximumWidth;
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));