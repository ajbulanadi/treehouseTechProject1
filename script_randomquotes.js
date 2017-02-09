
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//generate a randomQuote from array

function getRandomQuote(){
	var randomQuote = Math.floor(Math.random() * (quotes.length));
	return quotes[randomQuote];

//display random quotes by clicking the bottom show another quote
}
function printQuote(){
	var displayQuote = getRandomQuote(); //calling the function getRandomeQuote and stored in a variable
	var html ='<p class ="quote">' + displayQuote.quote + '</p>' //attached randomQuote to the page
	+ '<p class ="source">' + displayQuote.source + '</p>';
	document.getElementById('quote-box').innerHTML = html;
	document.body.style.background= randomColor(); // get random color to change background color every time you display another quote
}

//random color function for changing the background
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
	
}
//it display another quote every 20 seconds
var intervalID = window.setInterval(printQuote, 20000);








