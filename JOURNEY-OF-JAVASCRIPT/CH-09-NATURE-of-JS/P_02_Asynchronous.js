/**
 * (1) There are some features like setTimeOut, setInterval, etc. 
 * (2) They are provided to JS by the runtime environment
 * (3) These features aren't the native features of JS
 * (4) Hence JS doesn't stop for these instructions to complete and continue executing other tasks
 * (5) The Event Loop enables asynchronous behavior by managing tasks in a queue
 */

function first() {
    console.log("First");
}

function second() {
    setTimeout(() => {
        console.log("Second (Async)");
    }, 1000);
}

function third() {
    console.log("Third");
}

first();
second();
third();

// Output:
// First
// Third
// Second (Async) (after ~1 second)
