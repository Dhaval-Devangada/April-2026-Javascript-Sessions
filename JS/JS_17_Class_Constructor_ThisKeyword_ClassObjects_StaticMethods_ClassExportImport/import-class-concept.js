/**
 * Program - 6
 */

import { Employee } from "./export-import-concept.js";

let emp = new Employee("Virat", 19, 12.33, true)
console.log(emp.name);


/**
 * questions
 */

/**
 * where the class will be stored in the memory?
 * There is a seprate class memory/class loader memory - all the classes / all the files will be maintained over there
 */

/**
 * static property will be stored in the CMA
 * so it does not mean that class will be stored inside the CMA
 * only static property will be stored inside the CMA
 * and for each static property will have identifier/meta data associated with it 
 * so that CMA can identify that which static property is belong to which class 
 * Its not like that classes are also available in the "CMA"  that why we are able to access it using class name
 */

/**
 * we can pass the default value to constructor as well
 */

/**
 * we can not use the "this" keyword in the arrow function when we create the objet without classes
 * in the class we can use the "this" keyword in the arrow function
 */

/**
 * object will never take any local variable
 */
/**
 * what if don't create the constructor?
 */
class test {
    name;
    age;
    //nmo constructor?
}

let t1 = new test(); //object will be created inside the heap
t1.name = "Komal"; //now we ned to assign the value like this 
console.log(t1.name);
//instead of writing 3 lines/multiple lines , we can assign/directly write the values in the constructor.

/**
 * in old JS we have concept of "required" instead of "export/import"
 * here in package.json file we have used "type=module" so we use "export/imort"
 * if we change the "type=commonjs" then we need to use "required" [old js way of writing import/export]
 */

/**
 * ideally in file we should maintain the one class 
 * because we need to follow the SRP [single responability principle]
 * every file is responsable to for single responsability/specific responsability
 * in JS we can create multiple classes - because JS is giving us flexiability - there is no advantage
 * if we create multiple classes in one file then it will be maintainance issue
 * so always maintain one class in one file
 */
/**
 * while creating the static variable we should always give the value 
 * its always a good practice
 * because if we don't assign the value while we create the "static variable" first time, then anyone can give/assign any value, which is not good
 */