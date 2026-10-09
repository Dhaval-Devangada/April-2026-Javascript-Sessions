/**
 * Program - 5
 */
/**
 * we can export-import class as well
 * to export below class we need to write "export" before the class keyword
 * there is no concept of package in JS
 */
export class Employee {

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