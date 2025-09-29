array = [true, 'hello', 5, 12, -200, false, false, 'word'];

let object = new Object();

function objectKey(key){
    if (key in object){
        object[key] += 1
    }else{
        object[key] = 1
    }

}




for (let element of array){

    if (typeof element == "number"){
        type = "number"
    }else if (typeof element == "string"){
        type = "string"
    }else if (typeof element == "boolean"){
        type = "boolean"
    }
    objectKey(type)
    console.log("Тип елемент масива, та елемент:",typeof element, element)
}

console.log(object)