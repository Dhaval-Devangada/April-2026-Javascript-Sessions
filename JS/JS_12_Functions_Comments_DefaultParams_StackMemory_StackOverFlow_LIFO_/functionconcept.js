/**
 * Docementation of the function/comment section of the function
 */
/**
 * how exactly we will come know the type of x and type of y?
 * as of now type of x and y is any 
 * so if we pass any string the "addition" fun will start concatinating 
 * but above is not the problem. it how the js works. 
 */

/**
 * Inital comment section will look like this 
 *  "*" means any datatype
 * @param {*} x  - 
 * @param {*} y 
 * @returns 
 */
/**
 * This func is used to add two variables
 * @param {number} x   //this says that type of x should be number 
 * @param {number} y   //this says that type of y should be number
 * @returns it returns addition of two numbers
 */
function addition(x, y) { //here we have designed the fun for number only but we can not give the/we can not define the type of x and y so we can pass string as well
    return x + y;
}

//will pass both the numbers so will give the addition of those number 
let m1 = addition(10, 20); //30
console.log(m1);

//passing number and string so will give us the concatination
let m2 = addition(10, 'naveen'); //10naveen
console.log(m2);

let m3 = addition('hello', 'naveen');//hellonaveen
console.log(m3);

/**
 * so problem is that we can pass any type here 
 * and it is how js is designed 
 * so this problem will be solved in ts 
 * but what we can do here here provide the documentation here 
 * 
 * this documentation will help the parser/user to understand that what is value of x and y 
 * 
 * so to provide the documentation follow below steps
 * click above the func 
 * write "/***" then click on "Enter"
 * then we will be able to see comment section of that respective func 
 */

//so now whenevr you call that function and if you mousehover over the function then you will get suggestions that what should be passed as a argument 
// mousehover and you will get suggestions that x should be what and y should be what 
/**
 * Example of suggestion
 * function addition(x: number, y: number): number
This func is used to add two variables

@param x

@param y

@returns — it returns addition of two numbers
 */
let t1 = addition(10, 20);
console.log(t1);

let t2 = addition('hello', 'tom');
console.log(t2);

/**
 * Documentation/comment above the fun will not solve the problem 
 * it will help the user. it is just to showcase and give the instruction to the user 
 * 
 * after the reading the suggestions, if we pass the wrong argument then that it's over problem 
 */


console.log('=========================================');
/**
 * refer screenshot number 1 and 2
 * 
 * Where exactly function is stored in the memory?
 * function will keep storing inside the heap memory 
 * and whatever the function name that name will be stored inside the stack memory / reference to that func will be created inside the stack
 * when we design the code /write the code at that time we are not calling the function we are just designing/writing
 * we write the function in the file 
 * and suppose no one is calling that function 
 * and we are running that file 
 * but when we run that file, at that time that function will go somewhere in the memory right?
 * it will go in the heap memory [when we write the fun but we are not calling it and running the file]
 * but when we call that function at that time some memory will be occupied as well
 * so for calling the fun in js, we need a memory as well so that we can call specific fun
 * js says i want to call a fun , so for calling that fun i need some memory so that i can call that particular fun and that memory is called "call stack memory"
 * 
 * so calling the fun will happen where? inside the fun or stack?
 * always remember whenever we call the fun then it will start getting called inside the stack memory
 * when we design the fun then it will be created inside the heap but whenever we are calling the func then it will create another stack inside the stack
 * 
 * for example
 * when we call "launchBrowser" fun then another stack will be created inside the stack with the function name "launchBrowser" and it will take some bytes and bits inside the stack
 * suppose "launchBrowser" fun is taking 0 - 2 bytes inside the the stack
 * then that function will be executed then function will return something and fun is over 
 * so once the fun is completely executed then what will happen
 * again occupied memory is coming back to 0 
 * it means from calling the fun - returning the output - fun is over - up to that occupied memory of stack is from 0 to 2 mb 
 * and once the fun is over then again memory went from 2 mb to 0 mb
 * 
 * conclusion:
 * whenever we are calling the fun the memory will be allocated in the stack memory and once the fun is over then that stack will be deleted from the memory
 * so we are starting from 0 mb - took some space - and once the fun is over and my work is done - then again back to zero
 * so this is called allocation of the stack memory then de-allocation of the stack memory 
 * but throught the execution the "launcBrowser"/"specifci fun" is still there in the "heap memory"
 * 
 * GC will always go inside the heap memory and not in stack 
 * GC will always destroy those objects which are having no reference/null reference / undefine
 * but GC can not come inside the stack memory
 * 
 * what if we have multiple func?
 * launchBrowser and after that call > login() then call > payment() then call >payment() then call >search()
 * above is the flow we follow in ecommerce app
 * so in above workflow howmany stacks it will create? > for each fun call, respective stack will be created inside the stack
 * once by one method will be called then stack will be created accodingely > refer screenshot number 3 
 * 
 * so in above flow which method is executed last > search method 
 * "search method" is executed at last so that method will be "de-allocated" first
 * serch method is completed so it will be deleted > then we are on "payment()", so it will be deleted > the we are back on "Login()" so that will be deleted > then we are back on "launchBrowser" so it will be deleted
 * so we started from 0 mb and we executed all the fun and for that execution we took 10 mb > then again we are back to 0mb 
 * 
 * so why all the languages are de-allocating the memory after allocation?
 * if we don't delete then unnecessary space will be occupied in the stack memory , then stack will be suffocatedand your app might get crach later on
 * so that is why we need to free the space
 * 
 * at the time of de-allocation LIFO [last in first out] data structured will be used
 * LIFO is the mechanisam of the stack
 */


/**
 * 
 * @param {string} browserName  //this says that browser name should be string 
 * @returns 
 */
function launchBrowser(browserName) {//CHROME //mouseohover over the "launchBrowser" and check the suggestion 
    console.log('launching browser....' + browserName);

    switch (browserName.trim().toLowerCase()) { //chrome
        case 'chrome':
            console.log('chrome browser is launched successfully');
            return true;
        case 'edge':
            console.log('edge browser is launched successfully');
            return true;
        case 'safari':
            console.log('safari browser is launched successfully');
            return true;
        case 'firefox':
            console.log('firefox browser is launched successfully');
            return true;
        default:
            console.log('invalid browser...', browserName);
            console.log('plz pass the valid browser name: chrome, firefox, edge, safari');
            return false;
    }
}

launchBrowser('chrome');//calling the function -- call stack


console.log('=================================');
/**
 * Refer screenshot - 5 
 * 
 * We have created below fun
 * we are created those fun and not calling them > so where it will be stored  > inside the heap
 * now here 
 * m1 is calling m2 
 * m2 is calling m3
 * m3 is againg calling m1 
 * so stack will be created infinitely 
 * it's creating loop kind of thing, we can say infinite calling loop is getting created
 * remember that this is not recersive, recersive means func is calling itself but here its a kind of cycling loop
 * cycling means we are starting from m1 and again coming back to the same point 
 * so we are just keep allocating the memory and just going to the upward direction and no one is de-allocating it > then what will happen at run time?
 * We will get below error: 
 * 
 * RangeError: Maximum call stack size exceeded
 * 
 * so we should not write the code like this in the prod 
 * we have seen in laptop that there is big window is there and inside that we have multiple windows > inside that we have multiple windows > then we need to kill from taskmanager
 * that ia what infinite calling > back to back pop-ups are coming > so we have to go to task manager and delete the entire task
 * exactly same problem is here
 * 
 * URL for stack memory allocation  and de-allocation animation
 * https://claude.ai/public/artifacts/9b0ff5b7-8fe1-4acc-a012-6650cee3bc73
 */


//function calling in a circular way // this is not resursion
function m1() {
    console.log('m1 function');
    m2();
}

function m2() {
    console.log('m2 function');
    m3();
}

function m3() {
    console.log('m3 function');
    m1();
}

m1();



//below is the example of recursion // for below fun will get stack oveflow error as well  or below will create the infinite stacks inside the stack 
//a function is calling itself: recursive function: recursion
// function login() {
//     console.log('login to app');
//     login();
// }

// login();


/**
 * because of stackoverflow error we ignore the recursive fun 
 * changces are high of getting "stack overflow" error due to recursive fun 
 * so always avoid resurcive way for solving the problem 
 * recursive we write in such a way that , we can come out of the loop 
 */



//refer screenshot 6 for stack animation
//if we just improve the infrastructure then like by adding more space for stack , will it solve the problem? - No because here we have infinite cycle - and here we have problem with code and not with the infastructure

/**
 * which memory allocation is easy or which one is complex? 
 * stack memory is always - simple allocation and de-allocation
 * heap memory is more complex - first of it will create the object - GC will need to continous monitor heap memory - GC will keep checking whcih object has no reference/null reference
 * 
 * when heap overflow happens then GC will take of it 
 * to control the stack overflow, programmer need to write good code/ correct sequance of the code 
 */

//where exactly below var will go?
//stack: // because below are primitive data type - it will take some space 
let x = 10;
let name = 'dinesh'; // how many space this will take - total no of char * 2 = 8 bytes



//refer screenshot 7 for below 
//function with param:
//function name: calculateBilling
//parameetrs: 2 : amount, tax
function calculateBilling(amount, tax) {
    let totalAmt = amount + tax;
}

calculateBilling(10000, 20); //calling function by passing values/arguments
//call by value
//call by reference means, we are passing the object 
/**
 * object will be created inside the heap 
 * complete prototype will be created inside the heap with in the object 
 * then when we call the "calculateBilling and pass the values"
 * then 1 stack will be created inside the stack with stackname suppose "calculateBilling"
 * now inside that stack 3 variables will be created (amount,tax and totalAmt), space will be occupied bases on the value we pass
 * 
 */