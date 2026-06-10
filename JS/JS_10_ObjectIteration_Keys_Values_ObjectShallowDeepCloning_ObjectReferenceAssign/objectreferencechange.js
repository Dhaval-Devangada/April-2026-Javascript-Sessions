/**
 * Program - 3
 */

/**
 * below we have 3 diff objects in the memory with diff properties
 */

let u1 = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1442,
};

let u2 = {
    name: 'Manish',
    age: 35,
    city: 'Bangalore',
    zip: 1232,
};

let u3 = {
    name: 'Pooja',
    age: 32,
    city: 'Delhi',
    zip: 12122,
};

//printing all 3 objects
console.log(u1);//v  //{ name: 'Vinay', age: 30, city: 'pune', zip: 1442 }
console.log(u2);//m  //{ name: 'Manish', age: 35, city: 'Bangalore', zip: 1232 }
console.log(u3);//p  //{ name: 'Pooja', age: 32, city: 'Delhi', zip: 12122 }

console.log('--------');
u1 = u2;
/**
 * u1 = u2 -> does not meaning that we are cloning here
 * here we are assiging u2 to u1
 * 
 * how to read above line 
 * u1 please star pointing to u2
 * so u1 will break the connection from the object which it is referring to and will start pointing to object which is referred by u2
 * 
 * so here we are assigning one reference variable(u2) to another reference variable(u1)
 * it means u1 will starting pointing to u2, u2 will not start pointing to u1
 * u1 will break the existing connection and it will start pointing to u2 object, where exactly u2 is pointing  
 */

console.log(u1);//M //{ name: 'Manish', age: 35, city: 'Bangalore', zip: 1232 }
console.log(u2);//M //{ name: 'Manish', age: 35, city: 'Bangalore', zip: 1232 }
console.log(u3);//P //{ name: 'Pooja', age: 32, city: 'Delhi', zip: 12122 }

//similar kind of thing we will do in he POM as well where 1 object will be referred by multiple references 

console.log('--------');
u2 = u3;

console.log(u1);//M
console.log(u2);//P
console.log(u3);//P

console.log('--------');
u3 = u1; 
/**
 * most of the people do mistake here 
 * here u3 will not point to first object u1
 * 
 * here u3 will point to object where currentely u1 is pointing [we always need to check the current position]
 * so as per our above code u1 is pointing to u2 
 * so now u3 will point to u2 and not u1 
 * 
 * u3 you break the existing connection and start pointing to where exactly u1 is pointing to 
 * u1 pointing to manish/second object so u3 will start pointing to manish/second object and not to vinay/first object
 */

console.log(u1);//M
console.log(u2);//P
console.log(u3);//M

/**
 * so now howmany references are available for first object - none - 0  reference
 * no one is referring the first object
 * so whenever GC comes then it will destroy the first object [manish]
 * 
 * now for the second object how many references are available? - 2 [u1 and u3]
 * so one object is having two references, is it allowed - YES it is allowed 
 * 
 * how many references are available for third object? - 1 [u2]
 * 
 * so how many objects we can create for any objects? - N numbers of objects - it up to us 
 * one object can have multiple references [example - second object]
 * 
 * can we create object without any reference? - YES [example - first object does not have any reference ]
 * 
 * when we write x=12 then we are giving 12 to x 
 * so try to understand u1=u2  like that  
 */

console.log('----------');

//refer screenshot number -2 
let p1 = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1442,
};

let p2 = p1; //p2 will start pointing to current position of p1

/**
 * so how many objects are there in the memory 1 
 * and how many references are there in the memory 2
 * 
 * so here with both the reference variable we will get the same output 
 * here we are getting same output for both the objects does not mean that we are doing cloing, here we are not doing cloning 
 * cloning means exaclty duplicate object is there in the heap 
 * but here we have only one object 
 * so this is not cloning, this is just reference assignment we are doing here
 * it means now one object got two references
 * 
 * cloning will be done with the help of ...spread parameter/dot parameter/structured cloning method
 */

console.log(p1);
console.log(p2);

//now we are updating the properties using second reference variable. so data will be updated or not? - YES because p2 is also referring to/pointing to the same object which is referred by p1
p2.name = 'Dilip';
p2.age = 40;

console.log(p1);
console.log(p2);

console.log('=======================');

/**
 * never ever comment the object without references 
 * even if you are create then that obejct will become eligible for GC 
 * 
 * below is the example of object without any reference 
 */

{
    name: 'tom'
}

console.log("===========================");

/**
 * now we have below example
 * where we don't have anything in object body
 * but we have the reference variable 
 * so is it eligible for GC 
 * 
 * what will happen inside the memory?
 * inside the memory one object will be created without any key and value and will be referred by n1
 * this object is empty object
 * GC can not destory it / it is not eligible for GC because it has proper reference 
 *
 * refer - screenshot 3
 */
let n1 = {};
console.log(n1); //this will print empty object 

/**
 * now we have below p1 object and we are doing p1=n1 
 * so what will be the result?
 * check below example
 * refer - screenshot 4
 */
let p1 = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1442,
};

p1 = n1; // p1 you point to object where n1 reference variable is currentely pointing 
console.log(p1);


//criteria for GC:
//1. null reference
//2. undefined reference
//3. no references

//1. null reference example 
let x = {
    name: 'tom'
}

x = null;

//if write only below then it won't become eligible for GC
let y = null; //here we have not created any object, here we have created variable inside the stack 

let info = {
    name: 'tom'
};

let address = {
    age: '23'
};

let comp = {
    city: 'LA'
};


/**
 * I have 3 objects and i want to clone all 3 objects into other object, so is it possible? -YES
 * check below example
 */

let s1 ={
    name: "tom"
}

let s2 ={
    age:29
}

let s3 = {
    city: "LA"
}

let s4 = {...s1,...s2,...s3}
console.log(s4);
/**
 * we can combine objects like above with ...spread parameter only because it accepts multiple values
 * but we can't combine objects like above using "structuredClone" because it accepts only 1 value.so "structuredClone" is cloning the objects and not combining the objects
 */

/**
 * gererally we don't use ...spred / structuredClone concept in the automation 
 */

let userData = { ...info, ...address, ...comp };
console.log(userData);

/**
 * 
 */