'use strict';
//employee details
function test() {​ 

var employe_details={​id:'123',name:'Madhura C B',bloodgroup:'O positive',phno:'9686838759'
}​;
    
return employe_details;
}​

//array
function array(){
  var cars = {car:["Saab", "Volvo", "BMW"],
  bike:["pulsar","duke","fz"]};
    return cars;
}

//name function
 function madhura(){
  const person = {
    firstName: "Name:John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }

  };
  return person.fullName.call(person);

//   const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
// var value = person.fullName.call(person1);
//    return value;



//   let x = "";
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }

// for (let i in myObj.cars) {
//   x += "Car is:  " + myObj.cars[i].name + " Models are:  \n  ";
  
//   for (let j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j] + "  ,";
//   }
// }
// return x;
}


 //condition
function condition(){
    const hour = new Date().getHours(); 
let greeting;

if (hour > 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
return greeting;
}

//for loop
function loop(){
    var text = "";

for (var i = 0; i < 5; i++) {
  text += " " + i + "  ";
}
return text;
}

//string type
function type(){
let x = "John";        // x is a string
let y = new String("John");  // y is an object

var type ="Type of x is:"+typeof x + " /n Type of y is: " + typeof y;
return type;
}

//comparison
function comparison() {
  let age = " ";
  let voteable = (age > "18") ? "Too young":"Old enough";
  var vote = voteable + " to vote.";
  return vote;
}

//switch
function switchFunction(){
  let x = "0";
 var text;
  switch (x) {
    case "0":
      text = "Off";
      break;
    case "1":
      text = "On";
      break;
    default:
      text = "No value found";
  }
  return text;
}

//set function
function setFunction(){
  const letters = new Set(["a","b","c","d"]);
  var size = letters.size;
  return size;
}

//map function
function mapFunction(){
  const fruits = new Map([
    ["apples", "500"],
    ["bananas", "300"],
    ["oranges", "200"]
  ]);
  
  var map = fruits.get("apples");
  return map;
}

function json(){
  const myObj = {"name":"John", "age":30, "car":"BMW"};
  var json = myObj.name+" "+myObj.age+" "+myObj.car;
  return json;
  
}

function exampleClass(){
  // function Person(first, last, age, eye) {
  //   this.firstName = first;
  //   this.lastName = last;
  //   this.age = age;
  //   this.eyeColor = eye;
  // }
  

  // // const myFather = new Person("John", "Doe", 50, "blue");
  // const myMother = new Person("lora","John",40,"black");

  // // var display =
  // // "My father is " + myFather.age + ","+"My farther name is "+myFather.firstName+"."; 
  // var mother= "My mother name is "+myMother.firstName+".";

  // return mother;


  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create 2 Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Add a name method to first object
  myFather.details = function() {
    return this.firstName + " " + this.lastName + ", My father age is:" + this.age+", "+
    " my father eye color is"+this.eyeColor;
  };

  myMother.details = function() {
    return this.firstName + " " + this.lastName + ", My mother age is:" + this.age+", "+
    " my mother eye color is"+this.eyeColor;
  };
  
  // Display full name
//  var demo=
//   "My father details  is: " + myFather.details(); 
  var demo1 = "my mother details is:"+myMother.details();

  return demo1;
}

function testFunction(){
  const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // let txt = "";
  // for (let x in person) {
  //   txt += person[x] + " ";
  // };
  
  // var value = txt;

  var value =  JSON.stringify(person);
  return value;
}

function details(){
  const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  let txt = "";
  for (let x in person) {
    txt += person[x] + " ";
  };
  
  var value = txt;

 return value;
}

function getTime(){
  var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
return datetime;
}

    module.exports = {​
        test: test,
       array:array,
       madhura:madhura,
        condition:condition,
      loop:loop,
      type:type,
         comparison:comparison,
        switchFunction:switchFunction,
        setFunction:setFunction,
        mapFunction:mapFunction,
        json:json,
         exampleClass:exampleClass,
        testFunction:testFunction,
        details:details,
        getTime:getTime
        }​;
