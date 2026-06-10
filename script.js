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

appTitle.textContent = "My Movie Watchlist"

console.log("Count says:", movieCount.textContent)



// Update the count text manually (JavaScript will keep this accurate later)
movieCount.textContent = "0 movies"

//update style of class (connect to css)
movieCount.classList.add("active-filter")
// Look at the browser — what changed?

// .remove() takes it off
movieCount.classList.remove("active-filter")

//same as previos, once, add if doubled, remove
movieCount.classList.toggle("active-filter")
movieCount.classList.toggle("active-filter")

//read attribute, type of
console.log(titleInput.getAttribute("placeholder"))  // → "Movie title..."
console.log(titleInput.getAttribute("type"))         // → "text"
console.log(titleInput.getAttribute("required")) 

//change
titleInput.setAttribute("placeholder", "Try: The Matrix")
//output in console to see change
console.log(titleInput.getAttribute("placeholder"))


titleInput.removeAttribute("required")
titleInput.setAttribute("required", "")

//reads what user typed in
titleInput.getAttribute("value")  // → null (the HTML never had a value attribute)
titleInput.value 
console.log(titleInput.getAttribute("value"))  
               // → whatever you just typed


// What is the difference between getAttribute("value") and .value on an input?
// getAttribute("value") →
// .value               →


