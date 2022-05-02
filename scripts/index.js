// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

//https://masai-mock-api.herokuapp.com/news/top-headlines?country=in
import {searchNews , append} from "./fetch.js"

searchNews("in")

let country = document.querySelector("#sidebar").children;
console.log('country:', country)

function cSearch(){
    console.log(this.id)
    searchNews(this.id).then((data) =>{
        console.log(data)
        document.getElementById("result").innerHTML= null;
        append(data)
    })
}

for(let el of country){
    el.addEventListener("click",cSearch)
}

let search = (e) =>{
    if(e.key === "Enter"){
        let query = document.getElementById("search_input").value
        localStorage.setItem("query",JSON.stringify(query))

        window.location.href="search.html"

       
    }
}
document.querySelector("#search_input").addEventListener("keydown",search)

