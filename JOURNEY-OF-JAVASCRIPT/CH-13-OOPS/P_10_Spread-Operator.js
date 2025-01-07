/**
 * ? Spread(...) operator in JS
 * 
 * It allows us to expand iterable objects (like arrays or strings) or object literals into individual elements. 
 * It can be used in various scenarios such as copying arrays, merging arrays, spreading elements in function calls, and more.
 * 
 * Here are some examples to illustrate the usage of the spread operator:
 * 
 * * 1. Copying an Array:
 * The spread operator can be used to create a shallow copy of an array.
 * 
 * ```javascript
 * const originalArray = [1, 2, 3];
 * const copiedArray = [...originalArray];
 * console.log(copiedArray); // Output: [1, 2, 3]
 * ```
 * 
 * * 2. Merging Arrays:
 * You can merge multiple arrays into one using the spread operator.
 * 
 * ```javascript
 * const array1 = [1, 2, 3];
 * const array2 = [4, 5, 6];
 * const mergedArray = [...array1, ...array2];
 * console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
 * ```
 * 
 * * 3. Spreading Elements in Function Calls:
 * The spread operator can be used to pass elements of an array as arguments to a function.
 * 
 * ```javascript
 * function sum(a, b, c) {
 *   return a + b + c;
 * }
 * const numbers = [1, 2, 3];
 * console.log(sum(...numbers)); // Output: 6
 * ```
 * 
 * * 4. Spreading Elements in Object Literals:
 * The spread operator can also be used to copy properties from one object to another.
 * 
 * ```javascript
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { c: 3, d: 4 };
 * const mergedObj = { ...obj1, ...obj2 };
 * console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }
 * ```
 * 
 * * 5. Adding New Elements to Arrays:
 * You can use the spread operator to add new elements to an existing array.
 * 
 * ```javascript
 * const originalArray = [1, 2, 3];
 * const newArray = [0, ...originalArray, 4];
 * console.log(newArray); // Output: [0, 1, 2, 3, 4]
 * ```
 * 
 * * 6. Converting a String to an Array:
 * The spread operator can be used to convert a string into an array of characters.
 * 
 * ```javascript
 * const str = "hello";
 * const charArray = [...str];
 * console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']
 * ```
 * 
 * * 7. Using Spread Operator with Math Functions:
 * You can use the spread operator to pass an array of numbers to a function like `Math.max`.
 * 
 * ```javascript
 * const numbers = [1, 2, 3, 4, 5];
 * console.log(Math.max(...numbers)); // Output: 5
 * ```
 * 
 * * 8. Removing Duplicates from an Array:
 * The spread operator can be combined with `Set` to remove duplicates from an array.
 * 
 * ```javascript
 * const numbers = [1, 2, 2, 3, 4, 4, 5];
 * const uniqueNumbers = [...new Set(numbers)];
 * console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
 * ```
 * 
 * * 9. Combining Objects with Same Keys:
 * When combining objects with the same keys, the spread operator will overwrite the values from left to right.
 * 
 * ```javascript
 * const obj1 = { a: 1, b: 2 };
 * const obj2 = { b: 3, c: 4 };
 * const combinedObj = { ...obj1, ...obj2 };
 * console.log(combinedObj); // Output: { a: 1, b: 3, c: 4 }
 * ```
 * 
 * * 10. Using Spread Operator in Destructuring:
 * The spread operator can be used in destructuring assignments to collect the remaining elements.
 * 
 * ```javascript
 * const [first, ...rest] = [1, 2, 3, 4];
 * console.log(first); // Output: 1
 * console.log(rest);  // Output: [2, 3, 4]
 * ```
 * 
 * The spread operator is a versatile and powerful feature in JavaScript that simplifies many common tasks involving arrays and objects. 
 * Understanding and utilizing the spread operator can greatly enhance your ability to write clean and efficient code.
 */