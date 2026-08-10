/**
 * Program - 1 
 */

//To check upto what number i can go  / up to what leavel i can go in number
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
//9007199254740991 // this is maximum range of the number 
//beyond that if we go then we might get some wrong result/output
//so to avoid wrong result > what is the safer option for us for 'long numbers' and 'double numbers' and 'big int number'

//to check the limit of MAX// below should give wrong output
console.log(9007199254740991 + 12232);

// so js we have concept of bigint 
// bigInt is used if your number is going beyond the range of number [range of number - 9007199254740991]
// use bigint if it is going beyond this range -> 2^53-1
//example -> distance between sun and moon, in medicale [blood cells], biology based apps , madical based app, scintific app
//how  to define bigint number in js 
// use 'n' behind the value 
// so whenever you see suffix "n" that means its a big int number
let num = 100n;
console.log(typeof num);//bigint
console.log(num);

/**
 * Another way of creating BigInt is by using "BigInt interface"/"BigInt constructor"
 */
let n1 = BigInt(2000);
console.log(n1);
console.log(typeof n1);//bigint

// 100n and BigInt(2000) both ways are used to create bigInt numbers

/**
 * But there are some rules for BigInt
 * what if i want to perform some airthmatic operation here 
 */

//uncomment below to check the result when we add Bigint with number
//console.log(num + 10);//100n [this is bigInt] + 10[this is normal number]
//above will give and error > error > TypeError: Cannot mix BigInt and other types, use explicit conversions
//because BigInt can be perform the airthmatic/matametical operation with another BigInt only 
//we can not perform any airthmatic operation of BigInt with normal number/integer 
console.log(num + 10n);//100n + 10n = 110n  // here both are BigInt  
//Actual value is 110 only 
// n is just to represent that given number is BigInt 
//Any mathematicl caluclation you want to do with BigInt then it should be done with BigInt only 

console.log(10n * 2n);//20n

console.log(10n / 2n);//5n

console.log(-10n); // this is negative big int 

console.log(90071992547409911212n + 1212121n);//90071992547411123333n

console.log("100n" + 10n);//100n10 [n of 10n will not be printed when we conctinate] 
// we do the concatination then n from 10n willbe removed > due to concatination

console.log(+"100n" + 10n);//100 + 10n
//above will give error > error > TypeError: Cannot mix BigInt and other types, use explicit conversions
//why error > +"100n" can not be converted to BigInt > it will considered as normal 100 number
//and we can not calculation of normal number with bigInt 
//+ [unary operator] can not convert string Bigint to Bigint > it will convert to normal number
//BigInt can not be converted


/**
 * What is the prefered way of crearting phone number in any programming number
 * with number, with Bigint or with string  -> string
 * SSN, Aadhar card, CC, Debit, FAX,  <- They all are numbers
 * string
 * 
 * why? because we are not going to do any calculation on phone number, SSN, Aadhar card, CC, Debit, FAX
 * we don't do cany calculation on credit card number 
 */

let phone = "9876765432";
//SSN, Aadhar card, CC, Debit, FAX,  <- They all are numbers 
//string

let ssn = "121212121212"; //corret way of writing ssn 
//let cc = "1213 1212 3434 5454";
let tel = "+101 (2343-2323-12)"; // Formating also matters based on country > in phone number formatting matters > so right choice for cc is string 

//so what is the advantage, if we are declaring with string
// Formating also matters > check below for credit card > in credit card space matters > so right choice for cc is string
// if we declare cc as number and write like > 1213 1212 3434 5454 > then how can we check  our cc number is 16 digit 
//let visaCC = 1213 1212 3434 5454 // we can not write like this it will give an error + we can not perform any .length method or anything to check the length and all 
// and that is the advantage we can get with string [we can get size and length of the string]
let cc = "1213 1212 3434 5454";
console.log(cc.length);//19 including spce

console.log(phone.length); //10 // here length is a property and not a function. for property we don't write the parenthesis
//we can not check the length with the normal numbers
console.log(tel.length);//19

//salary should be string or number > number > because we want to add bonus + pf + tax calculation / we can do other calculation on salary 
//all the billing amount should be number > i really want to perfome some calculation on it 