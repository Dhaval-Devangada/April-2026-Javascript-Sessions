/**
 * Program - 3 
 */


//1. push: add the element to the end of the array
//"length" property will tell you "length" of the array
let num = [1,2,3,4,5];
console.log(num.length);// 5

/**
 * "length" is a property or method?
 * if you mouse hover then you will come to know - it's property
 * if it a "function" then we would have writen "length()" - with the paranthesis we need to call the method.
 * 
 * all the arrays will be considered as an object. It will be stored inside the heap memory
 * "length" property is a part of our object
 * so here 
 * we have one object inside the heap which has values [1,2,3,4,5,length]
 * and that object is referred by "num" reference variable which is inside the stack
 */

/** how to add variable in the array? */
let e1 = num.push(100);
console.log(num);
//100 will be added to the end of the array
//mouserhover on the "push" method and check the return type. 
//"Appends new elements to the end of an array, and returns the new length of the array."
//"push" method returns the new length of the array
console.log(e1); //"6" is the new length of the array.

/**
 * Suppose we have product array in PW then after we want to add one more product/customer/one more product in the cart 
 */

//2. pop: remove the last element
let num = [1,2,3,4,9];
let e1 = num.pop(); //pop() = Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(num);
console.log(e1);

let e2 = num.pop();
console.log(num);
console.log(e2);

let e3 = num.pop();
console.log(num);
console.log(e3);

//pop() will remove exactly the last element.
//what will be the return of the pop? -> It will give you what exactly you have removed. It will not give you the length of the array.

//3.unshift: add element to the beginning of the array: 
let cart  = ['imac','samsung','iphone','macbook'];
console.log(cart);//before applying unshift()
cart.unshift('mackbook air');// add one macbook air to the beginning
console.log(cart);
//usecase: in backend we can use this method for "adding the prodcut" to the cart [in the cast laest product appears first]

/**
 * Are push(),pop() and unshift() are doing what?
 * are they changing the existing array/are they impacting existing array? - YES, so because of that these are called MUTATOR functions/methods or Mutator operation
 * It means they will change the existing array
 * If we apply any method (push(),pop(),unshift()) on any array then it is changing the existing array but it is not creating copy of the array
 * 
 * Mutator operation will change the existing array and will not create/make the copy of the array
 *
 */

//4.shift() will always removes the first element from the array.
let cart  = ['imac','samsung','iphone','macbook'];
cart.shift(); //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(cart);
//usecase: in backend we can use this method for "removing the prodcut" from the cart 


//5. splice: it will add/remove/replace the value from anywhere in the array 
//splice will perform n number of things in the array
//it will add the value anywhere in the array
//it will remove the value from anywhere in the array
//it will replace the value from anywhere in the array

let cart  = ['imac','samsung','iphone','macbook'];
//cart.splice()// this is created just to check suggestions. just remove the whole bracket and again add bracket so that you can see all the suggestions(make sure that your cursor is in between )
cart.splice(0,0,"Naveen"); // "Naveen" will be added at the starting and rest of things will say as it is. why because we have given starting index as 0
//1st parameter - staring index - we have written '0' - 0th index is imac
//2nd parameter - delete count[that how many elements you want to delete] - we have written '0' - it means that don't remove anything from the elements
//3nd parameter - elements that you want to add -our starting index is 0 - so elements will be added in the begning - we have written "Naveen" - so naveen will be added in the begning 
console.log(cart); //[ 'Naveen', 'imac', 'samsung', 'iphone', 'macbook' ]

/**
 * There are total two suggestions will apeears quickley after your write () after the "splice"
 * 
 * 1st suggestion
 * (method) Array<string>.splice(start: number, deleteCount?: number | undefined): string[] (+1 overload)
 * 1st parameter [start: number] - splice method says tell mne the starting index form where you want to start
 * 2nd parameter [deleteCount?: number] - tell me the delete count - it means how many elements that you want to delete
 * 
 * suppose i say,  i don't want to delete anything, so in that case what should we write - 0 ==> [0,0] [0 means i don't wanto to delete any element]
 * 
 * 2nd suggestion
 * splice(start: number, deleteCount: number, ...items: string[]): string[]
 * 
 * 1st parameter [start: number] - splice method says tell me the starting index form where you want to start
 * 2nd parameter [deleteCount?: number] - tell me the delete count - it means how many elements that you want to delete
 * 3rd parameter ...items: string[]- tell me that how many elements that you want to add 
 */

/**
 * Let't create the formula which will help me to write any kind of functionalities
 * so spilice method says give me the "starting index" 
 * so ==> splice(starting index
 * then it says tell me the "delete count"
 * so  ==> splice(starting index, deleteCount
 * then it says tell me the "item(s)" // because we can add more than 1 values using splice method 
 * so  ==> splice(starting index, deleteCount, items(s))
 * 
 */


//we can add multiple values as well - check below example
let cart  = ['imac','samsung','iphone','macbook'];
cart.splice(0,0,'Naveen','tom');
console.log(cart);

//now, delete one element and add one more element 
let cart  = ['imac','samsung','iphone','macbook'];
cart.splice(0,1,'cannon');// remove "imac" and put "cannon" overthere // from the 0th index immediately remove the first elemnt after that add cannon overthere
console.log(cart);//[ 'cannon', 'samsung', 'iphone', 'macbook' ]

//instead of 1 if we write 2 then 2 elements will be deleted
let cart  = ['imac','samsung','iphone','macbook'];
cart.splice(0,2,'cannon');
console.log(cart);

//now go to starting index and don' delete anything and don't add anything 
let cart  = ['imac','samsung','iphone','macbook'];
cart.splice(0,0);
console.log(cart);//no change //[ 'imac', 'samsung', 'iphone', 'macbook' ]

//now start from 2nd position, delete 1 guy and then add 'cannon' there
let cart  = ['imac','samsung','iphone','macbook'];
cart.splice(2,1,'cannon');
console.log(cart);

/**
 * splice operaiton is impaction existing array or not? - YES
 * because from the exising array, we are doing what? what kind of operation we are performing?
 * we are performing manipulation within the same array 
 * add/ remove /replacing
 */

//now start from 0, in delete count write "cart.length", and add cannon over there
let cart  = ['imac','samsung','iphone','macbook'];
cart.splice(0,cart.length,'cannon'); //cart.length will give you what? ==> length of the array => ultimately length of the array is also a number
//so it means remove every thing from 0th index and  up to the length and then add "cannon" there
console.log(cart);//[ 'cannon' ]

//go to the length of array, delete 1 element and then add "cannon"
let cart  = ['imac','samsung','iphone','macbook'];
cart.splice(cart.length,1,'cannon');
console.log(cart); //[ 'imac', 'samsung', 'iphone', 'macbook', 'cannon' ]
/**
 * refer - screenshot 5
 * In above example length is 4 
 * as per splice formula
 * go to up to the length which is 4 
 * and on 4th index we don't have anything
 * we want to delete element on 4th index but on 4th index we don't have anything so it won't remove anything
 * it will just add "cannon" over there
 */

//go to the length-1, delete 1 element and then add "cannon"
//refer screenshot 6
let cart  = ['imac','samsung','iphone','macbook'];
cart.splice(cart.length-1,1,'cannon'); // cart.length-1 means 3rd position
console.log(cart);//[ 'imac', 'samsung', 'iphone', 'cannon' ]
/**
 * so what exactly above operation is 
 * go to last element and replace the "mackbook" with "cannon" - REPLACING
 */

let cart  = ['imac','samsung','iphone','macbook'];
cart.splice(2,0,'mouse') //go to 2nd index, don' remove anything and then add "mouse" => "mouse" will be added before the "iphone"
console.log(cart);

let cart  = ['imac','samsung','iphone','macbook'];
cart.splice(0,-1,'cannon'); //go to 0th index, don' remove anything and then add "cannon" => "cannon" will be added before the "imac"
console.log(cart);//[ 'cannon', 'imac', 'samsung', 'iphone', 'macbook' ]
//According to JavaScript's splice() behavior, a negative deleteCount is treated as 0.

let cart  = ['imac','samsung','iphone','macbook'];
cart.splice(-1,0,'cannon'); //go to "-1th" index[which is "mackbook"], don' remove anything and then add "cannon" => "cannon" will be added before the "mackbook"
console.log(cart);//[ 'imac', 'samsung', 'iphone', 'cannon', 'macbook' ]
//-1 means the last element/position from the end.

//what is the return of the splice?
//if you have deleted anything then "splice()" will return the deleted element 
//return is not that important here


//6. slice: slice means simple copy paste 
//slice() is very similar to substring()
let cart  = ['imac','samsung','iphone','macbook','keyboard']; //index 0 - to - 2 [total 5 elements are there]
//do the slicing and tell me that, from where you want to start and where you want to end 
//slice() will return a copy of the section of the array
let newCart = cart.slice(0,2);//starting from 0th index -> go to 1st index but don't include 2nd index
console.log(newCart); // [ 'imac', 'samsung' ]

/**
 * slice(start?: number, end?: number): string[]
 * (method) Array<string>.slice(start?: number | undefined, end?: number | undefined): string[]
 * 
 * Returns a copy of a section of an array. ==> it means i will give you the new array after the slicing
 * For both start and end, a negative index can be used to indicate an offset from the end of the array.
 * For example, -2 refers to the second to last element of the array.
 * 
 * whenever you are doing slice operation then
 * starting index will be included and "ending index" will be excluded
 * 
 * in school we used to have inclusion and exclusion 
 * "(" - this is inclusion
 * "]" - this is exclusion
 * 
 * (0,5] - include 0 and exclude 5
 */

//what if we write out of bound index?
//in below example we have applied slice operaion from 0 to 10 but here we don't have 10 elements 
let cart  = ['imac','samsung','iphone','macbook','keyboard'];
let newCart = cart.slice(0,10); //[ 'imac', 'samsung', 'iphone', 'macbook', 'keyboard' ]
console.log(newCart);
//here we don't have 10 elements so output is whole array
//remember here it won't give us undefine or null or array index or nothing
//because no values are there  - so they will not give us anything
//so it does no make any sense to use 10 index

//if we say just strat from 0 and don't write end index
let cart  = ['imac','samsung','iphone','macbook','keyboard'];
let newCart = cart.slice(0); //there is no exclusion value - so it will include up to the last element
console.log(newCart);//[ 'imac', 'samsung', 'iphone', 'macbook', 'keyboard' ]
//if you don't give end index - then it will go up to the length of the array. it will consider everyhing here.
//slice operation will not impact the existing array - it will always create new array 

let cart  = ['imac','samsung','iphone','macbook','keyboard'];
let newCart = cart.slice(2); //there is no exclusion value - so it will include up to the last element
//start from 0 then - then it will go up to the length of the array. it will consider everyhing from 2nd index
console.log(newCart);//[ 'iphone', 'macbook', 'keyboard' ]


//slicing will work on the negative index also
//negative  index is not about the rage, negative index is about the aking the last values
//if we write "-1" then what will be the output?
//-1 means last 1 value
let cart  = ['imac','samsung','iphone','macbook','keyboard'];
let newCart = cart.slice(-1); 
console.log(newCart);//[ 'keyboard' ]

//in javascript negative index starts from the last element
//slice last two elements
//-2 means last 2 values
let cart  = ['imac','samsung','iphone','macbook','keyboard'];
let newCart = cart.slice(-2); 
console.log(newCart);//[ 'macbook', 'keyboard' ]

//in below example we have -2 which means last 2 values
//and -5 means,positive 5 - we need to look on right hand side - as we used to do in math
//so from "keyboad" [which is -1 ] - we need to look/find positve 5 index on the right side - which does not exist
let cart  = ['imac','samsung','iphone','macbook','keyboard'];
let newCart = cart.slice(-2,-5); //start from -2 and go upto +5[positive five]
console.log(newCart);//[]


let cart  = ['imac','samsung','iphone','macbook','keyboard'];
let newCart = cart.slice(-4);//give me the last 4 values 
console.log(newCart);//[ 'samsung', 'iphone', 'macbook', 'keyboard' ]

//so negative index will slice give you the last two/three/four elements like that
//and if you give range with negative index then it will give you empty array
//negative  index is not about the rage, negative index is about the aking the last values
//lets say, you are desiging library system and from that library gie me the last two books

//if you pass the negaive values and those values are within the range then it will give us the eligible values 
let cart  = ['imac','samsung','iphone','macbook','keyboard'];
let newCart = cart.slice(-4,-2);
// on -4 we have "samsung" and on -2 we have "macbook"
console.log(newCart);// [ 'samsung', 'iphone' ]
//but to acheive the output , its batter to write the positive range

//7. Reverse: it will reverse the entire array here
let cart  = ['imac','samsung','iphone','macbook','keyboard'];
cart.reverse()//Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(cart);//here we are printing the same cart - so reference will not change
//Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
//mutate means - it will change the existing array
//why it is not recomadedn to use the "reverse()" directly?- because it will change the original array
//some developer has reversed it and othe developers are using the same "cart", so what exactly they will get?
//they will get the updated reverse array - but other developers don't want reverse array
//that is the problem with the reverse() - thats why js guys always recomanded to use a loop in order to reverse, instead of using the reverse
//because it will mutate the array - mutate means - change the exisiting array

//8. indexof : give me the index of the specific element 
//indexOf will always return a number
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present
 let cart  = ['imac','samsung','iphone','macbook','keyboard'];
let i =  cart.indexOf('imac');
console.log(i);

let cart  = ['imac','samsung','iphone','macbook','keyboard'];
let i =  cart.indexOf('macbook');
console.log(i);

//if something is not available then it will give you "-1" not undefine. it its available then it will give you position of that element
let cart  = ['imac','samsung','iphone','macbook','keyboard'];
let i =  cart.indexOf('dhaval');//'dhaval' is not there in above array
console.log(i);//-1

let cart  = ['imac','samsung','iphone','macbook','keyboard'];
let i =  cart.indexOf()
console.log(i);

//what if there are duplicate elements ? (suppose there are two imac)
let cart  = ['imac','samsung','iphone','imac','macbook','keyboard'];
let i =  cart.indexOf('imac')//1st occurrence of imac //this will start from the 0th position and once the "imac" is found then it will return the index
console.log(i);

//in the array dublicates are allowed so we really want to know the position of the second imac - that is 2nd occurance of the imac
//this very famous interiew question
//2nd occurance of the imac
//then how to solve the above problem
let cart  = ['imac','samsung','iphone','imac','macbook','keyboard'];
let i = cart.indexOf('imac',1)
console.log(i);
/**
 * indexOf(searchElement: string, fromIndex?: number): number
 * searchElement - tell me which element are you looking for 
 * fromIndex?  - this is not mendetory to pass , tell me from where you want to start the counting
 */
/**
 * in above example, don't you think that "from index" which is "1" is hard coded value?
 * we don't want to write "1". it should find the "2nd imac" automatically by using dynamic formula
 * refer below example for soluation/formula
 */
// find the 1st occurance of "imac" then "add + 1" - so js will start from the 1st index 
let cart  = ['imac','samsung','iphone','imac','macbook','keyboard'];
let k =  cart.indexOf('imac')//1st occurrence of imac //this will start from the 0th position and once the "imac" is found then it will return the index
console.log(k);
let p = cart.indexOf('imac', k + 1)//k+1 means start from 1st 
console.log(p);

console.log('-----------------------');

//what if we have 3 "imac" in the array and we want to find position of "3rd" imac
let cart  = ['imac','samsung','iphone','imac','macbook','keyboard','imac'];
let k =  cart.indexOf('imac')//1st occurrence of imac //this will start from the 0th position and once the "imac" is found then it will return the index
console.log(k);

//2d occurrence of imac:
let p = cart.indexOf('imac', k + 1)//k+1 means start from 1st 
console.log(p);//3

//3rd occurrence of imac:
let q = cart.indexOf('imac', p + 1);
console.log(q);

console.log('=======================================');

//find that 3rd occurrence of imac in on which position 
let cart  = ['imac','samsung','iphone','imac','macbook','keyboard','imac'];
let elementIndex = 0;
for (let i = 0; i < cart.length; i++) {

   if(cart[i]==='imac'){
    elementIndex=i;
   }
    
}
console.log(elementIndex);

console.log('=======================================');
//below will give you the index of each and every imac
let cart  = ['imac','samsung','iphone','imac','macbook','keyboard','imac'];
let i = 0;
while (i<cart.length) {
    let p = cart.indexOf("imac",i)
    console.log(p);
    i = p + 1
}

//after last "imac" if we have anything then it will give us "infinite" loop
let cart  = ['imac','samsung','iphone','imac','macbook','keyboard','imac','tom'];
let i = 0;
while (i<cart.length) {
    let p = cart.indexOf("imac",i)
    console.log(p);
    i = p + 1
}
//to resolve above problem we need to break the loop
let cart  = ['imac','samsung','iphone','imac','macbook','keyboard','imac','tom'];
let i = 0;
while (i<cart.length) {
    let p = cart.indexOf("imac",i)
    if(p == -1) break;
    console.log(p);
    i = p + 1
}


console.log('=======================================');

//9.lastIndexOf
//we also have method for "lastIndex"
let cart  = ['imac','samsung','iphone','imac','macbook','keyboard'];
let j = cart.lastIndexOf('imac');
console.log(j);

/**
 * Quesions
 */
//what if we write the negative delete count
//negative value means we don't want to delete anything
let cart  = ['imac','samsung','iphone','imac','macbook','keyboard'];
cart.splice(0,-2,"cannon");//on the 0th positin "cannon" will be added and nothing will be deleted as the "deletecount" is negaive
console.log(cart); 
//so all negative count will be considered as - 0 delete count / i don't want to delete anything
//on splice , second parameter is just "number" and not an index   

let cart  = ['imac','samsung','iphone','macbook','keyboard'];
let newCart = cart.slice(-2,4);//[ 'macbook' ] //-2 index = macbook and 4th index=keyboard - we don't include ending index 
console.log(newCart);


let cart  = ['imac','samsung','iphone','imac','macbook','keyboard'];
let newCart = cart.slice(-2,4);//[] //-2 index = macbook and 4th index=imac - we don't include ending index 
console.log(newCart);
//its batter to avoid negative index in the ranges
//if you want to access last elements in that case only you should use negative index

//i don't to change existing array and then i want to push/pop element from the array
//just create a copy of the array and change that copied array
let num = [1,2,3,4,5];
let myNum = [...num]
myNum.unshift(12);
console.log(myNum);