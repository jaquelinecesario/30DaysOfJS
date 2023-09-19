let quote = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(quote.match(/love/gi).length);

//Count the number of word love in this sentence.

let string = 'You cannot end a sentence with because because because is a conjunction'
console.log(string.match(/because/gi).length);
// g-means to search in the whole text, i - case insensitive

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/%/g, '').replace(/\$/, '').replace(/@/g, '').replace(/&/g, '').replace(/#/g, '').replace(/;/g, ''));

let annualIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month'
let numbers = annualIncome.match(/\d+/g)
console.log((+numbers[0] * 12) + +numbers[1] + (+numbers[2] * 12));
// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,