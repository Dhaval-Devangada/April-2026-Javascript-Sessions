/**
 * 
 * user can supply the value as well or might not supply the value as well then in that case "default" value will be used 
 */

function greet(name = 'hiwad'){
    console.log('hello' + ' ' + name);
}

greet();//hello hiwad
greet('Smita');//hello smita

console.log('------------------------------------');

// if you are giving the browserName then we will replace the browserName 
// and if you are not giving anything we will take browser= Chrome

function openBrowser(browserName='chrome'){
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

openBrowser();
let res = openBrowser('firefox');
console.log(res);

console.log('---------------------');

//we can appy default param concept while we have multiple argumnet 

function voting (name, age = 16 ){
    console.log(name,age);
}
voting('Tom');
voting('peter', 30)

console.log('---------------');

//multiple default params 
// we can use multiple default param as well 

function createUser(name='Anonymous',role='viewer'){//these are default name and default role

    console.log(name,role);
     
}

createUser(); //we are not passing anything so "Anonymous viewer" will be created
createUser('naveen','admin')// now naveen user will be created with admin role

console.log('-----------------');

//one normal variable and another is default parameter 

function add (a, b=10){
    console.log('value of a = '+ a);
    console.log('value of b = '+ b);
    return a + b ;
}

let t1 = add(5);
console.log('t1=' + t1);

console.log("-------------------------------");

//undefine will also trigger the default //this is predefine / rule in the javascript
function add (a, b=10){
    console.log('value of a = '+ a);
    console.log('value of b = '+ b);
    return a + b ;
}
let t2 = add(5,undefined) 
console.log('t2=' + t2);//15

console.log("-------------------------------");

//null will not trigger the default
//null mesans nulify 
//nulify the 'b' or second parameter, so "b" parameter is gone
//'b' does not exist, because we are pointing to 'null' now
function add (a, b=10){
    console.log('value of a = '+ a);
    console.log('value of b = '+ b);
    return a + b ;
}
let t3 = add(5,null)
console.log('t3=' + t3);//5


console.log('------------------');

// NaN won't to trigger anything 
function add (a, b=10){
    console.log('value of a = '+ a);
    console.log('value of b = '+ b);
    return a + b ;
}
let t4 = add(5,NaN);
console.log('t4= ',t4);//NaN

console.log('----------------------------');
//we can pass the 'default param' first as well but always write the "default param" at the last, thats the sequance we need to follow 

function printFullName(firstName ='sachit', lastName){
console.log(firstName,lastName);
}

//here our default param is first param 
//here we are not passing the lastName so it will print "naveen undefined"
printFullName('naveen') //naveen undefined

//above we are not printing the lastName and we have kept the first param as an 'default param' which is the wrong way of writing the default param
//default param should always be written at the end 
//to resolve the problem of above program, we have created below
function printFullName(lastName, firstName ='sachit'){
console.log(firstName,lastName);
}

printFullName('sharma')
printFullName('sharma','neveen')