function addTwoNum(num1, num2){
    // console.log(num1 + num2)
    return num1 + num2
}

addTwoNum   // reference
let result = addTwoNum(3,5)  // execute
console.log(result);

function loginUserMessage(userName){
    if(!userName){
        return "Please enter a username!"
    }
    return `${userName} just logged in.`
}
console.log(loginUserMessage("Abdul Rahman"));

function calculateCartPrice(val1, val2, ...num1){
    return val1,val2,num1    // return values num1 only
}
console.log(calculateCartPrice(25, 500, 2000, 4000));


const user = {
    username: "Abdul",
    price: 999
}

function handleObject(anyObject){
    return `Username is: ${anyObject.username} and Price is: ${anyObject.price}`
}

console.log(handleObject(user));

let a = 20
const b = 30
var c = 50
console.log(a);
console.log(b);
console.log(c);