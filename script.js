// Now you build something from scratch, 
// with a partner. A movie watchlist: type in a
//  title and genre, add it to the list. Mark movies watched, 
// remove ones you don't want, and filter the list to see only 
// what you're looking for.

const appTitle = document.getElementById("app-title")
const movieCount = document.getElementById("movie-count")

// select #movie-form        → store in movieForm
const movieForm = document.getElementById("movie-form")
// select #title-input       → store in titleInput
const titleInput = document.getElementById("title-input")
// select #genre-input       → store in genreInput
const genreInput = document.getElementById("genre-input")
// select #movie-list        → store in movieList
const movieList = document.getElementById("movie-list")
// select #clear-watched-btn → store in clearWatchedBtn
const clearWatchedBtn = document.getElementById("clear-watched-btn")
// select ALL elements with class "filter-btn" using querySelectorAll
const querySelectorAll = document.querySelector("filter-btn")
// store them in filterBtns — you'll loop over them in Phase 6
const filterBtns = querySelectorAll