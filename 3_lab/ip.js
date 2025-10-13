function ipArray(ip){
    ip = ip.split(".")
    ip = ip.map(Number)
    for (i = 0, j = 3; i < 4; i++, j--){ // Цикл, який проходиться по елементам масива
        for(jfor = j; jfor > 0; jfor--){ // Цикл на зміщення елемента
            ip[i] = ip[i] << 8
        }
    }
    const sumWithInitial = ip.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);
    return sumWithInitial
}

ip = '8.8.8.8'

ipBit = ipArray(ip)

console.log(ipBit)