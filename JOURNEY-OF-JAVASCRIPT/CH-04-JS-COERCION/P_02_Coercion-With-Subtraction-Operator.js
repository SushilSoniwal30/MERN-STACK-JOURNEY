// ^ Coercion : It refers to the automatic conversion of values from one type to another.

// Todo : '-' Operator

console.log(5 - 3);
/**
 * As both are 'Number', '-' will perform arithmetic subtraction.
 * & Output => 2
 */

console.log(5 - "3");
/**
 * As, first one is 'Number' while other one is a 'String'.
 * "ToNumber" will convert second one into a 'Number'.
 * So '-' will perform arithmetic subtraction.
 * & Output => 2
 */

console.log(3 - true);
/**
 * As, first one is 'Number' while other one is a 'Boolean'.
 * "ToNumber" will convert second one into a 'Number', because it is true it will be converted to (1).
 * So '-' will perform arithmetic subtraction.
 * & Output => 2
 */

console.log(5 - undefined);
/**
 * As, first one is 'Number' while other one is a 'Undefined'.
 * "ToNumber" will convert second one into a 'Number', because it is "Undefined" it will be converted to (NaN).
 * So '-' will perform arithmetic subtraction.
 * & Output => NaN
 */

console.log(5 - null);
/**
 * As, first one is 'Number' while other one is a 'Null'.
 * "ToNumber" will convert second one into a 'Number', because it is "Null" it will be converted to (+0).
 * So '-' will perform arithmetic subtraction.
 * & Output => 5
 */

console.log(5 - NaN);
/**
 * When any number will be subtracted from an invalid number, The output will also be invalid.
 * So '-' will perform arithmetic subtraction.
 * & Output => NaN
 */

console.log("Sushil" - true);
/**
 * As, first one is 'String' while other one is a 'Boolean'.
 * "ToNumber" will convert first one into a 'Number', because it contains non-numeric characters it will be converted to (NaN).
 * "ToNumber" will also convert true to 1.
 * & Output => "NaN"
 */