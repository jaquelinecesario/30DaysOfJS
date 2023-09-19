# 📔 Day 1 - Introduction

- [Setup](#setup)
	- [Install Node.js](#install-nodejs)
	- [Browser](#browser)
		- [Installing Google Chrome](#installing-google-chrome)
		- [Opening Google Chrome Console](#opening-google-chrome-console)
		- [Writing Code on Browser Console](#writing-code-on-browser-console)
			- [Console.log](#consolelog)
			- [Console.log with Multiple Arguments](#consolelog-with-multiple-arguments)
			- [Comments](#comments)
			- [Syntax](#syntax)
		- [Arithmetics](#arithmetics)
	- [Code Editor](#code-editor)
		- [Installing Visual Studio Code](#installing-visual-studio-code)
		- [How to Use Visual Studio Code](#how-to-use-visual-studio-code)
- [Adding JavaScript to a Web Page](#adding-javascript-to-a-web-page)
- [Introduction to Data types](#introduction-to-data-types)
	- [Numbers](#numbers)
	- [Strings](#strings)
	- [Booleans](#booleans)
	- [Undefined](#undefined)
	- [Null](#null)
- [Checking Data Types](#checking-data-types)
- [Comments Again](#comments-again)
- [Variables](#variables)
- [💻 Day 1: Exercises](#-day-1-exercises)

## Setup

### Install Node.js

We can check if node is installed on our local machine by opening our device terminal or command prompt.

```node -v```


### Browser


#### Installing Google Chrome

Google Chrome Browser

#### Opening Google Chrome Console

Clicking three dots at the top right corner of the browser, selecting More tools -> Developer tools or using a keyboard shortcut.

Keyboard Shortcut - F12, Ctl+Shift+I, Ctl+Shift+J 


#### Writing Code on Browser Console

##### Console.log
 ```console.log('Hello, World!')```  


##### Console.log with Multiple Arguments
```console.log(param1, param2, param3)```

##### Comments

Single Line Comment - ```// comment```

Multiline Comment - ```/* comment */```

##### Syntax

The English meaning of syntax is the arrangement of words and phrases to create well-formed sentences in a language.

The technical definition of syntax is the structure of statements in a computer language.

If we do not write a syntax that JavaScript understands, it will raise different types of errors.

#### Arithmetics

```
console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3
```

### Code Editor


#### Installing Visual Studio Code


#### How to Use Visual Studio Code

Install Live Server Extension

### Inline Script

```<button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>```

### Internal Script

The internal script can be written in the head or the body, but it is preferred to put it on the body of the HTML document.

### External Script

Similar to the internal script, the external script link can be on the header or body, but it is preferred to put it in the body (at the bottom of the body.).

### Multiple External Scripts

Your main.js file should be below all other scripts. It is very important to remember this.

## Introduction to Data types

### Numbers

Integers: Integer (negative, zero and positive) numbers Example: ... -3, -2, -1, 0, 1, 2, 3 ...

Float-point numbers: Decimal number Example ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

### Strings

A collection of one or more characters between two single quotes, double quotes, or backticks.

```
'a'
'Asabeneh'
"Asabeneh"
'Finland'
'JavaScript is a beautiful programming language'
'I love teaching'
'I hope you are enjoying the first day'
`We can also create a string using a backtick`
'A string could be just as small as one character or as big as many pages'
'Any data type under a single quote, double quote or backtick is a string'
```

### Booleans

A boolean value is either True or False. Any comparisons returns a boolean value, which is either true or false.

A boolean data type is either a true or false value.

```
true // if the light is on, the value is true
false // if the light is off, the value is false
```

### Undefined

In JavaScript, if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.

```
let firstName
console.log(firstName) // undefined, because it is not assigned to a value yet
```

### Null

Null in JavaScript means an empty value.

```
let emptyValue = null
```

## Checking Data Types

To check the data type of a certain variable, we use the typeof operator

```
console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined
```

## Comments Again

Comments are important in making your code more readable. 

## Variables

Variables are containers of data. Variables are used to store data in a memory location. When a variable is declared, a memory location is reserved. When a variable is assigned to a value (data), the memory space will be filled with that data. To declare a variable, we use var, let, or const keywords.

For a variable that changes at a different time, we use let. If the data does not change at all, we use const. For example, PI, country name, gravity do not change, and we can use const. We will not use var in this challenge and I don't recommend you to use it. It is error prone way of declaring variable it has lots of leak. 

A valid JavaScript variable name must follow the following rules:

- A JavaScript variable name should not begin with a number.
- A JavaScript variable name does not allow special characters except dollar sign and underscore.
- A JavaScript variable name follows a camelCase convention.
- A JavaScript variable name should not have space between words.

In this material, we will use camelCase variables(camelWithOneHump). We use CamelCase(CamelWithTwoHump) to declare classes.

```
// Syntax
let nameOfVariable = value
```

```
// Variables can also be declaring in one line separated by comma, however I recommend to use a seperate line to make code more readble
let name = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(name, job, live)
```

# 💻 Day 1: Exercises

1. Write a single line comment which says, _comments can make code readable_
2. Write another single comment which says, _Welcome to 30DaysOfJavaScript_
3. Write a multiline comment which says, _comments can make code readable, easy to reuse_
   _and informative_

4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
5. Create datatypes.js file and use the JavaScript **_typeof_** operator to check different data types. Check the data type of each variable
6. Declare four variables without assigning values
7. Declare four variables with assigned values
8. Declare variables to store your first name, last name, marital status, country and age in multiple lines
9. Declare variables to store your first name, last name, marital status, country and age in a single line
10. Declare two variables _myAge_ and _yourAge_ and assign them initial values and log to the browser console.

```sh
I am 25 years old.
You are 30 years old.
```