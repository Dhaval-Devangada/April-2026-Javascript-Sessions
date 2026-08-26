/**
 * program - 1
 */
/**
 * stack memory is for the primitive data type 
 * primitive means - memory is fixed
 * primitve data type -  string, number, boolean,variables
 * in java string is an object but in js its primitive data type 
 * 
 * but the heap is specially designed for reference type. reference type means non-primitive
 * and non-primitive means - dynamic in nature
 * dynamic means - in the array we can add/remove "n" number of values
 * size is not fixed in non-primitive values / we really don't know that how many values we want to store it here
 * in js "functions" will also be stored inside the heap memory
 * no-primitive -> functions, objects, arrays
 *
 */

/**
 * JavaScript has 7 primitive types:
 * string
   number
   bigint
   boolean
   undefined
   symbol
   null
 */


/**
 * what do you mean by object? or what exactly it is representating?
 * objects is a collection of data
 * objects is a collection of some related data
 * and data will be stored in key-value format
 * for example - you are the object
 * we all are the objects 
 * so what are the properties? we all are having some properties 
 * name = Dhaval
 * city = dubai
 * salary = 10000000000
 * 
 * if there is car object then 
 * canName = lambo
 * carColor = black
 * modelNum = 0986
 * chasisNum = ndnskdnkd8
 * 
 * so these particular objects is hvaing multiple properties in the form of key and value pair format
 * so we can say object is just a collection of what? - collection of related data - related data means - data which is available in the form of key-value pair format
 * 
 * here in js we can create the object without the classes as well 
 * we still have not introduced the classes and before that we are learning the object
 * in java we can not write the single line of code without the class
 * if you have seen so far we have not created any class as well 
 * we can create the class as well 
 * 
 * so we can create the simple objects without the class as well
 */

//Objects in JS: non primitive : we really don't know that how many key-value pair we want to enter here 
//i can add/update/delete key-value pair in that particular object
//collection of related data (key - value)...
/**
 * so how to create the object in js?
 * object will always be written within the curly braces
 * {};
 * and in between these two curly braces we have two write key-value pair formats
 */
let user = {
    name: 'Vinay', // key is "name" and the value is "Vinay" and what kind of value it is - string 
    age: 30,//here value is 30 which is number // key are always and always string only  
    city: 'pune',// we have to write comma seprated keys
    zip: 1212,

    //so above are the simple properties we have created or key-value pair we have created or one object we have created
    //we can add n number of key-value pair
    //we can create nested properties also 
};
/***
 * How to access the property
 * so what will happen 
 * in the memory 
 * in the heap memory object will be created with all the mentioned pairs
 * so basically below will be stored inside the heap and within the object
 * name: 'Vinay',
 * age: 30,
 * city: 'pune',
 * zip: 1212,
 * 
 * so the question is where "user" will be stored?
 * "user" is representing the above particuler object
 * so here "user" is "reference" variable of our given object
 * and reference variable will always be stored inside the stack memory 
 * and from that stack memory it will start pointing to object
 * 
 * so how we will read 
 * whatever we have inside the {} is object here {name: 'Vinay',age: 30,city: 'pune',zip: 1212,} and this object will go inside the heap memory
 * and "user" is a reference variable and this reference variable will start pointing to the objet which is inside the heap
 * and this reference variable will start pointing to the particular object which is stored inside the heap 
 * 
 * so what is object here?
 * user is the object or whatever we have written inside the {} is the object?
 * >  whatever we have written inside the {} is the object
 * think about it 
 * like 
 * your name is Dhaval
 * so Dhaval is a reference variable, my parents they have given this name to me 
 * but my body is the object 
 * so same thing over here the body {} is the object 
 * and user is the reference variable  
 * reference variable name we can write anything 
 * so "user" is not the objet -> "user" is the object reference variable 
 * 
 * who is representaing my body > Dhaval is representation my particular body
 * so in my particular body if i really want to call
 * thay hey my name is Dhaval
 * age is 30
 * city is pune
 * and other properties I can also easily define in my body {}
 * 
 */

let user = {
    name: 'Vinay', 
    age: 30,
    city: 'pune',
    zip: 1212,
};

//can we print entire object on the console? - YES - It will print as it is 
console.log(user);

//if i really want to access specific property then how will you access that? - By using the dot(.) notation
console.log(user.name);
console.log(user.age); //dot notation

//another way of accessing the property - By using "Bracket notation"
console.log(user['name']);//bracket notation
console.log(user["city"]); //we can use single quote or double quote both 
console.log(user['age']);
console.log(user[`age`]); //we can also use the backtick as well
//dot notation and bracket notation both are good practice - you can use any of them. but in gerenal practice we use dot notation. it's easy to use.

//user = null then what will happen in the memory?
user = null;
/**
 * we had object and that object has 5 properties and "user" reference variable which is referring to that object
 * and we can access properties using dot notation and bracket notation 
 * and now "user=null" so what does it mean?
//  * That means user is pointing to object and at the same time user is pointing to "null" - Refer screenshot 2  - This is not correct - check below comment 
 * when the reference is started to pointed to null and we try to access any of the property then what error we will get?
 * we won't get null pointer exception in js 
 * we get an error saying "Cannot read properties of null"
 */

/**
 * Refer screenshot 2 
 * Initially, user references an object containing properties like name and age.
 *
 * After user = null, "user" no longer references that object.
 *
 * Therefore, user.name effectively attempts to access
 * the name property from null, which causes a TypeError.
 */
console.log(user.name); //null.name 
/**
 * Every property is there in object but "user" is now pointing to "null"
 * so indirectly now we are trying to access all the properties using "null.name" and etc because "user=null"
 * so anytime if you trying to access anything using null then you will get an error at the run time 
 * because with the null we can not read anything in any programming language
 * 
 * the moment you see the error "Cannot read properties of null" you should know that reference is pointing to null here
 * reference will start pointing to "null" in the stack memory 
 * null means no value
 * same goes for undefine 
 */

user = undefined; // we will get the error that "Cannot read properties of undefined"
//user = undefinded means now we are trying to access properties with undefine [undefined.name....etc]
//undfined will also go in the stack memory because it's not the non-primitive. they[null,undefine are not the dynamic values]

/**
 * Refer screenshot - 3
 * so what will happen to this kinds of objects which are pointing to null
 * suppose we have n number of objects in the heap memory and all these objects are having some key and value 
 * and they all are refered by some reference variable which are in the stack 
 * now some reference variable is start pointing to "null"
 * user=null, customer=null , employee = null
 * so now references are pointing to null so what will happen to respective objects?
 * we have big application which is running on server 
 * we have big application running on server so ofcourse we have a lot of objects inside the heap
 * suppose we have RAM of 32 GB means hardware RAM
 * 
 * each and every programming works how? 
 * it will take the space from harddisk or from the RAM? - It will always take the space from RAM while running it
 * when we try to run the code then it will always take the space from RAM and RAM is a dynamic memory while hard disk is a static memory 
 * RAM is volatile main memory used by running programs
 * assume js says that i need 1 GB from the RAM 
 * out of 1 GB heap is taking around 200 MB and stack is taking 300 MB and objects are getting created back to back
 * so heap memory is getting suffocated, suppose we have reached 190 MB 
 * so due to high memory utilization our application will slow down /shutdown/it will impact the performance 
 * so very less memory left now and because of that my application may carsh 
 * so what should i do now?
 * Every programming language is having the concept of grabage collector 
 * GC is controlled by nodejs
 * GC will go inside the heap memory and it will start collecting those objects which are having null/undefined references - This is complicated so look dommnet > what are the objects will be collected by GC 
 * so because of that we will get more space now because unnecessary objects got deleted
 * this is auto mechanisam we don't need to do any code for GC / for deleting the objects which are referfed by null/undefined
 * GC is deleting the "objects" directly. GC is not deleting the "null" values which are there in stacks 
 * GC is designed for only and any heap memory and not for stack memory 
 * nodejs will keep monitaring the entire heap memory. nodejs will decide that when exactly the GC should be called 
 * V8 engine is controlling the garbage collector 
 * GC will check in the start checking in the stack as well that "null" references are there or not , GC can not go to the "STACK" it dosen't mean that it can not check the reference of the respective object.
 * everything is happning at the run time. GC will get activated at tun time as well
 * when you write the code, nothing will happen. Things will start comint into picture when you start running the code then the memory will be allocated 
 */

/**
 * comment for - what are the objects will be collected by GC
   GC identifies objects in the heap that are no longer reachable from any live references (GC roots) and eventually reclaims their memory. 
   Setting a reference to `null` or `undefined` can make an object unreachable, but `null`/`undefined` itself is not what GC looks for.
*/

/**
 * we have 200 MB for heap
 * We have exctly stored/created 200MB of objects in the heap
 * All the objects are referred by proper reference varibale 
 * now what happen if we run the GC
 * it will not destroy anything 
 * GC is saying no memory left - let me come - but it's not destroying anything
 * will it destroy the objects which are having the proper references? - never
 * if GC will start deleting the objects which are having proper references - it means its deleting the DATA [customer data,employee data]
 * 
 * but whats the problem here?
 * if whole 200MB is occupied -> then application will crash or not? -YES because we don't have any space left 
 * we don't have any space left so we won't be able create any more object.Means user is blocked  
 * so where exactly is the problem? -> problem is with the infrastructure /hardware /server 
 * So this is the problem we need to solve at infrastructure level
 */

console.log("========================");


let user = {
    name: 'Vinay', 
    age: 30,
    city: 'pune',
    zip: 1212,
};
console.log(user);

//what if we try to update anything in given object?
//we can update the property of the object 
user.city = 'LA';
user.zip = 9090;
console.log(user);

//we can add the property as well. "phone" was not present earlier. 
user.phone = 90909090;
console.log(user);

//can i delete any property? => YES - just use "delete" keyword  - "delete" is a keyword so always start with small letter 
delete user.age;
console.log(user); //age won't be there in the latest object 
//so we can add/update/delete the property from the object 
//you can add n nnumber of property here


console.log('==========================');

//nested objects:
//JS Objects
let customer = { //customer is a reference variable
    //object will always be created inside the curly braces then start writing the key and value formats

    name: 'Manish',
    age: 25,
    phone: '98989898', //phone number should be written with string because we are not going to do any manipulation with phone nmumber 
    salary: 12.33,
    isActive: true,

    /**
     * Now we need customer addrees, so we are creating another object 
     * "address" is a key and we have child object inside the {}. so "address" is the key of our child object
     *  so child object will be created inside the main object with the "address" key
     *  here we don't need write "=", here we need to write ":"
     *  "=" should be written for the parent only 
     *  we can have multiple properties for the child object as well
     */
    address: {
        flat: 101,
        building: 'new building', // inside the object we can use the backtick as well, but here we wan to segrigate the addreess/we want to segrigate each and every property
        city: 'Bangalore',
        zip: 10101
    }
    /**
     * overall object/nested looks like json but its not a json
     * How the child object will be stored in the memory?
     * 
     * refer screenshot 4
     * initially 1 object got created in heap and it is referred by "customer" reference variable, which is in stack
     * in that object we have 5 properties [name,age,phone,salary,isActive] and child object which has 4 properties[flat,building,city,zip]
     * here "address" is not a reference variable, it's a key. So "address" won't go inside the stack as its not a "reference variable"
     */
};

console.log(customer.name);//Manish
console.log(customer.isActive);//true
console.log(customer.address);//{ flat: 101, building: 'new building', city: 'Bangalore', zip: 10101 }
console.log(customer.address.city);//Bangalore //here we are accessing property using dot notation
console.log(customer['address']);//customer tell me your address // here we are accessing property using bracket notation 
console.log(customer['address'].city);//customer tell me your address and from address go to city // here we are accessing "address" property using bracket notation and "city" property using dot notation
console.log(customer['address']['city']); // we access both "address" and "city" using bracket notation as well
console.log(customer['address']['zip']);
// dot format look very simple

console.log('==================================');
/**
 * 
 * let user = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
};

what you see above? > it's OBJECT > Generaly we call it JS OBJECT > its a normal JS object 
 */

//JS object - The moment we see any JS object then we mark it as a JS object 
//Its looks like JSON but it's not a JSON
let user = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
};
/**
 * Now i wan to convert above normal JS object to JSON[Javascript object notation]
 * This concept we are going to use it in API automation as well
 * here we are going to use "JSON" which is an existing interface/object inside the js/node
 * and we are going to use "stringify" method of JSON object
 * "stringify" method says > convert a Javascript value to a Javascript Object Notation string - JSON string
 * 
 * JSON - An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
 */

//js object to JSON: serialization (marshelling)
console.log(user); // { name: 'Vinay', age: 30, city: 'pune', zip: 1212 } // this is the output of normal JS object

let userJson = JSON.stringify(user); // JSON.stringify(user) will return what?
// JSON.stringify(user) will convert the entire object to JSON and JSON is what - JSON is String 

console.log(userJson); // {"name":"Vinay","age":30,"city":"pune","zip":1212} //this the JSON string after conversion

console.log(typeof userJson);//string
//POST API: JSON


/**
1.{ name: 'Vinay', age: 30, city: 'pune', zip: 1212 }
2.{"name":"Vinay","age":30,"city":"pune","zip":1212}

what is the difference between above two o/p?
In firt o/p -> which is js object > keys are without double quotes
and in second o/p -> which is JSON string > key are always and always in double quotes -> means keys are always considered as string 

In postman also whenever we are writing with POST call we are writing with  JSON then keys are always written in the double quotes

Remember - JSON is always considered as JSON string 
The conversion of JS object to JSON string is called serialization (marshelling)
This serialization (marshelling) concept we will use in the API automation as well
We use this concept in POST call
We need to pass JSON payload in POST call
Suppose we want to create the USER 
So for that first we create the the USER object like we have created above
Then we convert the USER object to USERJSON by using JSON.stringify method 
once we get the USERJSON then we will use the USERJSON with the POST call
Because POST call does not understand what is JAVASCRIPT
Whenever[Restassured/Postman/playwright] we are using POST call we need to supply JSON
API understands only JSON - API does not understand what is JAVA/Javascript object
so that's why serialization (marshelling) is important 
 */

/**
 * And how to check that whatever we have got is pure JSON
 * We can check it online 
 * Go and peast your o/p on > JSONLint 
 * and check that it's a valid JSON or not 
 * If the JSON is valid then its proved that JSON.stringify is converting the JS object to JSON string
 * 
 */

console.log('====================================================');

/**
 *  now we want to convert the JSON string to JS object 
 *  in java we convert the java object to JSON by using the jakson library 
 * 
 *  for De-serialization (Unmarshelling) we use "parse" method 
 */

//JSON string ----> JS Object : De-serialization (Unmarshelling)
//so here "userJson" is JSON string - its a normal string so it is stored inside the stack memory 
let userObj = JSON.parse(userJson); //JSON is existing interface/object inside node //here we need to give valid JSON string to "parse" method and it will "Converts a javascript Object Notation/JSON string" to an JS Object
console.log(userObj);//{ name: 'Vinay', age: 30, city: 'pune', zip: 1212 }  //js object //keys will be printed without double quotes
console.log(typeof userObj); //object 

/**
 * So uptill now we have done following activites
 * we had JS object > converted to JSON Sting > then we have converted JSON string to again JSON object
 * 
 * So we need to know that during the above process how many objects got created?
 * Memory diagram  - refere screenshot 6
 * Initialy object got created in heap and pointed by "User" which is in stack
 * Then we are performing serialization so JSON sting will be created which will be stored in STACK. Because it's a normal string. Because JSON string is normal string and string will always be stored inside the STACK.
 * After that we are parsing JSON String/De-serialization in to the JSON Object, so another object will be created inside the heap referred by "userObj" 
 * 
 * so now observe 
 * How may key-value pairs were available in the initial object - 4 [name,age,city,zip] 
 * And when we converted in to JSON sting [userJSON] - then JSON string got created - so how many pairs got created in stack -  4 [name,age,city,zip] 
 * After that again we are converting JSON string to JS object by using parse method  -so new object will be created inside heap - How may key-value pairs will be created inside heap - 4 [name,age,city,zip] 
 * 
 * so now if we write validation 
 */

console.log(user.name === userObj.name);//true //here we are asserting that both the objects contains the same property with the same type and value or not
console.log(user === userObj); //false //because here we are comparing the references now //this will start comparing the memory address so false

//in every programming language we do marshelling and unmarshelling 
//POJO [in java we have java object that called the POJO- plain old java object] - we convert it into - JSON [This will become the serialization]
//JSON --- POJO
//so above we have 2 objects as well and we will compare those objects 

console.log("==================================================");

/**
 * In the object can we add the array? - YES
 */
let emp = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
    devices: ['airtel sim', 'iphone 17', 'connector']
};

console.log(emp.devices[1]);
console.log(emp.devices.length);

//what will be the representation of the array? - "devices" will behave like JSON array after the converison to JSON string 
let empJson = JSON.stringify(emp); //{"name":"Vinay","age":30,"city":"pune","zip":1212,"devices":["airtel sim","iphone 17","connector"]} //go to jsonlint and check that if it's valid json or not 
console.log(empJson);

/**
 * from the JSON string you can not access name,age..because it's a string ...you can access it from the object only
 */

/**
 * serialization and deserialization we use this for the small objects 
 * if we have 5000 attributes then conversion will take a lot of time 
 * for that there are other libraries - JSON Path - We will write a path to get attribute/attributes
 */

/**
 * for array iteration use "for...of" loop 
 * for object iteration use "for ...in" loop
 */

/**
 * GC is not always running 
 * It will go to heap when the V8 engine gives the instruction that Heap has low memory please go there and remove unnecessary objects 
 * if any reference variable to null or if any object does not have any reference then - it dosen't mean that immediately GC will come and delete that particuler object.
 * we can say that object is eligible for the garbage collector 
 * GC will come when memory is really occupied and not much space left
 */

/**
 * during the comparasion of string "single quote" or "double quote" it dosen't matter - its always a string 
 */

/**
 * In framework - when we have large framework, there we have many classes and objects. so we have large execution as well
 * so do we have any memory recommadation practice to avoid heap memory growth because GC is automatic and not under over control
 * so should be make explicitly large object null once they are no longer needed? so that they become eligible for GC
 * 
 * if we design the automation framework then it's not needed 
 * 2GB is too much memory - more than enough for us 
 * heap memory will be completely occupied for very very larger project and we can handle it explicitly. we can change the heap size also through the environment varibale of the V8 engine 
 * we can increase the stack memory as well
 * 
 * 
 * 
//heap dump
//64 bit: ~2gb deafult Heap
//32 bit: 512 MB
*/


/**
 * Question
 */
const user ={
    name:"Vinay",
    age:30,
    city:'Pune',
    zip:1212
};

user.name='naveen'; 

//will above operation update the value of "name" from "vijay" to "naveen"? though we have used "const"
//yes it will update because here "user" is "const" not the values 
console.log(user);// { name: 'naveen', age: 30, city: 'Pune', zip: 1212 }

//but if we do below then it will give an error
//Please comment above "user.name='naveen';" to check the error

user = {
    name:"Keshav",
    age:30,
};

//so conclusion is that if we try to update the property then we can do it. but if we try to assign completely diffrent object then we can not do it 
//it seemns like below 

const x = 10;
x=20;
console.log(x); //This will give error 


console.log('----------------------------------------');

//We can create the object like below as well where in we have used "double quotes" around the Key - because ultimately keys are "string" as well.
let user = {
    "name": 'Vinay',
    "age": 30
};