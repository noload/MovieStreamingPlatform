'use strict'

let api_key ="c7d805c4cd4b38b7049f601b3bfb8fbd";
let imageURL='https://image.tmdb.org/t/p/';

async function fetchDataFromServer(url,callback,optionParam){
    let respData = await fetch(url);
    let jsonFormat = await respData.json();
    callback(jsonFormat,optionParam);
}


export{api_key,imageURL,fetchDataFromServer};