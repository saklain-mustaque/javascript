// Naming limitations on variable names:
// 1. must contain only letter, digits or the symbols $ and _.
// 2. first character must not be a digit

// For naming convention camelCase is commonly used.

let name = "John"
let admin = name
console.log(admin)

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const age = someCode(BIRTHDAY)

/* 
We generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.
In this code, birthday is exactly like that. So we could use the upper case for it. 
In contrast, age is evaluated in run-time. Today we have one age, a year after we’ll have another one. It is constant in a sense that it does not change through the code execution. But it is a bit “less of a constant” than birthday: it is calculated, so we should keep the lower case for it.
*/