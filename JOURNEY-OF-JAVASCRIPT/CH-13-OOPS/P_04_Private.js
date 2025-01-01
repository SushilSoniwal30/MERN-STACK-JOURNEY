// * Example 1 :- How to declare and initialize private data members
class Product {
    #productName;
    #productPrice;
    #productDescription;

    constructor(name, price, description) {
        this.#productName = name;
        this.#productPrice = price;
        this.#productDescription = description
    }

    display() {
        console.log(this.#productName, this.#productPrice, this.#productDescription);
    }
}

let phone = new Product("Realme", 13499, "Smart-Phone");
phone.display();

// phone.#productName = "Vivo"; // Error

// * Example 2 :- How to use getter and setter to initialize and return private data members
class Food {
    #foodPrice;

    // Set price of the food
    setPrice(price) {
        if (price > 0)
            this.#foodPrice = price;
        else
            console.log("Invalid Price!");
    }

    // Get price of the food
    getPrice() {
        return this.#foodPrice;
    }
}

let Maggi = new Food();
Maggi.setPrice(15);
console.log(Maggi.getPrice());

// * Example 3 :- Another syntax to use getter and setter to initialize and return private data members
class ColdDrink {
    #companyName;

    set name(name) {
        this.#companyName = name;
    }

    get name() {
        return this.#companyName;
    }
}

const Coke = new ColdDrink();
Coke.name = "Coca-Cola";
console.log(Coke.name);