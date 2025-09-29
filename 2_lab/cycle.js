function average (num_1, num_2){
    return (num_1+num_2)/2
}

function square (num_x){
    return num_x**2
}

function cube (num_x){
    return num_x**3
}

function calculate (){
    arayCalculate = []
    for (num_x = 0; num_x < 9; num_x++){
        num_x_square = square(num_x)
        num_x_cube = cube(num_x)
        num_x_average = average(num_x_square, num_x_cube)
        arayCalculate.push(num_x_average)
    }
    return arayCalculate
}

console.dir(calculate())