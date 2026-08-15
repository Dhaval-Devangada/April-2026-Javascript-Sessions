/**
 * Program 2 
 */

//below is simple function
function test(name){
console.log(name);
}

/**
 * what do you mean by function expression?
 */

function gettinguserDetailsFromDashboardPage(){
console.log('getting user details');
}

/**
 * what is the problem with above fun?
 * the function name is very lengthy
 * so js gives you the feature that , you can store the "functionName" in the "variable name"
 * check below
 */
//this/below concept is called function expression

let getData = function gettinguserDetailsFromAccountPage(){ //here this is not the object 
console.log('getting user details from account');
}
/**
 * so "function expression is a normal function"
 * it's not exactly normal function
 * because normal function does not have any variable name
 * normal function does not have any name on the left hand side 
 * 
 * so now in the case of "function expression" we have below confucion
 * confusion is that above fun[gettinguserDetailsFromAccountPage] has howmany names 
 * "gettinguserDetailsFromAccountPage" is a function name,and that fun is referred by "getData" name
 * 
 * fist let's discuss how we will call these kind of function
 * I have to use "getData" or we have to use "gettinguserDetailsFromAccountPage"[whatever the actual function name we have given above]?
 * 
 * let's see both the option
 */

//first we are calling fun by using "gettinguserDetailsFromAccountPage" name

//try uncommenting below and run [ it will give an error][ReferenceError: gettinguserDetailsFromAccountPage is not defined]
//gettinguserDetailsFromAccountPage();

//while we run above then it's giving error because now the function "gettinguserDetailsFromAccountPage" is referred by the "getData"

//means we can not use both "getData" and "gettinguserDetailsFromAccountPage"

//now lets call using variable name 

getData();//calling the function using reference name(expression name)

/**
 * so if you are writing function expression [function expression which we have written is referred by some variable name] then the mendetory thing is that .
 * now you can not use the function name - the actual function name that we have created 
 * so while calling it we need to use, function expression name / that reference name we need to use
 */

//now really want to fetch some information about that function like type of fun
console.log(typeof getData);//function //getData is variable name so with that we don't write brackets

//now what is type of "gettinguserDetailsFromAccountPage"
console.log(typeof gettinguserDetailsFromAccountPage);//undefined

//so if you are having function expression name / reference name for that particular function, the everywhere you will use the "reference name" and not the actual function name/big function name


//function expression is not an object, object is always key-value pair format 

//
//
/**
 * when we use this function expression because functionality wise there is no change. just the way of writing is different.
 * whenever you have big function name[sometimes forcefully write the big function names] and when we call it then again we need to write the big function name
 * and if we are calling that fun 10 times then we need to use "big func name", 10 times 
 * so whay don't we give sort name here / or some expression / some meaningfull name 
 * so for that purpose we can use the function expression name here but the functionality there is no difference 
 * if you don't want to use this feature then that's absoluately fine 
 * if we have parameter then we can use parameter as well
 */

/**
 * but can we do the hoisting with function expression?
 * first lets check with normal function [can we call the normal fun before declaring] ? - YES
 * hoisting is possible with the normal function
 */

drive('car')
function drive(vehicale){
    console.log('driving '+vehicale);
}

/**
 * now, lets check the hoisting with function expression
 */


getDetails();
let getDetails = function getAddressDetailsFromEmail(){
console.log('getting address details from email');
}

//above will give error [Error: ReferenceError: Cannot access 'getDetails' before initialization]
///so hoisting is not possible with function expression
//so function exprassion can not be hoisted while normal function can be hoisted

/**
 * hoisting is allowd with the "var" varibale, so here with the function expression if we keep the indetifire "VAR" then can we do the hoisting 
 * with function expression or no - NO
 * hoisting is strictly not allowed with function expression
 * 
 * but with VAR hoisting is allowed with normal variable
 */
testData()
var testData = function getTestDataFromAllTheFiles(){
    console.log('getting test data from all the files');
}

//we might user the function expression because, exactly same thing we can do with the normal function

//another example 
let getUserData = function getting_user_test_data_from_excel_sheet(name,age){ //getUserData will go inside the stack memory 
console.log(name,age);
}

getUserData("Anshu",20);

//now the question is the funtion with the long name will go in which memory? heap or stack ?
//function will always go in the heap memory and reference name will be stored in the stack 

/**
 * now using the reference name if we want to check the long function name / main function name then by using the "name" property we can do it 
 */

console.log(getUserData.name);//getting_user_test_data_from_excel_sheet
//above feature can be helpful in debugging, reporting , logs
//we can print the name in the report as well
//"name" is giving us the original function name

//once we create the "ref name/function expression/var name" then no one can user the original function name / long function name, its a drawback here