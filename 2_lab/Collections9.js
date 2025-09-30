phonenumberArray = 
    [{name: "Anton" ,phone: "+380996667"},
    {name: "Vanya" ,phone: "+3805917201"},
    {name: "Polina" ,phone: "+3809967890"}]

function findPhoneByName(name){
    for (i in phonenumberArray){
        arrayElement = phonenumberArray[i]
        if (arrayElement.name == name){
            return arrayElement.phone
        }
    }
    return NaN
}

friendNumber = findPhoneByName('Anton')
friend2Number = findPhoneByName('Vanya')
friend3Number = findPhoneByName('Polina')
console.dir(friendNumber)
console.dir(friend2Number)
console.dir(friend3Number)





