/**
 * A callback is a function that is passed as an argument to another function, and is called after the main function has finished it execution. Callbacks are used to make sure that certain code does not execute until parent functions code has already finished execution. It solely depends on the use-case where to call the callback function in the parent function. 
 * 
 * Where callbacks really shine are in asynchronous functions, where one function has to wait for another function(like waiting for a file to load).
 * 
 * Callbacks help to develop asynchronous javascript code and keeps safe from problems and errors.
 *
 * Callbacks are used to handle the results of asynchronous operations in a non-blocking manner. Callbacks allows to continue executing code while the operation is being executed in the background. Once the operation has completed, the callback function is called with the result of the operation.
 * 
 * Usage of callbacks in websites - event handling, asynchronous operations, AJAX requests, fetching data, loading resources like images or scripts dynamically, executing code after an action or operation, setTimeout, setInterval, data processing, error handling, Promises, async/await. 
 */

const btn = document.querySelector("button");
btn.addEventListener("click", function(){
    greet('Nusrat', sayGoodDay);
});

let h1 = document.createElement("h1");
function greet(name, callback){
    h1.innerHTML = `Hello ${name}`;
    callback();
    document.body.appendChild(h1);
}

function sayGoodDay(){
    console.log("Callback called");
}