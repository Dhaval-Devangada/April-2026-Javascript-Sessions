/**
 * Program - 5 
 */

/**
 * in the JS we don't have any interfaces or abstraction kind of concept 
 * we need to understand only inheritance
 * 
 * inheritance means - we need to create parent and child concept 
 * and child class is able to access parent class property
 * 
 * but there are certain rules
 * parent can not access anything from the child
 */

class Car {
    speed = 100;

    start() {
        console.log('car - start');
    }

    sunroof() {
        console.log('car - sunroof');
    }

    stop() {
        console.log('car - stop');
    }
    refuel() {
        console.log('car - refuel');
    }

    //we have one variable and 3 methods and all are public

    //now we have private billing method in the child class
    #billing() {
        console.log("CAR - Billing");
    }

    getBilling() {
        this.#billing();
    }
}

class BMW extends Car { //and BMW is child of CAR class so we have to use "extends" keyword
    // BMW is a child class and Car is a parent class
    //when we create the the framework and "base page class" at that time this concept will be useful for us.

    //BMW clsss own variable
    speed = 200;

    //BMW method 
    parking() {
        console.log('BMW - parking');
    }

    //method overriding 
    //It means child has overridden the parent class mehod
    //exactly same method name and "same number of parameters" as parent class
    //BMW don't like the "Car,s" sunroof so they have created their own sunroof. BMW says we will have "Bultetproof glass" and all  - we will have our own "sunroof" method
    sunroof() {
        console.log('BMW - sunroof');
    }

    //now we have private billing method in the child class
    #billing() {
        console.log("BMW - Billing");
    }

    accessBilling() {
        this.#billing();
    }
}

/**
 * now try to create the object of child class (BMW class)
 */
let bmw = new BMW();
console.log(bmw.speed);//BMW has own speed so this willl give us - 200. BMW has its own speed so it will not inherit.
//if we comment the BMW's speed then, BMW will inherint the "speed" from parent class (Car) class because "BMW extends Car" class
//
/**
 * if the variable which we have in "child" class , if we have the same variable in parent class and
 * if we try to create object of child class , then preference will always be given to child class variable
 * because child has it's own "speed" so JS don't need to inherint the "speed" from the "Car" - we can not inherit here - because "child" class has its own "speed"
 *
 * remember that, this is not overriding. here in JS - there is no concept of variable overriding.
 */

//now using child class reference varible "bmw" we call "start()" so which method will be called?
/**
 * "bmw" will go an check in it's own class "BMW", that do i have the "start" method.
 * NO - BMW class dosen't have "start()" method.
 * now BMW class will try to inherit "start()" from the "Car" class 
 * */
bmw.start(); //inherited


//now using child class reference varible "bmw" we call "sunroof()" so which method will be called?
bmw.sunroof(); //overridden
/**
 * "bmw" will go an check in it's own class "BMW", that do i have the "suroof" method.
 * YES - BMW class dose have "sunroof()" method.
 * so preference will be given to "child" class first
 * so "Bmw's" "sunroof" method will be executed.
 * this concept is called method overrding
 * It means child has overridden the parent class mehod
 * */


//now using child class reference varible "bmw" we call "stop()" so which method will be called? - individual / inherited => inherited
//because child class does not have it's own individual "stop()" method
bmw.stop();//inherited

//now using child class reference varible "bmw" we call "refuel()" so which method will be called? - individual / inherited => inherited
//because child class does not have it's own individual "refuel()" method
bmw.refuel();//inherited

//if you have private property of the parent class then you can not access it outside of the class.

//now using child class reference varible "bmw" we call "parking()" so which method will be called? - individual / inherited => individual
//because child class does have it's own individual "parking()" method
bmw.parking();//individual

///now using child class reference varible "bmw" Can we call "private billing()" outside of the class - NO
//try by uncommoenting below - to check the error
//bmw.#billing();
//error is > Property '#billing' is not accessible outside class 'BMW' because it has a private identifier

//so now if we want to use the "billing" method then we need to use the concept of "encapsulation"
bmw.accessBilling();
//we can not access "billing()" directly because of the private.

console.log("=================== Parent class object =================== ");
/**
 * Now let's try so create parent class object and check what exactly parent can access
 */

let car = new Car();
console.log(car.speed); //100 
// "Car" is having its own speed so "100" will be printed
// "Car" is a parent class - parent class can not take anything from it's child

//now using parent class reference varible "car" we call "start()" so which method will be called? - individual / inherited => individual
//because child class does have it's own individual "start()" method
car.start(); //individual - available in the car class
car.stop(); //individual - available in the car class
car.refuel(); //individual - available in the car class

//now using parent class reference varible "car" we call "parking()" so which method will be called? or is it allowed or not? - NO
//"car" is a parent class reference variable and using it we are trying to access individual method of the child class which is "parking()"
//parent can not access anything from the class so below will throw an error.
//parent can access their own properties only.
//car.parking(); //try by uncommenting this
//error > TypeError: car.parking is not a function

//there is no upcasting and downcasting here.


///now using parent class reference varible "car" Can we call "private billing()" outside of the class - NO
//try by uncommoenting below - to check the error
//car.#billing();
//error is > Property '#billing' is not accessible outside class 'CAR' because it has a private identifier

//so now if we want to use the "billing" method then we need to use the concept of "encapsulation"
car.getBilling();
//we can not access "billing()" directly because of the private.

//child also can not access the biling method.
//remember that private methods can not be overridden
//we don't have the protected keyword in the javascript
//in JS we have only "public and private"
//"protected" is there in the "tupescript"
//JS object oriented is very flexiable and very limited. NO concept of "abstraction". No concept of "interface".No concep of "Protected" also
//there is no @override in js 