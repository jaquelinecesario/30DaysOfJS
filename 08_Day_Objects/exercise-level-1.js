const dog = {};

console.log(dog);

dog.name = "Doguinho"
dog.legs = "4"
dog.color = "brown"
dog.age = "2"
dog.bark = function() {
    return "woof woof"
}

console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

dog.breed = "Puddle"
dog.getDogInfo = function() {
    return `It is ${dog.name} and it has ${dog.legs} legs, it is ${dog.color}, his breed is ${dog.breed}. It is ${dog.age} years old. It says "${dog.bark()}".`
}
console.log(dog.getDogInfo());

// Set new properties the dog object: breed, getDogInfo