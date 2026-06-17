/**
 * Program - 3 
 */
//what kind of func below is:
//1.simple function
//zero input parameter, no return/void function
//and this fun is not giving me anything, it means there is no "return" keyword here
//below fun say you are not giving me anything and i am not returning anything
//so function is like a factory here -m factory says you give me something and i will give you something 
//but there are other kind of factories as well where - factory says that you won't give me anything then I won't to give anything as well
//we have not written "return" bec
//a fun is called void fun is function is not returning anything
//below fun is not returning anything so type of fun is void 
function test(){
     console.log("hello test");
}

function click(){
    console.log('click on the element');
}

//how to call above fun
click();

/**
 * try by mousehover on above fun - you will see the signature of the function
 * you will see below
 * 
 * function click(): void
 * 
 * void means above function is not returning anything
 */

/**
 * 2.zero input but some return:
 * if you are calling me then i will give you something 
 * zero input parameter, return type:number
 * try by mousehover on below fun - you will see the signature of the function
 * signature means - overall prototype of the function> that this is fun, this is a func name, this fun does not have any parameter
 * and after colon (:) we can see the return type of the function
 * 
 */
function getNumber() {
    console.log('getting some number');
    return 100; // this function is returning 100 and 100 is a number 
}

console.log(getNumber());
//Above whatevr the getNumber() giving me we are consuming it by "console.log" and its not a good practice that console.log is consuming the value of the function
//whenevr we are calling "getNumber()" then its giving us something

//we can call the function multiple times 
getNumber(); // output of this functions is not consumed by anyone 


//we can store the value of the function in the variable means whatever the function is giving us, we are storing it in the variable/variable is consuming the value of fun
let res = getNumber();
console.log(res);

/**
 * so what is the right approach?
 * you call the fun
 * get something from the function
 * you print it using console.log 
 * or
 * store it in the variable then you print it?
 * 
 * Ans: Always storing in the variable then print it 
 * why?
 * because now we can use that variable n number of time while we can not use "console.log(getNumber())" n number of times
 * with variable we can do multiple things 
 * we can manipulate the variable as well
 */

//lets write the signature of the below fun
//name: launchBrowser, type of fun:this fun is giving me what: boolean , input param: 0
function launchBrowser(){
    console.log('launching a browser');
    return true;
}

let isLaunched=launchBrowser();
console.log(isLaunched);

//now on the basis of the "isLaunched" we can write further conditions or we can writr further logic byu using "isLaunched" variable

if(isLaunched){
    console.log('enter the url: https://www.google.com');
}
else{
    console.log('no need to enter the url');
}

/**
 * fun is giving me somethig 
 * we are storing it in the variable 
 * and on the basis of that variable we are taking the decision 
 * that means we can use that variable for writing any kind of logic
 */

//what is the type of below fun? 
//below fun is returning the 'neveen' and neveen is what 'string'
//what is the return type of below fun: string 
//so type of the below fun is 'string'
function getTraninerName(){
    return 'Naveen';
}

let name = getTraninerName();
console.log(name);

/**
 * can we print the function name directly? is it allowed in the js?
 */
console.log(getTraninerName); // we have not written the "()" that means we are not calling the fun, we are printing it 
//if we do above then we will get the overview like below
//[Function: getTraninerName] > that we have a function called "getTraninerName"

/**
 * what is the type of the function?
 */
console.log(typeof getTraninerName);//function
console.log(typeof getTraninerName());//string

/**
 * functions are not the exact objects 
 * they will always be stored inside the heap memory 
 * there is no concept of object here in function, because object has key-value pairs and here we are not storing any key-value pairs
 * fun always go inside the heap memory because they are non-primitive
 * 
 * isLaunched is primitive - because memory is fixed - so it will go inside the stack
 * 
 * all the primitive will go inside the stack and non-primitive will go inside the heap
 */

//3.some input param and some return:
//add fun says give me two numbers 
//how many parameters we are passin here: 2 
//input param: 2 ; return type: any [why "any" for that refer below things]
//remember whenever we create a param the we don't write "let" or "var" before the param, we just write "x" and "y". if we write "let" or "var" then it will start giving me the error
//try by uncommenting below

// function add(let x,let y){

// }

function add(x,y){  //type of both para[x and y] is any and return type is "any" as well
    console.log('adding two numbers....');
    let z = x+y;
    return z
}

/**
 * now we are callin the add() but here
 * how we will know that we need to pass x a number and y a number as well. in other programming languages we will know form the data type
 * but while creating the function we have not passed any data type before the x and y
 * 
 * if you mousehover on add then you will see this "function add(x: any, y: any): any" 
 * means "x" could be of any type and "y" could be of any type
 * and function can return any type 
 * 
 * here we are returning the "z" 
 * but how can we cay that fun return type is number , because we really don't know that we are passing number or what
 * so what is return type of the function right now? - return type of the function is "any"
 * we can pass anything , that's why type script will come into the picture 
 * 
 * this how js is designed that's why people don't like js as compared to typescript
 * 
 * what is out target? our target us please add two number and give it to us 
 *
 * everything will be decided when we write the code or when we run the code?
 * in above fun we can pass anything  
 * x could be any 
 * y could be any 
 * result coukd be any 
 * 
 * in js everything will be decided at run time 
 * so at run time x will become numnber
 * y will become number
 * z will become also a number because adding two number will always give you number 
 * and that "z" will be given to number [based on below line] so m1 will also become a number [that will also be decided at the run time]
 */

console.log('=========================');
let m1 = add(10,20);//one to one mapping will be done so 10 will be given to x and 20 will be given to y 
console.log(m1);

console.log('=========================');
/**
 * so tomorrow if we pass 1st param as number and 2nd param as string then will it work?
 */
let m2 = add(100,'Naveen');//100 will be given to x and 'Naveen' will be given to y. So here we are adding number and string so output //100Naveen [string concatination]
console.log(m2);//100Naveen

console.log('=========================');

let m3 = add('hello','world');
console.log(m3);//helloworld

/**
 * so when we were passing both numbers then it was giving me 30
 * when we pass one number and second string then it's giving me 100Naveen
 * when we pass both parameters as string then its giving me helloworld
 * 
 * don't you thnink its weird
 * don't you think that js is superflexiable here, because js will change it's behaviour at run time and it depends upon the type of parameter you are passing and what exactly that function is returning it
 * can we do the same thing in other language like c# and java - no
 * 
 * remember tha this not overloading, here we are just calling a fun 
 * 
 * don't you thnink its weird
 * because we are writing logic for calculater 
 * bur here calculator is ready to accept anything sting, boolean ,number
 * user is able to pass anything in calculater
 * 
 * so this is the problem in the javascript
 * that we create a function but we can not declare a type of the parameter
 * so if parameter does not have any type then we can give anything
 * so to resolve above problem...type script will come into the picture
 * in typescript we have to give type of x and y then on the basis of that we will calculate the value of z and then we will return
 * that's why we call the language because "type" we need to define
 * 
 * here at run time type will be decided not at at the design time[while we write the code]
 */


function calculateBilling(foodBill,drinksBilling,tax){
    console.log('calculating the billing amount...');
    return foodBill + drinksBilling ;

}
/**
 * is it a good practice to write a fun like above?
 * we have not included the "tax" in the body part of above fun.
 * now we are passing all 3 prameters in the func.
 * so what exactly it will return?
 */
let totalAmt = calculateBilling(1000, 500, 50);
console.log(totalAmt);//1500

/**
 * so what is the mistake
 * if you are creating a fun with n number of parameter, then it is mendetory/good practice to use those n number of parameter in your logic also
 * in above fun we have "tax" as para but we are not using it in the logic 
 * it not a good practice to use less number of para in your logic compare to the para we have declared in paranthesis
 * if you are not using specific para then remove that para from delcaratio
 * 
 * what if for some user tax is there but for some user no tax
 * then pass 0 
 * check below example
 *
 */

function calculateBilling(foodBill,drinksBilling,tax){
    console.log('calculating the billing amount...');
    return foodBill + drinksBilling + tax;

}
 let totalCount = calculateBilling(2000,600,0) // in fun we have to pass 3 para and we are passing all 3 para and we are using all 3 para in our logic as well
 console.log(totalCount);

 /**
  * We have seen that we need to pass 3 para (foodBill,drinksBilling,tax) in fun but if we use "tax" in logic then we don't get any error
  * but what here "calculateBilling" needs 3 para but what if we pass only 2 para? - will it give any error?  / what will be the o/p? > NAN
  */

 let totalBillCount=calculateBilling(5000,1000)
 console.log(totalBillCount);

 /**
  * 5000 will be given to foddBill
  * 1000 will be given to drinksBilling 
  * but we are not passing "tax". so "tax" will become what? > undefine
  * so in that case what will happen 
  * 
  * 5000 + 6000 + undefine = NaN
  * 
  * here we are not getting any error so if we are getting NaN then we have to check that we are missing something
  * 
  */

 console.log('==================================');
 /**
  * whenever we design anything 
  * or write any scenario or logic then it should be clear in our mind that what exactly i am going to develop
  * what kind of function that i have to create
  * so always write the documentation first that hey 
  * create/write a function WAF
  * first we write the acceptance criteria 
  * that what is your criteria, this is just like user story
  * its not like that we will directly writing the code from the day 1
  * first we analyze that what exactly i have to develop
  * 
  * WAF: launch a browser:
  * input params: (browserName) : valid values : chorme,FF,edge,safari  [you can supply these kind of values][this will become our input para][tell me that which browser you want to launch]
  * return true
  * print: browser is launched successfully [before returning tell user that browser is lauched successfully]
  * return: true/false[boolean] [this will give us the return that browser is successfully launched or not]
  * wrong browserName: print: invalid browser, return false
  * 
  * so above is the basic acceptance criteria
  * we are writing the basic/whole documentation that what exactly i want to do instead of writing the code directly
  * this is how we develop the logic 
  * this is how we write the code in automation as well that what exactly i want to do 
  * what kind of scenario/usecases i want to cover 
  * 
  * so write the requirement first of all
  * so now its clear in myh mind that this is what product owner has written the req and now as a developer i have to write the code 
  * 
  * Tomorrow if we are writing any complex to complex scenario
  * We have to write all the positive and negative scenarios/cases
  * how to handle all those cases
  * for negative cases what should i return and for positive cases what should i return
  * my logic is satisfying all kind of conditions or not 
  * think and then write the code
  */

 function launchBrowser(browserName){
    console.log('launching browser...'+ browserName);

    switch (browserName.trim().toLowerCase()) { 
        //to remove the corner spaces[before space/after space] we are using trim()
        // user is giving the capital chrome but here we are maintaining small 'chrome' so whatever the 'browserName' user is passing, we will convert it to lowercase
        case 'chrome':
            console.log('chrome browser is launched successfully');
            return true;
          //  break; // here if we have used 'return' then it will never break /come to "break" part. so in any programming language we should never write 'return and break' together
                  // because here 'retun' will behvae like a 'break' for us 
                  //but if we remove the 'return' and just keep the 'break' then it won't 'return' anything so just remove the 'break'
                  //return should be the last statement
     case 'edge':
            console.log('edge browser is launched successfully');
            return true;
          //  break;
     case 'safari':
            console.log('safari browser is launched successfully');
            return true;
          //  break;
     case 'firefox':
            console.log('firefox browser is launched successfully');
            return true;
          //  break;
    
        default:  //negative case and above all are positive cases
            console.log('invalid browser...', browserName);
            console.log('please pass valid browser name: chrome,firefox,edge,safari');
            return false;
          //  break;
    }
 }
 /**
  * so whatever the requirment we have written before writing the fun has helping us a lot do decide the logic and to write the logic 
  * so any big problem you are solving or writing the logic for that then first you write it 
  * most of things will be cleared when you write it step by step in the documentation
  * documentation meand all the bullets points or important points
  * then start writing the code 
  */

 //call the function
 let isBrowserLaunched = launchBrowser('chrome'); 
 console.log(isBrowserLaunched);

 //now we can use above variable "isBrowserLaunched" for our other logic 
if(isBrowserLaunched){
    console.log('enter url: https://www.nal.com');
}
//try with CHROME/chROME- js is case sensitive - so here user can supply small/capital chrome as well - so probelm is with our code. 
//what if user passes > CHr ome > then its a problem with user or code - its a problem with user
//what if user passes >'   chrome    ' > then its a problem with user or code - its a problem with code - according to user we are passing 'chrome'
//what if user passes > Chome > then its a problem with user or code - its a problem with user - because user is passing it delibaterly
/**
 * small small console.log('.....') lines will help us to debug the code 
 * it tells us that what is happning at the run time.
 * if we don't write console.log('.....') then user is not aware that what is happning internally. user is confused
 */


console.log('===================');

/**
 * is it allowed to create dublicate functions? - same signature
 * 
 */

function printing(){
    console.log('printing 1');
}

function printing(){
    console.log('printing 2');
}

/**
 * As we have created two "printing()" so which fun will be called when we write below? 
 * JS will consider which function, first , second or will it give error? 
 * > Error 
 * SyntaxError: Identifier 'printing' has already been declared
 * 
 * means, duplicate functions are not allowed in js
 */

printing()

/**
 * but if in the package.json you change the type from "module" to "commnjs" then error will not come 
 * and latest function will be executed 
 * means always take the latest verisonof the function
 */

console.log('===========================');


/**
 * is it allowed to create dublicate functions? - but with different signature
 */

function printing(){
    console.log('printing 1');
}

function printing(name){
    console.log('printing with parameter');
}

function  printing(name,age){
    console.log('printing  with parameter');
}
printing("dhaval")
//printing("naveen", 32)

/**
 * Above Will give error
 * SyntaxError: Identifier 'printing' has already been declared
 * 
 * here it's not the same as JAVA
 * in JS there is no concept of overloading 
 * we can not overload anything in the JS
 * 
 * so how many forms of function we can write in the JS - Only one form
 */

/**
 * why type of fun is fun?
 * because it is created in the form of fun not an object/not a number/not a boolean
 * function is a another type
 * whenever we create any func then type of that fun is pre-defined in js
 * if we have written "function" kind of code then type will be fun
 */


/**
 * Don't write "function" inside the  console.log - it will give you undefined
 */
let myNumber = console.log(getNumber());
console.log(myNumber);

/**
 * There are two thing in js
 * normal file without class is called file 
 * if we have created class then we can say we have class
 * 
 * in js every file is called module
 * entire module will be loaded in the memory first
 * so js knows that which fun, var etc... are already stored in the memory 
 * so if we call the fun without declaring it/ if call the function first then if we have declared then also it will work. This is known as hoisting
 * this is the flixiability js guys are giving us
 * refer below example
 * 
 * 
 * test();
 * function test(){
 * console.log('printing test')
 * }
 */

/**
 * How to restrict the use from passing invalid arguments?
 * suppose we have created to calculate "addition" so in that case we need to pass number
 * but here in js we can pass string as well
 * so how to restrict user?
 * By writing comments/documents above the function
 * or by using JS
 * in ts we will get an error at run time itself, if we pass the wrong argument    
 */
/**
 * cloning we can do with the array as well 
 * same tecnique we need to use with array as well
 * 1. rest para meter
 * 2. structuredCloning 
 */

let num = [1,2,3];
let numCopy =  [...num];
console.log(numCopy);
let num2 = structuredClone(num);
console.log(num2);