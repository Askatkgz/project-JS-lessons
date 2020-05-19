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


const str = "test";

console.log(str.toUpperCase());
console.log(str);
























