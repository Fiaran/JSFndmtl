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