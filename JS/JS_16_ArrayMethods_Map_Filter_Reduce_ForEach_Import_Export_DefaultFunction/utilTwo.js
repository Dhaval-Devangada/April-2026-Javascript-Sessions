/**
 * Program 7
 */

//we can have only one default function in a JS file
//will not be part of object destructuring
export default function coding(){
    console.log('coding');
}


/**
 * more then 1 default function is not allowed in 1 file. if you uncomment below and run the file then
 * there will be error 
 * SyntaxError: Duplicate export of 'default'
 */
// export default function running(){
//     console.log('coding');
// }

const PI = 3.14;

function driving(){
    console.log("driver is driving");
}

function print(){
    console.log('printing');
}


/**
 * default export 
 * default function will never participate in the object destructuring
 * it will never be written in the "export destructuring object" which we write at the end [export {PI,driving,print}]
 * you have to create seprate "export" for the default function
 * 
 * what is the purpose of the "default function"?
 * - we can have only and only one default function in the JS file
 * - we can not create multiple default functions
 * 
 * - and what is the purpose of this function
 * - suppose this is the common functionalities for everyone/lets say we have created some utilities
 * - like on "loginPage" - "logo" is common function , "footer" is a common function
 * - one default function which can be used by anyone and anywhere.
 * - thats the only purpose of the default
 * 
 * - its a javascript funtionality , if you want to use it you can use it. if you don't want to use it then its okay.
 * - "default funtion" never participate in the "export destructuring" 
 * - we can export it but we need to export it individually 
 * 
 * now how to use it in other file like "appTwo.js" 
 */

//can we write the default variable? 
//To check the export functionality of the below - we need to comment previously declared "default function" - because in the one file we should have only one "default" - 
//it could be either function/ variable
//for "default variable" - first we need to declare the variable then only we can use "export default" on that variable

// let userName = "komal"
// export default userName;

//we can write onnly one export in js file. so we need to decide that we want to use "default" with the "function" or with the "variable"

export {PI,driving,print} // here we have not written "coding" in export object destructuring


//in PW we will not create any variable with the "default" - this is just for the interview purpose
//"default" is only designed for the "imports and exports" - there is no other purpose of "default"

console.log("hello bye"); // we can not export/import "console.log" - this is just a log 