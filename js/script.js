// FSJS - Random Quote Generator

// Auto refresh quote after 10 seconds

var quoteRefresh = setInterval(printQuote, 10000);
var backgoundRefresh = setInterval(random_bg_color, 10000);

// Create the array of quote objects and name it quotes

var quotes = [
  {
    quote: "It's never too late to be who you might have been.",
    source: "George Eliot",
    citation: "Literary News",
    year: "June 1881",
    tag: "Motovational"
  },
  {
    quote: "We will not tire, we will not falter, and we will not fail.",
    source: "George W. Bush",
    citation: "Speach after 9/11",
    year: "2001",
    tag: "Motovational"
  },
  {
    quote: "We must never forget that art is not a form of propaganda; it is a form of truth.",
    source: "John F. Kennedy",
    citation: "35th president of US",
    tag: "Art",
    year: "October 26, 1963"
  },
  {
    quote: "I look foreword to an America which will not be afraid of grace and beauty.",
    source: "John F. Kennedy",
    citation: "35th president of US",
    tag: "Beauty",
    year: "October 26, 1963"
  },
  {
    quote: "I submit to you that if a man hasn't discovered something he will die for, he isn't fit to live.",
    source: "Martin Luther King Jr.",
    citation: "US black civil rights leader & clergyman",
    tag: "Speech in Detroit",
    year: "June 23, 1963"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source: "Winston Churchill",
    tag: "Motovational"
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    source: "George Addair",
    tag: "Motovational"
  },
  {
    quote: "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
    source: "Paulo Coelho",
    tag: "Motovational"
  },
  {
    quote: "Always bear in mind that your own resolution to succeed is more important than any one thing.",
    source: "Abraham Lincoln",
    tag: "Success"
  },
  {
    quote: "The future belongs to those who prepare for it today.",
    source: "Malcolm X",
    tag: "Motovational"
  }
];

// Create the getRandomQuote function and name it getRandomQuote

function getRandomQuote(quotes) {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

// Create the printQuote funtion and name it printQuote

function printQuote () {
  var selectedQuote = getRandomQuote(quotes);
  var outputString = '<p class="quote">' + selectedQuote.quote + '</p>';
      outputString += '<p class="source">' + selectedQuote.source
      if (selectedQuote.citation) {
        outputString += '<span class="citation">' + selectedQuote.citation + '</span>';
      }
      if (selectedQuote.year) {
        outputString += '<span class="year">' + selectedQuote.year + '</span>';
      }
      if (selectedQuote.tag) {
        outputString += '<span>' + ',' + ' ' + selectedQuote.tag + '</span>';
      }'</p>'
  document.getElementById("quote-box").innerHTML = outputString;
}

// Random Background Color Generator
// Once user clicks on "show another quote" the backgound color will change

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    // Gives button the same color as the random background
    document.getElementById('loadQuote').style.backgroundColor = bgColor;
  }

// This function will reduce repetative code
// Calls both functions and applies them once button is clicked

function clickHandler() {
  random_bg_color();
  printQuote();
}
document.getElementById('loadQuote').addEventListener('click', clickHandler, false);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
///// document.getElementById('loadQuote').addEventListener("click", printQuote, false);
