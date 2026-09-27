 /**
 * Program 5 
 */
 const PI = 3.14;

 function driving(){
    console.log("driver is driving");
}
 function print(){
    console.log('printing');
}


//combine everything in the "export" object at the last line 
//at the end we can decide that what variable/functions we want to export
export {PI,driving,print}