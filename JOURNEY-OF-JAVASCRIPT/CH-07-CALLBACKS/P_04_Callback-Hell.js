function add(a, b, callback) {
    const sum = a + b; // Perform addition
    callback(sum); // Pass the result to the callback
}

function multiply(result, multiplier, callback) {
    const product = result * multiplier; // Perform multiplication
    callback(product); // Pass the result to the callback
}

function subtract(result, subtractor, callback) {
    const difference = result - subtractor; // Perform subtraction
    callback(difference); // Pass the result to the callback
}

add(5, 3, (sum) => {
    multiply(sum, 2, (product) => {
        subtract(product, 4, (difference) => {
            console.log("Final result:", difference); // Output: 12
        });
    });
});
