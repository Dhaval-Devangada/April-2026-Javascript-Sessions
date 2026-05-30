/**
 * Program - 3
 */


let browser = 'chrome';
//here we don't have any condition it's purely based on the conditions we are passing 
//if we have a matching case with key then js will directly jump to that case 
//if matching case is not available then it will go to default case - try passing browse = ie 
switch (browser) { // i have key/give me the key so i can decide which case should be executed. everything is depedent on key. if you have case which is matching the case then switch to that case. that's why the name is switch
    case 'chrome':
        console.log('launch chrome');
        break; // break will break the entire switch 
    case 'edge': //duplicate cases are not allowed. try writing chrome here 
        console.log('launch edge');
        break;
    case 'safari':
        console.log('launch safari');
        break;

    case 'brave':
        console.log('launch brave');
        break;
    case 'opera':
        console.log('launch opera');
        break;

    default: // if case is not availabe then please go to default case 
        console.log('invalid browser...plz pass the right browser..');
        break;

}
/**
 * flow
 * if browser= safari -> then js will directly jump to safari case 
 * performance issue resolved 
 * 
 */

/**
 * importance of break
 * if we don't write "break" then next case will be executed 
 * 
 * browser= chrome
 * o/p
 * launch chrome
 * launch edge
 * 
 * 
 * browser=safari
 * o/p
 * launch safari
 * launch brave
 * so below code is buggy code
 * no break then keep going 
 */
let appleSystemHas = 'chrome';

switch (appleSystemHas) { 
    case 'chrome':
        console.log('launch chrome');
      //  break; 
    case 'edge': 
        console.log('launch edge');
     //   break;
    case 'safari':
        console.log('launch safari');
     //   break;
    case 'brave':
        console.log('launch brave');
        break;
    case 'opera':
        console.log('launch opera');
        break;

    default: 
        console.log('invalid browser...plz pass the right browser..');
        break;

}
/**
 * what if we don't write the break on that case which is just above default 
 * will js go to default? -> YES
 * 
 * input=safari
 * o/p
 * 
 * launch safari
   launch brave
   launch opera
   invalid browser...plz pass the right browser..
 */

let windowsSystemHas = 'safari';

switch (windowsSystemHas) { 
    case 'chrome':
        console.log('launch chrome');
      //  break; 
    case 'edge': 
        console.log('launch edge');
     //   break;
    case 'safari':
        console.log('launch safari');
     //   break;
    case 'brave':
        console.log('launch brave');
     //   break;
    case 'opera':
        console.log('launch opera');
    //    break;

    default: 
        console.log('invalid browser...plz pass the right browser..');
        break;

}

/**
 * What is the meaning of default break 
 * in below case it dosen't matter if we don't write "break" in default section
 * input=ie
 * o/p
 * invalid browser...plz pass the right browser..
 * 
 */

let androidSystemHas = 'ie';

switch (androidSystemHas) { 
    case 'chrome':
        console.log('launch chrome');
        break; 
    case 'edge': 
        console.log('launch edge');
        break;
    case 'safari':
        console.log('launch safari');
        break;
    case 'brave':
        console.log('launch brave');
        break;
    case 'opera':
        console.log('launch opera');
        break;

    default: 
        console.log('invalid browser...plz pass the right browser..');

}

/**
 * so why we need break 
 * because we can have have case/cases after the default as well 
 * default can be in between as well
 * sequance dosen't matter here 
 * if input = ie then js will go to -> default case and o/p ->'invalid browser...plz pass the right browser..'
 * if input = brave then js will jump to 'brave' case and o/p -> 'launch brave'
 */
let ubuntuSystemHas = 'ie';

switch (ubuntuSystemHas) { 
    case 'chrome':
        console.log('launch chrome');
        break; 
    case 'edge': 
        console.log('launch edge');
        break;
    case 'safari':
        console.log('launch safari');
        break;

    default: 
        console.log('invalid browser...plz pass the right browser..');
        break;

    case 'brave':
        console.log('launch brave');
        break;
    case 'opera':
        console.log('launch opera');
        break;
}
/**
 * but it dosen't look good 
 * that we have cases first then "default" case 
 * then again cases
 * so generally first we write the cases then we write default case 
 * default should be at the end 
 * 
 * so why we write the "break" with default 
 * because if the default is in between and if we don't write break then whatever the cases we have written after 'default' cases will be executed as well
 * if someone has added[some automation engineer is coming] the case after the default case then it can be a big problem
 * so always add break after each and every case
 */

/**
 * ideal way of writing 
 *
 */
let cloudSystemHas = 'ie';

switch (cloudSystemHas) { 
    case 'chrome':
        console.log('launch chrome');
        break; 
    case 'edge': 
        console.log('launch edge');
        break;
    case 'safari':
        console.log('launch safari');
        break;
    case 'brave':
        console.log('launch brave');
        break;
    case 'opera':
        console.log('launch opera');
        break;
    default: 
        console.log('invalid browser...plz pass the right browser..');
        break;
}
/**
 * Debug means i want to stop the code where i have added/put break point 
 * put a debug and left hand side click on "Run and Debug"
 * debugger - select "node.js" 
 */


/**
 * what if we have duplicate cases 
 * will it give error - No - Js is flexible so it won't give error 
 * so which case will be executed - 1st
 * o/p
 * launch chrome
 * even if we comment "break" which is after 1st case then also execution will start from 1st so 
 * o/p
 * launch chrome
 * launch edge
 * check below example
 */

let awsSystemHas = 'chrome';

switch (awsSystemHas) { 
    case 'chrome':
        console.log('launch chrome');
        break; 
    case 'chrome': 
        console.log('launch edge');
        break;
    case 'safari':
        console.log('launch safari');
        break;
    case 'brave':
        console.log('launch brave');
        break;
    case 'opera':
        console.log('launch opera');
        break;
    default: 
        console.log('invalid browser...plz pass the right browser..');
        break;
}
//but we never write duplicate cases. we always write uniq

/**
 * what if we don't write default and pass random input
 * nothing/no case will be executed because we don't have matching case and default case as well
 * refer below 
 * input=hkhhkk
 * o/p
 * nothig
 */

let salesforceSystemHas = 'hkhhkk';

switch (salesforceSystemHas) { 
    case 'chrome':
        console.log('launch chrome');
        break; 
    case 'chrome': 
        console.log('launch edge');
        break;
    case 'safari':
        console.log('launch safari');
        break;
    case 'brave':
        console.log('launch brave');
        break;
    case 'opera':
        console.log('launch opera');
        break;
}

/**
 * inside the switch case we can write another switch case and if-else , if-else if as well
 * parser and interpreter doning all the comparasion and calculation of the cases
 * if there are 10 rooms and you need to find dhaval
 * then you will go to each and every room to find dhaval once you find dhaval then search is done
 * in switch case you direct have address to dhaval - that logic is already defined in all the programming languages
 * parser has alreday checked everything-> parse says decision is already taken -> at the run time -> you just need to execute that case -> you donn't need to check each and every case
 * thats why performance is improved 
 */

//minimum marks student can get is 0 
// and maximum markes student can get is 100
//and markes is 10
//so howmany cases we will maintain here 
//here markes can be anything from 1 to 100 
//so it's a not good practice to write 100 cases upto 100 numers as a switch case 
//we can not give range here in switch case (1-10)(10-20)
//so in such cases we can go with normal if-else instead of switch case
//switch case is used when you have special kind of values..like env..browsers...roles  
let marks = 10;
switch (marks) {
    case 10:
        console.log('pass');
        break;

    default:
        break;
}

//can write boolean in switch case - YES
//but it does not make any sense because boolean has only two values 
let flag = true;
switch (flag) {
    case true:

        break;

    default:

        break;
}

//switch case comes to the picture when we have varities of conditions/cases
// //switch case use cases:
// //1. cross browser: chrome, ff,safari,brave
// //2. multi env: QA, DEV, STAGE, UAT, PROD
// //3. multi user (RBAC-role base access control): user, admin, customer, vendor, partner
// //4. Localization: eng, spanish, arabic, chinese
// //5. uber: booking: mini, sedna, suv, luxury, 
// //6. payment: upi, cc, db, paypal, stripe, wire
// //7. api status code: 200, 400, 500, 300 - on the basis of that you write the assertation
// //8. OS: mac, windows, linux, cloud, server - want to execute testcases on diff env
// //9. laon type: home, car, edu
//10. AB testing



//a e i o u - vowels
let ch = 'x';
switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(ch + '  is a vowel');
        break;

    default:
        console.log(ch + ' is a consonant');
        break;
}

//in above program we are not printing anything so we can write multiple cases together 
//of course js will go through all the cases. so you will have questions that, we can have performance issue 
//but for samll scenarios/cases we can do like that 