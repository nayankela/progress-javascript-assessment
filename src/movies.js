// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
    let directors = arr.map(function (movie) {
        return movie.director;
    });
    return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    let filteredData = arr.filter(function (movie) {
        return (
            movie.director.includes("Steven Spielberg")
            && movie.genre.includes("Drama")
        )
    });
    let length = filteredData.length;
     return length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) 
        return 0;
    let sumRate = arr.reduce(function (accumulator, item) {
        if (item.rate === undefined) {
            return accumulator;
        }
        return accumulator + item.rate;
    }, 0);
    let totalMovies = arr.length;
    let totalRate = parseFloat((sumRate / totalMovies).toFixed(2));
    return totalRate;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let dramaMovies = arr.filter(function (item) {
        return item.genre.includes("Drama");
    });
    if (dramaMovies.length === 0) {
        return 0;
    }
    let sumRate = dramaMovies.reduce(function (acc, item) {
        if (item.rate === undefined) {
            return acc;
        } return acc + item.rate;
    }, 0);
    let totalDramaMovies = dramaMovies.length;
    let totalRate = parseFloat((sumRate / totalDramaMovies).toFixed(2));
    return totalRate;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

 function orderByYear (arr){

 }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    let mappedMovies = array.map(function (movie) {
        return movie.title;
    });
    mappedMovies.sort()
        return mappedMovies.slice(0,20)
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {

}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
