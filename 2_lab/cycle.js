// Реалізуйте функцію range(start: number, end: number): array яка віддає масив чисел з діапазону [15, 30], включаючи крайні числа.
// Реалізуйте функцію rangeOdd(start: number, end: number): array яка віддає масив непарних чисел з діапазону [15, 30], включаючи крайні числа.

function range (start, end){
    const arrayRange = []
    for (let cycleStart = start; cycleStart <= end; cycleStart++){
        arrayRange.push(cycleStart)
    }  
    return arrayRange;
}

function rangeOdd (start, end){
    const arrayRange = []
    for (let cycleStart = start; cycleStart <= end; cycleStart++){
        if (cycleStart%2 != 0){
            console.log(cycleStart%2)
            arrayRange.push(cycleStart)
        }
    }  
    return arrayRange;
}

array1 = range(15, 30)
array2 = rangeOdd (15, 30)

console.log(array1)



