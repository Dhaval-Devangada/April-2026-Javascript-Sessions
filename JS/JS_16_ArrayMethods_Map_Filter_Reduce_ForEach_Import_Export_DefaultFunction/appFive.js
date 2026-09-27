/**
 * Program 14
 */


import * as MyUtil from './utilFive.js'

MyUtil.PI;
MyUtil.driving();
MyUtil.print();

/**
 * when we run above program then below is the o/p
 * 
 * hello world
   bye world
   driver is driving
   printing
 */

   /**
    * Its not soming because of *
    * Even if we use simple import then also the output will be the same 
    * They are coming because, in the JS "console.log('...')" statements are by default exported
    * we don't need to write any export keyword.
    * so do we really write unnecessary/anywhere "console.log('...')" statements in our utility files - NO - why should we write it anywhere
    * if we really want to write, then write inside the function
    */


   /**
    * Revision:
    * 1. export from one file and import in another file
    * 2. export {a,b,c} ---> import {a,b} from 'util.js'
    * 3. export {a,b,c} ---> import {a,b,c} from 'util.js'
    * 4. can have only one default function or variable [default behaviour of the utility/default functionality we want to give]
    *  willnot be part of object destructuring
    *  export default myName ---> import myName [without curly braces]
    * 5. rename :
    * export {a,b,c} ---> import {a as myA , b as MyB, c as MyC}
    * 6.import all: *
    * import * as MyApp [without default]
    * 
    * for default
    * import myName, * as MyApp [with default]
    * 7.clg,clg -> by default imported in calling file
    * 8.rename the default --> with out "as" --> just rename it with the new variable name
    */

   /**
    * why we are covering above?
    * because in PW we will use above concept 
    * and we don't want to get confused during PW learning
    */

   /**
    * Questions:
    * import lines are packages/utilities?
    * we don't have packages in JS. this is not java
    * any function/any variable in any file are called "modules". they are called modeles of the file
    * modules means - properties of the file - like variables, functions
    *     
    * filtering example
    * flight booking example 
    * flight time
    * flight company
    * flight type
    * 
    * default method
    * suppose we are creating page class 
    * page class has one important functionality "logoMethod"
    * "logoMethod" is default functionality is for every pages 
    * so for that method we can use the "default function"
    * 
    * 
    * problem:
    * we have multiple files [suppose 3 files] 
    * in those file we have same function - in all 3 files we have same function with same name 
    * now in 4th file i import the the same function from all the 3 files 
    * so which function will be called/executed  or from which file function will be executed?
    * 
    * ANS: based on the last import line - function will be executed 
    * 
    * */