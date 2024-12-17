/**
 * (1) Javascript is a "Synchronous Single Threaded" language i.e it can execute only one instruction at a time
 * (2) But this nature is applicable for only native features of Javascript like loops, functions, conditions, etc
 */

function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

first();
second();

// Output:
// First
// Second
