/**
 * ? Prototypes in JS
 * 
 * (1) JS isn't object oriented instead it is "object linked to an object" kind of language. 
 * (2) The sole reason for this is Prototypes.
 * (3) Prototypes in JS is the mechanism using which objects share properties with other objects
 * 
 * ? Internal Setup of JavaScript Prototypes
 * 
 * * (1) JS internally creates a function named `Object` and an unnamed object with multiple properties like `toString`, etc. 
 * 
 * ```javascript
 * console.log(Object); // Output: {}
 * ```
 * 
 * * (2) This unnamed object is accessible via `Object.prototype`. 
 * 
 * ```javascript
 * console.log(Object.prototype); // Output: {constructor: ƒ, toString: ƒ, ...}
 * ```
 * 
 * * (3) The `constructor` property allows us to reference back to the `Object` function.
 * 
 * ```javascript
 * console.log(Object.prototype.constructor === Object); // Output: true
 * ```
 * 
 * ? What happens with our code
 * 
 * * (1) When we define a constructor function, JavaScript automatically creates a prototype object for it.
 * 
 * ```javascript
 * function Product(name, price) {
 *   this.name = name;
 *   this.price = price;
 * }
 * 
 * console.log(Product.prototype); // Output: {constructor: ƒ}
 * ```
 * 
 * * (2) The prototype object created for the `Product` constructor has a `constructor` property that points back to the `Product` function.
 * 
 * ```javascript
 * console.log(Product.prototype.constructor === Product); // Output: true
 * ```
 * 
 * * (3) We can add methods and properties to the prototype object. These methods and properties will be shared by all instances created using the `Product` constructor.
 * 
 * ```javascript
 * Product.prototype.display = function(){
 *   console.log(`The name of the product is ${this.name} and it's price is ${this.price}`);
 * };
 * 
 * let smartPhone = new Product("Vivo v12",16999);
 * smartPhone.display(); // Output: The name of the product is Vivo v12 and it's price is 16999
 * ```
 * 
 * ? Prototype Chain
 * 
 * * (1) When we create an instance of `Product`, its prototype is set to `Product.prototype`.
 * * (2) This means that the instance inherits properties and methods from `Product.prototype`.
 * 
 * ```javascript
 * console.log(smartPhone.__proto__ === Product.prototype); // Output: true
 * ```
 */

// ^ Example 1 : Prototype using "function constructor"
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.display = function () {
    console.log(`The name of the product is ${this.name} and it's price is ${this.price}`);
}

let smartPhone = new Product("Vivo v12", 16999);
smartPhone.display();

// ^ Example 2 : Prototype using "classes"
class User {
    constructor(userName, userId) {
        this.userName = userName;
        this.userId = userId;
        this.greet = function () { console.log(`Hello ${this.userName}, Your id is ${this.userId}`); };
    };

    displayUserInfo() {
        console.log(`${this.userName}, ${this.userId}`);
    }
};

let maleUser = new User("Nobita", 35);
let femaleUser = new User("Sizuka", 30);

console.log(maleUser);
console.log(femaleUser.greet());

// ^ Example 3 : Usage of "__proto__"
console.log(smartPhone.__proto__ === Product.prototype);