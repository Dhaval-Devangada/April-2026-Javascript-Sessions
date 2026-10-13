/**
 * Program - 3 
 */

class User {
    name;
    #age;
    #salary;

    constructor(name, age, salary) {
        this.name = name;

        //now we are trying to put a condition here 
        /**
         * we can give the "name" directly without any problem
         */

        if (age >= 18) {
            this.#age = age;
        }

        if (salary >= 10) {
            this.#salary = salary;
        }

        //now, wha will happen if we try to create object of this class
        /**
         * so how exactly constructor is helping us with the set of conditions?
         * if age is not greater than 18 or salaray is not greater than 10 lac then you are not allowed to create "employee"
         * so here "if conditions" are helping us me to create the "employee" with unnecessary data
         * otherwise user can supply some negative data as well (can set the negative salary, can create the "employee" whoes age is less than 18)
         * above we have set the conditions in the "constructor" what if user tries to update/modify/set the value via "setter"
         * then we need to add the "conditions" in the "setters" as well 
         */

    }

    setAge(age) {

        if (age >= 18) {
            this.#age = age;
        } else {
            console.log('age must be greate than or eq to 18');
        }
    }

    getAge() {
        return this.#age = age;
    }


}

let obj = new User('Tom', 10, 5);
let t1 = obj.getAge();
console.log(t1); //undefine


