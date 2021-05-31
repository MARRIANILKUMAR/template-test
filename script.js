const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader'); 

//Show loading 
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;

}

// hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}
// show new quote
function newQuote() {
    loading();
    // pick a random quote from localquotes array
    loading();
    const quote = localQuotes [Math.floor(Math.random() * localQuotes.length)];
   
    //Check if Auther field is blank and replace it with quote "unknown"
    if (!quote.author) {
        authorText.textContent = 'Unkown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check the quote to determine styling
    if(quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove('long-quote');
    }

    // set Quote, Hide loader

    quoteText.textContent = quote.text;
    complete();

}
//get Quotes from API
//async function getQuotes() {
 

   //const apiUrl = "https://type.fit/api/quotes"
   //try{
    //const responce = await fetch(apiUrl);
    //apiQuotes = await responce.json();
      //newQuote();
    //}   catch (error) {
        //Catch error here
  //}
  //}
//Tweet Quote
function tweetQuote(){
 const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
 window.open(twitterUrl,'_blank');

}

//Event listners
newQuoteBtn.addEventListener('click' , newQuote)
twitterBtn.addEventListener('click' , tweetQuote);
  //

// on load
//getQuotes();
newQuote();

