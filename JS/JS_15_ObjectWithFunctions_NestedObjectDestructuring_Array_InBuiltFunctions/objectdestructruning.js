/**
 * Parogram - 2
 * Nested Object Destructuring
 */

const { use } = require("react");

let user ={
    name:"Tom",
    age:30,
    address: {
        unit: 101,
        apartment: "new apt",
        city: 'LA'
    }
};

//Object destructuring means - It's up to you that what exactly you want to access. / fetching the specific property from the object

//just give me name from the "user" object
let {name} = user; //from the entire "user" object just give me the name here 
console.log(name);

console.log('------------------------------------');

let user ={
    name:"Tom",
    age:30,
    address: {
        unit: 101,
        apartment: "new apt",
        city: 'LA'
    }
};

let {name,age} = user; //from the entire "user" object just give me the name and age here 
console.log(name,age);

console.log('---------------------------');

/**
 * but if we try to access "address" here then what should i do here?
 * suppose lets say
 * from the entire object give me the "name" and "full address"
 */
let user ={
    name:"Tom",
    age:30,
    address: {
        flat: 101,
        apartment: "new apt",
        city: 'LA'
    }
};

let {name,address} = user;
console.log(name,address); // here entire "address" object will be given to you //Tom { flat: 101, apartment: 'new apt', city: 'LA' }

console.log('--------------------------------');
/**
 * but if i just want the "flat" number then how should i access it ? 
 i don't want to destructure entire address
 */
let user ={
    name:"Tom",
    age:30,
    address: {
        flat: 101,
        apartment: "new apt",
        city: 'LA'
    }
};

// here if you use dot (.) operator then it will start giving you error here and error is ==>',' expected.
// uncommnet below and check
// let {name,address.flat} = user; 
// console.log(name,address.flat);

// even if you try to access using bracket noation then also it will give you an error here and error is ==>',' expected.
// uncommnet below and check
// let {name,address['flat']} = user; 
// console.log(name,address['flat']);

//So to resolve above error we need to use :{keyname}
let {name,address:{flat}} = user; 
console.log(name,flat);

console.log('------------------------------');

let user ={
    name:"Tom",
    age:30,
    address: {
        flat: 101,
        apartment: "new apt",
        city: 'LA'
    }
};

//what if i want to get two values from the "address"?
let {name,address:{flat,apartment}} = user;  // so here we need to write key "address" then their keys {keys of addrees} which we want to access 
console.log(name,flat,apartment);
//To print the values we can not use "this" keyword because "this" keyword is used within the object, here we are writing outside of the object


console.log('----------------------------------------');
//All of the above rules apply for the complete nested object ,
//suppose inside the "address" if we have one more nested object then for that object also same rule will be applied 
//check below example

let user ={
    name:"Tom",
    age:30,
    address: {
        flat: 101,
        apartment: "new apt",
        city: 'LA',

        location:{
                lat:12.33,
                long:45.44,
        }
    }
};

//"address" is a nested object so "address:{ }" 
//and "location" is also a nested object so inside the "address:{ }" ==> location:{lat,long} 
 let {address:{location:{lat,long}}} = user;
 console.log(lat,long);

 console.log('-----------------------------------');
 //in below example we want to print all the values [normal value, nested object value]

 let user ={
    name:"Tom",
    age:30,
    address: {
        flat: 101,
        apartment: "new apt",
        city: 'LA',

        location:{
                lat:12.33,
                long:45.44,
        }
    }
};
let {name,address:{flat},address:{location:{lat,long}}} = user;
 console.log(name,flat,lat,long)

 // we have one object and inside the object we have function.
 // so can we do the function destructuring - with function which is inside the object?
 // is it feasiable?

  let {address:{location:{lat,long}}} = user;
 console.log(lat,long);

 console.log('-----------------------------------');
 //in below example we want to print all the values [normal value, nested object value]

 let user ={
    name:"Tom",
    age:30,
    
    coding(){
        console.log(this.name , 'is coding');
    }
};

let {coding} = user; 
coding();
/**
 * above we have done the function destructuring 
 * but what is use of that coding now, how we will use that coding now?
 * even if we try to use it by writing "coding()" then also it will give us the error.
 * and it does not make any sense
 * so we can not destructur , only the keys-values - you shold destructure
 * functions are the behaviour of the object and not the properties
 */

console.log("--------------------------------------");
let user ={
    name:"Tom",
    age:30,
    address: {
        flat: 101,
        apartment: "new apt",
        city: 'LA',

        location:{
                lat:12.33,
                long:45.44,
        }
    }
};
let {name,address:{flat},address:{location:{lat,long}}} = user;
 console.log(name,flat,lat,long) //Tom 101 12.33 45.44

 //in above example, we have used "address" 2 times, can we write addrees 1 time and access the properties?
 //to run below we need to comment above because we are using same property name[name,addrees] to let 
 let {name,address:{flat,location:{lat,long}}} = user;
 console.log(name,flat,lat,long)
 
 /**
  * Diff between java and javascript
  * java is rule based.
  * js is flexibale. java is not flexible at all
  * java is proper object oriented and such thing - proper rule bases
  * in java with [int a = "dhaval"] is not possible
  * and JS initially when we see so much flexiability, so we find it weird => because everything is allowed here 
  * in js we don't have exception concept 
  * errors are coming but we don't have/seen [array index out of bound, negative index and all]
  * js, python,vbscript are very flexiable- that is how it is - that is how it is designed
  * don't think much by comparing thsese languages with java 
  * don't think that whay it is not designed like this 
  * if you start comparing with java then its wrong comparasion
  * if you want to compare java then batter you compare java with C# / GO language
  * 
  */