function seq (arg){
    const data = []
    if(typeof arg == "function"){
            data.unshift(arg);
    }
        
    function base(argu){
        if(typeof argu == "function"){
            data.unshift(argu)
            return base;
        }
        if (typeof argu == "number"){
            x = argu
            const result = data.reduce(function(accumulator, currentValue) {
                        return data.reduce((acc, fn) => fn(acc), argu);});
            return result;
        }
 
    }
    return base;

}




a = seq(x => x + 7)
   (x => x * 2)(5)
console.log(a)
// Результат: 17

b = seq(x => x * 2)
   (x => x + 7)(5)
console.log(b)
// Результат: 24

c = seq(x => x + 1)
    (x => x * 2)
    (x => x / 3)
    (x => x - 4)(7)
console.log(c)
// Результат: 3



