/**
 * Array
 * simplest defenation of the array - array is the collection of the different values/multiple values/collection of data in the single variable
 * memory wise - array is always divided into equal parts
 * refer screenshot - 1 
 * we have divided entire memory in 5 parts and assigning the values as well
 * whenever we are dividing the memory into equal parts then every section is called segment
 * so here we have 5 segments 
 * every segment will have it's own number as well - that is known as indexing
 * and first index is always 0 index
 * 0 index is also called - LI - lowest index and last index is called HI - Highest Index
 * so here we have 5 segments so what is the size of the array
 * length of the array = 5 
 * and what is the range of the array > 0 to 4 
 * and here highest index is 5 
 * LI - Lowest index is always be 0 
 * so HI = length[how many segments] - so here segments are 5 - 1 = 4 [highest index]
 * and length = HI + 1 = 4 +1 = 5 
 * variable name -single variable name = num
 * suppose we have designed array for the numbers only 
 * 
 * Do we have any limit that how many segment we can create - NO in the javascript we don't have any limit 
 * In js all are dynamic array, its not like java
 * in java we have dynamic and static array seprately
 * 
 * what we can store in array?
 * if we have create array for number then we can store any int , 50.5 ...any number we can store in the array
 * but my reqyirement is that i want to store only string, so what kind of array we will create - string array
 * 
 * what is the sign of the array - lets say we have a string array which stores products so in that case sign is - product[]
 * whenever we see square brackets [] that means we are talking about array
 * 
 * now i want to have different kinds of data in the array - can we do it here in js? 
 * we don't have the concept of object array here - don't mix with java
 * here we call "mixed type" of array 
 * if only numbers are available in the array then it is known as number type of array 
 * if only string are available in the array then it is known as string type of array 
 * we can create boolean type of array 
 * employee data - name, salary ,city , employee designation - empData[]
 * 
 */

/**
 * lets say we have variable "i" - want to store multiple values in that can we do that - No 
 * check below example 
 */

let i = 10 ;
i = 20; 
i = 30; 

/**
 * above we have not stored multiple values
 * we have only reassigned the values 
 * we print the "i" then only 30 will be printed 
 * 
 * if we want to maintain all 10,20 and 30 in single variable then array will come into the picture 
 */


//Array: collections of data:
//data could be what : data could be below 
//data: similar data type : Homogeneous 
//data: different data type : Hetrogenous

let num = [1, 2, 3, 4, 5]; //length of array is 5;  range is 0-4
console.log(num.length);// here length is property , here we don't have size[in java we have size]

let len = num.length;
console.log("Hi = ", len - 1);
console.log("Li = ", 0);

//how to access the elements of the array 
console.log(num[0]);
console.log(num[1]);
console.log(num[4]);
//what will be the o/p when we try to access the index where we don't have any value 
//in js if you try to acccess something which is not available then you will get undefined and will not give exception "array index out of bound" like java
//js is super flexible ..it will not give you any exception. it will give you undefined
console.log(num[5]);//undefined
console.log(num[10]);//undefined

//do we have negative index - NO , so what will haapen if we try to access negative index 
console.log(num[-1]);//undefined
//so whenever we want to fetch data from the array then we need to fetch from the range 

console.log('-------------');

//can we print num[] directly in js - YES - it is allowed here.
console.log(num); //[ 1, 2, 3, 4, 5 ]

// how to update the value of array of specific index - updation of value 
num[0] = 10; //insted of 1 - 10 will be printed 
num[4] = 50;//update the value of index number 4 with value 50
console.log(num);

console.log('-------------');
//directly go to the 10th index and update the value. so what will be the o/p? what will be the o/p for 5th to 9th index? - error/ undefine. [because from index number 5 to 9 we don't have anything]
console.log(num); // what is the current values of array?  // [ 10, 2, 3, 4, 50 ]
num[10] = 100;
console.log(num); //[ 10, 2, 3, 4, 50, <5 empty items>, 100 ]
//so now from index number 5 to 9 we don't have anything so what will the length in this case? because 5 segments are empty
console.log(num.length);// 11 from 5th to 9th index we have nothing
//we have directly stored value on 10th index. so what valued will be stored on 5th index?
console.log(num[5]);//undefined //empty value means undefined

//what will be the o/p of below?
num[50] = 1000; // [ 10, 2, 3, 4, 50, <5 empty items>, 100, <39 empty items>, 1000 ]
console.log(num);
console.log(num.length);//51


console.log('-----------');
//what if try to assign the value at negative index [-1]? what will be the o/p -> undefined/error/empty
//in js if you to add anything on the negative index/delibaterly try to create negative index > then it will be automatically convert like a property here [//property means as a key and value pair ]
let marks = [10, 20, 30, 40];
console.log(marks);

marks[-1] = 5;

console.log(marks); // [ 10, 20, 30, 40, '-1': 5 ]  
//so in above o/p 10,20,30,40 are the actual values we have added 
// and -1:5 is key-value pair 
//so key[-1] here is called array property 
//property means as a key and value pair  
//so whenever you try to add anything on the negative index. it will be added as a property in the array
//so here we have 4 values 10, 20, 30, 40 and one property -1:5 [property means key and value]
//property will be always added at the end 
//so here we have 4 values and 1 property so what will be the length? 4 or 5 
//remember that length will be calculated on the basis of the values and not on the basis of the property
//because values are the actual values so length will be 4 
console.log(marks.length);//4
//so the conclusion is that we can not add values on the negative index 
//it will be added as a property in the form of key and value pair format and not as a values 
//so whenever we try to add negative index then it will be added as a property
// and that property will be not added in the length calculation - length will be always be added on the basis of the values

//so what we will get when we acces negative [-1] index 
console.log(marks[-1]); //5 - but it want be considered as value [-1 is a key here and what's the value of that key 5]
//key: value
//-1: 5
//if we have not added anything on negative index then it will give us undefined

marks[-100] = 9000;
console.log(marks); //[ 10, 20, 30, 40, '-1': 5, '-100': 9000 ] // so now we have pair number one and pair number two
console.log(marks.length);

//now we have added valued on the 100th index so what will be the o/p? > 
marks[100] = 400;
console.log(marks);// [ 10, 20, 30, 40, <96 empty items>, 400, '-1': 5, '-100': 9000 ]
console.log(marks.length); //101

//so can we create the string array as well:
let products = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];
console.log(products);
console.log(products.length);

//what is the type of the products
console.log(typeof products); //object //everything is considered object over here //type of null is object //type of undefined is undefined
//all the arrays are considered as an object

//emp data:
let empData = ['vivek', 30, 23.44, true]; //paracticaly we will use this kind of array to maintain our test data
console.log(empData);
console.log(empData[0]);

//---------------------//
//how to iterate the array?
let number = [10, 20, 30, 40]; 
console.log(number);

for (let i = 0; i<=3; i++) { //let declares "i" so JavaScript knows that i is a variable
    console.log(number[i]);
}
// in above program over array size is 3 so in the for loop we have added the condition "i<=3;"
//but what if tomorrow array size is increased - because array in js is dynamic 
//at that time we want be able to traverse the elements from the 4th index or we need to update the code/condition
//so instead of hard-coding we should write dynamic code/generlize formula 
//using highest index we can iterate up to heightst > using arrys length function we can get the heighst index 
//for arrays always write the condition in the form of heights index


let number = [10, 20, 30, 40, 50, 60, 70, 80]; 
console.log(number);// This is just a blueprint or representation of array on the console[ 10, 20, 30, 40,50, 60, 70, 80]


//iterate the array: using for loop: because the we know the size of the array: number of iteration are fixed
//so whenever we want to do array iteration then best practice is to use "for loop"
for (let i = 0; i <= number.length - 1; i++) {
    console.log(number[i]);
}

console.log('-----------------');

//to print the array in reverse order
for (let i = number.length - 1; i >= 0; i--) {
    console.log(number[i]);
}

//Advanced loops
//for .. of
// for ..in
//forEach
//map, reduce, fitler

// below is the empty array 
let pop = [];
console.log(pop.length);//0
//now we say > go to the 100th index and add 1000 > so what will be the length > 101 
pop[100] = 1000;
console.log(pop.length);
console.log(pop); // [ <100 empty items>, 1000 ]
//we don't write above kind of code in production or in the framework. above is just concept and for interview and for our undarstanding

//so here 100 segments are empty/undefined. we can't see when we print the normal array on console. Normal o/p is  [ <100 empty items>, 1000 ]
//but when we traverse using for loop then we will be able to see "undefined" for all the empty items
for (let i = 0; i <= pop.length - 1; i++) {
    console.log(pop[i]);
}




let num = [1, 2, 3, 4, 5];

let i = 0;
while (i <= num.length - 1) {
    console.log(num[i]);
    i++;
}


//for ...of
//for each
//for .. in


let arr = [1, 2, 3, 4, 5];
arr[-1] = 100;
arr[-2] = 300;
console.log(Object.getOwnPropertyNames(arr)); //[ '0', '1', '2', '3', '4', 'length', '-1', '-2' ] // printing only properties of an array //positive index and negative index is property, length is property