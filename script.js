// ==========================
// THE HIGHEST V2
// JavaScript
// ==========================


// QUOTES

const quotes = [

"Luxury is remembered long after the service is complete.",

"Confidence begins with beautiful self-care.",

"Beauty is an experience, not just a service.",

"Every appointment is a step towards elegance."

];

let currentQuote = 0;

const quoteElement = document.getElementById("quoteText");

if(quoteElement){

quoteElement.textContent=quotes[currentQuote];

setInterval(()=>{

currentQuote++;

if(currentQuote>=quotes.length){

currentQuote=0;

}

quoteElement.textContent=quotes[currentQuote];

},5000);

}



// MENU

const menuButton=document.getElementById("menuButton");

const sideMenu=document.getElementById("sideMenu");

const closeMenu=document.getElementById("closeMenu");

const overlay=document.getElementById("overlay");


menuButton.addEventListener("click",()=>{

sideMenu.classList.add("active");

overlay.classList.add("active");

});


closeMenu.addEventListener("click",()=>{

sideMenu.classList.remove("active");

overlay.classList.remove("active");

});


overlay.addEventListener("click",()=>{

sideMenu.classList.remove("active");

overlay.classList.remove("active");

});
