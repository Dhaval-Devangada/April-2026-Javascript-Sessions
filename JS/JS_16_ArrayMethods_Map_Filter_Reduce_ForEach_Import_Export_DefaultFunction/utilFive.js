/**
 * Program 13
 */


/**  statemnet which is under the console.log('...') are getting printed while we run the "appFive.js" file. though we are not exporting "console.log('...')" */

const PI = 3.14;

console.log('hello world');

function driving(){
    console.log("driver is driving");
}

function print(){
    console.log('printing');
}
export default function coding(){
    console.log('coding');
}

console.log("bye world");// we can not export/import "console.log" - this is just a log 

export {PI,driving,print}