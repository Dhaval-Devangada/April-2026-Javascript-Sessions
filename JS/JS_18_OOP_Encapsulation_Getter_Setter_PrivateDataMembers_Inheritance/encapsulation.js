/**
 * Program - 1
 */
/**
 * do we have any private modifier available for the variables/methods?
 * and what is the use of that?
 */

/**
 * encapsulation:
 * we are goging to talk about encapsulation.
 * encapsulation means encapsulate private data member and giving the access via public layer
 * what does it means?
 * 
 * Refer screenshot: 1
 * We have created one object from the class and we divide that object into two parts
 * in second part we have some "private data members" available [for example we have few private methods and few private variable are available]
 * so now whenever some tries to create the object of our class - they will try to create the object outside of the class and it will have some "object reference" as well [let obj = new Employee()]
 * now by using "obj" reference  we will try to access the property of the object "new Employee"
 * as of now we only have "private methos and private variable"
 * so if we try to access those "private methos and private variable" using "obj" reference then we can not access it because those are declared with "private access modifires"
 * so whatever the data members [methods/variable] are private , we can not access then directly outside of that class directly
 * so here using "obj" object reference, we can not access the private data members directly
 * 
 * so how we can access those members?
 * We have first part, which is public section
 * and we have public data members available 
 * public means - They are publicly available , anayone can access them.
 * in public section we have public variables and public methods 
 * we can access those [public variables and public methods] directly by "obj" reference
 * 
 * can those public methods internally call the "private methods and variable" because "both public and private" members are part of the same object ? - YES 
 * public data members can call the private data members internally.
 * those private data members are the part of the "current object" only so we can call them using "this" keyword
 * 
 * so outside user can access the public section
 * and public secion able to access "private" section which are available in the object
 * so outside user does not have the direct access to the "private data members"
 * they have the access to "private data member" via public layer 
 * this concept is called the "encapsulation"
 * 
 * here if you see the diagram then it's kind of capsul
 * capsul is encapsulatiing the whatever the drug is there inside the capsule
 * we can not access the drug directly
 * 
 */

/**
 * in the JS how we will create the "private data members"?
 * Do we have anything? - YES 
 * whenever we write the variable with the "#" then that variable become "private" variable?
 */

class Employee {

    name; //public
    age; //public
    #salary; //private variable of the class

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.#salary = salary;
    }

    /**
     * if just observe the above things (3 variables and 1 constructor)
     * then you can see the basic concept of the encapsulation
     * above constructor is private/public? - remember that there is concept of "private constructor" in the JS 
     * above constructor is publicl available, anyone can access that constructor. 
     * so whwenever anyone create the object of the "Employee" class then above constructor will be called 
     * we weill supply the 3 values in the constructor so those values will be given to the "private variables" of the class
     * 
     * so here #salay is a private variable, and here we are asigging the "value" to private variable via "public constructor"
     * 
     * so we can say that here we are doing the encapsulation
     */

    /**
     * other then constructor, what we can do - to acheive the encapsulation
     * we can use the "getter and setter methods"
     * thsese "getter and setters" are publicaly available
     * how to create "getter and setter"
     * rember that in JS we don't have "public" keyword, we directly write the "method name" 
     */

    //do we really need to create "setName()" , to set the name - NO because "name" is publicaly available and anyone can access it without any problem.  
    //we can simply access the "name and age" variable by using the object reference.
    //we don't need to create below method to "set the name"
    setName(name) {

    }

    //so remember that it does not make any sense to create the "getter and setter" for "public" variables
    //we have to create "getter and setter" for the "private" data variables
    //below we have created the "setter and getter" for the "private #salary" variable
    setSalary(salary) {
        this.#salary = salary;
    }

    //if someone wants the "salary" which we have "set" then we can use below method
    getSalary() {
        return this.#salary;
    }

    /**
     * How to represet above class and object
     * one object will be created and that object is having two parts
     * 1.public [name, age, setSalary(),getSalary()]
     * 2.private [salary]
     * 
     * [public "setSalary()" ] can access the [private "#salary" variable] internally? - YES - we can access it by using the "this" keyword
     * we can "set the salary" by using the "this" keyword
     * and we can "get the salary" as well, by using the "this" keyword
     * because they all [private and public data] are the part of the same object  
     */



}

let emp = new Employee('Tom', 20, 12.33);
console.log(emp.name, emp.age); //Tom 20 // we can print those, because they are publicaly available

//can we access the salary same way as above?
//uncomment below and check -> it will give you an error > Property '#salary' is not accessible outside class 'Employee' because it has a private identifier
//console.log(emp.name, emp.age, emp.#salary);  // #salary is private so we can not access it 

//so how can we access that private property?
//we can access the "#salary" using the "public getter" because "getter" is publicaly available
//"getter" method is internally accessing the "private #salary"
//getSalary() is public, it't giving us the "salary" which we have set 

let s1 = emp.getSalary();
console.log(s1);

/**
 * we are not giving direct access to "private" member, we are giving access via public layer. This is called the encapsulation.
 */

//how can we set the salary seprately? 
//however we have already set the "salary" by using constructor. constructor is also behaving like setter for us.
//so when we have created the object at that time we have already set the salary which is 12.33
//then why we have created "setSalary"? what is the use of it?
//suppose we go to our "profile page" and just want to update the "salary" only 

emp.setSalary(23.44) // after the 1 year new salary is 23.44 // we have updated the salary
//we can not update the "salary" directly we can update it via "setter" method 

//you set the salary and then you get it
s1 = emp.getSalary();
console.log(s1);//this will print the latest salary


/**
 * Why we have kept the salary in the constructor, if we have the diff method to set the salary?
 * Suppose for the first time any user is doing the registration on "Employee" system/HR system
 * so whatever the values we have given in the constructor are the "initial values" which we have given to the "system"
 * now after sometime we want to update those values so  for that we are using "setters"
 * so "setters" are for the "update/modification" purpose
 */