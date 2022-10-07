console.log("file activated");

let populate = document.getElementById("populate");  // We'll populate the cards inside this div.

let newsCard = document.getElementById("newsCard");  // using js we create cards of this type.
// console.log(newsCard);




let country = "in";
let apiKey = "933c554505ce415e9a3026fd75f977c5"

// creating the api request using AJAX

const xhrObj = new XMLHttpRequest();

xhrObj.open("GET", `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);

// console.log(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`); // checking whether the link is working fine.

xhrObj.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        let myNews;
        for (let news in articles) {
            // console.log(articles[news]);
            if(articles[news]["description"] != null && articles[news]["description"] != "") {
            myNews = `<div class="col" id="newsCard">
                            <div class="card h-100">
                                <img src="${articles[news]["urlToImage"]}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${articles[news]["title"]}</h5>
                                    <p class="card-text">${articles[news]["description"]}...<a href="${articles[news]["url"]}" target="_blank">more</a></p>
                                </div>
                            </div>
                        </div>`;
          newsHtml += myNews;                       
        } }

        
       populate.innerHTML = newsHtml;
    } else {
        console.error("there is an error");
    } 
   
    
}

xhrObj.send();