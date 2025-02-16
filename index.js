// // 1- 

// a = 1
// b = 2
// c = undefined

// console.log(a,b)

// c = b
// b = a
// a = c

// console.log(a,b)

// 2- 

// let personAge = Number("28")    
// console.log(personAge)          // output => 28
// console.log(typeof personAge)   // output => number

// let person1Age = Number = 28                
// let newVariable = person1Age.toString()     //  COnvert number to string, use toString() 
// console.log(person1Age.toString())          //  28
// console.log(typeof person1Age);             // 

// 3- Concatinate String

// let first = 'Test'
// let last = ' Testing'
// let full = first + last
// console.log(full)

// let firstName = 'Test'
// let lastName = 'Testing'
// let fullName = `${firstName} ${lastName}`
// console.log(fullName)

// let fullName = 'This is my Random Number'

// Exercise - 
// const resturant = {
//     name: 'Evergreen Cafe',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'brookLyn',
//     state: 'NY',
//     zipcode: '11206',
// }

// const fullAddress = `${resturant.address}, ${resturant.city}, ${resturant.state}, ${resturant.zipcode}`
// console.log(fullAddress)

// let person = {
//     name: "Ali",
//     age: 30,
//     city: "Karachi"
// }

// person.job = "Software Engg"
// const fullName = `${person.name}, ${person.age}, ${person.city}, ${person.job}`
// console.log(fullName);

// // how to delete
// delete person.job

let student = {
    name: "Izhan",
    age: 23,
    subjects: ['Maths','Physics', 'IT'],
    isEnrolled: true,
}

// console.table([student]);    // to create table form

// console.log(`Name: ${student.name}`)
// console.log(`Age: ${student.age}`)
// console.log(`Subjects: ${student.subjects}`)
// console.log(`Status: ${student.isEnrolled}`)

// student.grade ="A"
// student.isEnrolled = false

// IF ELSE CONDITION

// let myAge = 30
// if(myAge > 25){
//     console.log("Your Age is greater then 30")
// }
// else{
//     console.log("You are Younger")
// }

// Exercise -

// userLoggedIn = true
// userSubcriber = 'pro'

// if(userLoggedIn){
    
// }

// let user = true;
// let pro = false;

// if(!user){
//     console.log("Please login")
// }

// if(user && !pro){
//     console.log("Please Subscribe")
// }
// if(user && pro){
//     console.log("You Are Pro Subscriber")
// }

// if(!user){
//     console.log("please Login")
// }

// &&  == AND Operator
// ||  == OR Operatpr
// !   == NOT Operator

let user = true;
let pro = true;

if(user == false){
    console.log(" please Login")
}
else{
    if(pro){
        console.log("You are Pro Subcriber")
}
    else{
        console.log("please Subcribe")
}
}

