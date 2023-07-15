let name = "random"

let valueInNumber = Number(name)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33" => 33
// "33abv" => NaN
// true => 1

let isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)


// ****************** Operations *******************
// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).

console.log( 6 - '2' ); // The subtraction always converts to numbers, so converts '2' to a number

let stringDivision = "6"/"3"    // converts both operands to numbers
console.log(stringDivision)
console.log(typeof stringDivision)

let apples = "3"
let oranges = 3
console.log(oranges - apples )

let a = +"3"
let b = +"2"
console.log(a + b)

// The values null and undefined equal == each other and do not equal any other value.
console.log(undefined == null)