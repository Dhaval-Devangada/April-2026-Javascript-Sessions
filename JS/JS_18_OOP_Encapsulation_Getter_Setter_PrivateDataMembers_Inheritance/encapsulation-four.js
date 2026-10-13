/**
 * Program - 4 
 */

class Browser {

    //when we create the method inside the class then no need to write "function" keyword
    launchBrowser() {
        console.log('launching the browser');
    }

    checkOSComptiable() {
        console.log('checkOScompitable');
    }

    checkRAMSize() {
        console.log('checkRAMSize');
    }

    checkUpgrade() {
        console.log('checkUpgrade');
    }

    //all of above methods are public methods
    //we don't have any variable 
    //we don't have any constructor
}

//user behaviour: user is trying to access the browser...
let obj = new Browser();
obj.launchBrowser();
obj.checkOSComptiable();
obj.checkRAMSize();
obj.checkUpgrade();

/**
 * Above what we have done is 
 * all the methods are public methods and publicaly available
 * but what we are doing here 
 * all the methods are public 
 * so we are giving access to all the methods to "user", outside of the class
 * 
 * whenever we open the chrome browser in our system, 
 * i don't want to check the ramSize, OSCompatiability and all , because i don't understand the other internal methods you are calling 
 * I just want to open browser, i don't know any other things
 * so we really check the OSComptiablity before opening the browser - NO , as a user we just open the browser
 * 
 * we have kept all the methods public or all the methods are publicaly available , that is the bad practice
 * anyone can access anything from above class and at any point of time
 * 
 * we can create the class like above 
 * but why should user bother about other internal methods?
 * user just wants to open the browser
 * above is not the user friendly 
 * 
 * so which methods should be public and which methods should be private? 
 * methods can also be private
 * check below example
 */
console.log("================================");

class UpdatedBrowser {
    launchBrowser() {
        console.log('launching the browser');

        //can "launchBrowser()" access other private methods? YES - because they are part of same object. we don't need to create getter and setter for the methods. getter and setters only for the values.
        //so "launchBrowser" says that internally i will check otherthing [OSComptiable,RAMSize,Upgrade] by using "this" keyword
        this.#checkOSComptiable();
        this.#checkRAMSize();
        this.#checkUpgrade();

        //once we check everything then we launch the browser
        console.log('browser is launched');
    }

    #checkOSComptiable() {
        console.log('checkOScompitable');
    }

    #checkRAMSize() {
        console.log('checkRAMSize');
    }

    #checkUpgrade() {
        console.log('checkUpgrade');
    }
}

//now if we try to access private method then it will give the error
let updatedObj = new UpdatedBrowser();
//updatedObj.checkOSComptiable(); //uncommnet this and check the error
//error is -> TypeError: updatedObj.checkOSComptiable is not a function

//now from user persepctive only one method we need to call which is below and public method
updatedObj.launchBrowser();
//above is he better way of designing the code / writing the code
//we don't create the getter and setters for the methods they are only for the variables
//so is this/ above encapsulation - YES
//encapsulation is not just about getter and setter - thats a wrong concept
//encapsulation is all about giving the access to private data members via public layer
//private data members could be method also and could be variable also
//here in this case we have private methods
//we are giving access to all the private method to via one public layer/method and that public method is calling other private methods internally. so this is also encapsulation
//so what is the advantage of this?
//if everything is publicaly available then anyone can access it and user is also confused that "i don't want to check OS system, RAM size and all"
//user says i don't understand those methods, user says just give me a simple method "launchBrowser"
//in PW/selenium they create n number of methods internally.
//suppose we want to "click" on button , but this click() - internally doing so many things
//this method is checking he "dom state"
//this method is also checking "element is really present or not"
//this method is also checking "element is really has proper height and width or not"
//this method is also checking "element is really stable or not"
//then after that it will perform the click
//from user point of view we are just able to use "click()" method, but "click()" is checking n number of things internally and then performing the "click()" operation
//we can not access everything to user
//when we go to ATM machine, then we can see only "public interface"
//laptop- we can not see motherboard,RAM...etc - they publicay given us the keyboard,mouse,screen - how internally those are working - user is not bother about it.