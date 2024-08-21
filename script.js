document.write("Hello World");
document.write("<br>");
document.write("Hello World");

console.log("This is a test message")
console.warn("Warning")
console.error("error message")

// single line comment

/*This
is a 
multiline comment */

//let var const

//diffrence of varialbles in java imp interview questions

let person 
person="Anie"
console.log(person)

var age=19
console.log(age)

const pi=3.14
console.log(pi)

console.log(a)
var a =10

console.log(b)
let b=10
//Hoisting
console.log("Hello World")
//stack overflow for java script error solving

function varTest() {
    var y = 1;
    if(true) {
        var y =2; //diffrent variable
        console.log(y); // 2
    }
    console.log(y); //1
}
varTest()