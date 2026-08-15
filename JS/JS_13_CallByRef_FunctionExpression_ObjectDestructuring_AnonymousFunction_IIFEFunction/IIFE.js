/**
 * Program - 4 
 */
/**
 * Very important from interview point of view 
 * When we write first playwright code then that time also we will use IIFE
 * 
 * IIFE - Immediately Invoke Function Expression
 * Invoke means - Execution / getting called 
 * immediately getting called function expression
 * 
 * This is also a kind of anonymous function : no name of the function
 * 
 * so how to create the anonymou fun with the IIFE concept 
 * this function will be invoked(called) by itself
 * 
 * how to do it : refer below
 */

//below first we write parenthesis 
// > then inside first paranthesis we write 2nd paranthesis then 
// > after complatation of second paranthesis we write "=>" 
// > then after the arrow we write {} which is our body part 
// so below is the IIFE that we have created

(()=>{  //first opening paranthesis is our starting body of our IIFE fun

    console.log('hello word');

})//last closing paranthesis is our ending/closing body of our IIFE fun
(); //this IIFE fun is invoked immediately by itself, 

//this fun has no expression name , so IIFE fun will be called by using '();' like this 
//whatever we have between opening and closing paranthesis is known as "internal body" of the IIFE fun. so below part is "internal body"

/**
 *   ()=>{  //first opening paranthesis is our starting body of our IIFE fun

      console.log('hello word');

      }
 */

/**
 * Below we are just declaring the IIFE fun, but we are not calling it 
 */
(()=>{  //first opening paranthesis is our starting body of our IIFE fun

    console.log('hello word');

})

//Above will not print anything as we are not calling it.

//Make sure that IIFE func should be called immediately once you create it.If you write the anything in between then its not allowed. check below example by uncommenting 
// (()=>{ 
//     console.log('hello word');

// })
// console.log('not calling the IIFE fun immediately ');
// ();

//IIFE fun is called immediately invoked - means you can not write anything in between . The moment you create the fun, please call it immediately.

/** Another way of writing IIFE fun without "=>" */

(function (){ 
    console.log('Created IIFE fun without => symbole');
})();

//above we have created IIFE fun without using '=>'
// we have used normal anonymous fun inside the ()[opening and closing paranthesis]
//Then called the fun immediately 

/**  We can create the IIFE fun with the paramenter as well*/
(function (username){ 
    console.log('Created IIFE fun without => symbole and with parameter', username);
})('Dhaval');

/**
 * This methods behaves like main method 
 * because main method will be called automatically by JVM
 * this IIFE fun is doing the same thing here
 * 
 * suppose before starting the execution if we want to do something then above fun/IIFE fun will be called immediately
 * lets say I really want to create an user
 * or get the data form the database
 * or i want to make the connection to the database
 * or i want to read the data from the excel file
 * Then we can create the fun like above as it will be called immediately
 * we don't need to define any name and no one is going to call above function
 * above fun will immediately invoked, immediately called by itself, thats why this fun is called immediately invoked expression
 *  */

(function (name, age){
    console.log(name, age);
})  // we can call the fun in next line, just make sure we should not have anything in between the function and calling parenthesis. But generally people immediately invoke/call after the function
('Dhaval',23); 

//So this is called the 'anonymous IIFE function'
//we can create these function anywhere anyytime. there is no restriction
//IIFE fun can not be hoisted because it does not have any name
//We need to write the "function" keyword inside () while creating the IIFE fun. If you don't want to write "function" keyword then you need to use "=>" function 

/** so what is the advantage of IIFE 
 * 
 * If I have an requirement that before my "test execution" or before anything
 * this IIFE fun, i don't need to call it explicitely, no one is calling this fun
 * this fun is automatically calling by itself
 * so any pre-condition, pre-requiest i want to write [like load testdata/read from excel/make db connection] then we can write those in this IIFE function
 * 
 *
 * 
*/
//this is kind of anonymous fun, we can not write a fun name. IIFE is also called the anonymous
//we can not re-use it, because this fun has no name here

/** so howmany types of functions we have seen so far ?
 *  1.simple function
 *  2.function expression
 *  3.anonynmous function
 *  4.IIFE
 *  
 * then we will see
 *  5.arrow function
 *  6.callback function
 *  7.async await function 
 * 
 * this is the sequance we need to follow
 * you can not understand "call back" / "async" without "arrow function"
 * you can not understand "arrow function" without "anonynmous"
 * 
 * so in js we have n number of type of functions ans each having its own usecase 
 * once you understnad all of them together then you will know that where to use what and their usecase
 * 
 */

/**
 * we can return the values from IIFE fun as well
 */

let result = (function(x,y){// here "result" is not expression its a variable. Here we have already called the function after creating it. SO why we need "expression name"?. we use "expression name" when we we have big fun name / when we want to call the fun using short name/expression name  
    return x + y;
})(6,9);
console.log(result);

//all the IIFE fun will be going to the heap memory 

/**
 * When we creat the fun and no one is calling it , at that time fun will be creatd inside the heap memory
 * so when we start calling it, because for calling we need space 
 * so when we start calling it then stack will be created inside the stack
 * once the work is done then calling stack will be deleted from stack
 * function will stays as it is inside the heap memory 
 * without calling function will never come inside the stack memory
 * 
 * GC will delete only objects not the function
 */
/**
 * We can not write the function expression with the IIFES
 */

/**
 * In PW we writes IIFEs for small-small utilities
 * pre-conditions
 * pre-requeists
 * because IIFE we are getting advantage that we don't need to call it
 * get data from excel file/ read the data from json file
 * then start running your testcases
 */

/**
 * If we have 3 seprate fun and if those fun are not calling each other then how it will be deallocated from stack?
 * we have 3 fun
 * we are calling all 3 func
 * 1st fun will go inside stack - memory will be occupied - function executed - function will be deallocated
 * 2nd fun will go inside stack - memory will be occupied - function executed - function will be deallocated
 * 3rd fun will go inside stack - memory will be occupied - function executed - function will be deallocated
 * 
 * here we don't have work flow like ecommese, so deallocation will happedn once the individual func is executed
 * refre - 6-call-stack-memory-allocation-for-individual-func.png
 * 
 * but generally we have workflow so we keep creating stack and once done then we deallocate and back to 0 memory 
 */

/**
 * in IIFE we first write ()  - bracket
 * because according to JS guys IIFE function should be written in () - bracket
 * so () is not an anonymous fun - don't get confused 
 * so in IIFE we are creating only 1 annonynous fun not 2 
 * 
 */
