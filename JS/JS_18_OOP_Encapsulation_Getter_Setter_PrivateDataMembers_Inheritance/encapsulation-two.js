/**
 * Program - 2
 */

class LoginPage {

    #username;
    #password;

    /**
     * It is always good to create the constructor, because it will always help us to "initilize" the object in the begninng/"initilize" the values in the begninng.
     */
    constructor(username, passwrd) {//give me the "username" and "passwrod" and i will give same values to our gloabl private variables
        this.#username = username;  //"this.#username" is equal to the "username" you are giving to me/constructor 
        this.#password = passwrd    //"this.#password" is equal to the "password" you are giving to me /constructor
    }

    //now we have already gave the initial values 
    //now to later on to change/update the "username/passwrod", we need to "create" the "setters"
    //but what if we try to access/print the "userName/password" 
    //to check the access comment all the "getter()" and "setter()" then run "1 section[without getter()/setter()]"


    //getter: To get the "private" variable value via public layer
    getUserName() {
        return this.#username;
    }

    getPassword() {
        return this.#password;
    }

    //setter: to update/set/modify the "private" variable value via public layer
    setUserName(userName) {
        this.#username = userName; //"this.#username" is equal to the "userName" you are giving to me/set method.  
    }

    setPassWord(passWord) {
        this.#password = passWord;
    }


}

console.log('-------------- 1 section[without getter()/setter()]--------------');
//
//here we are trying to access the private properties outside of the class 
//uncommnet "console.log" line and check the error
//Property '#username'/#password' is not accessible outside class 'LoginPage' because it has a private identifier.
//POST call 
let lp = new LoginPage('komal@gmail.com', 'dhaval@123'); //these values will be set as initial values
//console.log(lp.#username, lp.#password);//we can not access private variable
//and constructor can no "return" anything

//so we have seen that we can not access the "private" variables directly, so now what we need to do? - we need to create "getter" and "setter".


console.log('-------------- 2 section[with getter()/setter()]--------------');
//GET call
let un = lp.getUserName();//lp.gestUserName, please access the "private "#username" and return back the "private #username"
console.log(un);

//GET call
let pwd = lp.getPassword();//lp.getPassword, please access the "private "#password" and return back the "private #password"
console.log(pwd);

/**
 * so now think, that without getters, do we have anyway to access private "#username/#password"
 * NO - there is no other way. 
 * Try by removing "getter"
 * We have to go via public layer and then try to access.
 */

/**
 * Now after one month, I want to change my password/update my password or we are trying to create reset/forgot passwrod functinlaity
 * how we will reset the username/password?
 * is there any otherway to update the username/password without setter? - NO
 */
//PUT call
lp.setPassWord('naveen@9090'); //private "#password" will be updated
//so we have set the "password" so which method we need to use to fetch the latest password - getPassword()
//GET call
let newPwd = lp.getPassword();
console.log(newPwd);//this is updated password


/**
 * constructor set the initial values
 * seter is always for update 
 * getter is for fetching the value anytime
 */

/**
 * From the API perspective 
 * when we try to create the object using "constructor" and supplying initial value - It's a POST call from API perspective
 * POST menas you create your "login" credential
 * 
 * getters() behaves like GET call
 * setters() behaves like PUT call
 */

/**
 * we are saying that whenever we are creating a object [outside of the class],
 * we should not access the private property directly, but we are giving the indirect access
 * we are accessing private data members via public layer, although we can not access them directly 
 * but ultimately we are accessing private data members indirectly and not directly, this is the encapsulation. That no one can manipulate "private data members" directly , you have to go via public layer.
 * but why this concept is designed in that way, 
 * for that refer file "encapsulation-three.js"
 */