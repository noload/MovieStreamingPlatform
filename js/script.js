'use strict'

import { api_key,imageURL,fetchDataFromServer } from "./api.js";

//Dark mode light mode  code
const toggle_ball= document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".navbar-container , .sidebar, .left-menu-icon, .toggle,.container");
toggle_ball.addEventListener("click",()=>{
    items.forEach((item)=>{
        item.classList.toggle("active");
    })
    toggle_ball.classList.toggle("active");
})


// searchbox visibility

const search_icon = document.querySelector("[search-btn]");
search_icon.addEventListener("click",()=>{
    const searchBar = document.querySelector(".searchBar");
    searchBar.classList.toggle("active");
})


//popular movies
fetchDataFromServer(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${api_key}`,popularMovies);

async function popularMovies({results:movieList}) {
    let movieListContainer =document.querySelector("[popular-movies]");
    movieListContainer.innerHTML=`
    <h1 class="movie-list-title">Popular  Movies</h1>
    <div class="movie-list-wrapper" popularMovies>
       

    </div>

    `;
    const allMovieList = document.createElement("div");
    allMovieList.classList.add("movie-list");

    movieList.forEach((movie)=>{
        const {
            backdrop_path,
            id,
            title,
            overview
        }=movie;
        
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-list-item")
        movieItem.innerHTML=`
        <img class="movie-list-item-img" src="${imageURL}original${backdrop_path}" alt="img">
                   
                    <span class="movie-list-item-title">${title}</span>
                    <p class="movie-list-item-desc">${overview}.</p>
                   
                    <a href="detail.html" onclick="getmovieDetail(${id})" ><button class="movie-list-item-button btn">Watch Now</button></a>
        `;
       
        allMovieList.appendChild(movieItem);
    });
    document.querySelector("[popularMovies]").appendChild(allMovieList)
}


//Top-Rated
fetchDataFromServer(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${api_key}`,topRated);

async function topRated({results:movieList}) {
    let movieListContainer =document.querySelector("[top-rated]");
    movieListContainer.innerHTML=`
    <h1 class="movie-list-title">Top Rated Movies</h1>
    <div class="movie-list-wrapper" topRated>
       

    </div>

    `;
    const allMovieList = document.createElement("div");
    allMovieList.classList.add("movie-list");

    movieList.forEach((movie)=>{
        const {
            backdrop_path,
            id,
            title,
            overview
        }=movie;
        
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-list-item")
        movieItem.innerHTML=`
        <img class="movie-list-item-img" src="${imageURL}original${backdrop_path}" alt="img">
                   
                    <span class="movie-list-item-title">${title}</span>
                    <p class="movie-list-item-desc">${overview}.</p>
                   
                    <a href="detail.html" onclick="getmovieDetail(${id})" ><button class="movie-list-item-button btn">Watch Now</button></a>
        `;
       
        allMovieList.appendChild(movieItem);
    });
    document.querySelector("[topRated]").appendChild(allMovieList)
}



//upcomming movies
fetchDataFromServer(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${api_key}`,upcomming);

async function upcomming({results:movieList}) {
    let movieListContainer =document.querySelector("[upcomming-movies]");
    movieListContainer.innerHTML=`
    <h1 class="movie-list-title">Upcomming Movies</h1>
    <div class="movie-list-wrapper" upcomming>
       

    </div>

    `;
    const allMovieList = document.createElement("div");
    allMovieList.classList.add("movie-list");

    movieList.forEach((movie)=>{
        const {
            backdrop_path,
            id,
            title,
            overview
        }=movie;
        
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-list-item")
        movieItem.innerHTML=`
        <img class="movie-list-item-img" src="${imageURL}original${backdrop_path}" alt="img">
                   
                    <span class="movie-list-item-title">${title}</span>
                    <p class="movie-list-item-desc">${overview}.</p>
                   
                    <a href="detail.html" onclick="getmovieDetail(${id})" ><button class="movie-list-item-button btn">Watch Now</button></a>
        `;
       
        allMovieList.appendChild(movieItem);
    });
    document.querySelector("[upcomming]").appendChild(allMovieList)
}
