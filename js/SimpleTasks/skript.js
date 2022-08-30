
// //1
let count,
    movies,
    actors,
    genres,
    privat;

function start(){
    let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?");
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms =+prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

    console.log(`Я посмотрел ${numberOfFilms}`);
//2
const personalMovieDB = {
    "count": numberOfFilms,
    "movies": {},
    "actors": {}, 
    "genres": [],
    "privat": false
};



// //3
// // let a = prompt("Один из просмотренных фильмов?"),
// //     b = prompt("Поставьте оценку фильму пожалуйста!"),
// //     c = prompt("Один из просмотренных фильмов?"),
// //     d = prompt("Поставьте оценку фильму пожалуйста!");


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

function rememberMyFilms(){
    for( let i = 0; i<2; i++){
        let a = prompt("Один из просмотренных фильмов?"),
            b = prompt("Поставьте оценку фильму пожалуйста!");
        
        if(a != null && b != null && a!='' && b !='' && a.length<50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        }else{
            console.log('error');
            i--;
        }
    } 
}

rememberMyFilms();



function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('Просмотрено довльно мало фильмов');
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();
console.log(personalMovieDB);

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB();
function writeYourGenres(){
    for(let i = 0; i<3; i++){
        let numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?");
    
    }
}


// let test = "key";
// let test2 = "value";

// const y = {
//     "inner":{}
// };

// y.inner[test]=test2;
// console.log(y.inner);