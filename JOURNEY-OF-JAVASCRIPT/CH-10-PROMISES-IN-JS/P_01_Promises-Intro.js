/**
 * Todo : "Promises" in JS
 
 * => WHAT ARE PROMISES?
 * (1) Promises are special type of objects that get return immediately when we call them
 * (2) They acts as the placeholder for data we hope to get back sometime in future
 * (3) In these promise objects, we can attach the functionality we want to execute
 * (4) Once the future task is done, promises will automaticaly execute the attached functionality

 * => HOW TO USE PROMISES?
 * (1) We can use promises in two ways : 
 *  - (i) By Creating a Promise 
 *  - (ii) By Consuming a Promise

 * => STATES OF A PROMISE:
 * (1) It has 3 states : (i) Pending (ii) Fullfill (iii) Rejected
 * (A) Pending:- When we create a new promise object it will be in default state. It represents "work in progress"
 * (B) Fulfilled:- If the operation is completed successfully, promise will be fulfilled
 * (C) Rejected:- If the operation wasn't completed successfully, promise will be rejected

 * => WHAT ARE "resolve" and "reject" FUNCTIONS?
 * (1) When creating a Promise, these functions are used to transition the promise from its initial state ("pending") to one of the     
 * settled states.
 * - resolve: Marks the promise as "fulfilled" and provides a value (or result) to the promise's consumers.
 * - reject: Marks the promise as rejected and provides a reason (usually an error message or object) for the rejection.
 * (2) With whatever arguments we call any of these functions will get assigned to the "value" property
 */