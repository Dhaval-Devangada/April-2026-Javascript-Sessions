/**
 * Program - 4
 */
class Employee {

    //now lets declare static keyword
    static compName = 'Google';

    //constructor    
    constructor(name, age, salary, isActive) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;

    }

    //actions: Methods
    coding() {
        console.log(this.name, ' is colding');
    }

    reading() {
        console.log(this.name, ' is reading');
        return 100;
    }

    static billing() {
        console.log('billing method');
    }
}
console.log(Employee.compName);
//can we update the "companyName"? - YES
Employee.compName = 'IBM';
console.log(Employee.compName);
//we can update the "static" property so it is not "constant" property
//we can change/update the name but its a major issue - because suddenaly company name changed from "google" to "IBM"
//now all the "employee" name have "companyName" = "IBM"
//in java we have "final" keyword, so we can not update the value
//but here in js we don't have "final" keyword
//and we can't use the "const" the class
//so here we are able to update the value - which is the problem 
//but this problem will be solved with the typescript - in ts we have "readonly" keyword
//in ts "readonly" behaves like "final"

//statci "billing" method will go where? inside the CMA or inside the object? - inside CMA
Employee.billing();