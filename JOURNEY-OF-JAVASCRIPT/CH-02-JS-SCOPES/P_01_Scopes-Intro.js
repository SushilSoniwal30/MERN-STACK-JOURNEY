/**
 * Todo : (1) Scopes in JS
 * 
 * ^ Scope determines the accessibility (visibility) of variables in different parts of your code. It defines where you can use a variable or function.
 */

// & (1) Types of Scopes in JavaScript

// ! Global Scope : Variables declared outside any function or block belong to the global scope. Accessible from anywhere in the code.

let globalVar = "I'm global!";
console.log(globalVar); // Accessible

// ! Function Scope : Variables declared within a function are accessible only inside that function.

function greet() {
    let message = "Hello!";
    console.log(message); // Accessible
}
greet();
// console.log(message); // Error: message is not defined

// ! Block Scope : Variables declared with let or const inside {} are accessible only within that block.

{
    let blockScoped = "I'm block scoped!";
    console.log(blockScoped); // Accessible
}
// console.log(blockScoped); // Error: blockScoped is not defined
