/**
 * Program 3 
 */
export const PI = 3.14;

export function driving(){
    console.log("driver is driving");
}
export function print(){
    console.log('printing');
}
/**
 * So we have created 2 thing 
 * one variable and one function
 * now i want to use above 2 things in some another file
 * so what should we do here
 * in java whenever we have to use other class functionalities/file functionalities then we need/have to import those class/modules/classes/variables
 * when we use those func/variable then those fun/variable will be automatically imported 
 * 
 * but how will you do the exactly same thing in the JS
 * here we have to use the concept of "export and import"
 * There are certain rules we have to follow here
 */

/***
 * Suppose we have one file and in that file we have created some important variables and func
 * utils.js
 * 
 * export let x = 10; // if we want to use this variable in other file then we need to export this - so write "export" before the "let" - means export this variable
 * 
 * export function testing(){ // if we want to use this func in other file then we need to export this - so write "export" before the "function"  - means export this func
 * }
 * 
 * export behaves like an producers which produces "x" and "testing" func
 * 
 * now in other file "app.js" i want to use above exported variable/func
 * "import" behaves like and consumer - it is going to consume our exported var and fun
 * so what we need to do 
 * we need to do import 
 * so how many things we need to import here and how to import it?
 * 
 * we need to import with the help of curly braces
 * i want to import "x" and "testing" which is coming from 'util.js' file
 * 
 * import {x,testing} from 'utils.js';
 * 
 * so above which concept we are using: destructuring
 * from util.js we are exporting 2 values
 * in app.js how many values are destructuring with the help of import? - 2
 * it is mendetory to use all of the exported values - NO - it is up to us - we can do like below as well
 * 
 * import {x} from 'utils.js'; // form util.js we are doing 2 exports but "importing" only 1
 * 
 * which js concept is being used in "export" and "import" - Object Destructuring
 * 
 * and now if we want to use the imported value then we can do it as well
 * 
 * console.log(x);//10
 * testing();
 * so here we don't need to declare "x" and "testing()" again in "app.js" file 
 * 
 * you can export anything arrow fun, anonymous fun anything 
 */

/**
 * ============================================================
 * UNDERSTANDING THE IMPORT PATH
 * ============================================================
 *
 *
 * Path                  Meaning
 *
 * './utils.js'          -> File in the current directory
 *
 * '../utils.js'         -> File in the parent directory
 *
 * '../../utils.js'      -> Go up two directories
 *
 * 'file:///C:/Users/...' -> Absolute Windows file URL
 */


/**
 * Now what if we have multiple variables and multiple fun
 * Should we write the "export" against each and every variable/function? - NO - that could be slightly lengthy
 * so for that we need to "combine everything in the "export" object"
 * refer utilsOne.js 
 */