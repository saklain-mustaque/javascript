let myDate = new Date()
console.log(myDate.getDate())
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())

// let myCreatedDate = new Date(2023,1,5)
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myDate.toLocaleString('default',{weekday:"long"}))