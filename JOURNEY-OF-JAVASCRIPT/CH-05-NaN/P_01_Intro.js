/** 
 * & In JavaScript, "NaN" is the only primitive value that doesn't follow the identity property, 
 * * meaning NaN is not equal to itself.
 * ^ The identity property, also known as the Reflexive Property, states that any value is equal to itself. 
 * ! This property holds true for all values, except for NaN.
*/

console.log(NaN === NaN); // false

/**
 * & isNaN() : It is used to determine whether a value is NaN or can be converted to a number.
 * * It coerces its argument to a number before performing the check. This can lead to unexpected behavior, 
 * ^ especially with values like empty strings ('') or values that can be implicitly converted to numbers.
 */

console.log(isNaN(NaN));        // true
console.log(isNaN(123));        // false
console.log(isNaN('Hello'));    // true (cannot be converted to a number)
console.log(isNaN('123'));      // false (can be converted to a number)
console.log(isNaN(true));       // false (can be converted to a number: true -> 1)
console.log(isNaN(undefined));  // true (cannot be converted to a number)

/**
 * & Number.isNaN() : is used to determine whether a value is NaN without performing any type coercion.
 * * This method was introduced in ECMAScript 6 to address the limitations and issues associated with the global 
 * ^ "isNaN()" function.
 */

console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(123));        // false
console.log(Number.isNaN('Hello'));    // false (not NaN, returns false)
console.log(Number.isNaN('123'));      // false (not NaN, returns false)
console.log(Number.isNaN(true));       // false (not NaN, returns false)
console.log(Number.isNaN(undefined));  // false (not NaN, returns false)
