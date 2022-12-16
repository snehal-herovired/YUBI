// sync and async behaviour of Javascript 

//In Javascript ,almost everything is object ,excluding symbols,undefined,null and boolean. 

// In javascript. functions are called as first class objects.
// In javascript functions can be stored in variable, or can be passed as an argument to any othe rfunctions.
// In javascript evrything happens in a global execution context .
// In javascript the global execution context makes a global or window object/function ,which
//  runs on callstack.

// in case of nodejs runtime environment , global();
//in case of browser ,window()
//Javascript is a synchorunous and single thread language;
// single thread : it can only perform a single at a time;
//synchorunous : line by line 
// console.log("start");
// function fun(a,b){
//     //takes lot of time to do some task
//     return a+b;
// }
// let a =fun(2,3)
// console.log(a);
// console.log("end")













//functions types
 //named function  
//  function fun(){

//  }
//  fun()

// anonymous funtion = functions with no name
//functional expression : 

// let a =function(a,b){
//    return a+b
// }
// console.log(a(2,3))

//arrow function
// .addeventlistenr('click',()=>{

// })
// let a =(a,b)=>{
//     return a+b;
// }
// console.log(a(1,2));

//IIFE => immediately innoved functional expression;
// fethcing api's
// (
//     (a,b)=>{

//     }
// )(2,3)


// callbacks
//it is a function which is given to another function as an argument and executed inside the other funtion.


// function fun(a,b,callback){
//     return callback(a,b)
// }

// function add(a,b){
//     return a+b;
// }
// let a =fun(2,3,add);
// console.log(a);

//addeventlistener('click',()=>{

// })
console.log("starting the code")
const fs =require('fs'); // require method is only used to require modules
const { isArgumentsObject } = require('util/types');
fs.readFile('test.txt',"utf-8",(err,data)=>{
    console.log(data,"data from file");
    fs.readFile('test1.txt',"utf-8",(err,data)=>{
        console.log("data from file1",data)
        
    })

})

// event loop = it identifies which is async behaviour and which sync;
// manages when to call and shoe outputs of callbacks and promises.

console.log("at the the end of file")

// ele.addEventListener("click",fun)


