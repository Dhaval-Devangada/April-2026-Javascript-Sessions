/**
 * Program - 2 
 */

/** IIFE with the arrow function */
(()=>{
    console.log('hello world');
    console.log('byee');
})();


/** If you want to return something from the IIFE*/

let flag = (()=>{
    console.log('hello world');
    console.log('byee');
    return true; //If IIFE is returning true then we need to store it in the variable
})();
console.log(flag);//true
// don't get confused, "flag" is not the function expression name. "flag" has the return value of the entire function
//because IIFE has no name. It's a pure anonymous function. It ha no name. No expression name - nothing 
//if you want to return then store it in the variable then print it on the console



/**  Now can we supply the parameter also in the IIFE - YES */
//One IIFE function with one "arrow =>" function, with 1 parameter and return 
let flag = ((browserName)=>{
    console.log('hello world', browserName);
    console.log('byee');
    return true; //If IIFE is returning true then we need to store it in the variable
})('chrome');
console.log(flag);

/**
 * where exactly the IIFE function will be stored?
 */

/**
 * Every function will behave like an object actually because they are non-primitive
 * and all the objects and functions will be stored inside the heap memory 
 * so all the IIFE fun will be stored inside the heap
 * IIFE function does not have any function name / expression name 
 * It means those are free objects/function inside the heap without any reference name so whenever GC is coming to the heap memory , they are immediately available for GC? - YES
 * yes they are because no one is refering them, so the moment GC is coming then it will immediately destroy everything(IIFE fun[as they have no reference]) and will destroy the objects with the no reference as well
 * so that is why IIFE fun are getting called immediately invoke/immediately executed 
 * so immediately invoke/execute and if GC is there then remove those IIFE funs as they don't have any reference - and free the memory 
 * so this is the advantage we are getting here , that IIFE fun will not consume any unnececssary memory and they will not servive in the heap memory for longer period of time.
 * The moment GC is coming then immediately it will destroy the IIFE function
 * 
 * will IIFE fun create the stack for the execution? - 100% - whenever it is getting called then it will create the stack in the stack - and once the execution is done then de-allocation will happen/stack is also removed
 * 
 * if we talk about other functions which has proper "function expression name" and function name in those function
 * we have the function name or function expression name 
 * so have the reference to the function 
 * and those references will be stored inside the stack and function/function body will be stored inside the heap memory
 * so now if the GC will come then, will it destroy the "function" which has proper function name / function expression name? - NO
 * because those function have proper reference to them in the form of "function name" or "function expression name"
 * and if we call those fun then, those fun(calling function) will be called inside the stack , and will create the one stack for it then those fun will be executed - then de-allocation
 * 
 * we don't use IIFE function in the PW. Intially we will do it then we will not do it. because PW concepts are totally differet. It says directly start writing the code inside the test now  
 */