/**
 * Program - 3
 */

// let i = 11;
// let j = i++ + ++i;  

//i  11 12 13
//j  11 + 13 =24

// console.log(i);
// console.log(j);

// console.log('--------');

// let a = 11, b = 22, c;
// c = a + b + a++ + b++ + ++a + ++b;

//a 11 12 13
//b 22 23 24
//c 11 + 22 + 11 + 22 + 13 + 24

// console.log(a);//13
// console.log(b);//24
// console.log(c);//103


// let i = 0;
// let j = i++ - --i + ++i - i--;

//i 0 1 0 1 0
//j 0 - 0 + 1 - 1

// console.log(i); //0 
// console.log(j); //0

let i = 1, j = 2, k = 3;
let m = i-- - j-- - k--;

//i 0
//j 1
//k 2
//m 1 - 2 - 3

console.log("i=" + i);
console.log("j=" + j);
console.log("k=" + k);
console.log("m=" + m);



let m = 0, n = 0;
let p = --m * --n * n-- * m--;

//m 0 -1 -2
//n 0 -1 -2 
//p -1 * -1 * -1 *  -1


console.log(p);//1
console.log(m);//-2
console.log(n);//-2


//we can increase and decrease on the point values as well 
let d = 1.5, D = 2.5;
console.log(d++ + ++D); //1.5 + 3.5 = 5

// we can not increase or decrease boolean value 
// we will get below error > SyntaxError: Invalid left-hand side expression in prefix operation
console.log(++true);

//we can not apply BigInt on decimal number > parse will immediately give syntax error
//uncomment below and check 
//console.log(12.33n); //   A bingint literal must be an integer not a decimal  

console.log(7/2); // 3.5 

// The o/p of 7/2 is 3.5 
// Then what will be the o/p of the 7n/2n -> 3.5n or 3 or 3n?
// So the question is Bigint don't support the decimal value but output of the below expression[where both are decimal]
// and o/p will be decimal as well > so expression will throw error or will give the result?
//we can not apply bigint on decimal so js will remove the .5 and will give us 3n only 
console.log(7n / 2n);//3n


//can we apply the incremental and decremental operator with BigInt  - YES
let pop = 10n;
console.log(++pop);


//I have bill amount 1000
//Now I want to convert bill amount to string, so how i can do it?
let bill = 1000;

//number to string:
let finalBill = bill + ""; //Simply concat with the string //Anything that you are appending or concatinationg with string then it will become string
console.log(typeof finalBill);

//another way of converting number to string 
let foodBill = 600;
foodBill=String(foodBill);
// console.log(String(foodBill));
console.log(typeof foodBill);//string

/**
 * String to number
 * + will convert the string to number
 * then add number > if addition is getting performed then we can verify that string got converted to number
 */
let marks = "100";
//string to number:
console.log(+marks + 20);//100+20=120

/**
 * Anoher way converting from number to string 
 * just append with blank string 
 */
let marks = 100;
marks = "" + marks;
//number to string
// console.log("" + marks);//"100"
console.log(typeof marks);//number

//BingInt to String
let myNum = 1000n;
console.log(myNum + "" + 200);//"1000"+200=1000200  <-this is string
console.log(typeof myNum);


console.log(myNum + 10n);//1010n // n is used to represent bigInt number [bigInt + bibgInt = bigInt]

//string + anything ===> string
//anything + stirng ===> string
//string + string ===> string
//number + number ===> number
//bigint + bigint ==> bigint
//bigint + number ==> error

//EsLint - This is used for static analysis [about code coverage, coding practices we are following, variable names,right use of string or numbers]
//it will tell you about the problems in the code 
//code is working fine but it will tell what things are unnecessary -> sonarQube for java //eslint is for js

// we can not convert bigInt to number 


let distance = 100000000n;//bigInt
//dribver.fe(...).sendkeys(distance+"");//100000000

console.log(typeof test);//bigint
console.log(test);//100n
//100n --> string : "100"

console.log(+"100n" + 10);//NaN + 10 = Nan

console.log(10 !== "10");



/**
 * Your code is actually converting the number to a string, but you're checking the type of the original variable (`foodBill`), not the converted value.

// another way of converting number to string
let foodBill = 600;

console.log(String(foodBill)); // "600"
console.log(typeof foodBill);  // number


`String(foodBill)` creates a new string value, but it does NOT change `foodBill` itself.

To store the converted string, do this:

let foodBill = 600;

foodBill = String(foodBill);

console.log(foodBill);         // "600"
console.log(typeof foodBill);  // string


You can also convert using:


let foodBill = 600;

foodBill = foodBill.toString();

console.log(typeof foodBill); // string


 */