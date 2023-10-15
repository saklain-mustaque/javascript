// array

const myArr = [0,1,2,3,4,5]
const myArr1 = new Array(1,2,3,4,5)
console.log(myArr[0])   // indexing

// Array methods
myArr.push(6)
myArr.unshift(6) // add the arg value at first place & shift the next values
myArr.shift()  // removes the first value

const newArr = myArr.join() // join() converts the array to string
console.log(newArr)
console.log(myArr)

console.log("A",myArr1);

const newArr1 = myArr1.slice(1,3)
console.log("Slice: ", newArr1)
console.log("B", myArr1);

const newArr2 = myArr1.splice(1,3)
console.log("C", myArr1);
console.log("Splice: ",newArr2);

const fruits = ['apple', 'banana', 'mango']
console.log(`Length: ${fruits.length}`);
console.log(fruits);
fruits[5] = 'mango'
console.log(fruits);
console.log("Lenght: ", fruits.length);

// Decreasing the length 
fruits.length = 2
console.log(fruits);