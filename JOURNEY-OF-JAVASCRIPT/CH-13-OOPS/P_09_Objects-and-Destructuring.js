/**
 * & Js Objects and Object Destructuring
 * 
 * (1) An object is a combination of "key-value" pairs.
 * (2) Object Destructuring allows us to extract values from objects and assign them to variables
 */

// * How to create an object
const user = { name: "Kriti", age: 28, role: "SDE-1" };
console.log(user);
console.log(user.name);
console.log(user["role"]);

// * Object Destructuring

// ^ (1) We can destructure all the properties
const { name, age, role } = user;
console.log(age);
console.log(role);

// ^ (2) We can destructure specific properties
// const{name}=user;

// ^ (3) The property names used in destructuring must match the keys in the object
const { myName } = user;
console.log(myName); // undefined

let Product = { name: "Macbook Pro", price: 125000 };

// ^ (4) We can rename variables
const { name: productName } = Product;
console.log(productName);

// ^ (5) We can add default values
const { discount = 200 } = Product;
console.log(discount);

// * Destructuring an Object inside another Object
const product = {
    name: "Laptop",
    details: { brand: "Dell", year: 2022 }
};

// ? How to destructure "brand" from the details object

// ^ Way-01 : First destructure "details" then "brand"
// const{details}=product;
// const{brand}=details;
// console.log(brand);

// ^ Way-02 : Using one line syntax
const { details: { brand } } = product;
console.log(brand);