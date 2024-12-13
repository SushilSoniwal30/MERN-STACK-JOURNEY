// ^ Coercion : It refers to the automatic conversion of values from one type to another.

// Todo : '+' Operator

console.log(3 + 5);
/**
 * As both are 'Number', '+' will perform arithmetic addition
 * & Output => 8
 */

console.log(3 + "5");
/**
 * As, first one is 'Number' while other one is a 'String'.
 * "ToString" will convert first one into a 'String'.
 * So '+' will perform string concatenation.
 * & Output => "35"
 */

console.log(3 + true);
/**
 * As, first one is 'Number' while other one is a 'Boolean'.
 * "ToNumber" will convert second one into a 'Number', because it is true it will be converted to (1).
 * So '+' will perform arithmetic addition.
 * & Output => 4
 */

console.log(5 + undefined);
/**
 * As, first one is 'Number' while other one is a 'Undefined'.
 * "ToNumber" will convert second one into a 'Number', because it is "Undefined" it will be converted to (NaN).
 * So '+' will perform arithmetic addition.
 * & Output => NaN
 */

console.log(5 + null);
/**
 * As, first one is 'Number' while other one is a 'Null'.
 * "ToNumber" will convert second one into a 'Number', because it is "Null" it will be converted to (+0).
 * So '+' will perform arithmetic addition.
 * & Output => 5
 */

console.log(5 + NaN);
/**
 * When any number will be added with an invalid number, The output will also be invalid.
 * So '+' will perform arithmetic addition.
 * & Output => NaN
 */

console.log("Sushil" + true);
/**
 * As, first one is 'String' while other one is a 'Boolean'.
 * "ToString" will convert second one into a 'String', because it is "Boolean" it will be converted to ("true").
 * So '+' will perform string concatenation.
 * & Output => "Sushiltrue"
 */