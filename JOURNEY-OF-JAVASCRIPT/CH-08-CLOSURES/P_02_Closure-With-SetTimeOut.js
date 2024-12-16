// * Example : Closure in an Asynchronous Context

function outerFunction() {
    let outerVariable = 'I am from outer function';

    setTimeout(function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from outer scope
    }, 3000);
}

outerFunction(); // Output (after 3 second): I am from outer function
