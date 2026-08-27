/**
 * Program - 1
 */

/**
 * "=" is not allowed with key-value. it will give an error. uncomment below and run 
 * error is : Invalid shorthand property initializer
 */

// let user = {
//     name = 'Tom'
// }
// console.log(user);


let user = {
    name: 'Tom',
    age: 20,
    salary: 12.33,
    isActive: true
}
console.log(user); //{ name: 'Tom', age: 20, salary: 12.33, isActive: true }

//we can simply print it as above but we want to iterate one by one 
//Always remember we always do the object iteration using "for...in" loop
for (let e in user) { //e will go to the "user"
    console.log(e); // this will give us the keys from user. There is no indexing concept here. It's not an array so it will not give you 0,1,2,3, here 
}
/**
 * o/p
 * name
 * age
 * salary
 * isActive
 * 
 * so if we want to print the values then we need to do below
 */
for (let e in user) { //e will go to the "user"
    console.log(user[e]); // this will give us the keys from user. There is no indexing concept here. It's not an array so it will not give you 0,1,2,3, here 
}
/**
 * above we are telling that go to user[key] and give it's value
 * e will go to name key and will print it's value
 * 
 * so o/p
 * 
 * Tom
 * 20
 * 12.33
 * true
 */

/**
 * we can not use dot notation. because it will start looking for "e" key and we don't have "e" key
 */
for (let e in user) { //e will go to the "user"
    console.log(user.e); // this will give us the keys from user. There is no indexing concept here. It's not an array so it will not give you 0,1,2,3, here 
}
/**
 * o/p
 * undefined
 * undefined
 * undefined
 * undefined
 */

/**
 * so remember you can not use dot notation in the for..in loop
 * we need to use square bracket so that we can differenciate properly [] ->  console.log(user[e]);
 * "e" is a variable so we can not write it in single quote or double quote inside the for...in loop
 */

/**
 * we can not say that object will be considered as an array
 * object is an object 
 * array is an another object 
 */


// console.log(user['name']);



 console.log('=================');
 let user = {
    name: 'Tom',
    age: 20,
    salary: 12.33,
    isActive: true
}
 //Just give me the keys - Do we have any direct method for that?
 //Use Object interface which is already available in the node/js
console.log(Object.keys(user)); //keys - [ 'name', 'age', 'salary', 'isActive' ] //keys method is returing the "string[]" string array

//we can capture the specific key as well
console.log(Object.keys(user)[0]); //name

//do we have any method for the values also? - yes
console.log(Object.values(user)); //values - [ 'Tom', 20, 12.33, true ]

//in this particular "user" object howmany entries are available/howmany key and value pair are available
console.log(Object.entries(user));//key-value pair //entries method will retun array of key-value
/**
 *o/p
 *  [
  [ 'name', 'Tom' ],
  [ 'age', 20 ],
  [ 'salary', 12.33 ],
  [ 'isActive', true ]
]
 */

/**
 * JSON string is a normal string, so we can not appply above method there 
 * for that string methods will apply 
 * for Json string we have external library like JSON path
 * in js direct methods are available for Js Object only
 */
/**
 * real time usecase of: Object.keys, Object.values , Object.entries
 * for schema validations we can use
 *  in API we just want to perform assertation that these keys are there or not?
 *  so these methods (Object.keys, Object.values , Object.entries) are used to just collect the information from the object
 */
console.log("=============================");

 let user = {
    name: 'Tom',
    age: 20,
    salary: 12.33,
    isActive: true
}
//object iteration: for ... in loop:we can write the condition as well
for (let e in user) { //e will go to the "user" // in objects "e" is representating the key but if you apply the same thing in array then it is representating the "index"
    console.log(user[e]);
    if (user[e] === 20) {
        console.log('bye');
        break;
    }
}
/**
 *  in objects "e" is representating the key but if you apply the same thing in array then it is representating the "index"
 * so thats why for...in loop is specially designed for the objects because it very easy for us to iterate the array  
 */
console.log("==========================");

 let user = {
    name: 'Tom',
    age: 20,
    salary: 12.33,
    isActive: true
}
//JS object to JSON:
let userJson = JSON.stringify(user);
console.log(userJson); //{"name":"Tom","age":20,"salary":12.33,"isActive":true}

//above the output is json string and it's coming in horizantal line
//so assume tomorrow we have big object where 20,30 properties are available 
//so to make the json pretty print (print it properly)
//rather than going to web/any website [json validator] - which will pretty print for us - but its length task 
//so its good to pretty print here
// we can do it with the "stringify"
/**
 * stringify method says 
 * first give me that which object do you want to use - user
 * second parameter says give me replacer - do you want to replace anything in this JSON - we don't have any replacer so we pass -  - null
 * third parameter says, what is the spacing you want to use , spacing can be string also or it can be number also. so we are giving - 2 
 * so what do you mean by 2 
 * in output you will have 2 space before each key 
 * if the value is 4 then we will have 4 space before each key 
 */

let userJsonWithPrittyPrint = JSON.stringify(user, null, 2);
console.log(userJsonWithPrittyPrint);

/**
 * with 2 spacing output is below 
 * 
 * {
  "name": "Tom",
  "age": 20,
  "salary": 12.33,
  "isActive": true
}

with 4 spacing output is below 
{
    "name": "Tom",
    "age": 20,
    "salary": 12.33,
    "isActive": true
}
 */
let userJsonWithPrittyPrintWith4 = JSON.stringify(user, null, 4);
JSON.stringify()
console.log(userJsonWithPrittyPrintWith4);

/**
 * now each key-value pair is printing in next line 
 * so js will do it automatically 
 * for this small small thing we don't need to bother about
 */

/**
 * 
 * How to read the suggestion which is coming when we mousehover on any method?
 * below is the example of the "stringify" method
 * 
 * 
 * 
(method) JSON.stringify(value: any, replacer?: (string | number)[] | null | undefined, space?: string | number | undefined): string (+1 overload)
Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

@param value — A JavaScript value, usually an object or array, to be converted.

@param replacer — An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.

@param space — Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.

@throws — {TypeError} If a circular reference or a BigInt value is found.
 * 
 * 
 * first parameter is value 
 * so read the value description which is given below - we can pass object or array as a value
 * 
 * second parameter
 * replace? - means it is an optional parameter - it is not mendetory to pass any parameter here
 * or you can give me string,number,array,null or undefined
 * 
 * third parameter
 * space? - means it is an optional parameter - it is not mendetory to pass any parameter here
 * 
 * optional parameter means, even if we don't pass any then thats okay then also we will get the result for the passed parameters
 * check below example - we can do below as well
 * JSON.stringify(user, null, 4);
 * JSON.stringify(user, null);
 * JSON.stringify(user);
 * 
 * but the question is here we are passing second parameter as "null" so can we do below just to add space/indetation
 * JSON.stringify(user, 4); - here now the 4 will be considered as "replacer" which is our 2nd parameter 
 * and for space adjustment and indetation we must need to pass 3rd parameter 
 * so we can't use this "JSON.stringify(user, 4);" for space/indetation
 * and we don't have any replace so we have passed replace as null
 * so JSON.stringify(user, null, 4);
 * 
 * 
 * if ? is there after the parameter then that parameter is optional otherwise and if ? is not there after the parameter then it's mendetory
 * 
 * 
 */


/**
 * 1st parameter → What to convert?
                 user

2nd parameter → Do you want to filter/modify anything?
                 No → null

3rd parameter → How should it be formatted?
                 2 spaces
 */
             

/**
 * what will be the o/p of below? - empty array
 */
let x1={

}

console.log(Object.keys(x1));//[]
console.log(Object.values(x1));//[]
console.log(Object.entries(x1));//[]
//whay Object.entries returning 1D array?
//The key is that Object.entries() returns an array, and each entry inside that array is itself another array.
//Because x1 is an empty object, there are no properties to convert.