for(let i = 0; i < 5; i+=2){
    //console.log(`${i} running js`);
}

let i = 0;
do {
    i++;
    //console.log("I must run at least once");
}while(i < 0)

const arr = [1,4,5,3]
arr.foo = "hello";

// iterate over property names
for(const i in arr){
    //console.log(i);
}

// iterate over property value
for(const i of arr){
    //console.log(i);
}

const obj = {foo:1, bar:2};

for(const [key, value] of Object.entries(obj)){
    console.log(key, value);
}