console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
console.log(typeof '10')
console.log(typeof 10)
console.log(typeof Number('10'))
console.log(parseFloat('9.8'))
console.log(Math.round('9.8'))
let python = 'python'
console.log(python.includes('on'))
let jargon = 'jargon'
console.log(jargon.includes('on'))
let sentence = "I hope this course is not full of jargon."
console.log(sentence.includes('jargon'));
let randomNum = Math.random()
let numBtn0And100 = randomNum * 101
console.log(numBtn0And100);
let randomNumRoundToFloor = Math.floor(numBtn0And100)
console.log(randomNumRoundToFloor);
console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));
let numBtn0And225 = randomNum * 226
console.log(numBtn0And225);
randomNumRoundToFloor = Math.floor(numBtn0And225)
console.log(randomNumRoundToFloor);
let javaScript = 'JavaScript'
console.log(javaScript[Math.floor(Math.random() * 11)]);

let string = 'You cannot end a sentence with because because because is a conjunction'
console.log(string.substring(0, string.indexOf('because')) + string.substring(string.indexOf('is'), string.length));
console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");