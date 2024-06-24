import React from "react";
import "./FunFacts.css";

const funFacts = [
  "🎹 I have been playing piano for over 6 years and I am very connected to music.",
  "♟️ I love solving chess puzzles and also programming puzzles.",
  "🎮 I love video games, especially Path of Exile, Diablo, Dota, and RPGs in general.",
  "✈️ I have been to Japan in 2017, the United States, Mexico, Argentina, Uruguay, and I plan to go to Europe next year.",
  "📚 I study philosophy on my own, but only when I have time, and currently it is hard to find time :(",
];

const FunFacts: React.FC = () => {
  return (
    <div className="fun-facts-container">
      <h2>Curiosities</h2>
      <ul>
        {funFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default FunFacts;
