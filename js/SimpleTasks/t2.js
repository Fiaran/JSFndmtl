
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

for( let i = 0; i<2; i++){
    let a = prompt("Один из просмотренных фильмов?"),
        b = prompt("Поставьте оценку фильму пожалуйста!");
    personalMovieDB.movies[a] = b;
}
// let a = prompt("Один из просмотренных фильмов?"),
//     b = prompt("Поставьте оценку фильму пожалуйста!"),
//     c = prompt("Один из просмотренных фильмов?"),
//     d = prompt("Поставьте оценку фильму пожалуйста!");


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
console.log(personalMovieDB);


// let test = "key";
// let test2 = "value";

// const y = {
//     "inner":{}
// };

// y.inner[test]=test2;
// console.log(y.inner);