/** Program 2 */

//map: transform every element of the array
//go to each and every element of the array and then transform it.

/**
 * map: transform every element of the array
 * always returns: new array.
 * returns:  new array with the same length  
 * 
 * do the square of the every element of the array 
 * convert each element to upparcase
 */

/**
 * map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
Calls a defined callback function on each element of an array, and returns an array that contains the results.
 */

let num = [1,2,3,4,5];
let numNum = num.map((e)=>{
    /**
     * map func says that "e", you go to each and every element in the array
     * then we say 
     * "e" when you go there 
     * then 
     * multiply each and every element by 2
     * 
     * conclusion : "e" you multiply each and every element by 2 
     */

    e*2;
});
console.log(numNum);

let newNumTwo = num.map(e=>e*2)
console.log(newNumTwo);


let numSquare = [1,2,3,4,5];
let newNum= numSquare.map(e=>e*e);
console.log(newNum);//[ 1, 4, 9, 16, 25 ]

/**
 * so what is the difference between "map and forEach"
 * 
 * below is the method signature of the "forEach" method
 * (method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
 * "forEach()" is returning void 
 * "forEach()" method will not give you a new array => it is just used for the "iteration" purpose
 * 
 * but here with the "map" function. it will not change the existing array
 * After the manipulation. it will create the new array for us.
 */

//in below example, without changing anything in the existing array, transform each and every element to upparcase
let empNames = ['Uday', 'nitin','Tom','Naveen','Poonam'];
let namesUpper = empNames.map(e=>e.toUpperCase());//here "e=>e.toUpperCase()" is a callback fun. and that callback fun is working like an argument for the "map" func
console.log(empNames);//there is no change in exising array
console.log(namesUpper);//new array got created after the manipulation

//give me the all the odd/even number from the array
//
let numList = [1,2,3,4,5,6,7,8,9,10];
numList.forEach((e)=>{

    if(e%2===0){
        console.log(e);
    }
})
//"forEach" just a method, just to iterate the values. It is not doing anyhting with the array. It's not giving me a new array here.
//"forEach()" returns "void"
//Perform the specified action for each element in an array just for the iteration purpose.
//so we use the "forEach" loop just for the normal iteration
//but i want do some maipulation/transform each an every element and i really want to get a new array then in that i will start using map.

//below will
let numListTwo = [1,2,3,4,5,6,7,8,9,10];
let evenNum = numListTwo.map(e=>e%2===0)
console.log(evenNum);

/**
Yes, this code is valid, but there is an important point: map() does not filter the array. 
It creates a new array with the result of the callback for every element.

map() visits every element:

so ouput is below:
[
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  true
]

If you actually want only even numbers then Use filter(), not map():

map()
 ↓
Transforms EVERY element
 ↓
Number of elements remains the same

 */

//these methods will create the function inside the heap and function are kind of objects but they are not exactly the objects.


//2. filter:remove from the existing array on the basis of given condition
// returns: new array with the same length or length can be decreased depending upon filtering criteria  
//filter will always return a new array
//if filter methods dosen't satify the criteria then it will "return" => same size of array or less than same size of array

//give me all the numbers which are greater than 30
let numbers = [10,25,30,45,50,60];
let graThan30 = numbers.filter(e=>e>30); 
console.log(graThan30);
//"e" you go to each and every element in he array 
//then "e>30" which the condition
//so we are saying that "e" you go to each and every element in the array, and collect all the elements which are greater than 30 
/**
 * here we have "predicate" in the method signature 
 * "predicate" is also a kind of "callback"
 */
/**
 * 1st method signature
 * filter(predicate: (value: number, index: number, array: number[]) => value is number, thisArg?: any): number[]
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
Returns the elements of an array that meet the condition specified in a callback function.

2nd method signature
filter(predicate: (value: number, index: number, array: number[]) => unknown, thisArg?: any): number[]
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
Returns the elements of an array that meet the condition specified in a callback function.
 */

/**
 * If we solve above problem with for loop then we need to write many lines of code 
 */
console.log(typeof graThan30);//object //type of graThan30 is object because all the arrays are object
//"graThan30" is a array and not a normal variable


/** from given array try to create a new array which hold only even numbers */
let numbersTwo = [10,25,30,45,50,60];
let evenNumFiltered=numbersTwo.filter(e=>e%2===0);//here "filter" is basis on what ==> it basis on "e%2===0" or filter out the array on the basis of "e%2===0"
console.log(evenNumFiltered);

/** from given array try to create a new array which hold only odd numbers */
/** from given array try to create a new array which hold only even numbers */
let numbersThree = [10,25,30,45,50,60];
let oddNum=numbersThree.filter(e => e%2 !== 0);
console.log(oddNum);

/**
 * idea here is that 
 * suppose i have a bucket
 * in this bucket i have 100 balls are available 
 * and each and every ball is having some different colour[blue/red/green/black/white]
 * now filter it out and give me only those balls which are having blue colour
 * so what will happen that after  the filteration process we will have a new container which are having onbly blue colour balls only
 * before the the filteration process container size/array size wass 100 and after the filteration process container/array size is 5 
 * so here existing array/existing container did not get impacted
 * 
 * we again cal filter the newly created array/container[which are having blue colour] based on some condition
 * like give me only those balls which are having specific dimension
 * like give me only those balls which are having specific radious /radious > 5
 * so inabove case we will again have a new array
 * 
 * so we just keep filtering it out 
 * 
 * real-time example
 * so whenever we write the logic on amazone.com 
 * thousneds/millis of products are available 
 * but what we do that "seller= this" then "colour=this" 
 * so keep selecting the check box then on the basis of that we can see the results 
 */


/**
 * From the below employee array give me the name where length of the employee name is greater than 3 
 */

let empNamesTwo = ['Uday', 'nitin','Tom','Naveen','Poonam','om'];
let longNames = empNamesTwo.filter((e)=>e.length>3)//supply "e" on the right hand side, and what will be our condition => "e" you go to each and every element and capture it's length and if it's >3 then only you have to capture it.
console.log(longNames);//[ 'Uday', 'nitin', 'Naveen', 'Poonam' ]

//can we do multiple filteration process?
let producData = ['apple mackbook','apple iph','samsung galaxy','cannon','apple air'] //5
//give me all the products which are starting with apple
let finalProd = producData.filter((e)=>e.startsWith("apple")) //[ 'apple mackbook', 'apple iph', 'apple air' ] //3
                        //now give me only those products where "iphone" is available
                        .filter((e)=>e.includes('iph'))  // here filter will be applied to above array which is already filtered // [ 'apple iph' ] //1
                        //now convert the "iph" into 'iphone' // [ 'apple iph' ] => convert it/transform to "apple iphone"
                        .map((e) =>e.replace('iph','iphone'))//1 - transformation
console.log(finalProd);

//above manupulation will not impact the original product array
console.log(producData);

/**
 * multiple chaining also we can create 
 * 2 times filteration / 3 times filteration - there is no limit on that 
 * we had 5 products
 * then 5 to 3 products 
 * then 3 to 1 product 
 * then transformation
 * 
 * so howmany funcions we have used in above 4/5 lines
 * 2 times filter
 * 1 time map
 * and 2 filter method is taking arrow fun as an argument - so 2 arrow
 * and 1 map method is taking arrow fun as an argument - so 1 arrow
 * stratWith,includes and replace are also a methods - 3 method 
 * 
 * above will not impact the performance
 * Above is good for data manipulation
 * 
 * We will use above concept in the framework as well
 */


//reduce: Combine everything into ONE value
//It means it will return a single value

let numData = [10,20,30,40,50];// and we need sum of all the elements
let total = numData.reduce((sum,n)=>sum=sum+n,0);  //
console.log(total);

/**
 * here we need to variable why?
 * one is to hold the sum of all the values 
 * and one is , to iterate the array 
 * 
 * so "sum" will hold the result 
 * and "n" will go to each and every element
 * 
 * then we have given both variable to right hand side 
 * where we have created formula to do the sum 
 * then we have written initial value of the sum which is 0
 */

/**
 * reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number
 * "reduce" accepts the "callbackfn" - It means it accepts the "arrow fun" as an argument
 * inside the reduce fun -> we will create the arrow function
 * arrow fun says you have to give me two variables here 
 * first - sum - means give me sum of all the variables 
 * second - n - "n" you go to each and every element in the array
 * then write "=>"
 * then we are saying "sum = sum+n"
 * then what is the initial value of "sum" = 0
 * 
 * 
 * we do like above in java as well
 * let sum = 0;
 * sum = sum + n;
 * 
 * we have created two variables "sum and n"
 * we have created "sum" to hold the entire "sum" - that is the result value / result variable
 * and "n" is the iteration variable - means it will iterate each and every guy 
 * and then we have written "formula to do the sum"
 * and then we are saying the "initial value of the sum"
 * It is not mendetory to write the "initial value "
 * but it is alwayts a good practice to write inital value 
 * 
 * we can acheive exact same thing with the normal "for" loop as well
 * 
 */

//print below entire array on the console with the space , without comma and seprator
let producDataOne = ['apple mackbook','apple iph','samsung galaxy','cannon','apple air']
let finalVal=producDataOne.reduce((result,e)=> result+e,"")
console.log(finalVal);//apple mackbookapple iphsamsung galaxycannonapple air

//in below example we are writing initial value as " " [space]
let producDataTwo = ['apple mackbook','apple iph','samsung galaxy','cannon','apple air']
let finalValOne=producDataTwo.reduce((result,e)=> result+e," ")
console.log(finalValOne);// apple mackbookapple iphsamsung galaxycannonapple air

//in below example we are writing initial value as "-"
let producDataThree = ['apple mackbook','apple iph','samsung galaxy','cannon','apple air']
let finalValTwo=producDataThree.reduce((result,e)=> result+e,"-")
console.log(finalValTwo);//-apple mackbookapple iphsamsung galaxycannonapple air

//in below example we are not writing initial value
let producDataFour = ['apple mackbook','apple iph','samsung galaxy','cannon','apple air']
let finalValThree=producDataFour.reduce((result,e)=> result+e)
console.log(finalValThree);//apple mackbookapple iphsamsung galaxycannonapple air


let producDataFive = ['apple mackbook','apple iph','samsung galaxy','cannon']
let finalValFive=producDataFive.reduce((result,e)=> result + e + " ", "Auto")
console.log(finalValFive);//Autoapple mackbook apple iph samsung galaxy cannon 
/**
 * "reduce" func is not that important 
 * but "map" and "filter" func are very important 
 * 
 * so what is the difference between "filter" and "map"?
 * "filter" method will do what? - filteration
 * what is the return type of "filter" method? => a new array with same length or with less length
 * 
 * map - does the complete transformation of each and every element
 * what is the return type of "map" method? => new array with the same length  
 * 
 * reduce:
 * reduce will not "return" any kind of array
 * reduce combine , multiple elements together, perform some action on it [like sum, combine all string] and
 * return a single value
 * 
 * Thsese are the array functions and 
 * each and every func will take what 
 * arrow func /call back 
 * why arrow func?
 */

/**
 * usecases of reduce
 * sum of all the numbers
 * to calculate the amount of the cart
 */