# 📔 Day 3 - Booleans, Operators, Date

- [ooleans](#booleans)
	- [Truthy values](#truthy-values)
	- [Falsy values](#falsy-values)
- [Undefined](#undefined)
- [Null](#null)
- [Operators](#operators)
	- [Assignment operators](#assignment-operators)
	- [Arithmetic Operators](#arithmetic-operators)
	- [Comparison Operators](#comparison-operators)
	- [Logical Operators](#logical-operators)
	- [Increment Operator](#increment-operator)
	- [Decrement Operator](#decrement-operator)
	- [Ternary Operators](#ternary-operators)
	- [Operator Precedence](#operator-precedence)
- [Window Methods](#window-methods)
	- [Window alert() method](#window-alert-method)
	- [Window prompt() method](#window-prompt-method)
	- [Window confirm() method](#window-confirm-method)
- [Date Object](#date-object)
	- [Creating a time object](#creating-a-time-object)
	- [Getting full year](#getting-full-year)
	- [Getting month](#getting-month)
	- [Getting date](#getting-date)
	- [Getting day](#getting-day)
	- [Getting hours](#getting-hours)
	- [Getting minutes](#getting-minutes)
	- [Getting seconds](#getting-seconds)
	- [Getting time](#getting-time)
- [💻 Day 3: Exercises](#-day-3-exercises)
	- [Exercises: Level 1](#exercises-level-1)
	- [Exercises: Level 2](#exercises-level-2)
	- [Exercises: Level 3](#exercises-level-3)

## Booleans

A boolean data type represents one of the two values:true or false. Any comparisons return a boolean value which is either true or false.

### Truthy values

- All numbers(positive and negative) are truthy except zero
- All strings are truthy except an empty string ('')
- The boolean true

### Falsy values

- 0
- 0n
- null
- undefined
- NaN
- the boolean false
- '', "", ``, empty string

## Undefined

If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value, it will be undefined.

`let firstName`

## Null

`let empty = null`

## Operators

### Assignment operators

- **=** - (x = y) - x is stored in x
- **+=** - (x += y) - x + y result is stored in x
- **-=** - (x -= y) - x - y result is stored in x
- ***=** - (x *= y) - x * y result is stored in x
- **/=** - (x / y) - x / y result is stored in x
- ****=** - (x **= y) - x ** y result is stored in x

### Arithmetic Operators

Arithmetic operators are mathematical operators.

- **Addition(+)**: a + b
- **Subtraction(-)**: a - b
- **Multiplication(*)**: a * b
- **Division(/)**: a / b
- **Modulus(%)**: a % b
- **Exponential(**)**: a ** b

### Comparison Operators

In programming we compare values, we use comparison operators to compare two values.

- **==** - **Equal** in value only: Equivalent (x == y)
- **===** - **Equal** in value and data type: Exactly equal (x === y)
- **!=** - **Not equal** in value only: Not equivalent (x != y)
- **!==** - **Not equal** in value and data type: Not exactly equal (x !== y)
- **>** - **Greater than** (x > y)
- **<** - **Less than** (x < y)
- **>=** - **Greater than or equal to** (x >= y)
- **<=** - **Less than or equal to** (x <= y)

### Logical Operators

The common logical operators:

- **&&(ampersand)** - The && operator gets true only if the two operands are true.
- **||(pipe)** - The || operator gets true either of the operand is true.
- **!(negation)** - The ! operator negates true to false and false to true.

### Increment Operator

In JavaScript we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment.

1. Pre-increment

```js
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
```

2. Post-increment

```js
let count = 0
console.log(count++)        // 0
console.log(count)          // 1
```

We use most of the time post-increment.

### Decrement Operator

In JavaScript we use the decrement operator to decrease a value stored in a variable. The decrement could be pre or post decrement.

1. Pre-decrement

```js
let count = 0
console.log(--count) // -1
console.log(count)  // -1
```

2. Post-decrement

```js
let count = 0
console.log(count--) // 0
console.log(count)   // -1
```

### Ternary Operators

Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators. 

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

### Operator Precedence

Operators with higher precedence become the operands of operators with lower precedence.

Within operators of the same precedence, the language groups them by associativity. Left-associativity (left-to-right) means that it is interpreted as (a OP1 b) OP2 c, while right-associativity (right-to-left) means it is interpreted as a OP1 (b OP2 c). 

Operators are first grouped by precedence, and then, for adjacent operators that have the same precedence, by associativity.

Where OP1 is a prefix unary operator and OP2 is a binary operator. If OP1 has higher precedence than OP2, then it would be grouped as (OP1 a) OP2 b; otherwise, it would be OP1 (a OP2 b).

If the unary operator is on the second operan,then the binary operator OP2 must have lower precedence than the unary operator OP1 for it to be grouped as a OP2 (OP1 b). 

Precedence Order:

1. Grouping - (...)
2. Five:
   1. Member Access -> ... . ...
      - Associativity - left-to-right
   2. Optional chaining -> ... ?. ...
      - Associativity - left-to-right
   3. Computed Member Access -> ... [...]
   4. new (with argument list) -> new ... (...)
   5. Function Call -> ... (...)
3. new (without argument list) -> new ...
4. Two:
   1. Postfix Increment - … ++
   2. Postfix Decrement	- … --
5. Ten:
   1. Logical NOT (!) -> ! …
   2. Bitwise NOT (~) -> ~ …
   3. Unary plus (+) -> + …
   4. Unary negation (-) -> - …
   5. Prefix Increment -> ++ …
   6. Prefix Decrement -> -- …
   7. typeof -> typeof …
   8. void -> void …
   9. delete -> delete …
   10. await -> await …
6. Exponentiation (**) -> … ** …
   - Associativity - right-to-left
7. Three (Associativity - left-to-right):
   1. Multiplication (*) -> … * …
   2. Division (/) -> … / …
   3. Remainder (%) -> … % …
8. Two (Associativity - left-to-right):
   1. Addition (+) -> … + …
   2. Subtraction (-) -> … - …
9. Three (Associativity - left-to-right):
   1. Bitwise Left Shift (<<) -> … << …
   2. Bitwise Right Shift (>>) -> … >> …
   3. Bitwise Unsigned Right Shift (>>>) -> … >>> …
10. Six (Associativity - left-to-right):
   1. Less Than (<) -> … < …
   2. Less Than Or Equal (<=) -> … <= …
   3. Greater Than (>) -> … > …
   4. Greater Than Or Equal (>=) -> … >= …
   5. in -> … in …
   6. instanceof -> … instanceof …
11. Four (Associativity - left-to-right):
   1. Equality (==) -> … == …
   2. Inequality (!=) -> … != …
   3. Strict Equality (===) -> … === …
   4. Strict Inequality (!==) -> … !== …
12. Bitwise AND (&) - … & …
   - Associativity - left-to-right
13. Bitwise XOR (^) - … ^ …
   - Associativity - left-to-right
14. Bitwise OR (|) - … | …
   - Associativity - left-to-right
15. Logical AND (&&) - … && …
   - Associativity - left-to-right
16. Two:
   1. Logical OR (||) -> … || …
   2. Nullish coalescing operator (??) -> … ?? …
17. Six (Associativity - right-to-left):
   1. Assignment -> 
      1. … = …
      2. … += …
      3. … -= …
      4. … **= …
      5. … *= …
      6. … /= …
      7. … %= …
      8. … <<= …
      9. … >>= …
      10. … >>>= …
      11. … &= …
      12. … ^= …
      13. … |= …
      15. … &&= …
      16. … ||= …
      17. … ??= …
   2. Conditional (ternary) operator -> … ? … : …
      - Associativity - right-to-left
(Groups on expressions after ?)
   3. Arrow (=>) -> … => …
      - Associativity - right-to-left
   4. yield -> yield …
   5. yield* -> yield* …
   6. Spread (...) -> ... …
18. Comma / Sequence - … , …
   - Associativity - left-to-right

## Window Methods

### Window alert() method

Window alert() method displays an alert box with a specified message and an OK button. It is a builtin method and it takes on argument.

`alert(message)`

Do not use too much alert because it is destructing and annoying, use it just to test.

### Window prompt() method

The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.

`prompt('required text', 'optional text')`

### Window confirm() method

The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used to ask permission from a user to execute something. Window confirm() takes a string as an argument. Clicking the OK yields true value, whereas clicking the Cancel button yields false value.

`confirm('text')`

## Date Object

The object we create using Date object provides many methods to work with date and time.The methods we use to get date and time information from a date object values are started with a word get because it provide the information. 
getFullYear() - Get the **year** as a four digit number (yyyy)
getMonth() - Get the **month** as a number (0-11)
getDate() - Get the **day** as a number (1-31)
getHours() - Get the **hours** (0-23)
getMinutes - Get the **minute** (0-59)
getSeconds() - Get the **second** (0-59)
getMilliseconds() - Get the **milisecond** (0-999)
getTime() - Get the **time** (milliseconds since January 1, 1970)
getDay - Get the **weekday** as a number (0-6)

### Creating a time object

Once we create time object. The time object will provide information about time.

```js
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
```

### Getting full year

```js
const now = new Date()
console.log(now.getFullYear()) // 2020
```

### Getting month

```js
const now = new Date()
console.log(now.getMonth()) // 0, because the month is January,  month(0-11)
```

### Getting date

```js
const now = new Date()
console.log(now.getDate()) // 4, because the day of the month is 4th,  day(1-31)
```

### Getting day

```js
const now = new Date()
console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
```

### Getting hours

```js
const now = new Date()
console.log(now.getHours()) // 0, because the time is 00:56:41
```

### Getting minutes

```js
const now = new Date()
console.log(now.getMinutes()) // 56, because the time is 00:56:41
```

### Getting seconds

```js
const now = new Date()
console.log(now.getSeconds()) // 41, because the time is 00:56:41
```

### Getting time

```js
const now = new Date()
console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
```

- Using Date.now()
```js
const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true
```

Let us format these values to a human readable time format. Example:

```js
const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
```

## 💻 Day 3: Exercises



### Exercises: Level 1

1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
2. Check if type of '10' is equal to 10
3. Check if parseInt('9.8') is equal to 10
4. Boolean value is either true or false.
   1. Write three JavaScript statement which provide truthy value.
   2. Write three JavaScript statement which provide falsy value.

5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Find the length of python and jargon and make a falsy comparison statement.

6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. There is no 'on' in both dragon and python

7. Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.

### Exercises: Level 2

1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   ```

1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```

1. Get length and width using prompt and calculate an area of rectangle (area = length x width) and the perimeter of rectangle (perimeter = 2 x (length + width))
1. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
1. Calculate the slope, x-intercept and y-intercept of y = 2x -2
1. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
1. Compare the slope of above two questions.
1. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
1. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```

1. If the length of your name is greater than 7 say, your name is long else say your name is short.
1. Compare your first name length and your family name length and you should get this output.

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Your first name, Asabeneh is longer than your family name, Yetayeh
    ```

1. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   I am 225 years older than you.
   ```

1. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

    ```sh

    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```

1. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

   ```sh
   Enter number of years you live: 100
   You lived 3153600000 seconds.
   ```

1. Create a human readable time format using the Date time object
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm

### Exercises: Level 3

1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
   1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05