function fruits() {
    console.log(" ")
    console.log("------   One apple a day keeps doctor away   ------");
    console.log(" ")

}

// CRUD Operation
let arr = [];
function createFunc(element){
    console.log("This is create function : ");
    arr.push(element);
    return arr;
}

function readFunc(){
    console.log("This is read function : ");
    return arr;
}

function updateFunc(element){
    console.log("This is update function 1 : ");
    arr.pop(element);
    arr.push(element);
    return arr;
}

function updateWithIndexFunc(element, index){
    console.log("This is update function : ");
    arr[index] = element;
    return arr;
}

function delFunc(element){
    console.log("This is delete function : ");
    arr.pop(element);
    return arr;
}

// exporting the functions

module.exports = {
    fruits,
    createFunc,
    readFunc,
    updateFunc,
    updateWithIndexFunc,
    delFunc
}