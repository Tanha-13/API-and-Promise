/**
 * A callback is a function that is passed as an argument to another function, and is called after the main function has finished it execution.
 * Callbacks are used to handle the results of asynchronous operations in a non-blocking manner. Callbacks allows to continue executing code while the operation is being executed in the background. Once the operation has completed, the callback function is called with the result of the operation.
 * 
 * Usage of callbacks in websites - event handling, asynchronous operations, AJAX requests, fetching data, loading resources like images or scripts dynamically, executing code after an action or operation, setTimeout, setInterval, data processing, error handling, Promises, async/await. 
 */

const btn = document.querySelector("button");
btn.addEventListener("click", greet);

function greet(name, callback){
    

    sayGoodDay();
}

function sayGoodDay(){

}