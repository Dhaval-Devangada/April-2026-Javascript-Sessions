/**
 * Program - 2
 */

console.log(10 === 10);//same value + same type = true

console.log(10 > 5);//true
console.log(true === true);//same value + same type = true

// but we don't write code like above 
//we write code with respect to blocks 
//we check conditions and then based on that we execute something 
//we have to create some logical statement here /decision making 

let age = 10;

if (age >= 16) { //inisde () we need to write boolean 
    console.log('you are eligible for voting');
}
else { 
    console.log('you are not eligible for voting');
}

//we can write only "if" as well but if something is not working/satisfied then it's over responsibilty to give user
//some message that something is not working  / something is not satisfited
//always give proper message to user 
// so just write "if" part is bad way of writing the program
//so if condition is not satisfied then it's always go to the else block as well 
//so that user will get know that what is the issue with my code/varibale/logic/criteria
if (age >= 16) { //inisde () we need to write boolean 
    console.log('you are eligible for voting');
}


/**
 * writing boolean in ()
 * but if we write true then js will always go inside "if" part 
 * "else" part will become dead code and will take unnecessary memory as well
 */
if (true) {
    console.log('hello NAL');
}
else { //dead code/unreachable
    console.log('Bye!!');
}


//in below program "if" block will become dead code and will take unnecessary memory as well
if (false) { //dead code/unreachable
    console.log('hello NAL');
}
else {
    console.log('Bye!!');
}
//so conclusion is, we should not write direct "true" and "false" in (). we should avoide that 
//it does not make any sense as well
//so what is the right practice 
//right practice is always -> create a variable name
//
let isElementPresnet = false; //web page

if (isElementPresnet) { //now this part is depedent on page/webpage , it can be true or false . if-else and entire logic is depedent on above variable name 
    console.log('click on the element'); // in above code where we have written only "true" and "false" that is not depedent on anything 
}
else {
    console.log('ele is missing on the page...');
}
//first you maintain the varibale
//check that it's true or false then on the basis of that we have to take a decision



// cross browser logic:s
//pass "chrome" and "safari" and check output and issues/bug

let browser = 'chrome'; 

if (browser === 'chrome') { //best practice is === //condition satisfied
    console.log('launch chrome');
}
if (browser === 'firefox') {//condition not satisfied
    console.log('launch firefox');
}
if (browser === 'edge') {//condition not satisfied
    console.log('launch edge');
}
if (browser === 'safari') {//condition not satisfied so will go to else part 
    console.log('launch safari');
}
else {
    console.log('plz pass the right browser....');
}
/**
 * o/p
 * launch chrome 
 * plz pass the right browser....
 * 
 * so above o/p is not correct
 * writing if-else like above is the ugly way of writing code 
 * we have launched the browser still it's saying that 'plz pass the right browser....'
 * 
 * if we pass "safari" then 
 * o/p 
 * safari
 * js will not go to else part because if part is executed [last if and else block is paired]
 * 
 * 1st bug - if we pass chrome -> first if block will be executed -> all if block won't be execueted but just the condition part will be executed 
 * //if the first condition is satisfied then why is it going to all other condition unnecessarly and going to else part as well- major performance issue 
 * //if first condition is satisfied then it's done  
 * //if browser = safari in that case as well, js will go through each and every condition 
 * //if we have 100 condition and safari is at last condition then js will go through all the condition which is not good 
 * //js should directly jump to safari
 * 
 * 2nd bug - we haved launched the browser still it's saying that 'plz pass the right browser....'
 * 
 * //we can not write the break in if-else conditions
 * //we can write break only with the switch case and loops
 * 
 * 
 * so what is the soluation to above problems 
 * "if-else if" condition
 */

//first we need to understand problem statement
// then what is the need 
//what we need "if-else if" - what problem does it solves
//if - else if:

let browser = 'safari';  //if "ie" is found then js will not go to any other else-if /else block

if (browser === 'chrome') {
    console.log('launch chrome');
}
else if (browser === 'ie') {
    console.log('launch ie');
}
else if (browser === 'firefox') {
    console.log('launch firefox');
}
else if (browser === 'edge') {
    console.log('launch edge');
}
else if (browser === 'safari') {
    console.log('launch safari');
}
else {
    console.log('plz pass the right browser....');
}
/**
 * Flow 
 * browser = chrome 
 * condition is satisfied 
 * so will not go to other else-if /else block because condition is satisfied in first if block itself 
 * 
 * o/p 
 * launch chrome 
 * 
 * 'plz pass the right browser....' won't be printed so our first bug is resolved 
 * 
 * now
 * browser = safari
 * then how many conditions it will go and check 
 * it will check for chrome,firefox,edge then will reach to safari 
 * it is checking all the condition because safari is at last 
 * so tomorrow if we have 100 condition and if our "safari/condition" is at 100th place then js will need to check all the conditions
 * again performance issue 
 * if last condition is satisfied then also it will check 1-99 also
 * 
 * "if-else if" is batter soluation compared to if-if-else soluation[first program]
 */
//so above code has a performance issue because if last condition is satisfied then also it will check 1-99 also
//to solve above issue we have switch case
//switch -- case: break
//if yes or no decision - only two statement use if-else 
//big logic with multiple conditions then use switch case 