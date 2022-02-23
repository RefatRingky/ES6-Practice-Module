// function declaration
function add1(num1,num2) {
    return num1 +num2;
}
// function declartion using varaible

const add2 = function add2(num1,num2) {
    return num1 + num2;
}
// anonymous Function
const add3 = function(num1,num2) {
    return num1 + num2;
}
// arrow function
const add4 = (num1,num2) => num1+num2;

const sum = add1(10,20);
const sum2 = add2(10,20);
const sum3 = add3(10,20);
const sum4 = add4(10,20);
console.log(sum,sum2,sum3,sum4);