/**
 * Program - 2
 */
/**
 * Whenever we have to do some repetetative work then we have to use loops concepts
 * 3 loops - while, for, do-while
 */

//1 to 10:
//worst way of writing above progarm 
console.log(1);
console.log(2);
console.log(3);

//if tomorrow we need to write/print up to 1000 then we can't write 1000 lines 
//if we can see that there is pattern (1,2,3...) then we should use loop 
/**
 * Suppose print each and every value from the dropdown [200 values in country dropdown]
 * we don't manual go and print it on console for each and every value - we don't write console.log for each and every value 
 * we write the for loop and the go each and every value and prinit it on console
 * 
 * so whenever we see that some kind of work is getting repetetive - start putting that in put 
 */


//while:
/**
 * start -> check the condition -> true -> execute statement -> check condition -> true -> execute statement ....keep going -> loop created - > infinite loop
 * we got struck inside he loop - loop is known as infinite loop
 *
 * so we have to write conditin in such a way, that we never get inside the infinite loop > we have to come outside of the loop. this is the most important concept in loops 
 * 
 * start -> check the condition -> false -> exit 
 */
/**
 * Below will print 1,1,1,1 -> infinite times 
 * so where is the bug in below code 
 * missing part is we are not increasing the value of i 
 */
let i = 1;
while (i <= 10) { // inside () we need to provide boolean value / means a condition value 
    console.log(i);//1111111
}

/**
 * what is the most important thing in below logic -  i++;
 * if value of i is not increaed then it will generatre the infinite loop here 
 */
let i = 1;
while (i <= 10) { // inside () we need to provide boolean value / means a condition value 
    console.log(i);//1 2 3 4...6.7.8 9 10
    i++;//11
    //++i; // we can write ++i as well because in both the cases value of i will be increased 
    // i = i + 1; // this will increase the value of i by 1
}

//can we write like below? -> it will give infine loop -> we need to forcefully terminate it to stop the code 
while (true) {
    console.log('welcome to NAL');
}

//to break the infinite loop usew break
while (true) {
    console.log('welcome to NAL');
    break; // break can be used in switch case and break can be used with loop as well
}

//we should not write code like below 
while (false) {
    console.log('welcome to NAL'); //dead code 
    break; // break can be used in switch case and break can be used with loop as well
}

//10 to 1
let j = 10;
while (j >= 1) {
    console.log(j);//10 9 8 7 6 5 4 3 2 1
    j--;//0
}

//we can write if condition inside the while loop as well 

let l = 1;
while (l <= 10) {
    console.log(l);//1
    if (l === 5) {
        console.log('bye!!'); // bye!1 is getting printed only when l is becoming 5 
    }
    l++;
}

/**
 * compare below example with playwright 
 * like in dropdown there are 100 values
 * I will keep checking values 
 * if dropdown value is india then come out of the dropdown 
 * in above program all the values will be printed 
 */
//we can write if condition inside the while loop as well 
let l = 1;
while (l <= 10) {
    console.log(l);//1
    if (l === 5) {
        console.log('bye!!');
        break; // break means break the entire loop , not just the condition  [here break the while loop]
        // l++; //we can not write l++ here it will give us infinite loop 
    }
   // break//we can not write the break here > execute the program and check 
    l++;
}



/**
 * We can get the infinite loop with the for loop as well if the condition is wrong 
 * flow
 * initilization -> check the condition -> true -> perform the action -> increment/decrement -> check the condition ....keep going -> condition true  -> perform action -> infinite loop 
 * initilization -> check the condition -> true -> perform the action -> increment/decrement -> check the condition ....keep going -> condition false  -> exit
 * initilization -> check the condition -> false - > exit
 */
//for loop:
//1 to 10:
    //init    ; condition;incre,decre
for (let m = 1; m <= 10; m++) { // the moment condition is satisfied then it will go inside the loop -> perform action -> then increment decrement
    console.log(m);  // let m = 1 is used to just to start the loop after that it will never be used 
}

//can we write like below -> yes -> output will remain same -> there is no change 
let m = 1; 
for (; m <= 10; m++) { 
    console.log(m);  
}

//can we write like below -> yes -> output will remain same -> there is no change 
let m = 1; 
for (; m <= 10; ) {  // we know that m++ will be executed after the [console.log(m)]. so can we write the m++ after that -> yes -> output will be the same -> now it's looks like while loop[init, condition, perform action, increase/decrease] 
    console.log(m);
    m++;  
}
//gererally we don't write the for loop like above , it looks ugly 


//interview question
/**
 * all three part is blank 
 * second part is always representing a condition 
 * so by default it will take the true 
 * for (;true ;){
 * 
 * }
 * 
 * below will generate the infinite loop 
 */
for (; ;) {
    console.log('welcome to Hotel Taj');
}
//we don't write above kind of code in prod 

for (; ;) {
    console.log('welcome to Hotel Taj');
    break;
}


for (let n = 1; n <= 100; n++) {
    console.log(n);
    if (n % 5 === 0) {
        console.log('hi');
    }

}

/**
 * We can generate infinite loop with both(for and while)
 * Both loop are doing same thing 
 * We can put condition in both loop 
 * We can increase/decrase in both loops 
 * So why we need bot >
 * what will be the difference when we use it practicaly 
 * technically syntax is different but fundamentals are exactly same because ultimately both are loops 
 */

//while vs for loop: [when to use what]
//while use cases: when number of iterations are not fixed [it means i really don't know that how many times i need to iterate then i will start with the while loop ]
//wait for element on the page: [do we really know that after how many seconds element will appear on the page? - NO, it can appear after 2/3/6/10/15 seconds - We have no idea howmany seconds i have to wait]
//wait for page loading:  [i want to processed further on my page once the page is loaded. Time is fixed or not?. Thers is no fixed time - application is very slow today, bandwith/network  is very slow. so it might take more time. sometime it's very fast so application will be loaded in 2 secondes as well]
//webtable pagination: back 1 2 3 4..7.10 next [i am looking for produt available on the 4th page- but there is no gauranty that that product is always available on the 4th page. Today its on the 4th page but tomorrow it got shifted on the 5th / 6th page as more products got added. so number of itterations are not fixed]
//infinite scrolling: [instagram,linkden][we don't know that dhaval's post will appear after 10 post..so keep scrolling down][zomato,swigy,facebook feed ...keep scrolling down...the moment you saw the your favourite restaurant on zomato and swigy - you click on it and break the loop. Because i have no idea that how many scrolls i have to perform here][how many scroll and how many iterations i need to do are not fixed][so in such cases i need to use while loop]
//calendar: march 2027
//carousel: 

//for loop use cases: when number of iterations are fixed
//month dropdown jan to dec:[how many times we need to iterate] 1 to 12 [it will never happen that tomorrow 2 more months will be added this is an universal truth]
//day: 1 to 31 [maximum 31 days are avilable]
//footer links [when number of iteration are fidxed in side banner and footer then always go with for loop]
//array : 5 : 0 to 4

/**
 * so whenever in anyframe work you see while loop then immedeately it should click on your mind that
 * there is concept that number of iterations are not fixed
 * but for for loop number of iterations are fixed
 */

//Advanced loops are availabe in js
//for .. of
//for .. in 
//foreach method


console.log('hello');
process.stdout.write('hello');


let name = 'naveen';
while (name === 'naveen') {
    console.log(name);
    break;
}



/**
 * do-while
 * do-while is not famouse
 * but what is the difference between while and do-while loop
 * do-while says 
 * when you start the loop then don't check the condition immediately 
 * you immediately execute the statement here - you execute the statement at least once
 * the after you check the condition and if condition is satisfied then again you execute the statement -> condition satisfied -> execute statement > ...keep going --> condition satisfied ->execute the statement >infinite loop
 * so we have to write a condition in such a way that we can come out of this loop 
 * start the loop-> execute the statement -> condition is not satisfied -> exit
 * so in above case how many times statement got executed -> at least once 
 * but with the while loop -> check the condition -> condition not satisfied -> exit the loop -> how many times statement got executed -> 1 time or 0 time -> 0 time
 * so that's the different between while and do-while loop
 * do-while loop says we are going to execute your loop at least once even if the condition is not satisfied
 * while loops says if condition is satisfied then only we are going to execute the statement 
 * 
 */

//do-while loop:
//1 to 10:
//below example will give an error - p is undefined because scope of "p" is only inside the "do block" and we are trying to use "p" in "while" block as well
do {
   let p = 1;
   console.log(p);
}
while (p <= 10);

/**
 * So to resolve above error, we should declare the p at global level and not inside the "do" part
 * check below example
 * what will be the o/p of the below program -> 1,1,1,1,1,1,1,1,1......infinite loop
 * so what is the missing part 
 * we are just printing the value of "p" but we are not increasing it 
 */
let p = 1;
do {
   
   console.log(p);
}
while (p <= 10);

/**
 * to resolve the issue of above program refer below example
 */
let p = 1;
do {
   
   console.log(p);
   p++;
}
while (p <= 10);


/**
 * below example - is to check when condition is not satisfie
 */
let p = 1;
do {
   
   console.log(p);
   p++;
}
while (p >= 10);
console.log(p);
//in above case do block is getting executed at least once

/**
 * what will be o/p in below case? 
 * we are writing "p++" above the console.log
 */
let p = 1;
do {
   p++;
   console.log(p);
   //p++;
}
while (p <= 10);
//o/p > 2,3,4,,5,6,7,8,9,10,11

/**
 * what will be o/p in below case?
 * we are writing "p++" above and below the console.log 
 */
let p = 1;
do {
   p++;//2
   console.log(p);//2
   p++;//3
}
while (p <= 10);
//o/p > 2,4,6,8,10

/**
 * we can not write the "++p" or "p++" after the "while" in do-while loop because once the "while()" statement is executed the do-while is ended
 * if we write "++p" or "p++" after the "while" in do-while loop then it will give is infinite loop
 * so increase and desrease inside the "do" part 
 * check below example
 */
let p = 1;
do {

   console.log(p);
}
while (p <= 10);
p++;



//do-while loop with break:
//1 to 10:
let p = 1;
do {
    console.log(p);// 1
    ++p;
    break; // break will break the  entire do-while loop // break should be used with the condition
}
while (p <= 10);//T  // in the do-while loop while does not have any body , body/logic will be written inside the do part 

//10 to 1:

//use cases: do-while: iterations are not fixed....
//think like where we need to execute the statement at least once
//waiting for the element: and element is already available on the page...then we don't want to start the loop
//if my favourite restaurant is already there then i don't need to start the loop..if element /restaurant is not available then you start the loop
//do-while loop is giving extra edge that if something/element/restaurant is already available then no need to start the loop
//so we can say do-while loop is slightly advance version of while loop otherwise no major difference - both are doing exactly same thing
//It's not mendotry that we should use for/while/do-while loop
// everything we can do with the while loop as well
// everything we can do with the while do-while as well
// everything we can do with the for loop as well
// Above are the varietes of options given to us

// To reload the window search ">" then select reload the window options [do this when your vs code is not behaving correctly]
//or suppose in case of infinite loop if you have used a lot of memory then after that if you are running any program and that program is not behaving correctly then "reload the window"


