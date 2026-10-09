//without function if we want to do addition of two numbers multiple times,
//  then we need to write the logic multiple times, which is not a good practice.
//  So we can use function to avoid this.
let a = 10;
let b = 30;
console.log(a + b);

//simple function
function add(){
    
    console.log("Hello Everyone");
}
add();

// function with parameters
function add(b,c){
    return b + c;
}
console.log(add(10, 30));
console.log(add(20, 30));
console.log(add(30, 30));

function(){
    console.log("I am an anonymous function");
}

let greet = function(){
    console.log("I am an anonymous function");
}
greet();

//callback function

function Sayhi(){
    console.log("Hello Everyone");
}
function GetFunction(callback){
    callback();
}
GetFunction(Sayhi);

//function with anonymous function as callback

function add(func){
    func();
}
add(function(){
    let a = 102;
    let b = 30;
    console.log(a + b);
});

//function with arrow function as callback

//syntax :-
//variable variablename = () =>{
    //here we need to write the logic
//}

let add1 = () => "Hello Everyone";
console.log(add1());

let sub = () => {
    let a = 10;
    let b = 30;
    return a - b;
}
console.log(sub());


// function with arrow function as callback

function outerfunction(callback){
    callback();
}
outerfunction(() =>{
    let a = 10;
    let b = 35;
    // return a+b;
    console.log(a + b);
})

// function with arrow function as callback
setTimeout(function(){
    console.log("I am a setTimeout Callback function");
})

// function with arrow function as callback
function outerfunction(c,d,callback){
    callback(20, 30);
    console.log(`The sum of ${c} and ${d} is = ${c + d}.` + '\n' + 'This is the outer function output');
}
outerfunction(40, 50, (a, b) => {
    console.log(`The sum of ${a} and ${b} is = ${a + b}.` + '\n' + 'This is the inner function output');
})