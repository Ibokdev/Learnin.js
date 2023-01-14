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
  // alert("SUCCESSFUL")
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
 
  //ternary operators are short logic operations
  const isvite = name === "vite" ? true : false
  console.log("isvite", isvite)

//There are 4 loops, which are
  //for . foreach. while. map. dowhile. filter .find
 //FOR
//first part is to define the variable, 
//second part check a certain condition
//third perform action on the previous variable
const age = 27
for (let patience = 22; patience <= age; patience ++){
  console.log("patience", patience)
}

const bag = ["rice", "spaghetti", "noodles", "beans"]
//second way of defining an array
const newArray = new Array ("rice", "spaghetti", "noodles", "beans")

for (let list in bag){
  console.log(bag [list])
}

//FOR EACH
//foreach loop is a JS array loop that accept a function and passes the result of each 
//loop to the function as parameter
newArray.forEach(function (item){
  console.log("foreach item", item)
})

//WHILE
let range = 30;
while (range > age) {
  range--
  console.log(range)
}

//DO WHILE
//dO while loop performs an action first before checking the conditiions

const istvplugged = false;
do {
  console.log("move tv")
} while (istvplugged);


//functions
//callbacks
//callback hell

//FUNCTION is a reusable piece of code that is defined by using the key word function
//It may or maynot have any argument.
//ARGUMENT is a piece(s) of data that is passed to a function.There are sveral ways of defining a function.

//1.function without argument
function Name (){
  alert("yeeeeeeeeeh!")
}

// Name()

//2.function withargument
function functionwithArgument(message, issue) {
  const eleme = document. getElementById("app");
  console.log(eleme)
  eleme.innerHTML = `<h1>${message}</h1>`
  eleme.innerHTML += `<h1>${issue}</h1>`
}

//function invocation
functionwithArgument("patience is beautiful", "too beautiful")

//functionwithArgument("hycient is here", "")

//ARROW FUCTION , ANONYMOUS FUCTION 
//There is a slight differnce but close similarities due to the fact taht that both dont have names.
//ANONYMOUS FUNCTION:
const annoymous = function(x,y,){
return (x * y);
}

console.log (annoymous(23,78))

const mous = function(x,y,operation){
  if (operation === "add"){
    return x +y;
  } else if (operation === "minus"){
  return (x - y);
  } else if (operation === "mul"){
    return x * y 
  } else {
    return {x , y}
  }
  }
  
  console.log (mous(23,78, "minus"))


  //ARROW FUNCTION

  const arrowfunction = (x,y,operation) => {
    if (operation === "add"){
      return x +y;
    } else if (operation === "minus"){
    return (x - y);
    } else if (operation === "mul"){
      return x * y 
    } else {
      return {x , y}
    }
  }

  console.log (arrowfunction(2, 3 , ""));

  //Variable scope

  const assignment = () => {
  student.subject.forEach((subject) => {
    console.log(subject)
  })
  }
  
  assignment()

  //CALLBACK FUNCTION are funstions passed into another functions as an argument

  const callbackExample = (firstname,surname, callback ) => {
  callback(surname)
  }
  callbackExample("hycient","ibok", (name) => {console.log(name)})

  const callbackadd = (x , y, callback) => {
    callback( x , y)
  }
  callbackadd(3 , 2, (z,r) => {console.log(z+r)})


  //DOM MANIPULATION.Document Object Model.

  const app = document.getElementById("app")

app.style.color = "green"
app.style.fontSize = "0.3em"


const input1 = document.getElementById("inputemail");

input1.addEventListener("keyup", () => {
  console.log (input1.value)
  if (input1.value.length < 9) {
    input1.style.borderWidth = 2
    input1.style.borderColor = "red"
  } else {
    input1.style.borderWidth = 2
    input1.style.borderColor = "green"
  }
})

for (let i=2; i < 24; i++){
  //not nessecary but for adding texts, string or concatinating values 
  console.log (`${i}`)
}

//using FOR LOOP to iteratr over an ARRAY **include let
const baggies = ["fan", "table", "chair", "centertable"]
for( let items in baggies){
  console.log (baggies[items])
}


// do {
//   console.log ("hello bae")
// } while (1 < 0);

let num = 10;
while (num > 1) {
 console.log (num) 
 num--
}

const lengthinbaggies = baggies.length
let iterator = 0
while (lengthinbaggies > iterator) {
  console.log (baggies[iterator])
  iterator ++
}

//functions
 //normalfunction
function outputnames (params) {
  
}
//arrowfunction
const arrowoutputname = () => {

}

//annoynmousfunction
const namelessoutput = function () {

}

const recievescallback = (callbackExample2) =>{
  callbackExample2("name")
}
const therecievedfunction = (name) =>{
  console.log(name)
}
recievescallback(therecievedfunction)
recievescallback ((name) => {console.log (name)})
//MAP
const baggi = ["fan", "table", "chair", "centertable"]

baggi.map(function (val,index) {
console.log(`value ${val} and index ${index}`)
})

//FILTER
const bagg = ["fan", "table", "chair", "centertable"]
const filtered = baggi.filter((val,index) => {
return val=== "fan"
})
console.log(filtered)

//ASSIGNMENT
// = means assign
// == checks same but not data type
// === check if its samr and data type
// != if its not equal to the value
// !== if its not equal to the value or data type
// > greater than
// < less than