// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

var quotes = [
  {
    quote: "It's never too late to be who you might have been.",
    source: "George Eliot",
    citation: "Literary News",
    year: "June 1881"
  },
  {
    quote: "Have no fear of perfection, you'll never reach it.",
    source: "Salvador Dali",
    citation: "World wide web",
    year: "2018"
  },
  {
    quote: "It always seems impossible until it's done.",
    source: "Nelson Mandela"
  },
  {
    quote: "Be the change you want to see in the world.",
    source: "Mahatma Gandhi"
  },
  {
    quote: "If you can dream it you can do it.",
    source: "Walt Disney"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source: "Winston Churchill"
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    source: "George Addair"
  },
  {
    quote: "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
    source: "Paulo Coelho"
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
    document.getElementById('loadQuote').style.backgroundColor = bgColor;
  }
  // document.getElementById('loadQuote').addEventListener("click", random_bg_color, false);

// This function will reduce repetative code

function clickHandler() {
  random_bg_color();
  printQuote();
}
document.getElementById('loadQuote').addEventListener('click', clickHandler, false);


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
///// document.getElementById('loadQuote').addEventListener("click", printQuote, false);
