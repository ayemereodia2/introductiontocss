"use strict";

// creation of objects using object initializer
const obj = ({
    property1: 12, // property name maybe an identifier like a variable
    2: "age", // property name can be a number
    "property3": 23.3 // property name can be a string
});
console.log(typeof obj);
// creating objects with function initializer

function Car(make, model, color){
    this.make = make;
    this.model = model;
    this.color = color;
}

// changing the methods of a Function Initializer on the Fly
Car.prototype.drive = function() {
    console.log(`The ${this.color} ${this.make} ${this.model} is an amazing Car`);
}
const newCar2 = new Car("Honda", "Civic", "Grey")
const newCar1 = new Car("Toyota", "Camry", "Red")

//newCar1.drive();
//newCar2.drive();

// You can create an Object using 
// Object.create()
const newObj = Object.create(obj);
newObj.sendMessage = function() {
    console.log(`Your message has been sent at ${this.property1}`);
};
//newObj.sendMessage();



const myObj = {};
const str = "myString";
const rand = Math.random();
const anotherObj = {};

myObj.type = "Dot syntax for a key named type";
myObj["date created"] = "this key has space";
myObj[str] = "This key is a variable string";
myObj[rand] = "this key is a random variable";
myObj[anotherObj] = "This key is another object";
myObj[""] = "This key is an empty string";

// console.log(myObj.type);
// console.log(myObj["date created"]);
// console.log(myObj[str]);
// console.log(myObj[rand]);
// console.log(myObj);

// enumerating objects
const parentObject = {
    greet: function(){
        console.log("Saying hi...");
    }
};

const childObject = Object.create(parentObject); //child inherits the methods and properties in parent

childObject.message = function (){
    console.log("Hello I am a child");
};

// childObject.message();
// childObject.greet();

for(let prop in myObj){
    if(myObj.hasOwnProperty(prop)){
        //console.log(prop);
    }
}
const keys = Object.keys(childObject);
console.log(typeof keys);
delete childObject.message;
console.log("message" in childObject);

Car.prototype.getCarDetails = function () {
    console.log("showing meaning ...");
};
const volvo = new Car("Volvo", "V-100", "Black");

// volvo.getCarDetails();

const testObject = {
    a:7,
    get b(){
        return this.a + 1;
    },
    set c(x) {
        this.a = x / 2;
    }
}
// console.log(testObject.a);
// console.log(testObject.b);
// testObject.c = 50;
// console.log(testObject.a);
// console.log(testObject.b);

// Strings in JavaScript

const smallStr = new String("4 + 4");
const cleanStr = "4 + 4";
// console.log(smallStr);
// console.log(cleanStr);
let newMessage = "AelloH, String, HelloMa";

//newMessage[0] = "K"; // no effect because strings are immutable
console.log(newMessage.length); // number of chr in string
console.log(newMessage);

console.log(newMessage.charAt(0));
console.log(newMessage.charCodeAt(0));

console.log(newMessage.lastIndexOf("Ma"));

//for(let i = 0; i < newMessage.length; i++){
    newMessage+="0";
//}
let a = "Men";
let b = new String("Men");
let c = new String("Men");
console.log(c == b);


//let n = m+="o";
//console.log(m === n);

let x = 5;
x++;

let m = "Hael@lo Man";
let n = "World";

/*console.log("->", m.charAt(4));
console.log(m.concat(" ").concat(n));
console.log(m.indexOf("o"));
console.log(m.lastIndexOf("o"));
console.log(m.startsWith("H"));
console.log(m.includes("@"));

console.log(m.split(""));
console.log(m.slice(0,2));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);

console.log(Number.isInteger(Number.parseFloat("9.5")));
console.log(Number.parseInt("9"));
console.log(x.toString());

const arr1 = Array();
const arr3 = [];
arr3.length = 5;

console.log(arr1.length);

for(i in arr1) {
    console.log("item");
}
const weather = ["wind", "rain", "fire"];
weather[3.5] = "snow";

weather.forEach(item => {
    //console.log(item);
})
let nonsparseArray = ["first", "second",, "fourth"];
console.log(nonsparseArray.length);

nonsparseArray.forEach(item => {
    //console.log(item);
})
nonsparseArray = nonsparseArray.concat(["flood", "thunder"]);
//console.log(nonsparseArray.join(" "));
const games = ["CoD", "PES"];

console.log(games.unshift("Chicken Run", "End of Ages"));
//console.log(games.slice(0,2));
console.log(games.splice(0,2,"Apple games", "EA games"));
console.log(games.reverse());*/

const arr = [];
arr[3.5] = "Oranges";

//console.log(arr.length);
const arr2 = new Array("Shemi", 24, "Edd");
console.log(arr2);

const inventory = [
    { name:"asparagus", type:"vegetable" },
    { name:"banana", type:"fruit" },
    {name: "goat", type: "meat" },
    { name: "fish", type: "meat" },
    ,
    ,
    { name: "cherry", type: "fruit" },
];

// working with sparse arrays
const sparceArr = ["Men", "Women", "Children",,,];

sparceArr.forEach(item => {
    //console.log(item);
});

const content = inventory.filter(() => true);
//console.log(Object.keys(inventory));

for(let item in sparceArr){
    //console.log(item);
}

// MULTI_DIMENSIONAL ARRAYS
const arrMul = Array(4);
for(let i = 0; i < 4; i++){
    arrMul[i] = Array(3);
    for(let j = 0; j < 3; j++){
        arrMul[i][j] = `[${i}, ${j}]`;
    }
}

//console.log(arrMul.flat());
const myArr = [[1,2], [3,4], [5,6], [7,8]];
const specialArr = [1,2,3,4,5,6,7];
const newSpecial = specialArr.flatMap(num => [num, num * 10]);
//console.log(newSpecial);

// CLASSES IN JavaScript
const todaysDate = new Date(2024, 12, 5);
//console.log(todaysDate.getTime().toLocaleString())

class MyClass {
    bah = "World";
    constructor(){
        this.foo = "Hello";
    }

    myMethod(){
        console.log("myMethod body");
    }

    static staticField = "";

    static staticMethod(){

    }

    static {

    }

    #privateField = 25;
}
console.log(new MyClass().foo);

function MyFunctionConst(){
    this.foo = "Hello";
}

MyFunctionConst.staticField = "bar";
MyFunctionConst.staticMethod = function(){
    console.log("staticMethod body");
}
MyFunctionConst.prototype.instanceMethod = function(){
    console.log("instanceMethod body");
}
const newType = new MyClass();
newType.myMethod();

// class expression
const profile = class Profile {
    #age 
    constructor(age){
        this.#age = age;
    }

    showMessage(){
        console.log(`I am ${this.#age} years old`);
    }
}
const myProfile = new profile(15);
//myProfile.showMessage();

class SuperColor {
    hue = 190;
    constructor(r,g,b){
        this.supervalues = [r,g,b]
    }
}
class Color extends SuperColor {
    #values;
    constructor(r,g,b){
        super(r,g,b)
        this.#values = [r,g,b];
    }

    setRed(value){
        if(value < 0 || value > 255){
            throw new RangeError("[r,g,b] value out of range");
        }
        this.#values[0] = value;
    }

    getRed(){
        return this.#values[0];
    }

    toString(){
        return this.#values.join("-");
    }
}
const myColor = new Color(255,0,0);
myColor.setRed(17);
//console.log(myColor.getRed());

/*
you should not access the underlying implementation
of an object, but instead use well-abstracted methods
to interact with it*/


console.log(myColor.toString());