import React, { useState } from 'react';
import './App.css';

const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    let newQuote;
    do {
      newQuote = getRandomQuote();
    } while (newQuote.text === quote.text);
    setQuote(newQuote);
  };

  return (
    <div className="App">
      <div className="quote-box">
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">- {quote.author}</p>
        <button className="new-quote-btn" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
