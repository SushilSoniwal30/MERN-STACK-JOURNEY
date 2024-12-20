// & Consumption of a Promise Object

function demoPromiseWithSetTimeOut(num) {
    let nonBlockingPromise = new Promise(function executor(resolve, reject) {
        console.log("Promise object created");
        console.log("Starting a timer of 5 seconds");
        setTimeout(function evenNumberChecker() {
            console.log("Executing function 'evenNumberChecker' inside timeout");
            if (num % 2 == 0) {
                resolve(num);
            } else {
                reject(num);
            }
            console.log("Exiting function 'evenNumberChecker' inside timeout");
        }, 5000);
        console.log("Timer has started");

        console.log("Coming out from executor function");
    });
    console.log("Exiting the demoPromiseWithSetTimeOut function");
    return nonBlockingPromise;
}

console.log("Starting the program...");
let x = demoPromiseWithSetTimeOut(8);
console.log("We are now waiting for the promise to complete");
console.log("Currently our promise object is like: ", x);

// * (.then) : it's used to register the functions in "onfulfillment" and "onreject" arrays

let sks = x.then(
    function fulfillHandler(value) {
        console.log("Inside fulfillHandler with value: ", value);
        console.log("Promise after fulillment is ", x);
    },

    function rejectionHandler(value) {
        console.log("Inside rejectionHandler with value: ", value);
        console.log("Promise after rejection is ", x);
    }
)

console.log("Ending the program!");