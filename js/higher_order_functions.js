function add(num1,num2){
    return num1+num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function substract(num1,num2){
    return num1-num2;
}

function calculator(num1,num2,operation){  //higher order function that takes operation function as its argument
    return operation(num1,num2)
}
let ans=calculator(5,5,divide);
console.log(ans)
 