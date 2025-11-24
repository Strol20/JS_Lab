// function seq (...arg){


// }

// seq(x => x + 7)
//    (x => x * 2)(5)

// // Результат: 17
// seq(x => x * 2)
//    (x => x + 7)(5)

// // Результат: 24
// seq(x => x + 1)
//    (x => x * 2)
//    (x => x / 3)
//    (x => x - 4)(7)


function array(arg){
    let data = [];
    function base(index){
        return data[index];
    }

    base.push = function(component){
        data.push(component);
        return base;
    };

    base.pop = function(){
        return data.pop();
    };


    return base;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined

