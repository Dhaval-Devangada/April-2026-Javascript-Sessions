/**
 * what do you mean by datatypes> type of data
 * 1.primitive data type : memory is fixed - pre defined data types 
 * > if we create any number/string then JS knows that how much memory I need to allocate here 
 * number[any kind of number postive,negative,0][Here we don't have int,byte, double - just simple number]
 * string[whatever we are writing in the single quote and double quote is string][any description,title is called string here]
 * boolean: true/fales
 * BigInt
 * undefined
 * null
 * 
 * 
 * 2.non-primitive data-type  :[Also known as] reference type : when the memory is not fixed[dynamic] : we don't don't know howmany bits/bytes it will take in the memory
 * Array [We don't know how many values are going to be there in array]
 * objects [We don't know what kind of objects we are going to create]
 * functions [We don't know what kind of functions[arrow fun,non arrow fun,normal fun,simple fun,iife fun, multiple varities of fun are there in js] we are going to create]
 * map object/list object/set object
 */

/**
 * Primitive data type
 */


/**
 * Whenever we declare any variable in the javascript 
 * then there are 3 indentifieres are available to declare a variable
 * var, let , const
 */

//1. number
//size: 8 bytes = 8*8= 64 bits [how many bytes and bits it will take]
//1 byte = 8 bites

/**
 * Uncomment below check that what error is coming when we don't write "let/var/const"
 * let/var/const was not available in the old js
 * so in the package.js, if you change the "type":"commonjs" then> error will not appear 
 */
 //x = 10;  //Error:  ReferenceError: x is not defined
 //console.log(x);

 //lets use indentifire, we will see the difference between identifier later, 
// pepople say "let" is data type of x but no, let is a identifier/keyword of a variable
//let is not defening anything that "x" will be number or anything


 let y = 20; // x is variable , = is assignemnt operator 10 is values assigned to X
 console.log(y);

 /**
  * But we really want to know that what is the datatype of x
  * Datatype of "x" depends on what > depends on it's value > here 10 is a number or string > it's a number
  * To check what kind of data type > there is a method 
  */

 console.log(typeof y); // It will tell us what kind of value i am having in y

 //in js number means a number 
 //in js everything is considered as a number

 console.log("--------------------");
 let z = 12.33;
 console.log(z);
 console.log(typeof z);//z is having number kind of data

console.log("--------------------");
let i = -100;
console.log(i);
console.log(typeof i);


/**
 * 2. string/characters : string means collection of characters / set of characters 
 * size : each character it will take 2 bytes [space will be considered as a single char as well] [double quote and single quote will not be considered to calculate the size]
 * 
 * in js single character is also called a string here
 * there is no concept like special character concept
 * in js we can write string is ''[single quote also] and in ""[double quotes also], both are considered as string
 * There is no default value concept 
 */
console.log("--------------------");
let name = 'Dhaval';  // 6* 2 = 12 bytes
console.log(name);
console.log(typeof name);//js will decide at run time that what kind of data we have in the 'name'

console.log("--------------------");
//select below 3 lines and try to execute the code > only below 3 lines will be executed
let mesg = "welcome to NAL"
console.log(mesg);
console.log(typeof mesg);

console.log("--------------------");
let m1 = "$"; // m1 is a string or char? in js everything is string  // 1 * 2 = 2 bytes
console.log(m1);
console.log(typeof m1);

console.log("--------------------");
let m2 = '10000'; // single quote means string
console.log(m2);
console.log(typeof m2);

console.log("--------------------");
let m3 = 10000; // no single/double quote means no string
console.log(m3);
console.log(typeof m3);

console.log("--------------------");
let test = "i love javascript coding";
console.log(test);
console.log(typeof test);

console.log("--------------------");
/**
 * If we write don't assign the value then what will be the output? > undefined
 */

let p; // we have not given any value and we don't know the type of "p" because type of "p" decided based on value and we have not given any value
console.log(p);

//so if we don't initilize then by default it will be undefined 
//undefined is a existing keyword in the js > if something is not defined then it will give you undefined 
// but i want to know type of p , what i kind of variable p is 
console.log(typeof p ); // it's also undefined > because we really don't know what is the type of p 
//type of p is not let , let is a variable and identifier


console.log("--------------------");

/**
 * 3. boolean : true / false
 * size: 4 bytes , generally there is no fixed size to store boolean but according to document its 4 bytes
 * boolean can be used later on in the loops also or in condition checking also, in assertation as well
 * user is logged in or not - true or false
 * element is displayed or not - ture or false
 * 
 */

let flag = true;
console.log(flag);
console.log(typeof flag); //boolean
//we don't have type of method in java

//in variable we follow camelCase > first latter is small
let isElementExists = false;
console.log(isElementExists);
console.log("--------------------");

/**
 * 4. undefined 
 * size: 0 bytes , because right now there is no value, size will be decided based on the value we assign 
 * 
 * we want to create variable but right now we don't know value of that variable 
 * when we are not sure, when we write the code 
 * when we are not sure about the value of the variable or may be later on we decide what will be the value then for the safer side we can say it's "undefined" right now 
 * that is the only purpose of the undfined 
 * when we are not sure what will be the value then we say undefined 
 * 
 */
let firstname = undefined; 
let lastname;  // if we don't write anything then it will give you undefine only
// we know the variable name but right now we don't know the value of "firstname", but i really want to give something. I want to write or i don't want to write. it's up to me 
// but if we are not sure then we can write "undefine" here
// if we don't want to write anything then that also we can do it 
console.log(firstname);
console.log(typeof firstname);
console.log(typeof lastname);

/**
 * So which one is good practice writing the undefine or not wrriting?
 * it's nice to write undefine , someone looking at your code will come to know that firstname is undefined 
 * later on we can decide the firstname
 */

firstname = 'Rahul';
console.log(firstname);
console.log(typeof firstname);
console.log("--------------------");
/**
 * null means no values - intennally i am defining that object is pointing to null
 * size: 0 bytes
 * 
 * null and undefine are almost samething but null generally used for "no values"
 * null will be used incase of the objects 
 */

let obj = null;
console.log(obj); // value of "obj" will be null because we have given null
console.log(typeof obj);// what is the type of null > object // existing bug in JS...legacy bug 
//ideally typeof null should be null but it;s "object" here 
console.log("--------------------");
/**
 * Re-initialization
 */
let c  = 10; // 10 is number // it will take 8 bytes
//Now i want to upate the value of c 
//we can not update the value by doing below. It will give an error[uncomment below and run to check the error] and error is "SyntaxError: Identifier 'c' has already been declared"
//let c = 20;
//duplicate variables are not allowed. it means two times initilization not allowed for the "let" variables
//So to update the value we need to do like below
c = 20; //here we have Re-initialize with new value, we can do the Re-initialization multiple times
c = 30;
c = 100;
console.log(c);
c = 'dhaval'; //we can update or replace with anything[number,string] and memory allocation will be change accordingely 
console.log(c);
console.log("--------------------");

/**
 * var keyword
 * var is a legasy identifier in old js
 * var - old js way of declaring variables 
 */

var i = 10;
var i = 20;
console.log(i);

//if we do same as above with "let" identifier then we will get an error but with "var" we don't get any error
//what and where is the risk with declaring variable with old legasy way 
//Check below - We are redeclaring the the variable again, thats a bug in our code. We don't do that in any language 
//There are other problems also with 'var' that we will see in the other programming language
//Once the variable is declare we should not declare the same variable again 
//what is someOne change the 'Playwright/Selenium' with the 2000 then all the calculation will be done based on 2000 which is not a tool
//and apart from above there will 2 memory block will be created one for 'Playwright' and one for 'Selenium'
//and if we print the latest then "Selenium" will be printed, so don't ypou think that "Playwright" is still there ans wasting our memory by taking extra space in the memory
// if we write 100s of "toolName" and assigning value then we are doing poor memory management because here value will not be overide instead new memory block will be created
//there is nothing like garbage collector 
//below is not Re-initialization, its a re-declaration

var toolName = 'Playwright';
var toolName = 'Selenium'; 

//So in mordern automation tool / whereever you use js use 'let' and forget 'var'. There are other problem with 'var' as well

/**
 * constant : fixed value:
 * here we have const identifier
 * once the const variable is declared then it's done, no one can change it 
 * Try to 
 */

const pi = 3.14;
console.log(pi);
console.log(typeof pi);
// pi = 5.56; //uncomment this code and run and you will get error > : Assignment to constant variable.
console.log(pi);

const tarinerName= 'Naveen';
tarinerName = 'Dhaval';
console.log(tarinerName);

//All the universal truth, utl , title value, username, pi value - we always create with the const 
//if we use let , var > then we can change it 
// If we want no one to change it - then declare const


//what will be the output of below? > error : SyntaxError: Missing initializer in const declaration [means you have not initilize anything]
//because below is const and const should always have value  
//we need value for the constant, without const value you can not declare const variable
const title ; // you have declared a title and there should be a constant fixed value 
console.log(title);



/**
 * Difference between var,let and const
 */
//const: 
// re-declaration is not allowed 
// re-assignment is not allowed [updation/replace is not allowed]

//let:
// re-declaration is not allowed [let u =10; let u =20;]
// re-assignment is allowed [updation/replace is  allowed]

//var: not a good practice to use 
// re-declaration is allowed 
// re-assignment is allowed [updation/replace is allowed]


/**
 * Questions
 * We don't have any method to know the size of any datatypes
 * We can not change the name of "package.json" file. or it's a config file 
 * package.json file is having metadata about the project like name ,author and description
 * we can add some sort command , scripts 
 * if we don't use "type":"module" then it might happen that it will start pointing to "commonjs" as well
 * so define it in pcakage.json and tell that in the entire project i want to use "mordern" js 
 * package.json file will be created at the root level
 * withput writing command we can also manually add the package.json as well 
 */

let top =10;
var top = 20;
console.log(top);
//what will be the o/p of above > error > because we are using mordern js and let, so with that re-declaration is not allowed 


var bottom = 45;
let bottom = 89; 
//java script will follow same rule at run time that "let" is already created and then again vat is alreday there. so it is not allowed


/**
 *inside package.json > "main": "index.js", >means your main file in the entire project > we use this when we create the webApplication

 common error:
 +categorywInfo : securityError: (:) [], PSSecurityException
 +FulllyQualifiedErrorId: unauthorizedAccess

 so to solve above error > go to right corner > and instead of "powershell" > do commnad prompt 
 sometimes powersell does not understand the commands 

 if we keep writing npm init -y then it will keep overriding 
 java is always faster than python
 variables [x, firstname] will be stored in the auculiry memory/spce or loader space > entire project/file will be uploaded there and from those file everything will be read
 byts and bits will be taken on the ram
 variables and all will be stored in rom space [hardisk/auxularity space]
 */