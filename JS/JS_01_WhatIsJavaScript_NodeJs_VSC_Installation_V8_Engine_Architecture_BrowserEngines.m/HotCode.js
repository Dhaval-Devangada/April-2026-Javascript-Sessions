let a =10;
console.log(a);


function add(a,b){
    return a+b;
}

for(let i = 0;i< 100000;i++){
add(10,20)
}

// to check turbofan status write below command in terminal
// node --trace-opt HotCode.js