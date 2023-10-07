function userIdGeneratedByUser() {
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
  let numberOfCharacters = Number(prompt("Enter the number of characters:"));
  let numberOfIds = Number(prompt("Enter the number of ids:"));
  const userIds = Array(numberOfIds);

  for (let i = 0; i < userIds.length; i++) {
    userIds[i] = "";
    for (let c = 0; c < numberOfCharacters; c++) {
      let index = Math.floor(Math.random() * alphanumeric.length);
      userIds[i] += alphanumeric[index];
    }
  }

  alert(userIds.join("\n"));
}
userIdGeneratedByUser();

function rgbColorGenerator() {
  const rbgColor = Array(3);
  for (let i = 0; i < rbgColor.length; i++) {
    let rgbCode = Math.floor(Math.random() * 256);
    rbgColor[i] = rgbCode;
  }
  return `rgb(${rbgColor.join(", ")})`;
}
console.log(rgbColorGenerator());

function arrayOfHexaColors(number) {
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
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let hexadecimalCode = Array(number);

  for (let i = 0; i < number; i++) {
    const auxArray = Array(6);
    for (let c = 0; c < auxArray.length; c++) {
      let index = Math.floor(Math.random() * hexadecimalSymbols.length);
      auxArray[c] = "";
      auxArray[c] += hexadecimalSymbols[index];
    }
    hexadecimalCode[i] = `#${auxArray.join("")}`;
  }
  return hexadecimalCode;
}
console.log(arrayOfHexaColors(3));

function arrayOfRgbColors(number) {
  const rbgColor = Array(number);

  for (let i = 0; i < number; i++) {
    const auxArray = Array(3);
    for (let c = 0; c < auxArray.length; c++) {
      let rgbCode = Math.floor(Math.random() * 256);
      auxArray[c] = rgbCode;
    }
    rbgColor[i] = `rgb(${auxArray.join(",")})`;
  }
  return rbgColor;
}
console.log(arrayOfRgbColors(3));

function convertHexaToRgb(hexadecimal) {
  // divide o código em três pares, com cada par, múltiplica o valor do primeiro dígito por 16 e soma com o valor do valor do segundo dígito
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
  hexadecimal = hexadecimal.toUpperCase().replace("#", "");
  const rbgCode = Array(3);
  let firstCharacter;
  let secondCharacter;
  let rbgNumber;
  let c = 0;

  for (let i = 0; i < 3; i++) {
    hexadecimal.slice(c, c + 2);
    firstCharacter = hexadecimalSymbols.indexOf(hexadecimal[c]) * 16;
    c++;
    secondCharacter = hexadecimalSymbols.indexOf(hexadecimal[c]);
    rbgNumber = firstCharacter + secondCharacter;
    rbgCode[i] = rbgNumber;
    c++;
  }
  return `rgb(${rbgCode.join(", ")})`;
}
console.log(convertHexaToRgb("#ffff00"));

function convertRgbToHexa(r, g, b) {
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
  let hexadecimal = "#";
  let firstCharacter;
  let secondCharacter;

  for (let i = 0; i < arguments.length; i++) {
    firstCharacter = hexadecimalSymbols[Math.floor(arguments[i] / 16)];
    secondCharacter = hexadecimalSymbols[arguments[i] % 16];
    hexadecimal += firstCharacter + secondCharacter;
  }

  return hexadecimal;
}
console.log(convertRgbToHexa(255, 255, 0));

function generateColors(codeType, number) {
  codeType.toLowerCase();
  let result;
  if (codeType === "hexa") {
    result = arrayOfHexaColors(number);
  } else if (codeType === "rgb") {
    result = arrayOfRgbColors(number);
  }
  return result;
}
console.log(generateColors("hexa", 3));
console.log(generateColors("rgb", 3));

function shuffleArray(arr) {
  const auxArray = Array(arr.length);

  for (let i = 0; i < auxArray.length; i++) {
    let newIndex = Math.floor(Math.random() * auxArray.length);
    if (auxArray[newIndex] === undefined) {
      auxArray[newIndex] = arr[i];
    } else {
      i--;
    }
  }

  return auxArray;
}
console.log(shuffleArray([1, 2, 3, 4, 5]));

function factorial(number) {
  let fatorialresult = 1;
  const fatorialArray = [];
  for (let i = number; i > 0; i--) {
    fatorialresult *= i;
    fatorialArray[i - 1] = i;
  }
  return `${number}! = ${fatorialArray
    .reverse()
    .join(" x ")} = ${fatorialresult}`;
}
console.log(factorial(5));

function isEmpty(parameter = "") {
  if (parameter !== "") {
    return `Parameter is not empty.`;
  } else {
    return `Parameter is empty.`;
  }
}
console.log(isEmpty("Parameter"));

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sum(15, 8, 35, 100));

function sumOfArrayItems(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Not all elements in the array are numbers.";
    } else {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumOfArrayItems([15, 8, 35, 100]));

function avarege(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Not all elements in the array are numbers.";
    } else {
    }
    sum += arr[i].valueOf();
  }
  let restult = sum / arr.length;
  return restult;
}
console.log(avarege([15, 8, 35, 100]));

function modifyArray(arr) {
  if (arr.length < 5) {
    return "Item not found";
  } else {
    arr[4] = arr[4].toUpperCase();
  }
  return arr;
}
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
); // ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
); // ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"])); //   'Not Found'

function isPrime(number) {
  if (number % 2 === 0) {
    return false;
  } else if (number % 3 === 0) {
    return false;
  } else if (number % 5 === 0) {
    return false;
  } else if (number % 7 === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isPrime(19));
console.log(isPrime(15));

function isUniqueItem(arr) {
  let duplicateItems = [];
  for (let i = 0; i < arr.length; i++) {
    for (let c = 0; c < arr.length; c++) {
      if (i === c) {
        continue;
      } else if (arr[i] === arr[c] && duplicateItems.indexOf(arr[i]) === -1) {
        duplicateItems.push(arr[i]);
      }
    }
  }
  if (duplicateItems.length > 0) {
    return `Os itens (${duplicateItems.sort().join(", ")}) estão repetidos.`;
  } else {
    return "Não há itens duplicados.";
  }
}
console.log(isUniqueItem([5, 2, 7, 7, 2, 3, 5]));
console.log(isUniqueItem([5, 2, 7, 3]));

function dataTypesItems(arr) {
  isSame = true;
  isDiferent = false;
  for (let i = 0; i < arr.length; i++) {
    for (let c = 0; c < arr.length; c++) {
      if (typeof arr[i] === typeof arr[c]) {
        continue;
      } else {
        isDiferent = true;
        isSame = false;
      }
    }
  }
  if (isSame === true && isDiferent === false) {
    return "All the items of the array are the same data type";
  } else {
    return "Not all the items of the array are the same data type";
  }
}
console.log(dataTypesItems([5, 1, 7]));
console.log(
  dataTypesItems([5, "casa", 7, true, null, "brinquedo", false, undefined])
);

function isValidVariable(variableName) {
  const charactersAllowed = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
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
    "_",
    "$",
  ];
  let isAllowed = true;
  let notAllowed = false;
  variableName = variableName.toLowerCase();

  for (let i = 0; i < variableName.length; i++) {
    for (let c = 0; c < charactersAllowed.length; c++) {
      if (charactersAllowed.indexOf(variableName[i]) === -1) {
        isAllowed = false;
        notAllowed = true;
        return "Invalid Variable";
      }
    }
  }
  if (isAllowed === true && notAllowed === false) {
    return "Valid Variable";
  }
}
console.log(isValidVariable("isVariable"));
console.log(isValidVariable("i$Variable"));
console.log(isValidVariable("i_Variable"));
console.log(isValidVariable("isV@riable"));
console.log(isValidVariable("is-Variable"));
console.log(isValidVariable("is.Variable"));

function sevenRandomNumbers() {
  const randomNumbers = [];

  for (let i = 0; i < 7; i++) {
    let number = Math.floor(Math.random() * 8);
    if (randomNumbers.indexOf(number) === -1) {
      randomNumbers.push(number);
    } else {
      i--;
    }
  }

  return randomNumbers;
}
console.log(sevenRandomNumbers());

sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)];

function reverseCountries(arr) {
  const copyArray = arr;
  copyArray.reverse();
  return copyArray;
}
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
console.log(reverseCountries(countries));
