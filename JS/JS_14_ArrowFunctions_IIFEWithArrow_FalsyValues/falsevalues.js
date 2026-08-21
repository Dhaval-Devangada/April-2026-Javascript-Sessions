/**
 * Program -3 
 */
/**
 * what do you mean by falsy values?
 * There are 8 falsy values are available [existing values are available]
 */

/**
 * suppose we have if-else loop 
 * and if we pass "true" in the "if" condition then "if" block will be executed
 * and if we pass "false" then "else" block will be executed
 */

if (true) {
    console.log('hi');
}else{
    console.log('bye');
}

/**
 * now we know that 
 * true = 1 , -1
 * false = 0 [it has no value] , -0 
 * 
 * so what if pass "0" instead of "false" > then "bye" will be printed and if we write "1" then "hi" will be printed
 */
if (0) { //1
    console.log('hi');
}else{
    console.log('bye');
}

/**
 * So what if pass the any other number[10/22] other than [0/1] then it will be considered as "true"
 */
if (12) { //100 
    console.log('hi');
}else{
    console.log('bye');
}

/** Even if you write any negative number then it will give you "hi" here */

if (-5) { //100 
    console.log('hi');
}else{
    console.log('bye');
}

/** "-0" is also a false - remember that . so output for below will be "bye"*/

if (-0) { 
    console.log('hi');
}else{
    console.log('bye');
}

/** "-1" is also a true - remember that . so output for below will be "hi"*/
if (-1) { 
    console.log('hi');
}else{
    console.log('bye');
}

/**
 * so below all are falsy values 
 * 1,-1,0,-0 
 */

/**
 * Now if we write "0n" then it's what?
 * "0n" is a big integer number , but ultimately its what - it's 0 - zero means false
 * so output foe below will be "bye"
 */
if (0n) { 
    console.log('hi');
}else{
    console.log('bye');
}

/** same as above "1n" is also a big int number and ultimately "1" means "true". so output for below will be "hi" */
if (1n) { 
    console.log('hi');
}else{
    console.log('bye');
}

/**
 * Remembere that 
 * any number other than [0 , -0 , 0n] is considered as true in the javascript. 
 */

/** now what if we write just ""/''/`` [double quote/single quote/backtick] inside the bracket
 *  we are not even writing "space" inside the ""/''/``  [double quote/single quote/backtick] 
 * in this case output will be "bye"
 * that means ""/''/`` [double quote/single quote/backtick] are also considered as a "falsy" values
*/
/** double quote */
if ("") { 
    console.log('hi');
}else{
    console.log('bye');
}

/** single quote */
if ('') { 
    console.log('hi');
}else{
    console.log('bye');
}

/** back tick */
if (``) { 
    console.log('hi');
}else{
    console.log('bye');
}

/** now what if we write single space insde the ""/''/`` [double quote/single quote/backtick]
 * then in that case condition will be considered as "true"
 * and "hi" will be printed 
 */
if (" ") { 
    console.log('hi');
}else{
    console.log('bye');
}

/** single quote */
if (' ') { 
    console.log('hi');
}else{
    console.log('bye');
}

/** back tick */
if (` `) { 
    console.log('hi');
}else{
    console.log('bye');
}

/** 
 * now if we write "null"
 * null is considered as falsy value
 * null is what - false so "bye" will be printed
 */

if (null) { 
    console.log('hi');
}else{
    console.log('bye');
}

/** 
 * now if we write "undefine"
 * undefined is considered as falsy value
 * undefine is what - false so "bye" will be printed.
 * 
 */
if (undefined) { 
    console.log('hi');
}else{
    console.log('bye');
}

/** 
 * now if we write "NaN" - NaN means "not a number"
 * NaN is considered as falsy value
 * so "bye" will be printed.
 * 
 */
if (NaN) { 
    console.log('hi');
}else{
    console.log('bye');
}

//falsy values
//true: 1
//false,0,-0,0n,"",null,undefined, NaN
//so above 8 are the falsy values, other than that everything will be considered as true. it dosen't matter positive/negative
//only applicacable in the context of if-else 

/** so what if we write blank array 
 * [] - blank array is internally considered as - [] ==> " " [string with space ] ==> one space is available so it will be considered as true
 * [] ==> " " ==> true
*/
if ([]) { 
    console.log('hi');
}else{
    console.log('bye');
}

/**
 * what if we write "Infinity"
 * true
 */
if (Infinity) { 
    console.log('hi');
}else{
    console.log('bye');
}

/**
 * what if write some string 
 * like "Komal" - Komal is a string here  - its is considered as value  - so true 
 */
if ("Komal") { 
    console.log('hi');
}else{
    console.log('bye');
}


//falsy values
//true: 1
//false,0,-0,0n,"",null,undefined, NaN
//so above 8 are the falsy values, other than that everything will be considered as true. it dosen't matter positive/negative
//only applicacable in the context of if-else 

//if we write below then it won't be considered as false/true
console.log(0);

//if you are trying to write the code with if-else then only falsy value will be considered 

//below is comparing values and not the false values
console.log(0 === 0);


/** Question */

//webkit : js engine - used in safari 
//PW custom webKit: created by PW by using the standard WEBKIT designed by apple and name is: webkit binary 
//webkit binbary is used by PW to intaract with safari browser

//chromium: v8 engine: chrome,edge,brave,opera
//firefox: spider monkey

//PW custom binary using standard engine which is Monkey spider and name is : nightly build
//if our majority of user using FF then PW is not a safe choice then selenium can be usefull for cross-browser testing

let user = {
    name:'tom',
    age:30,
    salary:12.33,
    isactive: true
};

let printUserInfo = ({name,salary=34.44},browser="chrome")=>{
    console.log(name,salary,browser);
}
printUserInfo(user);  //tom 12.33 chrome

//in above fun  - in the parameter 
//we haver done the object destructuring  
// + for "salary" we have provided out own value which is not printed because 34.44 is getting replaced by 12.33 which the value we have in the object 
//+ browser is a default param

//now lets comment the "salary" which we have in object

let user = {
    name:'tom',
    age:30,
 //   salary:12.33,
    isactive: true
};

let printUserInfo = ({name,salary=34.44},browser="chrome")=>{
    console.log(name,salary,browser);
}
printUserInfo(user);  //tom 34.44 chrome


//if we are doing object destructuring with one param then we must need to use () paranthesis. because here we are not passing parameter 
//here we are using key, so we not write code like below. 
//uncomment below and check the error 
// let printUserInfo = {name}=>{
//     console.log(name,salary,browser);
// }
 //above "name" is not a normal variable

//below is correct way writing the code  - with objecet destructuring with 1 key 
let printUserInfo = ({name})=>{
    console.log(name,salary,browser);
}

//for the normal variable we can remove the () but for the object key/keys we need to add the paranthesis