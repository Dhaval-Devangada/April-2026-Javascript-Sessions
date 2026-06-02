/**
 * program - 1
 */
let products = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5 [total values are 4] and length is 5

console.log(products);//we can directly print it here

//1. index based loop:
for (let i = 0; i <= products.length - 1; i++) {
    console.log(products[i]);
    if (products[i] === 'iphone 17') {
        console.log('found the product');
        break;
    }
}
/**
 * o/p
macbook pro
imac
iphone 17
found the product
 */

/**
 * Same above thing we will follow in th playwright. Like in the country dropdown 
 * The moment we see our spaecific country select it then break the loop
 * 
 * same thing we can follow for the footer > go and check footer link one by one. the moment we have privacy policy we click on it and break the loop
 */
let products = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];
console.log('-----------');
//Advanced loop
//2. for .. of loop:

for (let e of products) {
    console.log(e);
    if (e === 'iphone 17') {
        console.log('found the product');
        break;
    }
}
/**
 * Above loop,We don't need to write any initilization, condition or any ++/-- operator
 */
console.log('-----------');

//Reverse order: By using normal for loop
for (let i = products.length - 1; i >= 0; i--) {
    console.log(products[i]);
}

console.log('-----------');
//using for ... of loop:
/**
 * "for of" loop always go in forward direction - that's the draw bac, we can go in reverse direction. We can do it by using some heck or using third variable - but by default the nature tof the for loop is always go in forward direction
 */


//for ... of - we can use it for any kind of array
let num = [1, 2, 3, 4, 5]; //5; 0-4

for (let e of num) {
    console.log(e);
}

//for ... of - we can use it for any kind of array
let empData = ['Tom', 34.44, true, 101, 'Pune']; //hetrogenious [diff type of data]
console.log(empData);

for (let e of empData) {
    console.log(e);
}

console.log(empData);
/**
 * We can directly print the data using "console.log(empData);" line then why we are using loops
 * console.log(empData); - just print on the console - we can not write any "if" condition or any logic there 
 * above is just the representation of the array that how many values are there in the array or what is the current condition of the array 
 * what if we want to write any condition - like we want to select/find any product from array "iphone 17" 
 * or want to select country from dropdown
 * 
 * what if we want to iterate each value 
 * what if we want to write multiple if conditions or any business logic 
 * so to perform all above operation we need "for loop" or "for..of" loop
 */
//what if we add values on negative index - will it be printed
let empData = ['Tom', 34.44, true, 101, 'Pune']; //hetrogenious [diff type of data]
empData[-1] =100;
empData[-2] =200;

for (let e of empData) {
    console.log(e);
}
//try to execute above program - property[-1, -2] will not be printed [if we use the for..of lopp - means if we try to iterate the values using for loop then properties will not be printed because those not values ]
//but if we directly print the array then properties will be displayed
console.log('------------');

//for ... in [in is representing the "INDEX"]
let prods = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5

for (let e in prods) {
    console.log(e); // this will give the index 
    console.log(prods[e]);//this will give the data/value
}

let amazonProds = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5

for (let e in amazonProds) {
    console.log(e, "=", amazonProds[e]);//this will start printing in the form of index and values
}

/**
 * for...of loop is always representating the values
 * for...in loop is representating the index [i means index]
 */