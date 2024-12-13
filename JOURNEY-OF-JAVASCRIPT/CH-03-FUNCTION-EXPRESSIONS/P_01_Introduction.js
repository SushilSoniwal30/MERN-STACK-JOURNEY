/**
 * Todo : "Function Expression" in JS
 * 
 * (1) Function Declaration -> First token of the instruction to declare a function starts with function keyword
 * (2) Function Expression -> We are creating a function but the first valid token is not the function keyword
 * (3) function expressions are not hoisted
 */

// & Diffrent types of function expressions

// * (1) Named function expression

const myFun = function fun(x) {
    console.log("calling...", x);
}

console.log(myFun); // function
myFun() // call the function

// * (2) Anonymous function expression

const play = function (y) {
    console.log(`Playing ${y}`);
}

play("Cricket")

// * (3) Arrow function / Arrow function expression

const eat = (z) => {
    console.log(`Eating ${z}`);
}

eat("Apple");

// * (4) IIFE - Immediately invoked function expression

(function fun(num) {
    console.log("calling...", num);
})(10);

