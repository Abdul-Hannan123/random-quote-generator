const apiUrl="https://quotes-api-self.vercel.app/quote";
const quote=document.querySelector("#quote");
const author=document.querySelector("#author");
async function getQuote(apiUrl) {
    const response=await fetch(apiUrl);
    var data=await response.json();
    quote.innerHTML=data.quote;
    author.innerHTML=data.author;
}
getQuote(apiUrl);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world","Tweet Window","width=600,height=300");
}