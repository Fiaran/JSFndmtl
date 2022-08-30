// const str = prompt("", "");
// const products = str.split(',');
// products.sort();
// console.log(products.join(';'));

// const s = "asdf,wer,sdf,vbxvc";
// const t = s.split(",");
// console.log(t);

// const arr = [2,13,26,8,10];

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a,b){
//     return a - b;
// }

// 'use strict';


// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//                   b = prompt('На сколько оцените его?', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function(){
//         if(personalMovieDB){
//             personalMovieDB.privat=false;
//         }else{
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
                        
//             let genres = prompt(`Введите Ваши любимые жанры чеез запятую`);
//             if(genres === '' || genres == null){
//                 console.log('You entered incorrect or nothing');
//                 i--;
//             }else{
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             } 

//         }
//         personalMovieDB.genres.forEach((item, i) =>{
//             console.log(`Любимый жанр ${i + 1} - это ${item} `);
//         });
//     }
    

// };

//LESSON 45
const btn = document.querySelector('button');

// btn.onclick = function(){
//     alert('Hail');
// };

// btn.onclick = function(){
//     alert('Second click');
// };

btn.addEventListener('mouseenter', (e)=>{
    console.log(e.target);
    e.target.remove();
    // console.log('Hover');
});
// btn.addEventListener('click', ()=>{
//     alert('Second Click');
// });
