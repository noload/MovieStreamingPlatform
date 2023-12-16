'use strict'
import { api_key,imageURL,fetchDataFromServer } from "./api.js"


function  getmovieDetail(id) {
    window.localStorage.setItem("movieId",String(id));
}