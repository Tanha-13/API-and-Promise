// both generates the same output but the code is redundant, logics are more clear, readable.
// without callback
const side = [1,2,3,4,5];
const calculateArea = (side) => {
    const output = [];
    for (let i = 0; i < side.length; i++) {
        const area = side[i] * side[i];
        output.push(area);        
    }
    return output;
}

const calculatePerimeter = (side) => {
    const output = [];
    for (let i = 0; i < side.length; i++) {
        const perimeter = side[i] * 4;
        output.push(perimeter);        
    }
    return output;
}
// console.log(calculateArea(side));
// console.log(calculatePerimeter(side));


// using callbacks
function area(eachSide){
    return eachSide * eachSide;
}

function perimeter(eachSide){
    return eachSide * 4;
}

const calculate = (side, logic) => {
    const output = [];
    for(let i = 0; i<side.length;i++){
        output.push(logic(side[i]));
    }
    return output;
}

// console.log(calculate(side, area));
// console.log(calculate(side, perimeter));

// example 02
//callback in setTimeout function

function message(){
    console.log("Created Message is shown after 3 seconds");
}
// main function is setTimeout. It takes the message function as an argument. So the message function is the callback function.
setTimeout(message,3000);

// direct callback function
setTimeout(function message(){
    console.log("Direct Message is shown after 1 second");
},1000);

// anonymous function
setTimeout(function(){
    console.log("Anonymous function is shown after 4 seconds");
}, 4000);

// arrow callback function
setTimeout(() => {
    console.log("Arrow Message is shown after 2 seconds");
},2000);
