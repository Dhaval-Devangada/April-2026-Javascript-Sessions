/**
 * Program - 1 
 */
/**
 * Hoisting: you are trying to access the variable before declaration
 * Hoisting means you are trying to access any variable before it's declaration
 */
//Below we are trying to print "m" before declaring 
console.log(m);
//now we are dclaring "m" , but remember execution happens line by line. so what will be the o/p of below? 
let m = 10;
//in other program above will give you the error. but here what will the o/p > undefine or error
// it will give you an error with "let" identifier > Cannot access 'm' before initialization
// This error will appear: ReferenceError: Cannot access 'm' before initialization


//with var identifier it will give you an "undefine"
console.log(n);
var n = 20;
//so it's very weired, above can introduce bug in big projects, not even a bug, but how can you access a variable without declaring it 
//so that is a another problem with the var variable, that in the legacy code you are using var and you are trying to access before it's declaration then it will give you undefine


//with const *identifier it will give you an error
console.log(o);
const o = 90;
//error > ReferenceError: Cannot access 'o' before initialization

//hoisting is allowed with var and it will give you > undefine 
//hoisting is not allowed with let and it will give you > error [ReferenceError: Cannot access 'given variable' before initialization]
//hoisting is not allowed with const and it will give you > error [ReferenceError: Cannot access 'given variable' before initialization]

//So with var we have seen two problem
//redeclaration, and hositing is allowed, thats why we don't use var 
//we always use let or const 
