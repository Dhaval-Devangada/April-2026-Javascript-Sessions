/**
 * Program - 2
 */

/**
 * How can i create the clone of the below object?
 * So what do you mean by cloning?
 * 
 * When we create below object then it will be crteated inside the heap and that object is referred by "user" reference variable
 * now i say create a clone - clone means exact copy 
 * so we want to create exactly same copy with the new reference variable 
 * we want same key-value pair in our new object as well
 * 
 * but after creating the copy initial object "user" says that i want to update my "age"
 * initially age=30 and after updating the new age=40
 * before updating the age copy is already created 
 * copy will happen only first time
 * after that if you are updating anything in initial object then it should not reflect in the cloned/copied/second object 
 */


let user = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
};
console.log(user); // init*ial object output > { name: 'Vinay', age: 30, city: 'pune', zip: 1212 }


//shallow copy/cloning of the object
//how to create the copy of the object? - We can create the clone using spread parameter 
// ... spread parameter or reest parameter 
//...spread parameter or rest parameter is used to create the clone/copy of the object 
let myUser = { ...user };
console.log(myUser);// cloned object output > { name: 'Vinay', age: 30, city: 'pune', zip: 1212 }
//initial object output and cloned object output, both are same

//now we are updating the age of our initial object. so will it impact the our cloned object "myUser" - No. 
user.age = 35;

console.log('===== printing both objects after updating =======================');
console.log(user); //{ name: 'Vinay', age: 35, city: 'pune', zip: 1212 }
console.log(myUser); // { name: 'Vinay', age: 30, city: 'pune', zip: 1212 }

//upadted value in initial object "user" will not be reflected in cloned object "myUser" because both are two different entities and both objects are having seprate reference variable 
//we are updating the age using "user" reference so it will not be impacted in the object which is refered by "muUser" reference variable

/**
 * Disadvantage of ...spread/rest parameter is that  - It will always create the shallow copy not the deep copy
 * ...spread/rest parameter will break / will be problem, when we try to create the clone object for the "nested objects"
 */
console.log("======================================================");

/**
 * Another method is available for creating the cloning of the object 
 */

let user = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
};

let newUser = structuredClone(user); //structuredClone method say give the object of which you want to create the clone 
console.log("=========== printing the op of structured clone method================");
console.log(newUser); //{ name: 'Vinay', age: 30, city: 'pune', zip: 1212 }

console.log('=============  Example to check the disadvantage of ...spread parameter=======================');

/**
 * Disadvantage of ...spread/rest parameter is that  - It will always create the shallow copy not the deep copy
 * ...spread/rest parameter will break / will be problem, when we try to create the clone object for the "nested objects"
 * 
 * Below is the example to check the disadvantage of shallow copy/...spread parameter
 */

//created the nested object 
let customer = {

    name: 'Manish',
    age: 25,
    phone: '98989898',
    salary: 12.33,
    isActive: true,

    address: {
        flat: 101,
        building: 'new building',
        city: 'Bangalore',
        zip: 10101
    }
};


console.log(customer); //1
console.log('--------------');
//Now we wanto to create copy:
let newCustomer = { ...customer }; //2
console.log(newCustomer); //3

/**
 * Till now everything is fine
 * If you run above program and check the output > both the output are same 
 * then where is the probloem?
 * 
 * When we try to update anything in the nested object then the initial/original object will be updated as well
 * 
 * follow below steps to check the problem 
 * 1.print and check the values of the initial nested object
 * 2.clone the initial nested object
 * 3.print and check the values of the cloned nested object
 * 4.update the value in nested object of the "cloned nested object"
 * 5.print and check the values of the cloned nested object
 * 6.then print and check the values of the initial nested object
 *  value of the nested object in the initial object is updated 
 *  that's a bug 
 * 
 * conclusion: 
 * When you use the shallow copy, shallow copy means ...spread parameter then it will not work with the nested objects
 * For JS it's a feature. It's not a bug.
 * Shallow copy will work up to level 1
 * The moment you try to create the Shallow copy with the nested object, it will create it but if you try to update/change anything in the nested property then it will update the original/other object as well
 * So above could lead to disaster in when do the automation in real time 
 * 
 * suppose tomorrow if i am creating a new customer and changing the entire address, then all the users will be updated with the ne address. so thats the major bug here.
 * only nested will be impacted 
 * if you update the parent object property/leavel 1 property then original/initial object will not be updated 
 * 
 * so shallow copy we do for the simple objects 
 * for nested objects we should always create the "structuredClone"
 */

console.log('----------');
newCustomer.address.city = 'Pune'; //4
console.log(newCustomer);//5
console.log('----------');
console.log(customer);//6

console.log("=========== structuredClone example ==================");


//created the nested object 
let customer = {

    name: 'Manish',
    age: 25,
    phone: '98989898',
    salary: 12.33,
    isActive: true,

    address: {
        flat: 101,
        building: 'new building',
        city: 'Bangalore',
        zip: 10101
    }
};
//deep copy : all levels [deep copy means all the levels it will cover]
let newCustomer = structuredClone(customer);

console.log("====structuredCloned========");
console.log(newCustomer);
newCustomer.address.city = 'Pune';

console.log("====structuredClone with updated city========");
console.log(newCustomer); //Manish - Pune

console.log("====initial object========");
console.log(customer); //Manish -- Bangalore

/**
 * ...spread/rest parameter/ shallow copy will work for the leavel 1 only and if anything got updated in nested object then it will impact the original/initial object 
 * structuredClone will work for the whole objects/nested objects/up to deep level and it will not impact the initial/original object 
 * 
 * so it dosen't matter that deep copy or shallow copy, which method we should always use for the cloning of the object? - structuredClone
 * structuredClone will work for normal object also and nested object as well
 */