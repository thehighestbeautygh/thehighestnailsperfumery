// ==========================
// THE HIGHEST V2
// JavaScript
// ==========================

const quotes = [

"Luxury is remembered long after the service is complete.",

"Confidence begins with beautiful self-care.",

"Beauty is an experience, not just a service.",

"Every appointment is a step towards elegance."

];

let currentQuote = 0;

const quoteElement = document.getElementById("quoteText");

if (quoteElement){

quoteElement.textContent = quotes[currentQuote];

setInterval(()=>{

currentQuote++;

if(currentQuote>=quotes.length){

currentQuote=0;

}

quoteElement.textContent=quotes[currentQuote];

},5000);

}
