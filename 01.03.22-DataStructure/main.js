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


// MAP, FILTER & FIND

/*
    Map und Filter erzeugen beide ein Array wobei es einen großen Unterschied gibt.
    Map erzeugt immer ein Array, das genauso viel Items hat wie das zu mappende Array

    Beispiel:
*/

// MAP -> array
const numbers1 = [1,5,9,16,18,21,33]
const größerAls = numbers1.map(num => { // so macht man das nicht!!!
    if(num > 17){
        return num;
    }
})
console.log(größerAls) 
// Das Array würde diese if abfrage zwar wiederspiegeln, aber alle < 18 würden als undefined wiedergegeben werden!

// FILTER -> array
const filterNumbers = numbers1.filter(num => num > 17)
console.log(filterNumbers)


// FIND -> string -> Nur die erste gefundene Nummer
const findNumbers = numbers1.find(num => num > 17)
console.log(findNumbers)

/*
Dies sind nun recht simple Beispiele, doch gibt es einen kleinen Trick
um auch komplexere Aufgaben ganz leicht aufzubauen.
Schauen wir uns den Aufbau mal genauer an:

const getCustomByID = (cid) => { <-- Funcktion

    return customers.find(m => m.customerID === cid).companyName;
                        ↓↓
                    Grundaufbau
    return customers.find(suche).companyName
                        ↓↓
                  offene Fragen
    return Wo suche ich? array -> Was soll gemacht werden? find(bearbeitung) -> Was wird ausgegeben? companyName
}
console.log(getCustomByID("AROUT")) <-- Wert, der von irgendwo kommt und verarbeitet werden soll
*/


//  REDUCE
/*
    reduce parameter (acc, item, array)
    reduce outputs:
        create a number = ,0
        create a string = ,""
        create an array = ,[]
        create an object = ,{}

    const empAndCity = employees.reduce((acc, item) => {
        if(item.address.country === "UK"){
            acc.push(`${item.lastName} -> ${item.address.city}`)
        }
        return acc;
    }, []) <-- Datentyp
    console.log(empAndCity)
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

/*
Während Map immer ein neues Array erzeugt, das eine Kopie des gewählten Arrays ist
(all, keys only, values only)
Kann reduce ein Array erstellen, dass nur aus ausgewählten items besteht z.B. nur "% 2 === 0"
*/