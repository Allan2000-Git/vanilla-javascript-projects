// const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const section = document.querySelector(".movie-section");
const showMoreButton = document.getElementById('show-more');

let numOfPages = 1;

async function getMovieDetails(){
    const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${numOfPages}`;

    const response = await fetch(API_URL);
    const data = await response.json();

    displayMovies(data);

    // console.log(data);
}

function displayMovies(movies){
    // section.innerHTML="";

    movies.results.forEach(movie => {

        const movieContainer = document.createElement("div");
        movieContainer.classList.add("movie-container");
        movieContainer.innerHTML = `
        <img src="${IMAGE_PATH + movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h2>${movie.title}</h2>
                <span class="${changeColor(movie.vote_average)}">${movie.vote_average.toFixed(1)}</span>
            </div>
            <div class="overview"><h3>Overview: </h3>${movie.overview}</div>`;

        // const img = document.createElement("img");
        // img.src = IMAGE_PATH + movie.poster_path;
        section.appendChild(movieContainer);
        // document.body.appendChild(movieContainer);
    });
}

function changeColor(rating){
    if(rating >= 8){
        return "green";
    } else if(rating >= 6){
        return "orange";
    } else {
        return  "red";
    }
}

getMovieDetails();

showMoreButton.addEventListener('click',() =>{
    numOfPages+=1;
    getMovieDetails();
});

const searchInput = document.getElementById('movie');
const form = document.getElementById('form');

form.addEventListener('submit',async (e) => {
    e.preventDefault();

    section.innerHTML="";

    if(numOfPages==1){
        showMoreButton.style.display="none";
    }   

    const searchValue = searchInput.value;
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchValue}`;

    const response = await fetch(SEARCH_API);
    const data = await response.json();

    displayMovies(data);

    // console.log(data.results[0].poster_path);

    searchInput.value="";
});