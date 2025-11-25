function pipe(...arg){
    return function(num){
    const result = arg.reduce(function(accumulator, currentValue) { return currentValue(accumulator)},num);
        return result
    }
}


const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);   
const x = f(5);
console.log(x)

const f1 = pipe(inc, inc);
const x1 = f1(7);
console.log(x1);

// const f2 = pipe(inc, 7, cube);
// const x2 = f2(1);