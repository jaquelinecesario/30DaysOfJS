const arr = [];
console.log(arr);

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[numbers.length / 2]);
console.log(numbers[numbers.length - 1]);

const mixedDataTypes = [3, "house", numbers, true, arr, null];
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[4]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
console.log(itCompanies[0].toLocaleUpperCase());
console.log(itCompanies[1].toLocaleUpperCase());
console.log(itCompanies[2].toLocaleUpperCase());
console.log(itCompanies[3].toLocaleUpperCase());
console.log(itCompanies[4].toLocaleUpperCase());
console.log(itCompanies[5].toLocaleUpperCase());
console.log(itCompanies[6].toLocaleUpperCase());
const itCompaniesSliced = itCompanies.slice(0, itCompanies.length - 1);
console.log(
  `${itCompaniesSliced.join(", ")} and ${
    itCompanies[itCompanies.length - 1]
  } are big IT companies.`
);
let index = itCompanies.indexOf("Google");
if (index === -1) {
  console.log("The company is not found");
} else {
  console.log("The company exists in the itCompanies array");
}
console.log(`${itCompanies[0]} e ${itCompanies[1]}`);
// 14. Filter out companies which have more than one 'o' without the filter method (não tinha no material; gambiarra na linha 56)
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(4, 7));
console.log(itCompanies.slice(3, 4));
console.log(itCompanies.unshift());
console.log(itCompanies.splice(3, 4));
console.log(itCompanies.pop());
console.log(itCompanies.splice());
