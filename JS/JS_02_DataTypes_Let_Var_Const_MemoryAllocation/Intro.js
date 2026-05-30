/**
 * Can we write the javascript code in the browser also directly. Can we do that? > can we write the JS code in console because Browser understands JS?
 * Yes we can write the code in JS but we can not design the framwwork in browser /we can not create the multiple files in the browser. So that is the problem with browser 
 * so that is why we need proper editer where we can write the code >execute it > and check the output
 * we need to do n number of configuration in the playwright we can not do it in the browser console
 * 
 * VS code is having is own command prompt where you execute the command 
 * Open the terminal and write below command [To tell vs code that I want to enable node/NPM for our specific project(in directory/folder where we are in)]
 * npm init -y [i want to initilize current project with npm]
 * 
 * "-y" is used for the current project > that in this/current project i want to initilaz the npm
 * so when we run our command what happnes that > package.json will created > means our project is enabled with the npm and package.josn file got created
 * now what is this package.json file 
 * in maven project pom.xml file is heart of project [where in we have all the depedencies and plugins]
 * so in every packing tool [maven is also packaging tool for java and npm is also build packing tool for JS]
 * so here package.json is the heart of the project [configuration od the project are over here]
 * package.json file contains 
 * >project name , version name and 
 * > we can add depedencies  [for playwright,allure report ]
 * 
 * in the js there are two things  
 * 1. old js [before 2015 : old js] [common js]
 * 2. new js [2015 onwards : ES6 - ECMAScript 6 version][ES6 to 2026] [type is equal to "modeule" js]
 *  ES6 Released with morden feature in js with batter object oriented , batter functions, async programming 
 * Every year they release one major version of the js 
 * so we have to use which old js or mordern js 
 * we have to use morden js 
 * how to use?
 * old js is known as common js 
 * new js is known as "module" js
 * 
 * what type of js we need to use?
 * we need to use "module" js / modele based js 
 * so what we need to do in vs is 
 * in when we create "package.json" first time 
 * if you check   "type":"commonjs" is written there so instead of that we need to write
 * "type":"module"
 * 
 * Now create the simple js file with console.log("hello world")
 * How to run above file?
 * There are multiple ways to run it  
 * 
 * 1. Go to terminal > write below command 
 * node .\JS\JS_02_DataTypes_Let_Var_Const_MemoryAllocation\Intro.js
 * 
 * it means node please run "Intro.js" file
 * 
 * but if we have 1000 of files then we write the "node" and "file name" > Don't you think it's time taking process
 * we need to go to the terminal > write command and then run > to get the output 
 * We can have something like "Run" button like intellij
 * To get that run icon we need to add extension
 * 1. JavaScript (ES6) code snippets 
 * > Above extension will help us in real time suggestions, error messages 
 * 2. Code Runner 
 * > Above extension is for "Run" icon
 * > After adding the extesion if you are not able to see "Run" icon then "Restart" 
 * 
 */
console.log("Hello World");
console.log(10);

//If you want to run just 1 line then "select the specific line" and click on "Run"
// then that specific line will be printed 
console.log(1000);

/**
 * In js there is no package structure 
 * We can create our own folder structure 
 */