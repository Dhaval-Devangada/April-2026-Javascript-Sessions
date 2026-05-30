/**
 * Program - 2 
 */
/**
 * concat is same concept as other languages but you will see some weird things in js
 *anything other than + > it will be a mathematicale calculation
 */

let x = 100;
let y = 200;

let a = 'selenium';
let b = 'playwright';

/**
 * Concat operator
 */

console.log(x + y);  //300
//here we are adding two number so '+' is called normal "addition" operator

console.log(a + b);//seleniumplaywright // so yes string can be concatenated / string can be merged 
//here we are merging two string so '+' is called the concatination operator


console.log(x + a);//100selenium
//execution will always start from the left side
// here x is number and a is string 
//so string can be concinated with number as well

console.log(a + y);//selenium200

console.log(x + y + a + b);//300seleniumplaywright
//100+200 = 300
//300+selenium=300selenium
//300selenium + playwright= 300seleniumplaywright

console.log(a + b + x + y);//seleniumplaywright100200
// selenium + playwright = seleniumplaywright
// seleniumplaywright + 100 = seleniumplaywright100
// seleniumplaywright100 + 200 = seleniumplaywright100200

console.log(a + b + (x + y));//seleniumplaywright300
//selenium + playwright = seleniumplaywright
// so the now entire "seleniumplaywright" will be concatinated with result of (x+y)
// x + y we have written inside the bracket so, first it will be calculated together
// so first "seleniumplaywright" then (x+y) = 300
//then seleniumplaywright +300 = seleniumplaywright300
//so first (x + y) will be calculated then resultant will be concatinated with "a+b"

//with backtick how can we print
console.log(`${a}${b}${x + y}`); //seleniumplaywright300
console.log(`${a} ${b}${x + y}`); //selenium playwright300 // i wanted to give space after selenium
console.log(`${a}${b}${x + y + 80}`); //seleniumplaywright380 // whatever is there after placeholder, it will start concatinating it  //in backtick/placehokder we need to write code as an expression otherwise it will start concatinating 
console.log(`${a}${b}${x + y}100-20`); //seleniumplaywright300100-20 // whatever is there after placeholder, it will start concatinating it 
console.log(`${a}${b}${x + y}(100-20)`); //seleniumplaywright300(100-20) // whatever is there after placeholder, it will start concatinating it 
console.log(`${a}${b}${x + y}${100-20}`);//seleniumplaywright30080

console.log(x + y + a + b + x + y);//300seleniumplaywright100200
//100 +200 =300
//300+selenium=300selenium
//300selenium+playwright=300seleniumplaywright
//300seleniumplaywright + 100 = 
//300seleniumplaywright100+playwright=300seleniumplaywright100playwright

console.log(1 + "1");//11 // first 1 is number and second 1 is string 
//when we add any string with anything then it will always be considered as concatination


console.log("1" + 1);//11 // first 1 is string and second 1 is number so again concatination

console.log(1 + 1);//2 //both are numbers so normal addition 

console.log("1" + "1");//11 // both are string, so string are always be concatinated with + operator

console.log("--------------");
/**
 * sub operator
 */

//it will give you > error,11 , 0 or what?
console.log(1 - "1"); //1 - 1 = 0
//the o/p is 0 here 
//here we have - minus operator
//concatination applies only for the + operator
// first 1 is number and 2nd "1" is string but js will convert it to number 
console.log("5" - 2); //5 - 2 = 3  // first "5" is string but js will convert it to number first and 2nd 2 is number then sub operation willbe performed
console.log("10" - "4"); //10 - 4 = 6 // both are string and will be converted to number then sub operation will be performed

//in js errors are very rare because js is super flexible 
//what will the o/p of below? > hello, error, nothing or something
console.log("hello" - 2); //NaN -- not a number
//we can not convert "hello" into any number so we can not do -2 from string so that why o/p NAN

console.log(10 - "naveen");//NaN

//whenever there is a plus operator than its concatination with the string but if it's a minus operator then proper mathematicale operation will be performed

console.log("--------------");
/**
 * division operator
 */


console.log(10 / "2"); //10 / 2 = 5 // "2" string will be converted into number then division operation will be performed 
console.log("20" / "5"); //20 / 5 = 4 //both will be converted to number then math operation will be performed 
console.log("20" / "testing"); //NaN // we can not convert "testing" string to any number 

console.log("--------------");
/**
 * multiplication operator
 */


console.log(10 * "2"); //10 * 2 = 20  
console.log(10 * "hello"); //NaN

/**
 * exponential **
 */


console.log(2 ** 3);//2x2x2=8
console.log("2" ** 3);// 2 ** 3 = 8


//Unary Plus (+): converts to a number:
//we have + operator first 
//"42" is a string 
//+42 means we are saying that convert string "42" to a number 
//so first "42" will become numeric here 
//here we have single + so it's not ++ or -- increment or decrement operator 
console.log(+"42" + 5);//42 + 5 = 47 //so first 42 will become a number then additin operation will be performed 
let d = "45";
console.log(+d + 10);//55

//playwright example 
let totalAmount = "2000";// this is coming from UI // whenever we are reading anything from the web its always coming in the form of string
console.log(+totalAmount + 200); //2000 + 200 = 2200 // because of +[unary plus operator] sting "2000" will be converted to number

//Unary Negation (-) : 
console.log(-"42" + 100); //-42 + 100=58 //string "42" will be converted to -42 due to - [unary negation] sign
console.log(-"130" - 20);//-130 - 20 = -150

//When we read anything from the UI/web app/browser then everything we get is in the form of string/double quote 
//that is why we are doing below excersise > otherwise we can use/do normal operation as well [-120-20][-42+100]
let salary = "30000"; //getting from UI in the form of string
console.log(+salary + 2000);   // want to give 2000 as a bonus > so first we need to convert salary to numeric then we can add bonus

//so unary plus and unary negation are used to do the conversion

console.log(100 - -"40");//100 - -40 => 100+40 = 140

console.log(1 + +"2");//1 + +2 = 3

console.log(+"hello" + 2);//nan // we can not convert string to number


let marks = "-100"; // this is full string its - minus sign us between the string as well
console.log(-marks + 20);



let number = '100';
console.log(`${-number + 20}`);// we need to wtite expression format withing the curly barces {} we need to write

/**
 * if there is + operator then its always considered as what 
 * > adding with string then concatination 
 * > adding with number then addition
 */

let s1 = 707;
let s2 = '13';
console.log(`${s1 - s2}` + 200); // in backtick math operation will be performed 707-13=694 200
//once the math operation performed inside the ${s1 - s2} = 694
//then we have backtick so 694 will be a string 
//string + number = string 