/*

variable -  placeholder for a value, refer to values, name of value.

value - concrete data, the "real" thing

function 
    - block of codethat does something, has a name (identifier)
    - accepts paramiters
    - may return a value
    - like a factory that takes in raw materials and produces a product

parameter 
    - input variable in a function
    - function expects to be passed a parameter, or "accepts" a parameter
    - use inside the function

arguemnt
    - value passed into a function
    - arguement value is assigned into function parameter
    - use when calling (invoking) the function

return value
    - result of function
    - need to store in a variable
*/

function exclaim(str) {
    return `${str}!!!`;
}

function printItTwice(msg) {
    console.log(msg)
    console.log(msg)
}

const s = "hello";
const excited = exclaim(s);
console.log(excited);

const retCal = printItTwice("Yay!!")
if (retVal === undefined) {
    console.log("not defined");
} else {
    console.log("it was defined??");
}


let num = 2;

console.log(`num = ${num}`);
console.log(`2 = ${2}`);

