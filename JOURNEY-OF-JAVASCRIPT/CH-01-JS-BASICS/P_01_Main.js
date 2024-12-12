/**
 * Todo : (1) Variables in JS
 * 
 * ^ Variables are containers for storing data values. In JavaScript, we can declare variables using the var, let, or const keywords.
 */

// Using var (global-scoped OR function-scoped)
var x = 10;

// Using let (block-scoped)
let y = 20;

// Using const (block-scoped, immutable)
const z = 30;

// * ---------------------------------------------------------------------------------------------------------------

/**
 * Todo : (2) Data Types in JS
 * 
 * ^ Data types are used to store different types of data.
 */

// number
console.log(6);
console.log(5.67);
console.log(0);
console.log(-0);
console.log(Infinity);
console.log(-Infinity);

// bigint
console.log(1234567890987654321234567899n);

// string
console.log("I'm sushil!");
console.log('Learning JS!');
console.log(`Waiting for Node to learn!`);

// boolean
console.log(true);
console.log(false);

// undefined
let p;
console.log(p);

// null
let q = null
console.log(q);

// object
console.log({ "Age": 22 });

// symbol
console.log(Symbol("Hello"));

// & ******* typeof :- Returns type of given argument in a text *******
console.log(typeof "Sushil");
console.log(typeof (true));
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof (typeof 56)); // Always a string

// * ---------------------------------------------------------------------------------------------------------------

/**
 * Todo : (3) Conditional Statements in JS
 * 
 * ^ They are used to perform different actions based on different conditions.
 */

let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

// * ---------------------------------------------------------------------------------------------------------------

/**
 * Todo : (4) Switch Statement in JS
 * 
 * ^ It is similar to conditional statements.
 */

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Unknown";
}
console.log(dayName); // Output: Wednesday

// * ---------------------------------------------------------------------------------------------------------------

/**
 * Todo : (5) Loops (for, while, do...while) in JS
 * 
 * ^ Loops are used to execute a block of code repeatedly.
 */

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do-while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// * ---------------------------------------------------------------------------------------------------------------