//Get quotes from API
const quoteContainer= document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText=document.getElementById("author");
const twitterbtn=document.getElementById("twitter");
const newQuotebtn=document.getElementById("new-quote");
const loader=document.getElementById("loader");
let apiquote=[];
function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}
function complete(){
    loader.hidden=true;
    quoteContainer.hidden=false;
}
function getnewquote(){
    loading();
    const number=Math.floor(Math.random() * apiquote.length);
    const quotes=apiquote[number];
    if (quotes.author=="No"){
        author.textContent="Unknown";
    }else{
        authorText.textContent=quotes.author;
    }
    // quote length
    if (quotes.text.length>50){
        quoteText.classList.add("long-quote");

    }else{
        quoteText.classList.remove("long-quote");
    }
    
    quoteText.textContent=quotes.text;
    
}

async function getquotes(){
    loading();
    
    const quoteurl="https://type.fit/api/quotes";
    try{
    
    const fetchurl= await fetch(quoteurl);
    apiquote= await fetchurl.json();
    getnewquote();
    }catch(error){
       
    }
    
    
}
function tweetQuote(){
    const tweeturl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} -${authorText.textContent}`;
    window.open(tweeturl, "_blank");
}

newQuotebtn.addEventListener("click",getnewquote);
twitterbtn.addEventListener("click",tweetQuote);
getquotes();
        


    

