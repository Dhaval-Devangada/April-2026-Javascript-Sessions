/**
 * Program - 1
 */
//Total 8 methods we have seen in 15th session
//9.includes : particular item or element is really available or not

let num = [1,2,3,4,5];
console.log(num.includes(3));//true
console.log(num.includes(10));//false

/**
 * includes(searchElement: number, fromIndex?: number): boolean
 */

//10: join : join all the elements into a string with a seprator
//join all the elements in the array
//Adds all the elements of an array into a string, separated by the specified separator string.

let arr = ['Naveen','Automation','Labs'];
let newArr = arr.join('|');//how exactly you want to join - I want to join with '|'[pipe sign]
console.log(newArr);//Naveen|Automation|Labs
//we can use any sign/space/word

//11. toSring: it will convert the array into complete comma seprated string
//Returns a string representation of an array
let arr = ['Naveen','Automation','Labs'];
console.log(arr.toString());//Naveen,Automation,Labs
console.log(object);//representation in square bracket / exactly whatever is ther it will give you
//above method will be used just for the logging purpose
//it takers only comma by default. we can not change it. but if you want diff seprator then you can use "join" method

//12. at : at method will will give you "element at a given index..it supports negative index also"
let num = [1,2,3,4,5];
console.log(num.at(0));//1
console.log(num.at(-1));//5
console.log(num.at[-1]);//undefine
//square bracket dosen't support negative index

//13. forEach method: 
//in the js forEach is not a loop, its a method
//it a method available on the array direclty

let cart  = ['imac','samsung','iphone','imac','macbook','keyboard','tom'];
//to iterate the elements we can use "for..of" and "for..in" loop
//we can also use the "forEach" method
//forEach loop accept the "arrow fun"
//so inside the 
cart.forEach((e)=>{ //"e" will go to each and every element in the array
    console.log(e);
})

//"e" go to each and every element and convert it into uppercase
let cart  = ['imac','samsung','iphone','imac','macbook','keyboard','tom'];
cart.forEach((e)=>{ //"e" will go to each and every element in the array
    console.log(e.toUpperCase());
})


let num = [1,2,3,4,5];
num.forEach((e)=> console.log(e*2));// if you have one line of code after the arrow then we can avoid {} and write it like this

//forEach is working like an loop but its not. forEach is a method
//only arrow functions are supported inside the forEach loop
//callbackfn - means arrow function
//in next module we will see that - what do you mean by callbackfn inside the fun?

/**
 * in below code how many functions do we have?
 */
let cart  = ['imac','samsung','iphone','imac','macbook','keyboard','tom'];
cart.forEach((e)=>{ //"e" will go to each and every element in the array
    console.log(e.toUpperCase());
})
/**
 * There are total 2 func
 * 1. forEach
 * 2. arrow func
 */
/**
 * argumment of the forEach fun is callback or 
 * we can say arrowback or 
 * we can say one arrow func
 * so above is callback 
 * 
 * callback means - a function is behaving like an argument of the another function this concept is known as callback 
 */

/**
 * (method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
 * 
 * so whenever we see "callbackfn" as an argument that means we need to write "arrow function" over there
 */
/**
 * forEach loop means 
 * e - you go to each and every element 
 * and tell me what exactly you want to do - this we need to write in body part of the callback
 */
let cart  = ['imac','samsung','iphone','imac','macbook','keyboard','tom'];
cart.forEach((e)=>{ //"e" will go to each and every element in the array
    console.log(e.length); //and on the "element" this action will be performed
})
//instead of writing length "for..of"/"for..in" loop , we can easily use "forEach" loop instead

