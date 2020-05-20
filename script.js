/*"use strict";

const numberOfFilms = prompt("Сколько фильмов ты смотрел?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('Один из просмотренных последних фильмов?', ''),
      b = prompt('Как вы оцените фильм?', ''),
      c = prompt('Один из просмотренных последних фильмов?', ''),
      d = prompt('Как вы оцените фильм?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);*/

"use strict";



/*if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Much!');
} else {
    console.log('Ok');
}

(num === 50) ? console.log('Ok!') : console.log('Error');*/
/*

const num = 50;

switch (num) {
    case 49:
        console.log('Not correct');
        break;
    case 100:
        console.log('No');
        break;
    case 50:
        console.log('Correct');
        break;
    default:
        console.log('Not this time');
        break;
        }
*/

/*let num = 50;*/

/*while (num < 55) {
    console.log(num);
    num++;
}*/

/*do {
    console.log(num);
    num++;
}
while (num <= 55);*/

/*for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}*/

/*
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
        continue;
    }
    console.log(i);
}
*/



/*
const numberOfFilms = +prompt("Сколько фильмов ты смотрел?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных последних фильмов?', ''),
    b = prompt('Как вы оцените фильм?', '');

    personalMovieDB.movies[a] = b;

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}



if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);

while (numberOfFilms < 2) {
    console.log(numberOfFilms);
    numberOfFilms++;
    }

*/

/* Function ============== */

/* Function DECLARATION *******/

/*
function showFirstMessage() {
    console.log("Hello World!");
}

showFirstMessage();
*/

/*function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello World!");*/

/*let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Hello World!");
console.log(num);*/

/*let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage("Hello World!");
console.log(num);*/


/*let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
    return(a + b);
}

console.log(calc(5, 6));
console.log(calc(7, 8));
console.log(calc(12, 6));


function ret() {
    let num = 50;


    return(num);
}

const anotherNum = ret();
console.log(anotherNum);*/

/* Function EXPRESSION ********/

/*const logger = function() {
    console.log('Hello!')
};

logger();*/

/* Стрелочные функции ********/

/*
const calc = (a, b) => a + b;

const calc = (a, b) => {return a + b };

const calc = (a, b) => {

    console.log('1');
    return a + b;
};
*/


/* Методы и свойства строк и чисел!!!=============== */

/*const str = "Test";

console.log(str.length);

const arr = [1, 2, 4];

console.log(arr.length);*/


/*const str = "test";

console.log(str.toUpperCase());
console.log(str);*/

/*const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));*/

/*const fruit = "Some fruit";

console.log(fruit.indexOf("q"));*/

/*const num = "Hello World";

console.log(num.slice(6, 11));*/

/*const num = "Hello World";

console.log(num.substring(6, 11));

const num = "Hello World";

console.log(num.substr(6, 5)); (длина строк)*/

/*const num = 12.2;

console.log(Math.round(num));*/

/*const test = "12.2px";

console.log(parseInt(test));*/

/*const test = "12.2px";

console.log(parseFloat(test));*/


/* PRACTICE */


/*let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов ты смотрел?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))  {

        numberOfFilms = +prompt("Сколько фильмов ты смотрел?", "");
          }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных последних фильмов?', ''),
    b = prompt('Как вы оцените фильм?', '');

    personalMovieDB.movies[a] = b;

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
}

rememberMyFilms();



function detect() {
    if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
}

detect();





function showMyDB(hidden) {
    if(!hidden) {
    console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++);
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genre;

     OR

    function writeYourGenres() {
    for(let i = 1; i <= 3; i++);
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);


}

writeYourGenres();*/


/* Call Back Functions =================*/

/*function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done(){
    console.log('I go home');
}

learnJS('Javascript', done);*/


/* Объекты, деструктуризация объектов (ES6) =================*/

/*const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bc: 'red'
    }
    makeTest: function() {
    console.log('test');
}
};

maketest();

console.log(Object.keys(options).length);*/

/*console.log(options.name);

delete options.name;

console.log(options);*/

/* перебирать объекты можно таким образом*/
/*

for (let key in options){
    console.log(`Свойство ${key} имеет значение ${options[key]}`);

}
*/


/*for (let key in options){
    if(typeof(options [key]) === 'object') {
    for (let i in options[key]) {
    console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
    }
} else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}

}*/

/*let counter =0;
for (let key in options){
    if(typeof(options [key]) === 'object') {
    for (let i in options[key]) {
    console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
    counter++;
    }
} else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
}

}

console.log(counter);*/

/*
const Smaiylov = {
    father: 'Kerimbek',
    firstSon: 'Askat',
    secondSon: 'Nurmat',
    thirdSon: 'Azamat'
};

console.log(Object.keys(Smaiylov));
*/

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bc: 'red'
    },
    makeTest: function() {
    console.log('test');
}
};

options.makeTest();

const {border, bc} = options.colors;
console.log(bc);







