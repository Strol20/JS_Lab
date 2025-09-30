phonenumberArray = 
    {Anton: "+380996667",
    Vanya: "+3805917201",
    Polina: "+3809967890"}

function findPhoneByName(name){return phonenumberArray[name]}

friendNumber = findPhoneByName("Anton")
friend2Number = findPhoneByName('Vanya')
friend3Number = findPhoneByName('Polina')
console.dir(friendNumber)
console.dir(friend2Number)
console.dir(friend3Number)