
//1
let numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?");
let count,
    movies,
    actors,
    genres,
    privat;

    console.log(`Я посмотрел ${numberOfFilms}`);
//2
const personalMovieDB = {
    "count": numberOfFilms,
    "movies": {},
    "actors": {}, 
    "genres": [],
    "privat": false
};

//3
let a = prompt("Один из просмотренных фильмов?"),
    b = prompt("Поставьте оценку фильму пожалуйста!"),
    c = prompt("Один из просмотренных фильмов?"),
    d = prompt("Поставьте оценку фильму пожалуйста!");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);