console.log(null == undefined);
console.log(undefined == null);

console.log(7 == "a");
/**
 * The right operand is a "String", ToNumber will try to convert it to a "Number".
 * Since "a" is not a numeric value js will convert it to NaN.
 * & Output => false
 */

console.log(7 == "7");

console.log(7 == "");
/**
 * ToNumber will convert "" to 0.
 * & Output => false.
 */

console.log("Sushil" == 30);

console.log(true == 30);

console.log(30 == true);

console.log([] == []);

console.log({} == {});

console.log({} == []);

console.log(NaN == NaN);

console.log(null == 0);

console.log([1,2] == "1,2");