/**
 * Program - 3
 */

/**
 * static in classes
 * What do you mean by "static" keyword?
 * first - Do we have any support in the JS for the "static"?
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
}

let emp = new Employee('Tom', 30, 12.33, true)// here one object is created in heap and which is referred by "emp" //how many properties/variable will be given to the object got created inside the heap? - 4[name,age, salary,isActive] and two methods
//and we have created one "static" variable, so where exactly this "compName" will go inside the memory? - inside the heap/ stack?
//Remember here its very similar to java > static will have seprate space inside the memory - It specially designed for the static properties - this called CMA
//this "compName=Google" will be created there in the CMA
//static will never be part of the object, remember that
//static is not related to the object
//static is a common property for all the objects 

console.log(emp.name, emp.age, emp.salary, emp.isActive);//this how we call normal variable
//can call the same way the "static" variable?
/**
 * Refer the diagram - screenshot 3
 * can call the same way the "static" variable? the way we call the global variable?
 * Do we have the "compName" inside the object? - NO, "compName" is somewhere else and not inside the heap/object
 * so when we try to access "compName" using reference varibale then it will give us "undefined". 
 * because we don't have "compName" inside the "heap/object"
 * so remember we can not access the "static" property with the object reference name
 * you can access it by using the class name 
 */
//to check "udefined" uncommnet below and check
//console.log(emp.compName); //undefine - because this not available inside the heap/object
console.log(Employee.compName);

//but what is the concept/logic/reason behind,to create the static variable?

let emp1 = Employee('Komal', 50, 12.33, false) //obeject will be created inside the heap and will be referred by "emp1"
let emp2 = Employee('Dhaval', 60, 33.33, true) //obeject will be created inside the heap and will be referred by "emp2"
/**
 * Aboove we have created two object and before that we have created one object as well
 * but for all of that what is the common property - "companyName"
 * All of above employee are working for "google"
 * If compnay has 100 employees then all of those have one common property which is "static" property and that is "compnayName" which is "google"
 * 
 * In our training - all the students are object and "naveen" is static property 
 * because "naveen" is a turtor and every students is havaing common "tutor"
 * 
 * Tomorrow we have "car" object
 * every "car" will have its own property (caename,colour,pricing,model number,chasis number)
 * but what is the common in all these car? - wheels - which is 4
 * 
 * suppose there is no static keyword for the company name 
 * so in that case it will work like global variable
 * so whenever we create object for employee - supplose we create 3 objects 
 * then 3 copies of global variable will be given to each object and all the objects will have "compName=google"
 * so "google" [2*6 char] so 12 bytes will be occupied in the heap memory 
 * so total we have 3 objects so total 36 bytes will be occupied 
 * so tomorrow if we create 100 object then unnecessary each and every object will have "compName" and 12bytes memory will be occuiped by each object unnecessarly
 * but if we declare with "static" then, howmany copies JS will create? - Only 1 
 * How many bytes will it take in the CMA? - 12 byte
 * so we have to be very specific that when to use static and when not to use static?
 * if something is common
 * for all the apple laptop what is the common thing? brand = apple 
 * 
 */