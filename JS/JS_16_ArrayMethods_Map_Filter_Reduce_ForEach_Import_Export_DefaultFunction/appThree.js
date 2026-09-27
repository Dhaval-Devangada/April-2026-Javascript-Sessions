/**
 * Program 10
 */

import running, {PI as MyPI,driving, print as doPrint} from './utilThree.js'

//we can not rename the "default function" like below. It will give an error. try by uncommneting below
//import running as doRunning , {PI as MyPI,driving, print as doPrint} from './utilThree.js'

//import the "print" from "utilThree.js" and rename that function. So "doPrint" is a new name
//so now whenever we have to call the "print()" then call with "doPrint"
doPrint();
//print(); //if you try to use previous name then it will give you an error .
//if we have renamed then we have to use he renamed variable
