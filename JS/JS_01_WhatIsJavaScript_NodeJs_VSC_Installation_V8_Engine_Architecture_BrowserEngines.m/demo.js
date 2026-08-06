function addition(a,b){
    return a+b;
}

addition(10,20); // This should give 30 as output 
 
//But what if we write pass the "string"
addition("naveen","automation"); // this will concat the given string
//But this "addition" function we have decided for the calculater application
// So should we really expect that "naveen" and "automation" should be concatinated and given to us as an output 
// so in "addition" function when we are passing STRING instead of INT then, immedeately i should get feedback that STRING is passed instead of INT
/**
 * so what is the problem with above code 
 * we have no idea that what is the value of "a" and "b" AND what is a type of "a" and "b"
 * Is it a "number" or "string" or "boolean" > that could be anythig
 * data type is missing here / the type is missing here > that is the problem with the javascript.
 * here we can not decide the type that please take integer
 * you can not code like java language in the javascript 
 * we can not say that please give me integer only
 * So to resolve above issue we should start using the typescript
 * typescript will decide that "a" should be a number/ is a number and "b" is also a number here
 * > we should start writing the "type" here > then only it will start giving us the error that "please supply the number here"
 * So conclusion: javascript is a tuntime language > everything will be decided at runtime
 * 
 * Do we have any compiler in js?
 * Yes we have that > but at the design time or at the run time?
 * We have compiler at the run time 
 * And the compiler name is what > JIT > just in time compiler 
 * But this compiler is different
 * What is the purpose of the compiler > purpose of the compiler is to optimize the code > to check that it is a hot code / warm code or cold code to start the optimization process
 * How exactly they will start the optimization process.> By using some optimization techniques like turbofan
 * Ultimately everything will be converted to machine code and from machine code to the o/p
 * so that is the purpose of the JIT [just in time]
 * just in time means > whenever it's required they/it will come  > whenever there is a need of to improve the code / need of optimization JIT will come into the picture.
 * they behave like a catalyst > catalyst meaning - thing that provokes or speeds significant change or action 
 * 
 * A compiler's primary purpose is to translate high-level, human-readable source code (like C++, Java, or Python) into low-level machine code or binary code that a computer's CPU can directly execute. 
 * It bridges the gap between human programmers and machine-readable instructions, enabling efficient program execution
 * 
 * Key purposes of a compiler include:
Translation: Converts entire source programs into executable object code at once, making them faster to run than interpreted code.
Error Detection: Identifies syntax and semantic errors in the code, ensuring the program complies with the rules of the language.
Code Optimization: Optimizes the generated machine code to run faster or utilize memory more efficiently.
Portability: Allows developers to write code in a higher-level language that can be compiled for different types of CPUs and operating syst
ems.


So yes we have a compiler in javascript and that compiler is JIT for the copilation purpose/for the optimization purpose/for the hot code / for the warm code 

AST
The moment we update the code then AST will be updated automatically.
What is the need of AST? why AST is so important in javascript?
Because AST is what > the segratation of your code > it's complete metadata
>like what is the inventory
> invetory means how many functions are there , howmany variables are there , howmany blocks are there ,how many loops are there 
it will tell all the information to the interpreter
So that it will be easy for us to monitor the code > it will be esay for us to decode that, it is a warm code or cold code?

And what is the use of parser?
Parser is very straight forward thing that when we write the javascript code 
Parser will tell what 
Parser is a part of javascript V8 engine 
It reads the javascript raw code in your js file 
It breaks the code into tokens means > remove all the unnecessary lines and spaces, it analyses the gramer structure and syntax error
After that it will build the AST to represent the code
AST is happning immedietely after the parser
Monitor, compilation, converting into the machine code < this entire process is called interpretation. Refer the diagram from the notes 

if instead if "let" we just write "lt" > then "red" line will be there under the "lt". 
So that line is coming is due to the "Visual Studio Property" or "Parser Property"? > It's a parser property
In the VS code, node js is already running 
node js will activate the parser and it will tell > hey there is a syntax error > not the visual studio property


Q- Parser and the Interpreter are the part of Interpreter/interpretation?
NO - interpretation will start after the AST
This is normal process -> write the source code > parse it > convert it to AST 

Refer diagram
Parsing > AST > Ignition will happen(Ignition means lets start running. Ignition means RUNTIME. Interpreter will come into the picture)> Byte code >Byte is hot ot cold > if hot "start the turbo"> machine code > then code runs on the CPU


Install node.js (always download current - 2 versions)
Check the version in command prompt (node -v)/(node --version)
Once done check the npm version (npm -v)
npm is used for download other softwares like playwright and all those things 
So when we download the node, we will get the NPM as well. Along with the node 
above two command we need to execute and that's it 
download the VS code 

Then
go to any folder > create a blank folder
No need to setUp any path like JAVA(JAVA_HOME....etc) 
 

sortcut for console.log()
clg + Enter 

in js the moment error is coming program will break 

During the JS flow we have talked about optimization 
So its a code optimization or performance optimization?
Suppose you have written very bad program - compiler dosen't  bother about it > that your logic is correct or not 
They bother about the performance that they have to improve. That's it 
Its developer the responsibility to write the right business logic code 

AST is not a tools. It's a structure
Output of the AST will become the input for the interpreter

node js collabaration is with the V8 only not with the spider monkey and all (the engines which are develpoed by other browsers)

JIT will recnize > JIT will use the performance optimization technique 
JIT is having certain rules and regulation internally to cool down the system 
JIT says if you have any code where in you running loop for 1 million time then Let me[JIT] add few batter teqniques to improve the performance 


Other AI Bowsers IDE follow the same approach as we have discussed 

Windsurf, Cursor, and Replit are next-generation AI-powered development environments (IDEs) designed to make coding faster by using AI agents to write, debug, and manage code. 
Windsurf and Cursor are VS Code forks focused on local project development with deep AI integration, while Replit is a cloud-based IDE designed for immediate "vibe coding," prototyping, and instant deployment
Ultimately Windsurf, Cursor, and Replit all are editor, you have to write the code there and execute it >everyone is having node.js internally in their system
Using our system nodeJS editor run the program

What happnes when you do parallely execution? How V8 engine behaves?
1 test is going to FF, 1 test is going to CHROEM , 1 test is going to WEBKIT 
So at that time respective engine of respective browser will be activated and they will be running the test
Because every browser is having their own engine 

file extension 
In vs code we can create file with diffrent extension 
So compilation also happnes based on the file extension/ type of the file 
Python we can not execute with node. For python we need python installer 

What is npm?
npm is a packager 
In java selenium - we use maven - we download jars maven/selenium depedencies form maven> so the same npm is a packager/manager where all the dependinces are hosted over there 
so npm is helping us to download  these all the depedencies 
What we will do when we download playwright - we will write "npm install playwright", "npm install allure report"
So npm will help us to download external tools and libraries written in javascript - that is the main purpose of the npm

Lexa tokenazation means divide your code into small small component and some meaningfull peacies 
lexar algoritham is written inside the parser

Java and js both are good in their own ways 
Java is used for enterprice level application, specially for the distributed system and for batter performance 
js is used for the browser based application, machine learning and AI
huge syatem,multiple integration and micro services and all these > where server performance is very important then we go with JAVA and GO language

Which one is faster JAVA or JS?
performance wise js is slightly faster because of the V8 engine 
Java says 80% of the code we have compiled only 20% of the thing you need to run at the run time > so load at the run time very less> so java people claim that java is faster
but it dependes on the code you have written > it depends on other factors also > like your system configaration, hardware  - it dependes on so many thing 
But at the raw level if you discuss > for the small processing point of view > because of this AST tree structure and JIT optimization technique > in js you will have batter performance 
browser is user facing application 
On high level java is slightly batter as compare to other languages 
*/

console.log(10);

/**
 * Node.js is a **runtime environment** that allows you to run JavaScript outside the browser.

Normally, JavaScript runs inside browsers like:

* Google Chrome
* Mozilla Firefox

But with Node.js, you can use JavaScript for:

* Backend development
* APIs
* Automation scripts
* Servers
* CLI tools
* Test automation frameworks like Cypress and WebdriverIO

Example:

```js
console.log("Hello Dhaval");
```

In browser:

* Runs inside browser console

In Node.js:

```bash
node app.js
```

* Runs directly on your machine

Key things inside Node.js:

* V8 Engine (from Chrome)
* File system access
* HTTP server support
* Event loop
* npm package manager

Example server:

```js
const http = require('http');

http.createServer((req, res) => {
  res.end('Hello');
}).listen(3000);
```

This creates a web server using JavaScript.

Simple difference:

| Technology | Purpose                              |
| ---------- | ------------------------------------ |
| JavaScript | Programming language                 |
| Node.js    | Runs JavaScript outside browser      |
| npm        | Installs/manages JavaScript packages |

Flow:

```text
JavaScript code → Node.js executes it → npm adds external libraries
```

 */



/**
 * npm mainly contains:

* **Packages / Libraries** → Reusable JavaScript or TypeScript code
  Examples:

  * React
  * Express.js
  * Lodash

* **CLI Tools** → Command-line utilities installed via npm
  Examples:

  * Cypress
  * TypeScript
  * Webpack

* **Dependencies** → Packages required by a project to run/build/test.

* **Scripts** → Commands defined inside `package.json` like:

  ```json
  "scripts": {
    "test": "cypress run",
    "start": "node app.js"
  }
  ```

* **Metadata** inside `package.json`

  * package name
  * version
  * author
  * dependencies
  * license
  * scripts

* **node_modules folder**

  * When you run:

    ```bash
    npm install
    ```

    npm downloads all packages into:

    ```bash
    node_modules/
    ```

In short:

npm is a **package manager + online registry** for JavaScript/Node.js projects.
It stores and manages reusable code packages, tools, and project dependencies.

 */


//uncommnet below and check
//  function(){}

/**
 * why red line is appearing though we don't have compiler at design time in js?
 * because of what red line is appearing below paranthesis? > PARSER
 *
 */

