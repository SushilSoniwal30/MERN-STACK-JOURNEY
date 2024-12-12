/**
 * Todo : Autoglobals in JS
 * 
 * (1) Global variables can be explicitly declared using `var`, `let`, or `const`.
 * (2) If a variable is assigned a value without prior declaration, JS implicitly creates it as a global variable. This behavior is known as "Autoglobal."
 * (3) Autoglobals are considered bad practice as they can lead to unexpected side effects and pollute the global namespace.
 * (4) We can restrict this feature by using "Strict Mode" ('use strict') in code
 */

// & -------------------- Example - 01 --------------------

var firstName = "Nobita";
function fun() {
    firstName = "Sizuka";
    lastName = "Minamoto";
    console.log("Hello", firstName, lastName);
}
fun();
console.log(firstName, lastName);

// *********** After Phase - 01 (Scope Resolution) ***********

// line - 9 :- firstName -> Global Scope
// line - 10 :- fun -> Global Scope
// line - 11 & 12 :- No formal declaration, hence nothing happens

// *********** After Phase - 02 (Execution) ***********

// line - 9 :- variable "firstName" is known to Js in global scope, hence firstName -> "Nobita"
// line - 15 :- function "fun" is known to js in global scope, hence it will call function fun()
// line - 11 :- variable "firstName" is known to Js in global scope and not in function scope, hence firstName will be updated to -> "Sizuka"
// line 12: Variable "lastName" is not declared, but since it appears on the Left-Hand Side (LHS) of an assignment operation, JavaScript implicitly treats it as a global variable and assigns it the value "Minamoto." This behavior is known as "Autoglobal"


// & -------------------- Example - 02 --------------------

var myFirstName = "Nobita";
function funny() {
    myFirstName = "Sizuka";
    myLastName = "Minamoto";
    console.log("Hello", firstName, lastName);
}
console.log(myFirstName);
// console.log(myLastName); // Error :- Here "myLastName" is using as R.H.S i.e. we are consuming the variable but it's not present in any of the scope. Js will not make it autoglobal and error will be introduced here
funny();