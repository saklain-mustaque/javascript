//singleton
// Object.create

// object literals
const mySymbol = Symbol("my-symbol");
const jsUser = {
    [mySymbol]:'symbol-key',
    name: "Saklain",
    age: 23,
    location:"Hyderabad",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    email: "saklain.mustaque@gmail.com"

}

// Access object values
console.log(jsUser.name);
console.log(jsUser['location']);
console.log(typeof jsUser[mySymbol])

// Modify object/values
jsUser.email = "saklain.mustaque@thomsonreuters.com"
// Object.freeze(jsUser)    // the object won't be modified after this
// jsUser.email = 'saklain.mustaque@google.com'

jsUser.greeting = function(){
    return `Hello ${this.name}`
}

console.log(jsUser.greeting());