"use strict";

/*
    EXPONENTIATION
    We know that the old JS syntax uses this:
    >> Math.pow(a,b)
    Using the ES6 exponentiation Operator, refactor the following:
 */

let x = Math.pow(4,5);
console.log(x);
let y = 4 ** 5;
console.log(y);

let random = Math.floor(Math.random() * Math.pow(2,3));
console.log(random);

/*
    LET & CONST
    Refactor the above to use es6 variable types.
    What happens when you change the 'random' variable to a const?

    Why does this happen?
    How do we fix this behavior?
 */

random = Math.floor(Math.random() * x);
console.log(random);

/*
    STRING INTERPOLATION
    we can use template strings in the new es6 syntax to avoid concatenating
     multiples strings together.

     Uncomment the two constants, put in the appropriate strings.
     Refactor the code down below to use template strings.
 */

let name = "Mark";
const cohort = "betelgeuse";
let greeting = "Hello" + name + "! You are in the " + cohort + " cohort.";

console.log(`Hello, ${name}  ! You are in the  ${cohort}  cohort.`);
/*
    FOR...OF
    lets us iterate over Arrays, NodeLists, and even Strings

    rewrite the following as a for...of loop
 */

const instructors = [
    'Daniel',
    'Vivian',
    'Sophie',
    'David',
    'Justin',
    'Fer',
    'Terrell'
];

// instructors.forEach(function(instructor){
//     console.log(instructor);
// });
for(let instructor of instructors) {
    console.log(instructor)
}
/*
    ARROW FUNCTIONS
    Shorter, cleaner and allows the 'this' keyword to be bound lexically.
    Pretty neat.

    How can you use fat arrow syntax to refactor the code below?
    Make it as concise as possible.
 */

// function add(x = 2, y = 3){
//     return x + y;
//}
// x = 2;
// y = 3;
const add = (x=2, y=3) =>  x + y;
console.log(add(2,3));
// function square(x){
//     return x * x;
// }
const square = x => x * x;
console.log(square(3));
// same as

/*
    DEFAULT FUNCTION PARAMETER VALUES
    refactor the following so that variable 'greeting' has a value of 'Good
     Morning' and 'name' has the value of 'Betelgeuse.

     Check your work.
 */
greeting = "Good Morning ";
name = "Team";
const myGreeting = (greeting,name) => {
   return `${greeting} ${name}`
};

console.log(myGreeting(greeting,name));
console.log(myGreeting("Hello ", "Sophie"));

/*
    OBJECT PROPERTY VARIABLE ASSIGNMENT
    Refactor the Object below to use shorthand property assignment
 */

const dog = "Spike";
const cat = "Tom";
const mouse = "Jerry";

// const pals = {
//     dog: dog,
//     cat: cat,
//     mouse: mouse
//};
const pals = {
    dog,
    cat,
    mouse
};
console.log(pals.dog);
// var
//     a = 1, b = 2, c = 3;
// obj = {
//     a: a,
//     b: b,
//     c: c
// };
// const
//     a = 1, b = 2, c = 3;
// obj = {
//     a
//     b
//     c
// };
/*
    OBJECT DESTRUCTURING
    1. Use Object Destructuring to refactor
 */

const make = 'nissan';
const model= 'rogue';
const color = 'white';

const myCar = {
    make,
    model,
    color
};
//const {make,model,color} = myCar;

const carInfo = ({make,model}) => {
    // var make = myCar.make;
    // var model = myCar.model;
    console.log(make);
    console.log(model);
};

carInfo(myCar);

/*
    OBJECT DESTRUCTURING
    2. Remember the 'instructors' array that we created at the top of this
     file? Use Array Destructuring to return the first 3 instructors. Use
      the curriculum example as a reference.
 */
const [q,s,z] = instructors;
console.log(q);