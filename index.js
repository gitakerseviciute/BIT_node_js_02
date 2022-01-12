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

function inicialai (pavadinimas){
    const word = pavadinimas.split(' ');
    const vardas = word[0][0].toUpperCase();
    const pavarde = word[1][0].toUpperCase();
    
    console.log(`Legendines asmenybes ${word[0]}${word[1]}trumpinys yra ${vardas}.${pavarde}.`);
}

inicialai(s1);
inicialai(s2);
inicialai(s3);
inicialai(s4);

// [Vardas] [Pavarde] yra [amzius] amziaus.
const jonas = {
    name: 'Jonas',
    surname: 'Jonaitis',
    age: 99,
}

const maryte = {
    name: 'Maryte',
    surname: 'Marytaite',
    age: 87,
}

const information = (human) => {
    console.log(`${human.name} ${human.surname} yra ${human.age} amziaus`);
}

information(jonas);
information(maryte);