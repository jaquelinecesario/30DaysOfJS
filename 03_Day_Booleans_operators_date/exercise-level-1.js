let firstName = "Jaqueline";
let lastName = "Cesário";
let country = "Brazil";
let city = "Arapiraca";
let age = 27;
let isMarried = false;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof "10" == typeof 10);

console.log(parseInt("9.8") == 10);

console.log(3 == 3);
console.log(3 != 3);

console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false
console.log("python".length != "jargon".length);

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true
console.log(!("dragon".includes("on") && "python".includes("on"))); //false

let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMilliseconds()/1000);