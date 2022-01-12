'use strict'

// 1. Read the JSON file into a variable called students
const students = require("./students.json")

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker
const say = message => console.log(message)
// students.forEach(({firstName}) => say(`Hello ${firstName}`))
students.forEach(({firstName,lastName}) => say(`Hello ${firstName} ${lastName}`))

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1
const filteredStudents = students.filter(student => student.lastName.charAt(0) === "D")
console.log(`Count of last names starting with D is ${filteredStudents.length}`)