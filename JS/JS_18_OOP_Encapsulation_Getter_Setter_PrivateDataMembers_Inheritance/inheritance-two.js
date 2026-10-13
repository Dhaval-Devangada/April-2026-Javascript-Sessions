/**
 * Program - 6
 */

class Car {
    myspeed = 100;

    start() {
        console.log('CAR - start');
        console.log(this.myspeed); //if just change variable name from "mysped" to "speed" then, below will get 200
    }
}

class BMW extends Car {
    speed = 200;

    start() {
        console.log('BMW - start');
    }

    dashboard() {
        //below we are accessing the BMW's "start()"
        this.start();//current class start()

        //can we access the Car's "start()" here - YES - but we need use "super" keyword 
        super.start();//super class start()


        //we have used "super" keyword with the method and its working fine
        //but in JS we can not access the "super class" variable  using the "super" keyword
        //in JS "super" works, only for mehods

        //below we are accessing the BMW's "speed"
        console.log(this.speed);//current class speed

        //below we are accessing the CAR's "speed"
        //below when we write the "super." then we won't get the suggestion for "speed". with "this." we will get the suggestion
        console.log(super.speed);//super class speed //undefine

        //conclusion: "super" keyword is only used for the "parent class methods and not for the variable"
        //we will never use this in framework but just for the interview point of view
    }


}

let bmw = new BMW();
bmw.dashboard();// 

/**
 * BMW - start
   200
   undefined - why its giving "undefine" here?
   if we have done exactly same thing in java then we would have got 100.
   even here if we click on "super.speed" then we will be redirected to "speed" of the "super" class.
 */

//static can be private also
//there is no concept of "top-casting" and "down-casting" in the JS