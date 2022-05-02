// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();



//https://masai-mock-api.herokuapp.com/news?q={query}
//https://masai-mock-api.herokuapp.com/news?q=tesla
        

        let searchResult = async ()=>{

            let query = JSON.parse(localStorage.getItem("query"))
            try{
                let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
         
                let data = await res.json();
                console.log(data.articles);
                append(data.articles)
                
            }catch(err){
                console.log("err",err)
            }
        }
        
        searchResult()

        let append = (data) =>{

            data.map(({description,title,urlToImage}) =>{
     
             let div = document.createElement("div")
             div.setAttribute("class","news")
              
             let image = document.createElement("img")
             image.setAttribute("id","image")
             image.src = urlToImage;
     
             let div1 = document.createElement("div")
     
             let headline = document.createElement("h2")
             headline.innerText = title;
     
             let details = document.createElement("p")
             details.innerText = description;
     
             div1.append(headline,details)
     
             div.append(image,div1)
     
             document.getElementById("results").append(div)
     
            })
     }
// document.querySelector("#search_input").addEventListener("keydown",search)

