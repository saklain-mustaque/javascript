const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
// arr1.push(arr2)
// console.log(arr1); 

// const concatArr = arr1.concat(arr2)
// console.log(concatArr);

const all_array = [...arr1, ...arr2]
console.log("All Array:", all_array)

const anotherArray = [1,2,3,[4,5],[6,7,[8,9]]]
console.log("Flat Array: ",anotherArray.flat(Infinity));
console.log(Array.isArray(arr1));
console.log(Array.from("Saklain"));

let score1 = 100
let score2 = 200
let score3 = 300
console.log("Array of: ", Array.of(score1,score2,score3))