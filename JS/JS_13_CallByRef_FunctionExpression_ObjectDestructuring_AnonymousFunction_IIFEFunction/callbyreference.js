/**
 * 
 * Program - 1
 */

//call by value or calling a func by passing an argument
function test1(name){
    console.log(name);
}

test1('Tom')
test(100)

/**
 * In above fun "name" is a parameter and 'Tom' is an argument 
 * so above is 
 * calling a func by passing a value 
 */



function test(name) {
    console.log(name);
}

console.log(test.name);


//call by value
test('Tom');//calling a func by passing a value
test(100);


console.log('------------------------------------------');

//call by reference 
//call by reference means 'object reference'
//can we supply object reference to an fun as an argument ? - YES 

//call by reference: Object reference
//below we have one object and it has properties 
let user = {
    name: 'Tom',
    age: 30,
    salary: 12.33,
    isActive: true
};


//in below "getUserDetails" fun says that you give me object reference  or give me entire object and from that i will print whatever you want to print, from that particular object 
function getUserDetails(userObj) {//this fun is having 1 param, but what kind of param -> 
    console.log(userObj.name, userObj.age);//from the given userObj print the name and age // whole object is/will be passed but just give me name and age 
    console.log(userObj);
    userObj.name = 'Peter';
}

console.log(user.name);//Tom // here we are printing 'name' before calling the 'fun' so 'Tom' will be printed 

getUserDetails(user);//call function by passing object ref...here we are passing "user" and "user" is what ? > user is object reference 
//refer screenshot 1 
//object will always go inside the heap memory and the reference will be inside stack 
//now "user" will be equal to "userObj" or "user" object will be passed to "getUserDetails"
//"user" is given to "userObj" [1 to 1 mapping]
//so userObj = user
//so "userObj" will start pointing to where "user" object reference is pointing  
//'user' will go to "userObj" , so the 'userObj' will start pointing to the same object where "user" object reference is pointing 
//so now think, in above entire code, how many objects got created? - Only simple 1 object in the memory 
//but how many references got created for the same object - 2, user and userObj [and the object references will be stored inside the stack memory]
//function is not designed only for the values/ only for the primitive values, fun is designed for passing the references as well

console.log(user.name);//Peter // here we are printing the name after calling the fun so "peter" the updated name will be printed 

/**
 * Where we will use above feature in the playwright?
 * when we supply the pages or when we supply the page objects from one function to another function
 * LoginPage class object when i have to supply from one test to another test
 * in selenium we supply the "driver"/page objects/from one class to another class
 * most of the time we will be using above concept 
 */

//destructuring concept:
//destructuring concept in only used in JS and not in the other languages 
//destructuring concept is heavely used in Playwright, infect the first line of code you when you write for PW there, destructuring concept is mentioned over there
/**
 * what do you mean by "destructuring"?
 * destructuring means you have to fetch the partial value 
 * partial value from the object or array 
 * 

 * 
 * 
 */

//4 key-value pairs
let person = {
    name: 'Tom',
    age: 30,
    salary: 12.33,
    isActive: true
}
/**
 * Below we have "getPersonData" fun 
 * But "getPersonData" fun say I don't want all the information about the person 
 * In above "persion" object, we have "4 key-value pairs"
 * 

 * Above in the "getUserDetails" fun we have passesd "user" which will pass whole object data/details to fun, then from that whole object details, we will decide from that what data we want to use 
 * that we want to use, "name"/ "age"/ i want to use everything 
 * 
 * says that you give me the whole object but from that whole object i will take only two things, name,age and salary
 */
function getPersonData({ name, age, salary }) { //here we need to pass the data in {} braces , what data? the specific data we need from the whole object. We don't need to supply person.name/age/salary. we just need to mentioned keys 
    console.log(name, age, salary);  //here we are passing the whole data to "getPersonData" but the fun says that i want to destructure with the "name,age and salary only"
}
//if you want to pass all the keys then you can pass all the keys as well

//calling function:
getPersonData(person);//here we are supplying the whole object // this is again calling a fun by passing the entire reference 
//we are giving entire object to the "getPersonData" fun but the "getPersonData" says that i need only 3 properties name,age,salary from the object you have passed
//refer screeshot 2 
/**
 * where we can use above feature, 
 * suppose we have object where in we have 25/50 key-value pair 
 * and we are passing the whole object to specific function example "getPersonData"
 * but "getPersonData" fun says that though you have passed whole object but
 * from that whole object/25-50 key-value pair i just want to use/need 2/3 keys 
 * 
 * destructuring means - getting the partial value / getting the limited value /getting the specific values from the specific object
 * so above is the destructuring with the help of object 
 * destructuring means from the entrire object whatever you want/whatever you want to acheive/whatever is required the specific fun, only fetch that particular value.
 * but when we supply , we need to supply the whole object
 * 
 * 
 * its mendetory to write {} braces, because we are using OBJECT property  
 * getPersonData({ name, age, salary })
 * 
 * order dosen't matter here "getPersonData({ name, age, salary })" /getPersonData({ age, name, salary })
 * 
 * whole object will be passed to fun but out of whole object, whatever the properties fun required, those property will be consumed by that fun
 * suppose for below example, we are passing 4 but out of 4 properties only 1 property will be taking by "getData" fun and that fun will print that property on the consol
 */

//another example
function getData({ name }) {
    console.log(name);
}

getData(person);

/**
 * So what do you mean by destructuring?
 * you supply the whole object and the out of entire whole object, you just fetch the limited value/the partial values/it's up to you that which one you want to use it , instead of using everything    
 * there is not much impact on the memory allocation/performance 
 * above is just a concept of js
 * 
 * parfameter name should be same as key name, we can not write random thing here
 * 
 * in PW it's up to us that what we want to destcture -
 * PAGE, BROWSER , REQUEST OF THE API CALL - it's up to us that what we want to destcturek
 */


//can we do like below? and what will be the output?
let person = {
    name: 'Tom',
    age: 30,
    salary: 12.33,
    isActive: true
}

//below is object destructuring without any func
let { name, age } = person; //if mousehover on "person" then you will see the all 4 key-value pair of "person" object 
console.log(name, age);//Tom 30

console.log('-----------------------------------');

let person = {
    name: 'Tom',
    age: 30,
    salary: 12.33,
    isActive: true
}
let { username, userage } = person;//if mousehover on "person" then you will see the all 4 key-value pair of "person" object // 4 properties will be given but we are capturing only 2 properties
console.log(username, userage); //undefined undefined // because we don't have any key with the (username, userage) or these two key are not available in the entire object or we have passed incorrect keys
//so what is the mendetory thing, mendetory thing is that, we are using same key which we have in the object 
//here we are supplying the "person" object to left hand side expression
console.log('-----------------------------------');

let person = {
    name: 'Tom',
    age: 30,
    salary: 12.33,
    isActive: true
}
//lets say we don't want to use "name" and "age" and instead of that i want to use my own name and age so in that case what we can do is : mapping with specific-key/right key with the our own name/custom name 
let { name: username, age: userage } = person;
console.log(username, userage);
//here we can say that we are destructuring with the 2 properties
//above we not using the keys given in the object,instead of that we have used our own name/custom name,for that we have created two more variable name->userage and username
//but we can not use those variable name/custom name directly, we need to create our own variable name/custome name then we to do mapping with the right key and with the available key in the object

/**
 * so which one is batter? 
 * To use the keys directly or to create the variable/custom name
 * Why should we write more code 
 * Why to do unnecessary mapping and all 
 * Why to write above unnecessary code 
 * 
 * so TO USE KEYS DIRECTLY IS BATTER OPTION, to avoid any confusion
 */


//what is we don't destructure any property?
let person = {
    name: 'Tom',
    age: 30,
    salary: 12.33,
    isActive: true
}

//in below fun we have passed nothing 
function getPersonDetails({}) {
    console.log(perObj.name, perObj.age);
}

getPersonDetails(person)

/**
 * Above we have passed the whole obect in the "getPersonDetails" fun 
 * and the fun where we need to do destructure , there we are passing nothing ->  just writing "getPersonDetails({})" 
 * we are calling "getPersonDetails" and passing "person"[we are passing whole "person" object]
 * "person" will be given to "function getPersonDetails"
 * as we have passed "whole person" object, all the [4] properties will be there in the object 
 * and how many properties we are destructuring? > we are destructuring 0 here
 * so can we do the destructuring with the 0 properties? - yes we can do that 
 * 
 * but why we would do, destructuring with the 0 properties? 
 */
//in destructuring we are not creating any new object, here we are just fetching the value from the specific object and doing the mapping 

//here we have done the object destructuring with the "Object" and "function"

//people use destructuring for the sorting purpose / in algorithms / in filtering purpose
/**
 * in amazon app
 * you perform search "mackbook"
 * instead of all the macbook you filter that "macbook" and color should be "red"
 * on the basis of that you perform the search
 */