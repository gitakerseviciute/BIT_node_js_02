console.log('dddddddd');

const a = 5;
const b = 7;
const c = 13;



console.log('Suma');

console.log('Kill me');

const a1 = [10, 8, 2, 4];
const a2 = [1, 3, 5, 7, 9];
const a3 = [147, 258, 369, 123, 456, 789];

//ATS pateikti:
//Skaiciu masyvas, kuri sudaro [kiekis] skaiciai, vidurkis yra [vidurkis].

// let suma = 0;

// a1.forEach(e => {
//     suma += e;
// })

// const vidurkis = suma / a1.length;

console.log(`Skaiciu masyvas, kuri sudaro ${a1.length} skaiciai, vidurkis yra ${vidurkis}.`);

function vidurkis(array){
    let suma = 0;
    array.forEach(e =>{
        suma += e;
    });
    const vidurkis = suma / array.length;
    console.log(`Skaiciu masyvas, kuri sudaro ${array.length}skaiciai, vidurkis yra ${vidurkis}.`);
}

vidurkis(a1);
vidurkis(a2);
vidurkis(a3);

const s1 = 'mike Pukuotukas';
const s2 = 'Chuck Norris';
const s3 = 'Wonder WomaN';
const s4 = 'Algimantas cekuolis';

//Rezultata pateikti tokiu sablonu:
//Legendines asmenybes [Vardas] [Pavarde] trumpinys yra [V.P.]

// const word = s1.split(' ');
// console.log(word);

// const vardas = word[0][0].toUpperCase;
// const pavarde = word[1][0].toUpperCase;

// console.log(`Legendines asmenybes ${word[0]} ${word[1]} trumpinys yra ${vardas}.${pavarde}`);

function initials (text){
    const word = text.split(' ');
    const name = word[0][0].toUpperCase();
    const surname = word[1][0].toUpperCase();
    
    console.log(`Legendines asmenybes ${word[0]}${word[1]}trumpinys yra ${name}.${surname}.`);
}

initials(s1);
initials(s2);
initials(s3);
initials(s4);

// [Vardas] [Pavarde] yra [amzius] metu amziaus.
const people = [
    { name: 'Jonas', surname: 'Jonaitis', age: 99 },
    { name: 'Maryte', surname: 'Marytaite', age: 87 },
];

function introduce(person) {
    console.log(`${person.name} ${person.surname} yra ${person.age} metu amziaus`);
}

console.log('-------- for');

const forSize = people.length;
for (let i = 0; i < forSize; i++) {
    const person = people[i];
    introduce(person);
}

console.log('-------- while');

let iw = 0;
const whileSize = people.length;
while (iw < whileSize) {
    const person = people[iw];
    introduce(person);
    iw++;
}

console.log('-------- do-while');

let idw = 0;
const doWhileSize = people.length;
do {
    const person = people[idw];
    introduce(person);
    idw++;
} while (idw < doWhileSize);

console.log('-------- for-of');

for (const person of people) {
    introduce(person);
}

console.log('-------- for-in');

for (const i in people) {
    const person = people[i]
    introduce(person);
}

console.log('-------- foreach');

people.forEach((person) => {
    introduce(person);
})