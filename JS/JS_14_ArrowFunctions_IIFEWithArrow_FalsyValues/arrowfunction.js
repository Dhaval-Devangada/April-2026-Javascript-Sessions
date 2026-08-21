/**
 * Program - 1 
 * 
 * Once we know the arrow fun then we will be able to understand the "callback" and "async await" function as well 
 * 
 * In arrow function certain rules we need to follow
 * the moment we see the code we should be ablte to recognize that given fun is arrow fun or not and how exactly it is getting called 
 */

/**
 * Basic feature of arrow function
 * 
 * arrow function is anonymous function
 * means this function has no name
 * this function is denoted by "()=>"
 * this function has no "function" key word as well
 * this function is heavely used in "callback function"
 * later on we will see when to use anonymous fun with arrow fun and when not to use
 */

//()=> - where exaxtly the arrow sign, arrow sign is always towards the right hand side , then after we can write whatever we want to write/do

//below arrow func says that you give me no parameter then I will say print "hello world" on the console
() => console.log('hello world');


/**
 * but the question is that how will you call it?
 * This is not IIFE, that it will be called/invoked immediately 
 * so what should we do to call arrow function?
 * We need to give function expression name here 
 */

let print = () => console.log('hello world'); //print is a function expression name 
//so now if i want to call above fun then we need to call it using function expression name here
print();//calling function //when we call this print expression then above arrow function will be called
//commnet our above "print()" and execute ->nothing will be printed , so we must need to write expression name to call the arrow function

//what we did in previous session is below - anonymous function
let test = function (){
    console.log('hello world');
}
test();

/**
 * So what is the difference between 1st and 2nd function
 * 1st function name is "print" and 2nd function name is "test" [here we are talking about "expression name" and not the actual name]
 * in both the function we are not writing the any name before the paranthesis
 * in 1st [arrow function] we don't have "function" keyword while in the 2nd [anonymous function] we have the "function" keyword
 * in 1st we don't have "function" keyword but we have '=>' sign 
 * in 2nd we have we don't have any name and just have "function" keyword
 * in 1st [arrow function] we don't need to write curly braces {} , if we have only 1 line 
 */

/**
 * Remember that in both the cases,
 * whether you are creating anonymous fun with the "function" name
 * or without "function" keyword , with the "=>" sign, then we need to store both the function in the variable 
 * then we need to call [anonymous fun,arrow fun] by using the variabl, that is the mendetory thing  
 */

/**
 * When to write the {} in the arrow fun and when not to write?
 * we need to check that how many lines are there in the body of arrow function? > if you have 1 line then you can ignore the curly braces other wise you must need to write curly braces {}
 * if you are not confortable with not writing the curly braces then you can write the curly braces with the 1 line as well
 */
let pop = ()=>{
    console.log('hello dhaval');
}
withinCurly();
  
 /**
  * we can not ignore the curly braces {} with the anonymous func with the "function" key word , uncommnet below and check
  if you are running/writing with the "function" keyword then you have to write body within the {} curly braces, 
  it dosen't matter that you have 1 line of code 10 lines of code 
  */
// let test = function () console.log('hello world');
// test();

/**
 * we just write the arrow fun and don't give any "expression name" then js won't give any error 
 * but we won't be able to call that fun as we don't have any reference/name of that arrow func
 * Check below code, we don't have any "expression name" and it's not giving any error
 */
()=>{
    console.log('hello virat');
}

/**
 * So basically there are two ways to create anonymous fun 
 * 1. One with the "=>"
 * 2. One with without arrow but with the help of function
 * 
 * arrow fun is the morden way of creating the anonymous func
 * in PW also we generally don't use the "function" keyword, we always go with the "arrow function" now
 * arrow function is heavely used in call back functionality 
 */

/**
 * What about the parameters / how to use the parameters?
 */

/** arrow fun with params
 * in below arrow fun 1 parameter we are passing and that is name
 * param: 1 param --> name
 * only 1 line code is written - > so no {}
*/
let printInfo = (name) => console.log(name);
printInfo('Naveen');//calling the fun by passing the value - call by value 

/**
 * so where exactly arrow sign is pointing left/right? -> right side
 */
//we can perform any operation in the body part
let printInfo = (name) => console.log(name + 'automation');
printInfo('Naveen');

//zero param
//param: 0
let info = () => console.log('hello world');
info(); //how to call - by using expression name
//above we don't need to pass any argument/value because arrow fun is not talking anything

//1 parm:
//param: 1 - no need to use ()
//in the js if you are creating the arrow func and this arrow fun having 1 param, then we can write like below as well
let printUser = username =>console.log('hello', username);
printUser('DhavalAutomation')
//in the js if the arrow function is having only 1 parameter, then it is not mendetory to write the bracket
//we can write the bracket as well 
//arrow fun has 3 parts
//1. parameter [if you mousehover on "username" then you will see parameter]
//2. after the => sign we have function body [in the body part we have only 1 line, so need need to write {} curly braces]
//3. function expression name [printUser] - without function expression name we can not call the function 

//param: 1 
//param: elements
let clickElement = element =>{//multiple lines of code we want to write so writing {} curly braces // we have only one parameter "element" so not using ()
    console.log('check the ', element , 'is visible');
    console.log('clicl on the ', element);
    console.log('close the browser');
}
clickElement('loginButton')
//we are not returing anything from above fun so there is no return 

//add two numbers:
//give me 2 paerameteres
//return x + y 
//if you have more than 1 parameter then now it is mendetory to use the paranthesis
let add =(x,y) => x + y; //resultant will be given to "add"

let result = add(100,200);
console.log(result);

/**
 * Above we have not used return keyword though it will return because in the above arrow function we have only 1 line of code
 * so if we have only 1 line of code and if we don't use the curly braces {} then we don't need to write "return" keyword 
 */

let addition = (x , y) =>{
    console.log('adding two number...');
    let z = x +y 
    return z; 
}
/**
 * Above howmany lines of code we have written? - 3 lines of code and we have used curly braces { }
 * so if we are writing more then 1 line then it is mendetory to write the "return" keyword
 */
let r1 = addition(200,300);
console.log('r1');

/**
 * if we want to use "retuen" with 1 line of code, then we can do it - but in that case we need to use curly braces 
 * check below example  
 */
let result1 = (x,y) =>{
    return x + y ; 
}

//another example 
let division = (x,y) =>{
    return x/y;
}
let r2 = division(100,2);
console.log(r2);

//now we will write same above function without "return" keyword and "curly braces"
let division1 = (x,y) => x/y;
let r3 = division1 (100,2)
console.log(r3);

/**
 * lets take PW example 
 * we want to return some locator 
 * 
 */
let findElement = (id) => "//div[@id='" + id + "']";
// above we have written method to find the xpath using "id" - here we haved used normal
//You must close the string quotes, add the variable, and open the quotes again to handle the single quotes required by XPath.

//we can write the varibale "id" by using the bcktick as well 
let findElement = (id) => `//div[@id='${id}']`; // here if we want to remove () then we can remove it because we have only 1 param
//above we don't need to write the "return" keyword - no 
//call the above method and supply the "id"
//so above method will return the xpath
let xpath = findElement('neveenOpenCart')
console.log(xpath);
//so above we are saying that, find the element , and id of the element is "neveenOpenCart" => then you create some string / forget about xpath , the exactly same string you give it back to xpath 


/**
 * Below is our requirement
 * launch browser : ch , ff, edge
 * browserName: 1 param
 * return: boolean
 * if browser found: return true
 * not found : invalid browser, false
 * 
 * create the function for above requirement by using arrow func
 */

 /**
  * 
  * @param {string} browser 
  * @returns 
  */
let launchBrowser = browser => { // [1 param - no need to write para() ] [multiple lines of code we need to write so need to write {}]
    console.log(`trying to launch ${browser} browser`);
    switch (browser) {
    case 'chrome':
        console.log(`launch ${browser} browser`);
        return true;
    case 'firefox':
        console.log(`launch ${browser} browser`);
        return true;
    case 'edge':
        console.log(`launch ${browser} browser`);
        return true;

    default:
        console.log('please pass the right browser');
        return false;
}
} 
let isBrowserLaunched = launchBrowser('chrome')
console.log(isBrowserLaunched);

if (isBrowserLaunched) {
    console.log('enter the URL:', 'https://www.nal.com');
}

//now refer screeshot number 1 , there are total 2 param where 1st param is string and second param is arrow function.


let sum = (a,b)=> a + b;
let sub = (a,b)=> a - b;
let mul = (a,b)=> a * b;
let div = (a,b)=> a / b;

//without curly braces we can not write the "return" keyword

let t1 = sum(100,200);
console.log(t1);

let t2 = mul(25,2);
console.log(t2);

//so remember whenever we create arrow fun, we need to remember/think about below
//how many param are there single or multiple
//do we need write curly braces or not 
//do we need to write "return" key word or not 
//do we have single line or multiple lines of code

/**
 * Give a string and convert it to lowsercase 
 */

let convertToLowerCase = string => string.toLowerCase(); //we don't have used braces so we don't need to write "retun" keyword //convertToLowerCase is function expression name
let u1 = convertToLowerCase("NAVEEN AUTOMATION LABS")
console.log(u1);

/**
 * In arrow fun, How to pass multiple parameters using ...spread parameter?
 * 
 * @param  {string} empNames  //belwo "empNames" can take any kind of details so we are saying that please take "String" kind of values only 
 */
let printEmpList = (...empNames) =>{ //to give mutiple parameters to particular fun we need to use ...spread parameter we can write multiple para like this (emp1,emp2,emp3). 
//here ...empNames will behave like array here //spread parameter behaves like array . if you mousehover over the ...empNames then you will see ==> (parameter) empNames: string
console.log(empNames.length);
console.log(empNames);
}

printEmpList('Dhaval','Ram','Vijay')//all these 4 values will be given to "empNames"
//...spread parameter can be used as a parameter also to supply multiple values

/**
 * Can i supply objects to the arrow function?
 * 
 * arrow functions with objects?
 * 
 * req: give me one object and i will print it 
 */
//lets create object 

let user = {
    name: 'tom',
    age: 30,
    salary: 12.33,
    isActive: true
};

//now create the arrow function
let printUserInfo = (userObject)=>{
    console.log(userObject);
}

printUserInfo(user); //calling a function by passing the reference //call by reference 


/**
 * Can we do the destructuring here? ofCourse because ultimately its a concept 
 * 
 */

let printInfoWithDestructuring = ({name,salary})=>{
    console.log(name,salary);
}
printInfoWithDestructuring(user)//we are passing the whole object and taking/printing only two values 
//note: if you are using the destructuring then always uswe the paranthesis with the curly braces

