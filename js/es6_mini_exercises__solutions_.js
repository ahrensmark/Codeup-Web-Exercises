// "use strict";

/*
    EXPONENTIATION
    We know that the old JS syntax uses this:
    >> Math.pow(a,b)
    Using the ES6 exponentiation Operator, refactor the following:
 */

const x = 4 ** 5;
console.log(x);

let random = Math.floor(Math.random() * (2 ** 3));
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

const name = "Sophie";
const cohort = "Olympic";
const greeting = `Hello ${name} ! You are in the ${cohort} cohort.`;


/*
    FOR...OF
    lets us iterate over Arrays, NodeLists, and even Strings

    rewrite the following as a for...of loop
 */


// instructors.forEach(function(instructor){
//     console.log(instructor);
// });

const instructors = [
    'Daniel',
    'Vivian',
    'Sophie',
    'David',
    'Justin',
    'Fer',
    'Terrell'
];
for(let instructor of instructors){
    console.log(instructor);
}

/*
    ARROW FUNCTIONS
    Shorter, cleaner and allows the 'this' keyword to be bound lexically.
    Pretty neat.

    How can you use fat arrow syntax to refactor the code below?
    Make it as concise as possible.
 */

const add = (x = 2, y = 3) => x + y;

const square = x => x * x;
/*
    DEFAULT FUNCTION PARAMETER VALUES
    refactor the following so that variable 'greeting' has a value of 'Good
     Morning' and 'name' has the value of 'Betelgeuse.

     Check your work.
 */

const myGreeting = (greeting = "Good Morning",name = "Betelgeuse") => {
   return `${greeting},${name}`;
};

console.log(myGreeting());
console.log(myGreeting("Hello", "Sophie"));

/*
    OBJECT PROPERTY VARIABLE ASSIGNMENT
    Refactor the Object below to use shorthand property assignment
 */

const mydog = "Spike";
const cat = "Tom";
const mouse = "Jerry";

const pals = {
    dog: mydog,
    cat,
    mouse
};

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

const [j,y,z] = instructors;
const betelgeuseInstructors = [j,y];

console.log(j);
console.log(y);
console.log(z);
console.log(betelgeuseInstructors);