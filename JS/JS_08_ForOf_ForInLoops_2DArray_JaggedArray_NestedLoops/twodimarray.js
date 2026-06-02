/**
 * program - 2
 */

/**
 * 1-D array means always go in 1 dimension - single values are available there
 * 2-D means - 2 dimensions array 
 * for example 
 * excel file - in excel file we always maintain the data in the form of rows and column
 * database - always store data in the form of 2d array
 * 2D array means - number of rows and column are available 
 * 
 * suppose 
 * we have 4 rows are available - refer scrnshot no 2
 * then we have 4 columns are available
 * then it forms a matrix kind of thing 
 * for 4 rows suppose we can give index 0,1,2,3
 * for 4 columns suppose we can give index 0,1,2,3
 * one box is called "cell"
 * so what the co-ordinate of the first cell[first raw-first column] "00"
 * and what the co-ordinate of the last cell[last raw-last column] "33"
 * 
 * what kind of matrix it is?
 * how many rows and columns are available? 
 * so we always calculate like below
 *  raws * columns
 *  4 * 4 
 *  
 * so what kind of array we are creating - 4 by 4 array
 * after that it dosen't matter that it's homogenious/hetrogenious
 * 
 * this will help us when we try to get the data from 
 * excel
 * csv
 * db
 * 
 * how we will pick the data from the excel file?
 * we will pick the data from the excel file and we will store it in the 2D array
 * so testdata is available in the form of 2D array
 * 
 * every programming languages provides the concept of the arrays 
 * read the data from the excel file and store it in the 2D-array
 * and from 2D-array use it in your script here
 */

//two Dim: 2D array:
/**
 * how to create 2D-array
 * write let num[]; then go inside the [] thne press enter 
 * then start creating raws
 */
let num = [
    [1, 2, 3, 4], //start creating raws 
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
/**
 * So how many raws and columns are available
 * 3 raws 
 * 4 columns
 * 
 * 3 by 4 2Darray/matrix
 * 3*4
 * 3*4 will also gives the total number of cells in the array 
 */
//3x4
console.log(num[0][0]); //what is the value available on 00  -//1
console.log(num[0][3]);//first raw - third column - //4
console.log(num[2][3]);//second raw and third column - //400
console.log(num[3][3]); //third raw and third column - third raw is not available so it gives the error 

/**
 * length of the array 
 * what will be the length of the array? 
 * whenever we apply the length property on array then what it will give?
 * row count or column count? - row count
 */
console.log(num.length);//row count=3
console.log(num); // we can print whole D-array as well
console.log("-------------------");
//how to print/iterate the 2D array: by using the for loop

let num = [
    [1, 2, 3, 4], //start creating raws 
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
//but howmany for loop we have to write here 
//whenever we have to write 2D-array then we need to use 2 for loops
//one loop is for the row - first for loop is for the row
//second loop is for the column - second for loop is for the column
//outer loop and inner loop - we have to write nested loop here
//refer screendhot - 3

/**
 * How to iterate 2D array 
 * How to structure loops for 2D-array
 * Below is to iterate rows
 * for (let i = 0; i <= num.length - 1; i++) { // "i" is representating the row - i means top to bottom, for condition we need total row count so "i <= num.length - 1;". start from 0 and go upto second row
    
    }
}
 */
/**
 * How to iterate column?
 * We already have for loop for outer loop - or for rows - for vertical iteration
 * for (let i = 0; i <= num.length - 1; i++) { // "i" is representating the row - i means top to bottom, for condition we need total row count so "i <= num.length - 1;". start from 0 and go upto second row

    below is for the columns - for horizantal iteration

    }
 * 
 */
for (let i = 0; i <= num.length - 1; i++) { // "i" is representating the row - i means top to bottom, for condition we need total row count so "i <= num.length - 1;". start from 0 and go upto second row
    for (let j = 0; j <= num[i].length - 1; j++) { 
        //"j" is representation column, what is the first index for the column - 0 so "j=0",
        //  for the condition-> think that howmany columns are there for each and every row in this array > 0th row 3, for 1st row 3 columns, 2nd row 3 columns> so for each and every row column count is fixed 
        //columns count is always fixed in excel,db and csv
        //values might be not there but column will be there 
        //it will never happpen that for first 4 rows column count is 4 
        //and for 5 to 7th row column count is 2 
        //values are there or not - that dosen't matter
        //in db sometimes data is not available but rows and columns are fixed
        //if values is not available then we will get null or blank
        //so in 2D-array or excel/csv/db -for each and every row column count is fixed
        //so where count of row and count of column is same that array is known as symetric array / symatric 2D-array
        
        //so now for the condition-> think that howmany columns are there for each and every row in this array > 0th row 3, for 1st row 3 columns, 2nd row 3 columns> so for each and every row column count is fixed 
        //so what is the value of "i" first time "0" means 0th row -> and tell me what is the length of "i" / length of first row - because length of the first row will give us the total columns so formula for condition is "j <= num[i].length - 1;"
        process.stdout.write(num[i][j]);//1 // we we have apended the string at last because "process.stdout.write" works with string only and here we are dealing with numbers
        //above if we don't append with string then it will give an error that > TypeError [ERR_INVALID_ARG_TYPE]: The "chunk" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type number (1)
    }
    console.log();//new line //if you don't print anything then it will generate a n new line
}

/**
 * so for i=0 howmany times j is running 
 * for i = 0 , j is running 4 times , 
 * i=1, j is running 4 times,once done then value of i will be increased by 1
 * i=2, j is running 4 times,once done then value of i will be increased by 1
 * i=3, j is running 4 times,once done then value of i will be increased by 1
 */


console.log('===============');
//now we want to print with for...of loop
//refer screenhsot -> 3-2D-array-iteration-with-for...of-loop.png
let num = [
    [1, 2, 3, 4], //start creating raws 
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];

//for .. of loop:
for (let u of num) { // so "u" is representating the first row
    for (let v of u) { // "v" is representing the column value > "v" you go to the first row and start capturing the columns 
        process.stdout.write(v + ' '); //now who is representing the value "v"
    }
    console.log();
}
/**
 * "u" is going to the first row
 *  after that we say "v you go where "v of u" 
 *  "u" is already there then we are saying "v" please go to the "u"
 *  then it will start capturing the whatever the value is there on "u'th" location
 */

/**
 *  "u" will start pointing to the first row 
 *  "v of u" means "v" you go to the "u'th" location > the first location of the "u" > so it will pick the value from there which is "1" and it will print it
 *  after that "v" is going to "2" then going to "3" then going to "4"
 *  so now inner for loop is comletly done
 *  after that new line will be generated due to "console.log();"
 *  so now it will again go to the "u" but now you will point to the second (2nd) row
 *  so now again "v of u" and "u" is pointing to the second row , so 10,20,30,40 will be printed
 *  after that "u" will start pointing to the 3rd row 
 *  nbow again "v of u" and "u" is pointing to the third row , so 100,200,300,400 will be printed
 * 
 * we are printing "v" here because "v" is representating the value here
 * "v" is actually going to column by column
 * "u" is just for the reference for the rows that's it 
 * actual value stored in the "v" here
 *
 */

/**
 * for...in lopp - you ignored it for the 2D-array
 */

/**
 * what do you mean by jagged array?
 * jagged array you will not find in java or other languages 
 * but in the js you have it 
 * jagged array means - number of rows having different size/number of columns
 * practically we will not below kind of array - but just for the interview purpose
 * 
 * 
 * example
 * lets create some "data" array here
 */
//jagged array:
let data = [
    [1, 2, 3, 4, 5], //create rows  - for the 1st row we are having 5 columns
    [10, 20, 30], //for the 2nd row we are having 3 column
    [100, 200], // for the 3d row we are having 2 column
    [1000]// for the 4th row we are havnig 1 column
];

console.log(data);//we can directly print it also

for (let u of data) {
    for (let v of u) {
        process.stdout.write(v + ' ');
    }
    console.log();
}

/**
 * "u" will start pointing to the first row
 * "v" go where -> go where exactly "u" is availbale
 * "u" is available on the 1st position-> then 2nd > then 3rd > then 4th > then 5th 
 * so first row will be iterated - so inner loop will be completed 
 * then "u" will be shifted to 2nd position
 * the again we say "v" > go to the current position of "u" 
 * and "u" is pointing to 2nd row > so 10,20,30 will be printed
 * 
 * so here it really does not matter that howmany columns are there only 1 column, 5 column , 2 column
 * responsability of "v" is that, go to the "u"th location, and go the columns are there, print it on the console thats it
 */
console.log('---------------');
//we can iterate the jagged array using normal for loop/index based loop as well
for (let i = 0; i <= data.length - 1; i++) {
    for (let j = 0; j <= data[i].length - 1; j++) { // this also says the same thing, where is the current position of the [i] and go to it's[i'th length -1]. so here also we are doing the same thing
        process.stdout.write(data[i][j] + ' ');//1
    }
    console.log();//new line
}

//
let prods = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5

//reverse order: using for .. of loop:

let count = prods.length - 1;//4
for (let e of prods) {
    //"let e of prods" here "e" is pointing in forward direction [not printing] - but "e=count" will change the pointer position from backword direction
     // what is the purpose of the "e" is just to iterate the loop - just to make sure that loop is working  - there is no role of "e" other than that 
    // but if we are not using "e" then we are wasting the memory of "e" 
    //so now if we want to use "e" then how can we do that
    //we do below 
    e = count;  //changing the value of "e"
    console.log(prods[e]);//macbook air
 // console.log(prods[count]); //if we don't want to use "e" then we can use this
    count--;
}

/**
 * in above program "e" is pointing to the "string" fist time
 * but after "e=count"; "e" is suddenly becoming the number -> js is doing typecasting automatically here
 * that's whay above approach[to manipulate the for...of loop is not recommanded approach]
 * so if you want to reverse then always use normal for loop instead of using heck inside the for...of loop
 * 
 */

//for .. in loop: for...in loop is specially designed for the objects

//1d: 1 for loop
//2d: 2 for loops
//3d: 3 for loops
//nd: n for loops

//what is a type of array
console.log(typeof prods);//object
//in js all the arrays are behaving like an object 

/**
 * memory concept 
 * in every programming language we have memory concept
 * in js we have two special memory heap and stack memory 
 * 
 * whenever we declare normal variable 
 * let x = 10; then where exactly this will be stored 
 * heap memory is only and only for the object realted stuff
 * so here "x" and "10" is not an object so both will be stored inside the stack and will take some space/bytes/bits inside the stack
 * so tomorrow if we have 100 variables/boolean variable/string variable then > everything will start go inside the stack memory 
 * 
 * let num = [1,2,3] 
 * object will be create inside the stack and array will be stored there 
 * and "num" which object variable - it will be stored inside the stack
 * all the objects will always be stored inside the heap memory
 * while all the variables will be stored inside the stack memory
 */




let numarray = [4, 6, 7, 8];
numarray[-1] = 100;
numarray[-100] = 200;

console.log(numarray);

//"getOwnPropertyNames" will give you complete picture of the array  
console.log(Object.getOwnPropertyNames(numarray)); //[ '0', '1', '2', '3', 'length', '-1', '-100' ]
/**
 * so above 
 * 0,1,2,3 are indexes 
 * -1,-100 are peoperties because we have added those at negative index - these are the custom property that we have added from our side
 * length is a property of array so js is giving us length as well - it's by default - length property is by default property there. and -1,-100 are the custom property that we have added from our side 
 * if we want to know that in array, hoe many indicies are availble and howmany properties are avilable, then above method will give you the clear picture
 */

console.log(numarray.length);



//for...in loop is specially designed when you really want to iterate on the basis of the index - specially designed for the objects

let prods = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5

let count = prods.length - 1; //4
for (let x in prods) {
    x = count;
    console.log(prods[x]);
    count--;
}

/**
 * Can we do like below?
 * .can we remove "let" from for...of loop
 * below will give -> undefine,undefine,undefine,undefine,undefine
 * why because -> count is 4 - > so for...of loop says -> 4 of prods -> js does not undarstand that -> so it starts giving you undefine
 * so thats why we have to maintain the syntax properly
 */

let prods = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];//0-4: 5

let count = prods.length - 1; //4
for (count of prods) {
    console.log(prods[count]);
    count--;
}

console.log("=============");

console.log(NaN===NaN);//false
console.log(typeof NaN);
//type if Nan is number - but it's not representing any number but it's coming because of the number
//type of NaN is number but their values are different - means you are comparing anything with another anything
//Nan means not a number and it is not representing anything [like specific string or number]
//so when we run above. it always gives us fales
//you must be thinkining that === means triple equality and type is also NaN and value is also NaN so this will give true but No
// in js NaN means not equal to itself 
//means here you are comparing anything with another anything
//below will also give us false
console.log(NaN==NaN);


/**
 * we can use the for...of loop and for...in loop together ...if we have outer loop and inner loop
 */

/**
 * how to declare 3D array?

 */

/**
 * one bracket means - 1D array
 */
let oneDArray = []

/**
 * two brackets means - 2D array
 */
let twoDarray = [
    [],
    []
]

/**
 * three brackets means - 3D array 
 */

let testing = [
    [ //this bracket is at 0th location
        [1, 2, 3], // then 1 is at 0th row and at 0th column. so to access "1" we need to reach at 000th location
        [2, 3, 4]
    ],

    [
        [1, 2, 3],
        [2, 3, 4]
    ],

    [
        [1, 2, 3],
        [2, 3, 4]
    ],

]


// let prods = ["mac", "pen", "ipad"]
// prods[-1] = "hi";

// console.log(prods[-1]);

// console.log(prods);
// let count = prods.length - 1; //2

// for (let e in prods) {
//     e = count;//-1
//     console.log(prods.at(e));
//     count--;
// }