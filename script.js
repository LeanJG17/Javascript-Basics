console.log("Hello World");

//Weird Scope - Don't use
// var x = 5;
//Regular old variable
let y=6;
y=10; // You can change the value

const z = 7; // This is a constant. Can't be changed
// z=10; // this throws an error

console.log(y,z);
console.log(y+z);
console.log(y-z);
console.log(y*z);
console.log(y/z);
console.log(y%z); // This does division but returns the remainder
console.log(y**z); //exponents

let fname="Leandro ";
let lname="Graterol ";
console.log(fname + lname);

console.log(`${ fname } ${ lname }`);
console.log(`${ fname } ${ 5*9 }`)
console.log( lname + 6 );


let user = "Leandro";
let pass = "foo"

if (user == "Leandro" && pass == "foo") {
    console.log( `you are ` + user + ` and your pass is ` + pass);
} else {
    console.error("DENIED");
}

const license = 18;
const jrop = 16;
const rental =25;

let myAge = 46;

function checkAge( myAge ) {
    console.log(`RUNNING...`+myAge);
if (myAge < license && myAge >= jrop) {
    console.log(`You can have a JrOp licence`);
}

if (myAge >= license) {
    console.log(`You can have a regular license`);
}

if (myAge >= rental) {
    console.log(`You can rent a car`);
}

if (myAge < jrop) {
    console.log(`You're too young to drive`);
}
}

checkAge(6);
checkAge(17);
checkAge(19);
checkAge(37);