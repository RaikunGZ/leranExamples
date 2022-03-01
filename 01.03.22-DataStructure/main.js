// Highorder Functions

const person = {
    firstName: "Niko",
    lastName: "Schmidt",
};

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

const field = "firstName";
console.log(person[field])


/*
 Es ist nur ein 2. Weg das serlbe Objekt anzusprechen,
 es wird kein 2. Objekt erzeugt!
*/
console.log(person.lastName)
person2 = person;
person.lastName = "Müller";
console.log(person2.lastName)
console.log(person.lastName)

const fruits = ["apple", "orange", "cherry"]

for (const fruit of fruits) {
    console.log(fruit)
}



//  FOR EACH - 

fruits.forEach(fruit => console.log(fruit))

fruits.forEach(fruit => {
    console.log(fruit)
})

fruits.forEach((fruit, index, array) => {
    console.log(`This is ${fruit} (fruit ${index+1}) of ${array.length}`)
})


//  REDUCE
/*
    reduce parameter (acc, item, array)
    reduce outputs:
        create a number = ,0
        create a string = ,""
        create an array = ,[]
        create an object = ,{}
*/

// Normale Schreibweise bei complexerer Verwendung
const numbers = [1,2,3,4,5,6,7,8,9,10]

const summieren = numbers.reduce((acc, number) => {
    return acc + number;
},0)

console.log(summieren)

// Kurzschreibweise bei einfach Verwendung
const sumKurz = numbers.reduce((acc, number) => acc + number , 0)
console.log(sumKurz)


// Reduce erstellt ein Array mit allen geraden Zahlen
const arrCreate = numbers.reduce((acc, number) => {
    if(number % 2 === 0){
    acc.push(number)
    }return acc
}, [])
console.log(arrCreate)

/**
Während Map immer ein neues Array erzeugt, das eine Kopie des gewählten Arrays ist
(all, keys only, values only)
Kann reduce ein Array erstellen, dass nur aus ausgewählten items besteht z.B. nur "% 2 === 0"
*/