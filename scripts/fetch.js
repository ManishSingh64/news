
//https://masai-mock-api.herokuapp.com/news/top-headlines?country=in

let searchNews = async (country) => {
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`)
         
        let data = await res.json();
        // console.log(data.articles)
        append(data.articles)
        return data.articles;
    }catch(err){
        console.log(err)
    }
}
searchNews("in")

let append = (data) =>{

       data.forEach(({description,title,urlToImage}) =>{

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

        document.getElementById("result").append(div)

       })
}






export {searchNews, append};