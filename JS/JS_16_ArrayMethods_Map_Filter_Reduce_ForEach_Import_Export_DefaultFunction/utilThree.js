/**
 * Program 9
 */

/**
 * we if want to change the name of any "export" then we can change it 
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