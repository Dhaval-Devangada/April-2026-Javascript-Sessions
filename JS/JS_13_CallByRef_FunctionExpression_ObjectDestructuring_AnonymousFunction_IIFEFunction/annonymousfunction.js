/**
 * Program 3
 */

/**
 * Most important topic in the javascript and PW, because PW is full of annnonymous fun,full of arrow fun,full of call backs,full of async, full of await
 * and this where most of the people get scared in the JS
 * 
 * Annonymous fun is a fun which has no name - a fun has no name 
 * this kind of things you will not see in other programming languages
 * because this is specially available in js
 */

/**
 * how to create annonymous fun?
 */

function simpletest(){ //this is simple func. func name is 'test' and keyword is 'function' here
    console.log('hello');
}
//now if we remove the func name "test" from above then above then fun will not have any name 
//but js says that if you have a fun without any name then how will you call it?
//How to call below func if it has no name 
//try uncommenting below func

// function (){
//     console.log('hello');
// }

/**
 * so remember that annonymous has no name and it has to be called by using expression name
 * so for the annonymous func - we have to give expression name also
 * how to give expression name that we have already learned 
 * we have to assign annonymous fun in the particular variable 
 * without the function expression, we can not crreate the annonymous fun. Try uncommenting above fun 
 * we can not create fun without name, because logically it's not correct 
 * if the func don't have any name then how can we call it  
 * first lets understand the syntax then we will see n number of usecases
 * then we will see that when to use the annonymous fun and when not to use annonymous func 
 */

let test = function (){
    console.log('hello');
}

/**
 * How to call annonymous fun?
 */

/**
 * can we call annpnymous fun without the expression name?
 * NO - because there is no actual name available 
 * so we have to call it using the expression name 
 */
test();

/**
 * Here we are using the "function expression" with the "annonymous function"
 */

let add = function (x, y){
   return x + y ;
}

let r1 = add(100,200);
console.log(r1);//300

console.log(add.name); // if don't have any big function name /actual function name then, this "add.name" will give us the same "expression name"
/**
 * With annonymous fun we can acheive the "call by reference" as well. 
 * With annonymous fun we can acheive the "destructuring" as well.
 */

/**
 * Can we acheive the cross-browser testing scenario here?
 */

/**
 * we can write the comments as well
 * 
 * @param {string} browserName  //we are telling the PARSER in the VS code that please consider the "browserName" as string 
 */
let launchBrowser = function(browserName){ //fun has no name here 
    switch (browserName.trim().toLowerCase()) {
       case 'chrome':
        console.log('launch chrome');
        return true;
    case 'edge':  
        console.log('launch edge');
        return true;
    case 'safari':
        console.log('launch safari');
        return true;
    case 'brave':
        console.log('launch brave');
        return true;
    case 'opera':
        console.log('launch opera');
        return true;

    default: // if case is not availabe then please go to default case 
        console.log('invalid browser...plz pass the right browser..');
        return false;
    }
}

/**
 * Above fun is annonymous fun as it does not have any name 
 * As it is annonymous we need to give "expression name" so that we can call it
 * above annonymous fun has 1 parameter 
 * and above fun is returing boolean(true/false)
 * 
 */

//we can call above fun using expression name 
let flag = launchBrowser('chrome') //here flag variable is receiver /receiver of the return //launchBrowser is function expression name here
console.log(flag);

/**
 * Above is the first way of creating the annonymous fun 
 * later in the chapter we will see the advance version of "anonymous function" > thats is called/knows as "Arrow function" =>
 * advance version of "anonymous function"  > arrow functions
 * arrow function is also called the "anonymous fun" without any name 
 * in arrow function, we will replace the "function" keyword with "=>"
 * then we will see the concept of the arrow fun and 
 * then we will see concept of MAP, REDUCE and ASYNC programming and other things
 * lasted way of creating the "anonymous fun" is by using the "arrow" fun
 */

/**
 * Once we understand JS then we can use it for multiple purpose
 * Playwright
 * WDIO
 * Cypress
 * Postman
 * K6 (Performance tool)
 */