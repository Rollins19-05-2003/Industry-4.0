let a = "Hello, Welcome to Node JS Joruney which is a runtime environment for JavaScript"
console.log(a)

const math = require("./math");
console.log("Addition : ",math.sum(3,4));
console.log("Square : ",math.square(3));


const {fruits, createFunc, readFunc, updateFunc, updateWithIndexFunc, delFunc} = require("./app2");
fruits();
console.log(createFunc(12));
console.log(createFunc(123));
console.log(createFunc(1234));
console.log(readFunc());
console.log(updateFunc(31));
console.log(updateWithIndexFunc(31,1));
console.log(delFunc());
