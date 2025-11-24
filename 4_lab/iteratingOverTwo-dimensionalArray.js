function max (array){
    let maxValue = array[0][0]
    for(i in array){  
        console.log(array[i])
        for(j in array[i]){
            console.log(array[i][j])
            if(maxValue < array[i][j]){
                maxValue = array[i][j];
            }
        }
    }
    return maxValue;
}


const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log("Max = ",m); // 9