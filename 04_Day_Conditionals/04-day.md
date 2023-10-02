# 📔 Day 4 - Conditionals

- [📔 Day 4](#-day-4)
	- [Conditionals](#conditionals)
		- [If](#if)
		- [If Else](#if-else)
		- [If  Else if Else](#if--else-if-else)
		- [Switch](#switch)
		- [Ternary Operators](#ternary-operators)
	- [💻 Exercises](#-exercises)
		- [Exercises: Level 1](#exercises-level-1)
		- [Exercises: Level 2](#exercises-level-2)
		- [Exercises: Level 3](#exercises-level-3)

## Conditionals

Conditional statements are used for make decisions based on different conditions. By default , statements in JavaScript script executed sequentially from top to bottom. If the processing logic require so, the sequential flow of execution can be altered in two ways:

- **Conditional execution**: a block of one or more statements will be executed if a certain expression is true
- **Repetitive execution**: a block of one or more statements will be repetitively executed as long as a certain expression is true. In this section, we will cover if, else , else if statements. The comparison and logical operators we learned in the previous sections will be useful in here.


### If

In JavaScript and other programming languages the key word if is to used check if a condition is true and to execute the block code. However, if the condition is false, we won't see any results. To create an if condition, we need if keyword, condition inside a parenthesis and block of code inside a curly bracket({}).

```js
// syntax
if (condition) {
  //this part of code runs for truthy condition
}
```

### If Else

If condition is true the first block will be executed, if not the else condition will be executed.

```js
// syntax
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}
```

### If Else if Else

As similar to our daily life, programming is also full of conditions. We use else if when we have multiple conditions.

```js
// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code
}
```

### Switch

Switch is an alternative for if else if else else. The switch statement starts with a switch keyword followed by a parenthesis and code block. Inside the code block we will have different cases. Case block runs if the value in the switch statement parenthesis matches with the case value. The break statement is to terminate execution so the code execution does not go down after the condition is satisfied. The default block runs if all the cases don't satisfy the condition.


```js
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}
```

### Ternary Operators

Another way to write conditionals is using ternary operators.

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

## 💻 Exercises

### Exercises: Level 1

1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.

   ```sh
   Enter your age: 30
   You are old enough to drive.

   Enter your age:15
   You are left with 3 years to drive.
   ```

2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```

3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

    - using if else
    - ternary operator.

    ```js
      let a = 4
      let b = 3
    ```

    ```sh
      4 is greater than 3
    ```

4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

    ```sh
    Enter a number: 2
    2 is an even number

    Enter a number: 9
    9 is is an odd number.
    ```

### Exercises: Level 2

1. Write a code which  can give grades to students according to theirs scores:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
2. Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is :
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer
3. Check if a day is weekend day or a working day. Your script will take day as an input.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
  ```

### Exercises: Level 3

1. Write a program which tells the number of days in a month.

  ```sh
    Enter a month: January
    January has 31 days.

    Enter a month: JANUARY
    January has 31 day

    Enter a month: February
    February has 28 days.

    Enter a month: FEbruary
    February has 28 days.
  ```

2. Write a program which tells the number of days in a month, now consider leap year.