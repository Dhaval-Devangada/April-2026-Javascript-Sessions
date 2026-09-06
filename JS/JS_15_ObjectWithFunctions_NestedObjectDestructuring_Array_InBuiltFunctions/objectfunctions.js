/**
 * Program: 1
 */

/** Can we create the functions inside the objects? is it really possible?
 * yes 100% possible - we can create the function also inside the func
*/
let emp ={

    name: 'Shree',
    age:30,
    salary:12.33,

    //remember that whenever you want to create the function inside the object then you don't need to write "function" keyword.
    //you can directly write the func like below, just with function name + parenthesis + curly braces
    coding(){
        //now here we want to access current object property 
    /**
     * for this whole current object - do the memory visulation - refere screenshot 1 
     * object will be creatd inside the heap memory
     * object will have "name,age,salary" [properties] + 1 function
     * now the fun says I want to access this (this means a variable which is there inside the object) name property
     * first of all can we access the "name" property - YES we can easily access it - but how will you access it?
     * we can use it by using "this" keyword
     */
    console.log(this.name, 'is coding');
    } 

}

//now lets access the properties of above object
//we can access the "name/age/salary" properties without any problem and can print it on the console 
console.log(emp.name,emp.age,emp.salary);

//now how to access the coding property
emp.coding();

console.log('-----------------------------------------');

//can we create n number of func: YES
let emp ={

    name: 'Shree',
    age:30,
    salary:12.33,

    coding(){
    console.log(this.name, 'is coding');
    } ,
    
    //we can access the current property using "object  reference name" as well
    testing(){
    console.log(emp.name, 'is coding'); //if we don't won't to use "this" keyword then we can directly use the "emp" here as well
    }

}
emp.coding()
emp.testing();

console.log('----------------------------------');

/** Can we create the fun with the parameters
 * we can supply the parameter also
 * and we can return as well
*/
let emp ={

    name: 'Shree',
    age:30,
    salary:12.33,

    coding(){
    console.log(this.name, 'is coding');
    } ,
    
    //we can access the current property using "object  reference name" as well
    testing(){
    console.log(emp.name, 'is coding'); //if we don't won't to use "this" keyword then we can directly use the "emp" here as well
    },

    printData(x,y){
        return x+y;
    }

}
emp.coding();
emp.testing();
let r1 = emp.printData(100,200);
console.log(r1);

console.log('-------------------------------------');
/**
 * can I create 1 anonymous fun without arrow function?
 */

let emp ={

    name: 'Shree',
    age:30,
    salary:12.33,

    coding(){
    console.log(this.name, 'is coding');
    } ,
    
    //we can access the current property using "object  reference name" as well
    testing(){
    console.log(emp.name, 'is coding'); //if we don't won't to use "this" keyword then we can directly use the "emp" here as well
    },

    printData(x,y){
        return x+y;
    },

    //one anynomous function by using the "function" keyword and function has no name 
    //to call below func we need to give expression name
    //but here we don't write "=" but we write ":" here while using the expression name
    data:function(){ //we can call this function using "data"
        console.log('hello', this.name);
    }

    //in the object we never write the "let/var/const" in the left hand side
}
emp.coding();
emp.testing();
let r1 = emp.printData(100,200);
console.log(r1);
emp.data();  

console.log('-------------------------------------');
/**
 * can I create 1 anonymous fun with arrow function?
 */

let emp ={

    name: 'Shree',
    age:30,
    salary:12.33,

    coding(){
    console.log(this.name, 'is coding');
    } ,
    
    //we can access the current property using "object  reference name" as well
    testing(){
    console.log(emp.name, 'is coding'); //if we don't won't to use "this" keyword then we can directly use the "emp" here as well
    },

    printData(x,y){
        return x+y;
    },

    //one anynomous function by using the "function" keyword and function has no name 
    //to call below func we need to give expression name
    //but here we don't write "=" but we write ":" here while using the expression name
    data:function(){ //we can call this function using "data"
        console.log('hello', this.name);
    },

    //arrow fun is also an anonymous fun
    reading: ()=>{
        console.log('reading method...');
    }

    //in the object we never write the "let/var/const" in the left hand side. Even for the properties we have not used "let/var/const".
    //"let/var/const" will be used outside the object only 
}
emp.coding();
emp.testing();
let r1 = emp.printData(100,200);
console.log(r1);
emp.data();
emp.reading();  

console.log('-----------------------------------------------');
/** inside the arrow fun we can not use "this" keyword
 * instead if that we need to use "object reference name"
 * if you use "this" keyword then it will give you an error  ==> TypeError: Cannot read properties of undefined (reading 'name')
 * try by running below 
 * there is no specif reason js guys have given that why it is like that
 * 
 */

let emp ={

    name: 'Shree',
    age:30,
    salary:12.33,

    coding(){
    console.log(this.name, 'is coding');
    } ,
    
    //we can access the current property using "object  reference name" as well
    testing(){
    console.log(emp.name, 'is coding'); //if we don't won't to use "this" keyword then we can directly use the "emp" here as well
    },

    printData(x,y){
        return x+y;
    },

    //one anynomous function by using the "function" keyword and function has no name 
    //to call below func we need to give expression name
    //but here we don't write "=" but we write ":" here while using the expression name
    data:function(){ //we can call this function using "data"
        console.log('hello', this.name);
    },

    //arrow fun is also an anonymous fun
    reading: ()=>{
        console.log(this.name,'reading method...'); //TypeError: Cannot read properties of undefined (reading 'name')
        console.log(emp.name,'reading method...');//uncommnt below and then run with this line - program will run sussfully as we have used "object reference name" insie the arrow fun to access the current object property
    }

    //in the object we never write the "let/var/const" in the left hand side. Even for the properties we have not used "let/var/const".
    //"let/var/const" will be used outside the object only 
}
emp.coding();
emp.testing();
let r1 = emp.printData(100,200);
console.log(r1);
emp.data();
emp.reading();  

console.log('---------------------------------------');

/**
 * now inside this object howmany properties we have created?
 * objec is refered by "emp" reference variable
 * how many key-value pairs do we have - 3 [name,age,salary]
 * how many function do we have -5 [coding,testing,printData,data,reading]
 * and all the functions [coding,testing,printData,data] can access the all the properties using "this" keyword except the "arrow" function
 * refer - screenshot 2
 */ 

/**
 * Can functions call each-other?
 * to call the function of current object we need to use "this" keyword
 */
let emp ={

    name: 'Shree',
    age:30,
    salary:12.33,

    coding(){
    console.log(this.name, 'is coding');
    } ,
    
    //we can access the current property using "object  reference name" as well
    testing(){
    console.log(emp.name, 'is coding'); //if we don't won't to use "this" keyword then we can directly use the "emp" here as well
    this.coding(); //to call the current object fun we need to use "this"
    },

    printData(x,y){
        return x+y;
    },

    //one anynomous function by using the "function" keyword and function has no name 
    //to call below func we need to give expression name
    //but here we don't write "=" but we write ":" here while using the expression name
    data:function(){ //we can call this function using "data"
        console.log('hello', this.name);
    },

    //arrow fun is also an anonymous fun
    reading: ()=>{
        console.log(this.name,'reading method...'); //TypeError: Cannot read properties of undefined (reading 'name')
        console.log(emp.name,'reading method...');//uncommnt below and then run with this line - program will run sussfully as we have used "object reference name" insie the arrow fun to access the current object property
    }

    //in the object we never write the "let/var/const" in the left hand side. Even for the properties we have not used "let/var/const".
    //"let/var/const" will be used outside the object only 
}

emp.coding();
emp.testing();
let r1 = emp.printData(100,200);
console.log(r1);
emp.data();
emp.reading();

console.log('------------------------------------------');
/**
 * does it make any sense to create IIFE here? - NO - because IIFE does not have any expression name
 * IIFE have "return" value - if we are returning something
 */

let emp ={

    name: 'Shree',
    age:30,
    salary:12.33,

    coding(){
    console.log(this.name, 'is coding');
    } ,
    
    //we can access the current property using "object  reference name" as well
    testing(){
    console.log(emp.name, 'is coding'); //if we don't won't to use "this" keyword then we can directly use the "emp" here as well
    this.coding(); //to call the current object fun we need to use "this"
    },

    printData(x,y){
        return x+y;
    },

    //one anynomous function by using the "function" keyword and function has no name 
    //to call below func we need to give expression name
    //but here we don't write "=" but we write ":" here while using the expression name
    data:function(){ //we can call this function using "data"
        console.log('hello', this.name);
    },

    //arrow fun is also an anonymous fun
    reading: ()=>{
        console.log(this.name,'reading method...'); //TypeError: Cannot read properties of undefined (reading 'name')
        console.log(emp.name,'reading method...');//uncommnt below and then run with this line - program will run sussfully as we have used "object reference name" insie the arrow fun to access the current object property
    },

    //IIFE - will give error "Property assignment expected." 
    // For IIFE - it does not have any function expression name.
    //so it does not make any sense to create the IIFE 
    //try by uncommenting below
    // (()=>{ 

    // })();

    //in the object we never write the "let/var/const" in the left hand side. Even for the properties we have not used "let/var/const".
    //"let/var/const" will be used outside the object only 
}


console.log('------------------------------------------');

/**
 * Now can you imagine above kind of things with object oriented?
 * Tomorrow we are going to create LoginPage class 
 * LoginPage Class having 3 feilds - username,password,loginButton
 * and then we can create the PageFunction  like - doLogin, createAccount, forgotPassword
 * 
 * if you understand page object model then can we write like below?
 * suppose we won't to design login page
 * 
 */

//This is the POM (page object model) without the classes but with the help of "object"
let loginPage = {
    //what all locators i want to maintain on the loginPage?
    username: "#username",
    password: "#password",
    loginBtn: "//input[@id='login']",

    //now inside this object, can we create the function also as well? - here we are trying to do/acheive real time scenario
    //now what kind of function do we need to create for LoginPage?

    doLogin(appUserName,appPassword){ // do login fun says you have to give me username and password
        //now we are going to use locators to enter the username and password
    },

    forgotPwd(){

    },

    getFooters(){

    }
    //above all the function can use the properties by using "this" keyword

};
//entire body of the object will go inside the heap memory and "loginPage" - which is the object reference name will go inside the stack memory


/**
 * in the object, how can we use the nested value inside the function
 */

let user = {
    name: 'Shree',
    age:30,
    salary:12.33,


     address: {
        flat: 101,
        apartment: "new apt",
        city: 'LA',

        location:{
                lat:12.33,
                long:45.44,
        }
    },

    coding(){ 
    console.log(user.address.location.lat, 'is coding');// by using the "user" object and "dot notaion" we can access the "lat" and "long"
    console.log('address is ', this.address.location.lat); //here 'this' is representing current object so by using the "this" and "dot notaion" we can access the "lat" and "long" as well
    console.log(this.address.location);//this will print both (lat and long)// lat and long will be printed in the form of object
    } 
}
user.coding();


console.log("--------------------");

let emp ={

    name: 'Shree',
    age:30,
    salary:12.33,

    coding(){
    console.log(this.name, 'is coding');
    } ,
    
    testing(){
    console.log(emp.name, 'is coding'); 
    },

    printData(x,y){
        return x+y;
    },

    data:function(){ 
        console.log('hello', this.name);
    },

    //arrow fun is also an anonymous fun
    reading: ()=>{
        console.log('reading method...');
    }
}
emp.coding();
emp.testing();
let r1 = emp.printData(100,200);
console.log(r1);
emp.data();
emp.reading();  

//what will be the o/p if we write "emp.reading();" inside the console.log()?
console.log(emp.reading()); //undefined // why because "emp.reading()" is not returning anything. 

//printData() is returning something, so try by writing "printData()" inside the "console.log"
console.log(emp.printData(1,2)); //3
 //so you need to retun something from the fun if you want to print something by calling it inside the console.log
 //but is not a good practice
 //when you are calling fun then store its value in the variable then print it .


 console.log("----------------------------");

 let emp ={

    name: 'Shree',
    age:30,
    salary:12.33,

    coding(){
    let name =  "dhaval"
    console.log(this.name, 'is coding');//here "this.name" is referring to "object property"
    console.log(name); //this is local variable of the coding 
    } ,
}
emp.coding();
//in the object everything in the scope 
//here we don't have any access modifiers, because they are for the classes and not for the objects
//so here inside the object we want to use, encapsulation or something then we can not use it here
//so scope does not matter here


/**
 * In framerwork we just create the "LoginPage" object or we create the whole class for "LoginPage"? - we create the whole class for "LoginPage" not just the object
 * with the JS classes were not introduced in the begninng 
 * it was just a plain language / scripting language. it was not proper object oriented
 * but object is what?
 * you are the object and you have property like name,age,salary
 * and you have behaviour like walking,coding,running, reading 
 * so object have properties and behaviour 
 * will we use below kind of concept [like create the object of page] in PW?
 * like create Page class and create below kind of fun and then call it in the test class
 * no won't do it - we will avoid that [because object can not inherit other classes,we can not perform encapsulation inside the object]
 * in PW we will create the class - because with the class we can apply all the OOPS concepts[encapsulation,inheritance,private keyword,static keyword]
 * so we can create below kind of fun for smaller functionalities but for the larager framework we can avoid that
 * for larger fun, we can always create class
 * we avoid - creating the Object of LOGINPAGE during the framework
 * insetad we create LOGINPAGE class so that we can perform all the OOPS operation with that class
 * this concept is we have undoorsttod just for interview and for our undersanding
 */

let emp ={

    name: 'Shree',
    age:30,
    salary:12.33,

    coding(){
    let name =  "dhaval"
    console.log(this.name, 'is coding');//here "this.name" is referring to "object property"
    console.log(name); //this is local variable of the coding 
    } ,
}
emp.coding();


/**
 * In above object 
 * we have written the function 
 * and inside the function, we have written "this".
 * and we say that "this" refers to current object 
 * 
 * and we also says that functions are kind of object, so why "this" inside the function is not referring to "function" itself
 * and referring to the currnt object
 */
function test() {
    console.log('test');
}
//what is the type of above fun
console.log(typeof test);//function

/**
 * functions are not the real objects,like that we are considering
 * we can say that functions are reference type data-type
 * but they don't have any key-value pair format kind of thing over here
 * 
 * we can not say that, we can have "a" variable and then we can use it by doing "this.a"
  function test() {
    let a = 10;
    console.log(this.a);
}

"this" keyword is designed for the objects not for the functions
because they are no the real objects
functions don't have any key-value pair properties
functions is the behaviour of the object not the actual objects
functions are the behaviour of the object , they are part of the object - they are not the actual object
 */


/**
 * Want to migrate from protactor to PW? 
 * so is there any utility to migrate or we should completely redesign?
 * Redesign 
 */

