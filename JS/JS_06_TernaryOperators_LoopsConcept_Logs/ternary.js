/**
 * Program - 1 
 */

//ternary operator --> ? :
//ternary operator is used for small conditions not for big conditions
let flag = amount >= 10 ? true : false; // if the condition is satisfied mount >= 10 ? (ask the question- then what do you want to do )
//after the condition, ask the question
//if conditionis satisfied then go to first part then go to second part 
//if the condition is true then first part will be assigned to true else second part will be assigned to true
//dont use ternary operator for multiple condition otherwise syntax will be very complex 
//ternary operator is used to sort the lines of if-else code 
//instead of writing if-else write ternary operator
//this days people write ternary operatoe instead of writing if-else 
//if you want to write logic then go for if-else or switch case    


let amount = 5 //20
let flag = amount >= 10 ? 'naveen' : 'waseem'; // if the condition is satisfied mount >= 10 ? (ask the question- then what do you want to do )
console.log(flag);

let element = 'link'; //button //text 
let action = element === 'link' ? 'click' : 'ignore';
console.log(action);


/**
 * in the log generally what we do > we print something on the console whether it's number or string 
 * but console.log says what > when we move the cursor on log it says below 
 *  Console.log(...data: any[]): 
 *  means you give me any kind of data in the form of array
 *  so take the advantage of that 
 * meansn using array type we can print anything/values using comma seprated values 
 * 
 * so advantage od console.log is 
 * you can print the single value also and multiple value also - comma seprated
 * this will be very helpful in playwright when we print something in console 
 */
console.log(100, 'naveen', 12.33, true, 'IBM');//100 naveen 12.33 true IBM
console.log(100);



let name = 'poonam';
let age = 30;
let salary = 33.44;
let isActive = true;

//here writing 4 console.log for each value > instead we can write in single console.log 
console.log(name, age, salary, isActive);
console.log(name + age + salary + isActive);//poonam3033.44true // if we  write the + operator then it will start concatinating it 
console.log('user data ', name, age);


/**
 * Let's check another usecase of ternary operator
 */

let bill=50;
let flag = bill >=50 ? true : false;
console.log(flag); // true
/**
 * In above case o/p will be true 
 * but if the condition is false and then we again want to check the another condition then we can do as below 
 * we can say that below is the nasted ternary operator
 * refer - 4-nesated ternary operator 
 */

let bill = 45;
let flag = bill >= 50 ? true : bill > 1 ? 'hi' : 'bye';
console.log(flag);//true

/**
 * So like above we can increase the chain as well
 * We can call the function inside the chain as well
 * see the magic of js,js can handle "true", can handle number, can handle string also in the same variable [let flag = bill >= 50 ? true : bill > 1 ? 'hi' : 'bye';]
 * that's why js is called the dynamic language
 */

let bill = 50;
let flag = (bill >= 50) ? true : bill > 1 ? 'hi' : 'bye';
console.log(flag);//true

/**
 * Multiple conditions we can combine 
 * We can use the ternary operator with the && and || operator as well
 * refer below example
 */
let role = "user";
let flag = role === "admin" || role === "user" ? "grant access" : "please pass the correct role"
console.log(flag);

let bill = 50;
let flag = (bill>=50 && bill <= 100) ? true : bill > 1 ? 'hi' : 'bye';
console.log(flag);

/**
 * Whenevr i print anything to console what will happen ..like console.log('hello') 
 * it will print > hello  on the new line
 * so it is a default behaviour
 * console.log will always print with the new line
 * but we have another way of printing on the new line
 * will print hello with the new line or without new line > without newline
 */
console.log('hello');
process.stdout.write('hello');//process is a node js internal object stdout.write function is there 
//remember that process.stdout.write only works with the string only 

//process.stdout.write will print without new line > check below example 
let i = 1 ;
while (i<=10) {

    process.stdout.write(i + ""); //here we are converting number to string because with process.stdout.write always works with the string only thats whty we are appending with the string here so it will give us string as output
    i++;
    
}

/**
 * /n is a unicode character and  used to generate a new line
 * /t then it will be printed with tab
 */
let age = 20;
let name = 'xyz';
console.log(age, '\n', name);

/**
 * ternary operator is not readable 
 * debugging with ternary operator is complex compare to if-else
 * in case of null check and blank check we go with the if-else
 * we can use ternary operator in the loops as well but avoid it
 */