/**
 * Program no - 2
 */

test();

function test(){
     console.log("hello test");
}

console.log("byeeeeee");

/**
 * Can we call the function before the declaration or above the function. Is it allowed in js?
 * when we call the "test()" at that time/before that time we have not created the "test" function
 * 
 * YES- we can acheive above thing that concept is known as hoisting 
 * this is same hoisting concept of variable -"var"  can be hoisted but "let" cannnot be hoisted\
 * 
 * before declaring the fun we can that fun as well - that is known as fun hoisting.
 * so that means i can call "test()" from anywhere in this particular file here.
 * 
 * but is it a good practice? if wan to do it then we can do it . Otherwise its bit confusing. 
 *  
 * 
 * practically we avoid function hoisting 
 */
/**
 * Now refer program - 3
 */