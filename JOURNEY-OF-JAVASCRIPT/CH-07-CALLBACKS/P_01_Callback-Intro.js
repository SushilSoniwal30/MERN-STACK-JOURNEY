// Todo: A callback is a function passed as an argument to another function.

// & Example - 01

function greet(name, fn) {

    /**
     * name -> Argument of string type
     * fn -> Callback function
     */

    console.log("Hello, " + name);
    fn(); // Invoking callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Passing `sayGoodbye` as a callback to `greet`
greet("Alexa", sayGoodbye);


// & Example - 02

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, name: "Roman" };
        callback(data);
    }, 2000); // 2-second delay
}

// Passing `processData` as a callback to `fetchData`
fetchData(function processData(data) {
    console.log("Data received:", data);
}
);
