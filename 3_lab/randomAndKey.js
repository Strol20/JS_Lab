// 1 

function random(min, max){
    if(max = "undefind"){
        max = min
        min = 0
    }
    const rangeNum = max - min + 1
    randomNum = Math.floor(Math.random()*rangeNum)
    return randomNum
}
console.log("Випадкове число: ",random(15))

// 2
function generateKey(length, characters){
    let key = ""
    charactersLength = characters.length
    for(i = 0; i <= length; i++){
        randomIndex = Math.floor(Math.random() * charactersLength)
        key += characters[randomIndex];
    }
    return key
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log("Ключ: ",key); // eg599gb60q926j8i






