// parameters to a functions are
// pass by value
// i.e a function creates its 
// copy and does whatever it can
// with it.


// when you pass an object or an array 
// to a function, any changes within
// the function is visible
// outside the function.

const myCar = {
    make:"Honda",
    model: "Accord",
    year:"1992"
}

function addModel(obj){
    obj.model = "Corolla";
}

// console.log(myCar.model);
// addModel(myCar);
// console.log(myCar.model);



// function expression
 const square1 = function (n){
    var fname = "Kingsley";
    return n * n;
 }   
 
function addSquares(a, b){

    function square(x) {
        var fname = "Mary";
        return x * x;
    }
    return square(a) + square(b);
}

function outer(x) {
    const fname = "samuel";
    return (y) => {
        return x * y;
    }
}

// const innerFunc = outer(6);
// console.log(innerFunc(4));
const pet = function(name){
    const getName = function(){
        return name;
    }
    return getName;
}

// const myPet = pet("Vervie");
// console.log(myPet())

const createPet = function(name){
    let sex;
    const pet = {
        setName(newName){
            name = newName;
        },

        getName(){
            return name;
        },

        getSex(){
            return sex;
        },
        setSex(newSex){
            if(typeof newSex === "string" && (newSex.toLowerCase() === "male" || newSex.toUpperCase())){
                sex = newSex;
            }
        }
    };
    return pet;
}

// const angie = createPet("Angie");
// console.log(angie.getName());

// angie.setName("Oliver");
// angie.setSex("male");
// console.log(angie.getName());
// console.log(angie.getSex());

const getCode = (function() {
    const secretCode = "0]Eal(eh&&2"; // outside should not modify this

    return () => {
        return secretCode;
    };
})();

(function () {
    return "Alien"; // IIFE an immediately invoked function expression
})();

function multiply(a, b){
    a = typeof a !== "undefined" ? a : 1;
    b = typeof b !== "undefined" ? b : 1;
    console.log(a,b)
    return a * b;
}
console.log(multiply(4));