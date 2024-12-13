console.log(1 === "1");
/**
 * Although the values are same, they are of different types.
 * & Output => false.
 */

console.log(1 === 1);
/**
 * The value and type of both are the same.
 * & Output => true.
 */

console.log(false === true);
/**
 * Both the operands are boolean but the values are different
 * & Output => false.
 */

console.log(null === undefined);
/**
 * Both the operands are of different types.
 * & Output => false
 */

console.log(30 === 30.0);
/**
 * Both the operands have same type and of same number value.
 * & Output => true
 */

console.log("Sushil" === "Sushil");
/** 
 * Both strings are havine same values and of same type
 * & Outpuut => true
 */

console.log("Sushil" === new String("Sushil"));
/**
 * The string values are same but the first operand is of type "String" while second one is an "Object".
 * & Output => false.
 */

console.log(null === NaN);
/**
 * Both the operands are of different types.
 * & Output => false
 */

console.log(NaN === NaN);
/**
 * NaN is the only primitive in js that is not equal to itself as well.
 * & Output => false
 */

let obj1 = { "firstName": "Sushil" };
let obj2 = { "firstName": "Sushil" };
console.log(obj1 === obj2);
/**
 * Here both the objects are same in terms of type and content, but their references are different in memory.
 * & Output => false.
 */

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2);
/**
 * Here both the arrays are same in terms of type and content, but their references are different in memory.
 * & Output => false.
 */