// fetch("https://something.com").then().catch().finally()
//most of the time promises are consumed. But you need to know how to create a promise to understand in depth.


//creating a promise - holding the promise in a variable(optional)
const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls, cryptography, network call
    setTimeout(() => {
        console.log("Async task is complete");
        resolve();
    }, 1000)
}); // an instance

// consuming the promise
promiseOne.then(function(){
    console.log("Promise consumed");
})


//promise without a variable
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task two");
        resolve();
    },1000)
}).then(function(){
    console.log("Async two resolved");
})

