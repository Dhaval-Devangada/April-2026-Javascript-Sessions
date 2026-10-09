/**
 * Program - 2
 */

class User {

    /**
     * Javascript is super flexiable
     * In program 1, we have created global variables
     * but JS says why have you created global variables?
     * 
     * if you want to create, you can create it 
     * but if you try to create direct constructor, then it is also allowed 
     * 
     * means
     * no need to create the class global variables... it will automatically create it/we don't need to define it or we don't need to even write it here.
     */

    //no need to create the class global variables... it will automatically create it. It's amazing 
    constructor(name, age, salary, isActive) {

        //this.global = local;
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;

    }

    /**
     * so now in this class how many global variable we are having?
     * if you don't create the global variables and try to create the constructor directly
     * 
     * here we have "this.name", where "name" is global variable but we don't have any global variable 
     * but here no need to create the class global variables... it will automatically create it.
     * obissaly we need to "this" because otherwise how we will assign to global variable.
     */

}

let u1 = new User('Tom', 20, 12.33, true);
console.log(u1.name, u1.age,);
console.log(u1); //we can print the object by using object reference
/**
 * One object will be created in the heap and it is referred by "u1"
 * how many global variables will be given to that object?
 * We have not created any global variable because constructor will help me out 
 * so constructor says that you are already writing these variables "this.name=name,this.age=age,this.salary=salary,this.isActive=isActive" inside the constructor
 * so I will create the copy of those varibale inside the object, you don't need to dfine/write it at the class level 
 * so objec will automatically get the 4 global variables
 * 
 * suppose tomorrow we have 10 variables, and if we write all those 10 variables then it looks ugly 
 * so now we can minimize or remove that part by just creating the "constructor" directly 
 * so in JS we can eliminate to writing "class variables/global variables"
 * we just directly create the constructor and write the our global variables on lefet hand side and it will understand automatically
 */


/** Can we create one more class within the same file? - YES 
*/

class Person {

    //below is default constructor. We have passed nothing in the parenthesis. Default constructor means 0 parameter constructor.
    constructor() {
        console.log('default const...');
    }
}

let p1 = new Person();
//now we run the above code, code with just "Person" class then "default const" will be called or not?  - YES,
//constructor will be called, the moment we create the object
//above code says, if we are not passing anything then default constructor will be called
//we can not give the name to constructor in the JS, like we do in JAVA, constructor Person(){} - this is not possible in JS
//we should not create the "function" inside the constructor.

console.log('=====================================');


/** Can we oveload the default constructor? - NO - It will give error 
 *  Overload means, can we create one more constructor with the Parameter?
 */

class Animal {

    //below is default constructor. We have passed nothing in the parenthesis. Default constructor means 0 parameter constructor.
    constructor() {
        console.log('default const...Animal');
    }

    constructor(name) {
        console.log('1 param const...', name);
    }

}
let p2 = new Person('Komal')
//if you run above program then it will give error and error is > SyntaxError: A class may only have one constructor
//you decide that which one constructor you want to create.because only 1 constructor is allowed
//so that is why JS is not so great for Object Oriented Programming

//we can create n number of classes in 1 file