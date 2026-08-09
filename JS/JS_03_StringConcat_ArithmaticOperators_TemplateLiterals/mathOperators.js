/**
 * Program - 3
 */

console.log(1 + 1);//2
console.log(1 - 1);//0
console.log(10 / 2);//5
console.log(10 / 3);// 3.3333333333333335 //js will not do the any trunction/round off//same thing in java will give you 3
console.log(5 / 2);// 2.5

console.log(5.0 / 2);//2.5
console.log(5.0 / 2.0);//2.5
console.log(5 / 2.0);//2.5

console.log(0 / 9);//0  // 0 divided by any number is 0 
console.log(9 / 0);//Infinity //any number divide by 0 is infinity // here in js we get proper Infinity, airthmetic exception will not be thrown like java
console.log(9.2 / 0); //Infinity //any number divide by 0 is infinity //airthmetic exception will not be thrown like java
console.log(9.2 / 0.0); //Infinity //any number divide by 0 is infinity //airthmetic exception will not be thrown like java
console.log(0 / 0); //NaN  //don't ask why it depends on language to language // in java it will give you exception
console.log(0.0 / 0.0);//NaN

//modelo operator will give you the reminder
console.log(10 % 2);//0
console.log(10 % 3);//1
console.log(100 % 4);//0