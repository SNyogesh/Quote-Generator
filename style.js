const title = document.querySelector(".title");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");
const url = "https://api.quotable.io/random";

const quoteUpdate = () =>{
   fetch(url)
    .then(response => response.json())
    .then(data => {
        quote.innerText = `"${data.content}"`;
        author.innerText = `- ${data.author}`;
    });
    
}
window.addEventListener("onload",quoteUpdate());
