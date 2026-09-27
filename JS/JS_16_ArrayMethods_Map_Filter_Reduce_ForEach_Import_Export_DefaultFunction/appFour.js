/**
 * Program 12
 */

//I don't wan to write lengtht desructuring with comma separated  "import running, {PI as MyPI,driving, print as doPrint} from './utilThree.js'"
//we can simply use the "star" concept here

import running, * as MyUtil from './utilFour.js'

// "*" means we have imported everything as "MyUtil"

console.log(MyUtil.PI);
MyUtil.driving();
MyUtil.print();

//suggestion for default will not appear. because default is not allowed 
//so to use "default" we need to mentioned it seprately
running();

//"*" means whatever we have written in the "export destructuring" only those things will be imported