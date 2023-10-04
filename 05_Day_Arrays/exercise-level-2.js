let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
text = text.replace(/\./g, '').replace(/,/g, '')
console.log(text);
const words = text.split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (shoppingCart.indexOf("Meat" === -1)) {
  shoppingCart.push("Meat")
  console.log(shoppingCart);
}
if (shoppingCart.indexOf("Sugar" === -1)) {
  shoppingCart.push("Sugar")
  console.log(shoppingCart);
}
let honeyIndex =  shoppingCart.indexOf("Honey")
let removeHoney = shoppingCart.splice(honeyIndex, honeyIndex +1)
console.log(shoppingCart);
let teaIndex = shoppingCart.indexOf("Tea")
shoppingCart[teaIndex] = "Green Tea"
console.log(shoppingCart);

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
  "Japan",
  "Kenya",
];

if (countries.indexOf("Ethiopia") !== -1) {
  let ethiopiaIndex = countries.indexOf("Ethiopia")
  console.log(countries[ethiopiaIndex].toLocaleUpperCase());
} else {
  countries.push("Ethiopia")
  console.log(countries);
}

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

if (webTechs.indexOf("Sass") !== -1) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push("Sass")
  console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)