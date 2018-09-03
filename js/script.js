// FSJS - Random Quote Generator

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
    quote: "Have no fear of perfection, you'll never reach it.",
    source: "Salvador Dali",
    citation: "World wide web",
    year: "2018",
    tag: "Motovational"
  },
  {
    quote: "It always seems impossible until it's done.",
    source: "Nelson Mandela",
    tag: "Motovational"
  },
  {
    quote: "Be the change you want to see in the world.",
    source: "Mahatma Gandhi",
    tag: "Motovational"
  },
  {
    quote: "If you can dream it you can do it.",
    source: "Walt Disney",
    tag: "Motovational"
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
    document.getElementById('loadQuote').style.backgroundColor = bgColor;
  }

// This function will reduce repetative code
// Calls both functions and applies them once button is clicked

function clickHandler() {
  random_bg_color();
  printQuote();
}
document.getElementById('loadQuote').addEventListener('click', clickHandler, false);

// Auto refresh quote after 3 seconds

function autoRefresh() {
  var quoteRefresh = setInterval(printQuote, 3000);
  var backgoundRefresh = setInterval(random_bg_color, 3000);
}
autoRefresh()

function stopRefresh() {
    clearTimeout(quoteRefresh);
    clearTimeout(backgoundRefresh);
}
stopRefresh()


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
///// document.getElementById('loadQuote').addEventListener("click", printQuote, false);
