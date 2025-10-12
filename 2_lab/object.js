function fn(){
    const object1 = {name: "Platon"}
    let object2 = {name: "Platon"}

    object1.name = "Apalon1"
    object2.name = "Apalon"

    object1.name = object2.name
    object2.name = object1.name

//  object1 = {name: "Paton"} Видасть помилку
    object2 = {name: "Paton"}

    return object2
}

console.dir(fn())

function createUser(name, city){
    return {name: name, city: city}
}


user1 = createUser("Anton", "Kiyv")

console.dir(user1)
