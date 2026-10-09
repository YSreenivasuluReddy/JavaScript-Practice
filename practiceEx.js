// today my topics are callback(),anonymous function,and Arrow function.
greet();
//function declaration
function greet() {
    console.log("Hello World");
}

//function expression
let greet = function() {
    console.log("Hello World");
}
greet();

//if we call or execute the variable before declaring and assign the value.
// for var variable it will give undefined as the result.
console.log(name);
var name = "John";

// we will use setTimeout() as a callback function to execute the code after a certain time interval.
setTimeout(function() {
    console.log("Hello World");
}, 2000);

//the outer function and inner function both are the function declaration and,
//  the inner function is called input for the outer function.
function greet(){
    let a = 10;
    let b = 30;
    console.log(`The sum of ${a} and ${b} is = ${a + b}`);
}
function add(callback){
        callback();
    }

// add(greet)

//here i used function inside function.
function greet() {
    // let a = 10;
    // let b = 30;
    // console.log(`The sum of ${a} and ${b} is = ${a + b}`);
    
    function add(a, b) {
        console.log(`The sum of ${a} and ${b} is = ${a + b}`);
    }
    console.log("Hello World");
    add(10, 30);


}
greet()

//here i assign the inner function as a parameter to the outer function and call it inside the outer function.
function greet(callback) {
    callback(10, 30);
}
greet(function(a, b) {
        console.log(`The sum of ${a} and ${b} is = ${a + b}`);
    })


function addition() {
    //callback(10,30);
    function greet(a, b) {
        console.log(`The sum of ${a} and ${b} is = ${a + b}`);
    }
    greet(10, 30);
}
addition();


// addition(greet);

(function () {
    console.log("Hello");
})();