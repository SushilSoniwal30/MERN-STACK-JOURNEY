/**
 * ^ Priotities: Call Stack > MicroTask Queue > CallBack/MacroTask Queue
 */

// & --------------- Example - 01 ---------------

function fetchData1(url) {
    return new Promise((resolve, reject) => {
        console.log("Started downloading from :", url);
        setTimeout(function processDownloading() {
            let data = "Dora Movie";
            console.log("Downloaded data is :", data);
            resolve(data);
        }, 7000);
    });
}

console.log("Execution started...");
let obj1 = fetchData1("www.meta.com");
obj1
    .then(function fun(value) {
        console.log("Value is", value);
    });
console.log("Execution ended...");

// * Output : 18 -> 9 -> 24 -> 12 -> 22 (Line Numbers)

// & --------------- Example - 02 ---------------

function fetchData2(url) {
    return new Promise((resolve, reject) => {
        console.log("Started downloading from :", url);
        setTimeout(function processDownloading() {
            let data = "Dora Movie";
            resolve(data);
            console.log("Downloaded data is :", data);
        }, 7000);
    });
}

console.log("Execution started...");
let obj2 = fetchData2("www.meta.com");
obj2
    .then(function fun(value) {
        console.log("Value is", value);
    });
console.log("Execution ended...");

// * Output : 18 -> 9 -> 24 -> 12 -> 22 (Line Numbers)

// & --------------- Example - 03 ---------------

console.log("Start of the file");

setTimeout(function timer1() {
    console.log("Timer 1 Done!");
}, 0);

for (let i = 0; i < 1000000000; i++) { }

let obj3 = Promise.resolve("Resolved Promise"); // New Resolved Promise Object With Value "Resolved Promise"
obj3.then(function fun(value) {
    console.log("Promise's value is: ", value);
});

setTimeout(function timer2() {
    console.log("Timer 2 Done!");
}, 0);

console.log("End of the file");

// * Output : 53 -> 70 -> 63 -> 56 -> 67 (Line Numbers)