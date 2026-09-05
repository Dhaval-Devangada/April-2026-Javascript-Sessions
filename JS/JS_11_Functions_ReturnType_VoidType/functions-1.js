/**
 * Program no - 1 
 */



/**
 * what do you mean by functions?
 * without functions we can not processed further 
 * in any automation functions are the most basic thing 
 * 
 * functions - function means its a peice of code which is doing something/logic ....and its reusable (whenever its required)
 * we don't need to write code again and again 
 * 
 * in js fun are same as other languages means initial concept is same and 
 * fun are slightly diff and
 * there are some advance concepts as well [what do you mean by arrow functions/anonymous fun/callback fun/iifes]
 * 
 * 
 * generally functions and method both are same
 * but in js if we "function without class" then we call it "only function"
 * and we call a "function" method as well when we write the it, inside the class
 *  */

/**
 * how to create the fun in js 
 * we need to use "function" keyword. its a existing keyword in js
 * then give the function name in camelCase(testClickOnClick)
 * after that we need to write ()
 * in above () - we can pass the parameters as well and we can not pass the parameter as well
 * then we have the function body inside {}
 */

function test (){
    console.log("hello test");
}

/**
 * we have created the function above
 * try to run it and observe the o/p
 * we won't get anything / above fun will not print anything when we select it and run it 
 * 
 * it means we have created a fun and that fun will be created somewhere in the memory 
 * and fun will be created where? - inside the heap memory or inside the stack memory 
 * fun is also type of references. they are also type of non-primitive so it will go inside the heap memory 
 * but function calling will happen inside the stack memory 
 * 
 * Functions in JavaScript are objects. Since objects are non-primitive values,[don't have fix memory] 
 * they are stored and passed by reference. Variables do not contain the actual function code 
 * they hold a reference to the function object, allowing functions to be assigned to variables, 
 * passed as arguments, and returned from other functions.
 * 
 * 
 * * so here we run above code then we nothing is getting printed 
 * because no one is calling that fun
 * so how to call a fun, check below
 */

test();
console.log("byeeee");

/**
 * If you select all and run above program the 
 * test() fun will be called first and executed then "byeeee" will be printed 
 */

//now refer program no-2 
