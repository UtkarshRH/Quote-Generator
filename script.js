// Api URL

const quote = document.getElementById("quote");
const authore = document.getElementById("authore");


const api_url = "https://api.quotable.io/random";

async function getquote(url){
    const responce = await fetch(url);
    var data = await responce.json(); 

    // console.log(data)


    quote.innerHTML = data.content;
    authore.innerHTML = data.author;

}


getquote(api_url);


function tweet(){
    window.open("https://twitter.com/intent/tweet?text= " + quote.innerHTML  + " ---by " + authore.innerHTML , "Tweet Window", "width=600, height=300");
}