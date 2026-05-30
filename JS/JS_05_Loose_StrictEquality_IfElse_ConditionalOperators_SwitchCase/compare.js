/**
 * Program -1 
 */

/**
 * There are two types of comparasion and equality we can do it here 
 * what is the diff between == vs ===
 */


//==  vs ===
// == loose equality : it will check only the value [whenever we are comparing two values,numbers, string or variable or anything --> loose equality will check only the value]
// === strict equality : it will check value + type [if value + type both match then only it will give you true otherwise it will give you false ]

console.log(10 == 10); // both are value and both same so it will give you true 
console.log(10 == "10");
//10[number] == 10[string] ==> true  [we are comparing number vs string]
//So js says how exactly you are comparing -> you are comparing with ==
//js don't bother about the single quote and double quote  and backtick
//js will always convert string to number 
//in js this level of flexibility is allowed in other languages it's not allowed 

console.log("10" == 10); //10 == 10 ==> true 
//we don't need to write anything for conversion
//It will automatically convert "10" to number 


//strict equality
console.log(10 === 10); //true [both values are same[10] and both types are same[numners]]
console.log("10" === 10); //string === number ==> false
//first "10" is string 
//second 10 is number 
//both values are same but type is different so it's false

/**
 * So in real time which one is the best practice to use 
 * always go with strict equality [data type + value ]
 */

//Always remember true is 1 and false 0. In java we don't have that 
//true = 1
//false = 0
console.log(true == 1); //1 ==1
//first true will be converted to 1 because js knows true is equal to 1 

console.log(true === 1);//boolean vs number 
//above we are comparing boolean with number so its false 
//may be it will convert true to 1 internally but still type of that 1 is boolean and we are comparing boolean with number 

console.log(false == 0); //0==0 true
console.log(0 === false);
//above we are comparing number with boolean so its false 
//may be it will convert false to 1 internally but still type of that 1 is boolean and we are comparing boolean with number 

/**
 * there are some special cases also
 */
//whenever we see "" or '' without anything - we can say it's a empty string 
//Anything empty in js is always considered as 0 here [it's predefine rule in js]
console.log("" == 0); //0 == 0 -> true
//js will convert first empty string in 0 then comparing with 0 num 

console.log("" === 0); //
//above may be js is converting empty string to 0 but type of that 0 is string and and we are comparing it with 0 which is number -> strict equality - > so false 

//[] - empty array  - Anything empty in js is always considered as 0 / always equal to 0 
console.log([] == 0); //0 == 0
console.log([] === 0);//array vs number -> strict equality //false

let n1 = 10;
let n2 = "10";
console.log(n1 == n2);//both are 10 - loss equality - true
console.log(n1 === n2);// values same - types diff - stric equality 

//js says for me null and undefined both are same 
//null and undefined means -> there are no values 
console.log(null == undefined);//both are exctly same //true [null is also no value , undefine also no value] [null - we generally define for the object type value and udefine for the normal variable]. so as per js both are no values no values
console.log(null === undefined);//types -> object vs undefine//false 
//we first we need to check type of "null" and "undefined"
//type of "null" is object which an legasy bug in js 

console.log(typeof null);//object
console.log(typeof undefined);//undefined

console.log([] == ""); //0 == 0 // true [blank array will be converted to 0 first then blank string will be converted to 0 then comparasion will be done]
console.log([] === ""); //type is diff -> object === string //false
//above case we can say we are comparing non-primitiv with primitive 
//non-primitive means something releated to references 

//another special case 
//both arry are empty but it will give you false - it will not give you true here 
//because in below case it will start considring the memory address and memory add of both array will be diff 
//address is compared over here 
console.log([] == []); //121212 == 1212343 //false [memory to memory comparasion]

console.log([] === []); //121212 == 1212343 //false  [memory to memory comparasion]

console.log(typeof []); //object

console.log("" == ""); //0 == 0 : true [any blank value will be converted to 0 ]
console.log([] == []); // array willbe considered as an object [memory comparasion]

console.log(null==null);//true
console.log(null==[]);//false -> null is seprate value and [] is seprate value [null is no value and second is empty array]
console.log(null ===[]);//null is seprate object and empty array is seprate object - assume type is object - so type are matching 
//but the values are not matching -> one is null and second one is competely blank array
//we can not compare null with the blank array 