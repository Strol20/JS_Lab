function sum1 (...arg){
    result = 0;
    for(i in arg){
        result += arg[i];
    }
    return result;

}
function sum2 (...arg){
    result = 0; 
    for(i of arg){
        result += i;
    }
    return result;
}
function sum3 (...arg){
    counter = 0;
    result = 0;
    while(counter < arg.length){
        result += arg[counter];
        counter++ 
    }
    return result;
}
function sum4 (...arg){
    if(arg[0] == NaN){
        return result = 0;
    }
    result = 0;
    counter = 0;
    do{
        result += arg[counter];
        counter++
    }while( counter <= arg.length-1)

    return result;
}
function sum5 (...arg){

    const result = arg.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;}
    );
    return result;
}

const a = sum1(1, 2, 3) // a === 6
console.log("a = ",a)
const b = sum2(0) // b === 0
console.log("b = ",b)
const c = sum3() // c === 0
console.log("c = ",c)
const d = sum4(1, -1, 1) // d === 1
console.log("d = ",d)
const e = sum5(10, -1, -1, -1) // e === 7
console.log("e = ",e)