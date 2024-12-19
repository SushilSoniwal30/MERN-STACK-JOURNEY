/**
 * Todo : Creation of a "Promise" object
 * 
 * * Syntax to create a new promise object:-
 * ! new Promise((resolve,reject) => )
 * 
 * (1) Creation of a promise object is synchronous in nature
 */

// & Creating a Promise object with blocking piece of code

function demoPromiseWithLoop(num) {
    let blockingPromise = new Promise(function executor(resolve, reject) {
        console.log("Promise object created");

        console.log("Starting a very big for loop");
        for (let i = 0; i < 100000; i++) { } // JS engine will wait here
        console.log("Loop has ended");

        if (num % 2 == 0) {
            resolve(num);
        } else {
            reject(num);
        }

        console.log("Coming out from executor function");
    });
    console.log("Exiting the demoPromiseWithLoop function");
    return blockingPromise;
}

let x = demoPromiseWithLoop(4);
console.log(x);

// & Creating a Promise with non - blocking piece of code

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

let y = demoPromiseWithSetTimeOut(8);
console.log(y);
