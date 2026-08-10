/**
 * Program - 2
 */

//++[incremental-increase the value by 1] and --[decremental-decrease the value by 1]

//1. post(later) increment:  [increase the value later]
//first assign and increase
let a = 1;
let b = a++; //++ we have written after "a" so its a post increment
//"b" says whatever the current value of a immediately you give it to me 
//then increse the value of "a" by 1 

console.log(a);//2 //check the current value of "a"
console.log(b);//1 //check the current value of "b"

//js will go and check in the memory that what is current value of "a" and "b" in the memory

let x = -99;
let y = x++;

console.log(x);//-98
console.log(y);//-99

//below will give me 10 or 11?
//console.log says -> you give me the "num" immediately -> so it will print the 10 -> then later increment will be done and the value will become 11
//so console.log will consume the original value of num
//and later on if we print the value then we will get 11 [js will go and check in the memory that what is the latest value of num]
let num = 10;
console.log(num++);//10

console.log(num);//11


//2. pre(before) increment:  [increase the value before]
//first increase and then assign
let m = 1;
let n = ++m; //++ we have written before "m" so its a pre increment
//"n" says whatever the current value of "m" increase the value by 1 then you give it to me 
console.log(m);//2
console.log(n);//2

let u = -1000;
let v = ++u;
console.log(u);//-999
console.log(v);//-999

//3. post(later) decrement: [first you assign then decrease]
let w = 2;
let r = w--;
console.log(w);//1
console.log(r);//2

//4. pre(first) decrement: [first you decrese then assign]
let s = 2;
let c = --s;
console.log(s);//1
console.log(c);//1


let pop = 10;
console.log(++pop);
console.log(pop);


let rest = -9;
console.log(--rest);
console.log(rest);

/**
 * We can not perform incremental and decremental opeation on variable which is declared with "const" identifier
 * If we try to do it then we will get an error
 * and error is >  Assignment to constant variable.
 * Try by uncommenting below
 */
// const myVar = 8;
// console.log(myVar++);