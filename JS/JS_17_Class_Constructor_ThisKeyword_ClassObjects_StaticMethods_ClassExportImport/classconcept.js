/**
 * Program - 1
 */

/**
 * so what do you mean by class and class object.
 * in JS we can create the object without class as well. that we have seen 
 * we can do the destructuring with that object and all
 */
/**
 * Here we first create the class and then we will creae the object
 * what do you mean by class?
 * class is a blue print of all the objects or we can say  "a template of the object"
 * its a kind of category
 * -leptop is a categoty - under leptop categoty there are multiple objects are available "like macbook, dell,hp"
 * - every laptop is having their own name, diff colour, diff size of the laptop
 * 
 * class: blueprint, categoty , template for the objects
 * By using this templates we have to create the objects
 * class is not a physical object 
 * 
 * human is class/human is a category
 * we all are object from the human class/categorty
 * so objec is a physical entity [because object will have it's own name,object will have it's own properties ]
 * class just define that how you can create the particular object
 * 
 * so far class is clear 
 * 
 * what do you mean by object?
 * Object:
 * Object is a physical entity that will go inside the heap memory and then number of properties will be added over there
 * Object is a physical entity which will have properties [like varibales(class properties), methods(actions)]
 * 
 * Example
 * class : Laptop
 * object: Macbook, HP, DEll [these are physicaly available] [they are coming from laptop category]
 * 
 * class: tshirt
 * object: multiple tshirts are available of diff brands are called objects 
 * 
 * every objects will have it's own properties and methods 
 * 
 * we all are objects 
 * we are coming from human category
 * we all have our own name, each has diff heights, weights, color 
 * so we all are having our own diff property.
 * 
 * dog, cat are object and they are coming form Animal category
 * 
 */

/**
 * in every object programming language -
 * we alwatys define first the class 
 * and then from class, we try to create the object
 */

/**
 * How to create class in JS
 * class Employee{ // the First letter of the classname should be "capital letter"
 * }
 * class keyword 
 * then class name
 * 
 * here it's not like java that, "class name" and "file name" should be the same. Its not mendetory in js
 * "file name" could be anything and "class name" could be anything
 * 
 * Once the class is created 
 * then 
 * 
 * we have to declare some template variables/ some global variable we need declare in the class
 */

class Employee {
  //we have to declare some template variables/ some global variable we need declare in the class
  //that what kind of what employee we want to create?

  //I want to create that every "employee" will have it's own name 
  //Remember one thing, that when we write the class variable at that time can we write the "let/var/const" - NO - This is not allowed now
  //In the class we don't talk about the let/var/const - It is not allowed. Even if we write then it will give us error.

  //  let name; 

  //==================================== class variables: global variable [scope is within the class anywhere]====================================

  //just simply declare the value
  name;  //every employee will have it'd own "name" 
  age;   //every employee will have it'd own "age"
  salary; //every employee will have it'd own "salary"
  isActive;

  //here we don't need to define data type as well that "name" will be string or "age" will be number or "salary" will be number
  //we can not define the identifier as well

  //so here we are saying that by using the Employee class if we try to create the object then every object will have "name" "age" "salary" "isActive"
  //and now it's object's choice that what will be the name, age, salary, isActive

  //if you want to give the value then you can give the value as well. But we should never give the value 
  // age=18; 
  /**
   * we should not directly write the value 
   * what does it mean?
   * It means when we create the object from this class
   * suppose we create 100 object from Employee class
   * then "age" for all the "100" objects will be "100"
   * here want to create the template - so we should not give value to any class variable
   * We want that every employee should have their own age  but we don't want age=100 for all the employee - 100 is a hard coded value
   * 
   */


  //==================================== constructor ====================================


  /**
   * constructor: constructor will help us to create the object of this class
   * constructor: it will help us to create the object and help us to init the global variables
   * how to declare constructor: here it's not like java that "constructor" name should be same as "class" name
   * here we can create only and only one constructor
   * one const..is allowed 
   * means we can not define multiple consructor 
   * we can not overload the constructor here 
   */
  /**
   * how to declare constructor?
   * by writing "constructor()" keyword and thats it and if we have global vars then we need to pass those vars in paranthesis
   * in the JS constructor should not have any name
   * in the JS constructor is also called a "constructor function"
   */
  constructor(name, age, salary, isActive) { // these are the global variables  // here we have declared these 4 vars at constructor level not at the class level
    //here the scope of above variable is local 
    //its not mendetory to define all 4 variables, we can define 2 variables as well 
    //here now we need to supply local variables [name,age,salary,isActive] to global/class variable [name,age,salary,isActive] by using "this" key word
    //this.global = local [this is the standard process we follow to different between global variable and local variable]

    this.name = name;
    this.age = age;
    this.salary = salary;
    this.isActive = isActive;

    //by using "this" keyword , we can access the global variables 
    //so clear pictuure of the constructor is saying that whenever someone is calling the constructor then you have to give me "name/age/salary/isActive"
    //then whatever the "name/age/salary/isActive" we give then that will be given to "global variable"

    //we can not do like below because it says local is equal to local variable. because gloabl variable is having same spealling and local is having the same spealing 
    //name = name;

  }

  /** 
   so we can give diff global and local name as well right? so why we have not given diff name
  name = name1; //for this we need to change the "parameter" => name to name1 // this is correct 

  constructor(name1,age1,salary1,isActive1){
    name=name1;
    age=age1;
    salary=salary1;
    isActive=isActive1;
  }

   but above code looks very ugly and it's confusing as well
  */

  //==================================== actions ====================================
  /**
   * actions: Methods 
   * methods means functions that we have to declare 
   * when we create the "functions" inside the class then they are called "methods"
   * if i declare the function without class and in just any file then we need to call it function
   */

  /**
   * how to create the method inside the class?
   * whenever we create the method inside the class then we don't need to write "function" keyword
   * if we try to write the "function" keyword then it will give us the error.
   * uncommnet below and check
   */

  //  function test() {

  //  }

  /**
   * inside the class we just need to write function name
   */

  coding() {
    console.log(this.name, ' is colding');
  }

  //can we write function which "return"? - YES
  reading() {
    console.log(this.name, ' is reading');
    return 100;
  }

  //can we write the "function expression" here? [it is annonymous function]
  running = function () {     //this has no name after the "function". This is annonymous function. how we will call this function- using expression name
    console.log(this.name, ' is running');
  }

  //can we create the "arrow function" without parameter? [it is annonymous function]
  printing = () => {    //this has no name after the "function". This is annonymous function. how we will call this function- using expression name
    console.log(this.name, ' is printing');
  }

  //can we create the "arrow function" with parameter? [it is annonymous function]
  calc = (a, b) => {
    return a + b;
  }

  //can we create the IIFE - NO
  //IIFE does not have any expression name. even if we try to write it then it will be the "return" of the our IIFE function
  // (()=>{
  //     console.log('hello world');
  // })();

  //IIFE fun we can not create inside the class. IIFE is only for the without the classes.

  /**
   * There are total 3 things in the calss
   * 1. global/class variables
   * 2. consructor
   * 3. acttions/methods
   */

  /**
   * we don't have any hard-coded value in the class 
   * because class is just a template 
   * this template will be used for each and every object
   * this is the main purpose that - class is giving you a blue print - blueprint for the object 
   */

}; //here ";" says that class has ended 


//==================================== how to create object of this class? ====================================
/**
 * its a bad pracice to create the object inside the class. 
 * always create the object outside of the class
 */

/**
 * create the object of the class using "new" keyword
 * when we create the object then immediately "constructor" of the class will be called
 * whilw we create the object at that time we need to supply required "value" as well
 */

//1st object
let emp = new Employee('Komal', 18, 10000, true); //here we are outside of the class so we can use "let". Type will always be let/var/const.
//here its not like java "let Employee = new Employee('Komal',18, 10000,true)"
//here "emp" is the reference variable of the above object 
/**
 * This object will be created inside the heap memory and 4 photocopies of the varibale and all 5 mehods will be given to object which inside the heap.
 * To understand, we all are humans and we all have some common properties [2 hans, 2 eyes, 1 nose]
 * so exactly same thing is here, whenever we create new born object then that object will have all the 4 properties [name,age,salary,isAcive] and all 5 methods [coding,reading,running,printing,add]
 * it's up to us that we want to define the value or not but all the 4 values and all 5 methods will be given to each and every objects
 * Tomorrow if we create 100 objects then all the objects will have all the 4 properties and all 5 methods and it's upto us that we want to give values or not.
 * we can give the values, when we create the object 
 * reference varibale will go inside the stack memory 
 * you cann not create object without "new" keyword 
 * class will never go inside the heap memory 
 */
//now suppose we want to know the name,age,salary,isActive status - we can access it using reference name of specific object and "dot" notation
console.log(emp.name, emp.age, emp.salary, emp.isActive);
//we can directly print the references as well. It will give us the complete picture. It will give us blueprint of the complete object.
console.log(emp);

/**
 * all the 4 properties and all 5 methods will be given to object
 * object will be in the heap 
 * reference will be inside the stack
 * if our method wants to access the "variable" then it can access it using "this" keyword 
 * "this" keyword is representating current class object. "this" means - use this object
 */

/**
 * how to call method? - using reference name and "dot" notation
 */

emp.coding();
let t1 = emp.reading();
console.log(t1);
emp.running();
emp.printing();
let t2 = emp.calc(100, 200);
console.log(t2);

/**
 * without creating objects, you can not call these methods 
 * if you create the methods within the class then you have to create the object to access those objects.
 */


//in below object we don't want to give any value. so what will be the output?
let emp1 = new Employee();
console.log(emp1.name, emp1.age, emp1.salary, emp1.isActive);//undefined undefined undefined undefined //because we are not pasing anything //in JSVA it gives the default values 

console.log("===============================");

//in below object we will give just 2 values
let emp2 = new Employee('tom', 30);// right now we don't have "salary" and "isActive" so we are not passing it.
console.log(emp2.name, emp2.age, emp2.salary, emp2.isActive);//tom 30 undefined undefined
//when we have created above object inside the heap memory that time we have not created any salary/isActive there. so they will get undefine
//It will not pass the blank value. It is undefine. There is difference between "blank" and "undefine"
//If you don't supply anything then it will be undefine

console.log("===============================");

//now lets make the reference "null"
let emp3 = new Employee('Ram', 30, 23.33, true); //here another object will be created inside the heap > reference name of this object is "emp3" > object will have all the properties and methods as well > here we have assigned all the values as well
emp3 = null; // now the "emp3" will start pointing to null 
console.log(emp3.name);//null.name // then we are saying emp3m, give me your name,age,salary,isActive status
//whenever you try to access any method/variable with the "null" then you will start getting error
//Error is: TypeError: Cannot read properties of null (reading 'name')
//now whenever garbage will come inside the heap then it will destroy the object, which has no reference , which has null reference and which has undefine reference as well.
//so here object does not have any reference so it will be destroyed by GC
//so during coding we need to make sure that our should not start pointing to null, otherwise it will start giving me error and also it will be eligible for GC as well

//Before running below program please commnet above 
let emp4 = new Employee('Ram', 30, 23.33, true); //here another object will be created inside the heap > reference name of this object is "emp3" > object will have all the properties and methods as well > here we have assigned all the values as well
emp4 = undefined; // now the "emp4" will start pointing to undefined
console.log(emp4.name);
//whenever you try to access any method/variable with the "undefined" then you will start getting error
//Error is: TypeError: Cannot read properties of null (reading 'name')
//Here also, GC will destroy the object

//here we are getting error for "undefined" as well because in the JS, "null" and "undefined" almost are the same
//null means no value
//undefined means, right now we don't have any value, we will declare it later

//in JS there is no concept of "null" pointer


//can we create object without any reference name - YES
new Employee('Komal', 18, 10000, true); //this object has no reference name so it is available for GC 

