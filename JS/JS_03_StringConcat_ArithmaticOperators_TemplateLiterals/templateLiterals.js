/**
 * Program - 4
 */

/**
 * Template Literals is a way to create the string with the backtick[``]
 */

//Template Literals : backtick : ``
//'' "" `` 
//[string can be represented with sigle quote'']
//[string can be represented with double quote ""]
//[string can be represented with back tick ``]
// but when we use backtick then we are using the "Template literals" concept here 
// ultimately all are string but what is the advantage of backtick

let mesg = `this my js code and I love it`;
console.log(mesg);

let address = `101 new bhuilding
whitefield, east bangalore
banaglore 56990 
Karnatana, India`;

console.log(address);


/**
 * What we have done in the address
 * we have written multiple lines without any balkslash
 * with backtick we can write paragraph also
 * we can write multiple lines, we don't need to worry about anything 
 * it's so easy to write
 * if we try to write multiple lines with single/double quote then it will give you error 
 * try uncommenting below
 */


/** let tempAddress = '101 new bhuilding
 whitefield'

/**
 * below data can come in multiple lines 
 * Address, paragraph, salary structure , employee data 
 * In text area where we need to write multiple lines then we can use above concept
 */
//there is no double backtick, its always single backtick

/**
 * 1st purpose is > to write multiple lines 
 */
let a = 100;
let b = 200;

console.log('the value of a: ' + a);//the value of a: 100 // i want to print 100 also  
console.log('the value of b: ' + b);//the value of b: 200
console.log('the sum is : ' + (a + b)); //the sum is : 300 // if we don't write (a + b) in bracket then o/p is > the sum is : 100200

//Above is the approach we follow in every programming language to print variable value with proper messaging 
//Above approach is weired approach because we need to write "+" operator and then (a+b) in brackate and all 
//so backtick/template litreals will solve above problems 

//I want to do any concatination and don't want to use + sign so what we can do is below 
//${a} concept is known as place holder - what is the place of the a
console.log(`the value of a is ${a}`);//the value of a is 100
console.log(`the value of b is ${b}`);//the value of b is 200
console.log(`the sum is = ${a + b}`);//the sum is = 300

console.log(`the result is ${a}${b}`);//100200

//single quote, double quote and + [concatination operator] AND backtick both are doing the same thing but which one is easy to write> backtick
// in mordern js we always go with morden approach
//concatination tecqnique is old way of writing the code 

let name = 'Garima';
let age = 30;
let salary = 34.44;

console.log(`the emp name is ${name} and age is ${age} and salary ${salary}`); //the emp name is Garima and age is 30 and salary 34.44
console.log(`the emp name is "${name}" and age is ${age} and salary ${salary}`); //the emp name is "Garima" and age is 30 and salary 34.44
// backtick will help us in writing the db query as well, in xpath as well, in css selector as well
//whenever we write ${variableName} > then this concept is known as placeholder
console.log('I love \'javascript\' coding');

//I love 'javascript' coding

console.log(`I love Javascript coding `);//I love Javascript coding 
console.log(`I love 'Javascript' coding `); //I love 'Javascript' coding 

//below we ary trying to print javascript in single quote with single quote around the whole string > it will give us parsing error
//js assumes that your string is ended after 'I love' then what is [Javascript' coding ]
//so to avoide it we use balckslash and tell js that consider this sigle quote which between the string as a normal character but it's very weird
//console.log('I love'Javascript' coding ');
console.log('I love\'Javascript\' coding ');
//another soluation > we need to start with double quote and in between we nned to use single quote
//two formats we need to maintain here but with the backtick we don't need to worry about anything 
console.log("I love 'javascript' coding");


let username = 'Virat Kohli';
//o/p should be like this > //input[text()='Virat Kohli']

//how will you print like this //input[text()='Virat Kohli' in console
//normal way > put everything in double quotes
console.log("//input[text()='Virat Kohli']");

//i just want to use single format > backtick and maintain the variable
console.log(`//input[text()='Virat Kohli']`);

//but the Virat Kohli is the variable part > usename could be anything 
//i really want to append username 
console.log(`//input[text()='${username}']`); // //input[text()='Virat Kohli']
console.log(`//input[text()="${username}"]`);//  //input[text()="Virat Kohli"] // we can maintain the placeholder in double code as well

//These kind of examples will be helpful in the webtable to create dynamic elements and dynamic locators
//placeholder will be applicable when we write the backtick otherwise we can not use it
// always use the backtick , don't write the code with old school way
//we can maintain the placeholder in double code as well

// hi it's my js code
console.log("hi it's my js code");
console.log(`hi it's my js code`);

/**
 * in the place holder we can write the mathematical expression
 * 
 * we can use the backtick with concatination 
 * console.log(`the value of a is ${a}` +100);
 */