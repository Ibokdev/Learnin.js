import './style.css'

//data types allows you to store different data based on their type pn how JS understands it
//strings
//numbers
//floats
//booleans
//objects
//arrays
//null
//undefined

//strings are words or letters or characters enclosed with quotea ;
//let and const are used to define or create variables
//variables are containers or holders or store for data

let examplestring = 'patience is a girl';
console.log(examplestring)

//variables defined using const are not redeisgnable
const flavour = 'vanilla'

// Numbers are regular numbers or variables without quotes around them.
//if quotes are added they become strings.
let number = 20;
console.log(number)

//floats are decimal numbers
const floats = 1.34;

//boolean is a datatype that hold true or false;
let patience = 'girls'
let isAgirl = true;
let isAboy = false;

//Objects hholds multiple data which can be of different datatypes
const student = {
  student : "hycient",
  age : 24,
  isGay : true,
  subject : ["html", "css", "javascript"]
}

//to access any variable inside of an object, you use the dot operator
console.log(student.subject)

//arrray holds data of different types just like object
const arrayexample = ["html", "css", "javascript", false, 23, 2.3, {
  student : "hycient",
  age : 24,
  isGay : true,
  subject : ["html", "css", "javascript"]
} ]
console.log(arrayexample)
//how to know the length of an array
console.log(arrayexample.length)
//how to access data in an array -> using index
console.log(arrayexample[1])
console.log(arrayexample[6])

//null means nothing (no data) 
//undefined means has no value in it.


//CONDITIONS USING "IF ELSE"
let name = "hycient"
if (name === "hycient"){
  alert("SUCCESSFUL")
  console.log("YES")
}else {
  alert("UNSUCCESSFUL")
  console.log("NO")
}

const isAtool = true;

//OR
if (name === "vitae" || isAtool) {
  console.log("ACCEPTED")
  } else {
    console.log("FAILED")
  }

//AND
if (name === "vitae" && isAtool) {
  console.log("ACCEPTED")
  } else {
    console.log("FAILED")
  }
  //There are 4 loops, which are
  //for . foreach. while. map. dowhile.