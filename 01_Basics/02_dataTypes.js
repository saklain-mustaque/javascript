//Numbers
console.log("not a number"/2) // NaN -> represents a computational error

//if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).
let result = console.log(NaN**0) 

//Strings
// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
console.log(`The result is ${result}`)

//Boolean: true and false

//null: It’s just a special value which represents “nothing”, “empty” or “value unknown”.