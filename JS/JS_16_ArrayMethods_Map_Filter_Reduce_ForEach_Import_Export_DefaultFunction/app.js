/**
 * Program 4 
 */

//app.js is the consumer 
//and util.js is the producer of the "export"

//we are going to import with the destructure

import {PI, driving, print} from './utils.js' // "./" meas go to the current directory
console.log(PI); 

import {PI, driving, print} from 'C:/Users/devangadad/OneDrive - Paul Mason Consulting/April 2026 Javascript Sessions/JS/JS_16_ArrayMethods_Map_Filter_Reduce_ForEach_Import_Export_DefaultFunction/utils.js'
console.log(PI);

import {PI, driving, print} from 'file:///C:/Users/devangadad/OneDrive%20-%20Paul%20Mason%20Consulting/April%202026%20Javascript%20Sessions/JS/JS_16_ArrayMethods_Map_Filter_Reduce_ForEach_Import_Export_DefaultFunction/utils.js'
console.log(PI);

import {PI, driving, print} from '../JS_16_ArrayMethods_Map_Filter_Reduce_ForEach_Import_Export_DefaultFunction/utils.js'
console.log(PI);

import {PI, driving, print} from '../../JS/JS_16_ArrayMethods_Map_Filter_Reduce_ForEach_Import_Export_DefaultFunction/utils.js'
console.log(PI);

driving();  
print();
//we have not declared "driving and print" in this file so they are automatically getting imported from "util.js" file
/**
 * ============================================================
 * UNDERSTANDING THE IMPORT PATH
 * ============================================================
 *
 *
 * Path                  Meaning
 *
 * './utils.js'          -> File in the current directory
 *
 * '../utils.js'         -> File in the parent directory
 *
 * '../../utils.js'      -> Go up two directories
 *
 * 'file:///C:/Users/...' -> Absolute Windows file URL
 */


