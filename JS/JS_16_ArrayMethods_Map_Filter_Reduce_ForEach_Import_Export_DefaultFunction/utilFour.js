/**
 * Program 11
 */

const PI = 3.14;

function driving(){
    console.log("driver is driving");
}

function print(){
    console.log('printing');
}

export default function running(){
    console.log('running');
}

export {PI,driving,print}

// export *;  //this is not allowed 
//while exporting we need to explicitly need to tell that what we want to import 
//during the import, we can import with the * pattern