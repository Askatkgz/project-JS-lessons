"use strict";

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

console.log(personalMovieDB);
