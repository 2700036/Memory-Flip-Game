import shuffle from 'lodash.shuffle';
import React from 'react';
import './App.css';
import FlipCard from './FlipCard';


const cards = [
  { id: 35, name: 'Padmé Amidala' },
  { id: 13, name: 'Chewbacca' },
  { id: 20, name: 'Yoda' },
  { id: 1, name: 'Luke Skywalker' },
  { id: 2, name: 'C-3PO' },
  { id: 3, name: 'R2-D2' },
  { id: 4, name: 'Darth Vader' },
  { id: 14, name: 'Han Solo' },
  { id: 21, name: 'Palpatine' },
  { id: 22, name: 'Boba Fett' },
  { id: 5, name: 'Leia Organa' },
  { id: 10, name: 'Obi-Wan Kenobi' },
  { id: 11, name: 'Anakin Skywalker' },
  { id: 32, name: 'Qui-Gon' },
  { id: 36, name: 'Jar Jar Binks' },
  { id: 44, name: 'Darth Maul' },
];

const preparedCards = () => {  
  const shuffledCards = shuffle(cards).slice(0, 6)
  return shuffle([...shuffledCards, ...shuffledCards])
}

export default function App() {
  return <div className="app">
    <div className="cards">
      {preparedCards().map((card, index) => (
        <FlipCard card={card} key={card.id} />
      ))}
    </div>
  </div>;
}
