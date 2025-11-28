// 1------

// Вывод:
// { key: 'a', value: 1 }
// { key: 'b', value: 2 }
// { key: 'c', value: 3 }




function iterate(object, callback){
    for( key in object){  
    callback(key, object[key])}
}

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});


//2---------
//

function store(arg){
    function base(){
        return arg;
    }
    return base;
}

const read = store(5);
const value = read();
console.log(value); // Output: 5

//3-------------

function contract(fn, ...type){
    return function(...arg){
        if(fn.length != (type.length-1)){
            throw new TypeError(
            `Ожидается ${fn.length} аргумент(ов), получено ${type.length-1}.`
          );
        }
        for(curentElement of type){
            if(curentElement != type[0]){
                throw new TypeError(
            `Ожидается типы ${type[0]} аргумент(ов), а получены аргументы либо выдводы ${curentElement}.`
          );
            }
        }
        return fn.apply(this, arg);
    }
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); // Output: 5


const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); // Output: Hello world!