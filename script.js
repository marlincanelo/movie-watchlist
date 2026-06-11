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
// .value →

//event means, when clicked, save and submit to html
// movieform --> works on form boxes
// the rest are buttons or inputs
movieForm.addEventListener("submit", (event) => {
  // 1. Stop the browser from reloading the page
  //    Without this line, the page refreshes on every submit and you lose everything
  event.preventDefault()


  // stores input
const title = titleInput.value

const genre = genreInput.value

console.log(title)
console.log(genre)

const card = createMovieCard(title, genre)

movieList.append(card)


 movieForm.reset()


})



function createMovieCard(title, genre) {
  // 1. LI element
    const card = document.createElement("li")
    card.classList.add("movie-card")
    //data genre goes into value
    card.setAttribute("data-genre", genre);


    // 2. DIV element
    const info = document.createElement("div")
    info.classList.add("movie-info")

    // SPAN element
    const movieTitle = document.createElement("span")
    movieTitle.classList.add("movie-title")

    const movieGenre = document.createElement("span")
    movieGenre.classList.add("movie-genre")


    movieTitle.textContent = title;
    movieGenre.textContent = genre || "No genre";


    // moves insidd info
    info.append(movieTitle, movieGenre)



    // 3.
    const btn = document.createElement("div")
    btn.classList.add("movie-actions")

    const watchBtn = document.createElement("button")
    watchBtn.classList.add("watch-btn")
    watchBtn.textContent = "Mark Watched";

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-btn")
    removeBtn.textContent = "Remove";

    // move watchBtn and removeBtn inside btn
    btn.append(watchBtn, removeBtn) 


    // 4.
    card.append(info, btn)

    return card;


}



// event.target is the button that was clicked
// event.target.closest("li") walks UP the tree and returns the first <li> it finds
// This gives you the whole card, not just the button



movieList.addEventListener("click", (event) => {

    const card = event.target.closest("li")
    card.remove()
    card.classList.toggle("watched")
    
//1. if button is targetted, keep going 
    if(event.target.tagName === "BUTTON") 
        return

// 2.
card.event.target.closest("li")





   
// 3.
    if (event.target.classList.contains("remove-btn")) {
        card.remove();
}
    updateCount()
    applyFilter(currentFilter)




//4.

    if(event.target.classList.contains("watch-btn")) {
        card.classList.toggle("watched")
    }

    if(event.target.classList.contains("watch-btn")) {
        event.target.textContent = "Unmark Watched"
    }
    else {
          event.target.textContent = "Mark Watched"
    }


    applyFilter(currentFilter)













})
