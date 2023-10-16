const tinderUser = new Object()
tinderUser.id = '1'
tinderUser.name = 'Abdul'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: 'something@gmail.com',
    fullname:{
        userfullname:{
            firstname: "Abdul",
            lastname: "Rahman"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {'a':1,'b':2}
const obj2 = {'c':3,'d':4}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const arrObj = [
    {
        email:'abdul@gmail.com'
    },
    {
        email:'abdul@gmail.com'
    },
    {
        email:'abdul@gmail.com'
    }
]
arrObj[1].email
// console.log(tinderUser);

// console.log("Object Keys: ", Object.keys(tinderUser));
// console.log("Object Values: ", Object.values( tinderUser));
// console.log("Object Entries: ", Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    name: "JS",
    price:"Time",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course   //Destructuring
console.log(instructor);