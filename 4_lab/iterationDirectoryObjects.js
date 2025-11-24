function ages (personArray){
    personAges = {}
    for (personDate in personArray){
        console.log(personDate)
        personAges[personDate] = personArray[personDate]["died"] - personArray[personDate]["born"];
    }

    return personAges;
}


const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }