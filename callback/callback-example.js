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
console.log(calculateArea(side));
console.log(calculatePerimeter(side));


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

console.log(calculate(side, area));
console.log(calculate(side, perimeter));

// both generates the same output but the code is redundant, logics are more clear, readable.

