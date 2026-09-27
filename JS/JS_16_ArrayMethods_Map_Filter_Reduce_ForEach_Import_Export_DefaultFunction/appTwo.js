/**
 * Program 8
 */
/**
 * so for default function, we have import with "object destructuring" or "without object destructuring"?
 * - without object destructuring , Because "default function" will never participate in "object destructuring"
 * 
 * so here we don't need to write in curly braces {}, intead we need to write it seprately
 */

//below is created to test "default function" - if you not testing "default function" then commnet it 
import coding, {PI, driving, print} from './utilTwo.js' //here it should immediately strick in out mind that "coding" is default function
coding();

//below is created to test "default variable" - if you not testing "default variable" then commnet it 
// import userName, {PI, driving, print} from './utilTwo.js' 
//console.log(userName);


//first import the "default" then import the normal things 
//we can not change the above sequance