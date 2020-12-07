import React, { useEffect, useState } from 'react';
import FlipCard from './FlipCard';
import shuffle from 'lodash.shuffle';
import './App.css';

function countMoves (moves){  
  const endings = ['ов','','а','а','а','ов','ов','ов','ов','ов'];  
  if(moves == 11 || moves == 12|| moves == 13 || moves == 14)
  return `ходов`;
  const lastNumber = moves.toString().slice(-1); 
  return `ход${endings[lastNumber]}`
}


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
  const [cards, setCards] = useState([])
  const [opened, setOpened] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0)

  const flipCard = (index) => {    
    setOpened(opened => [...opened, index])
    setMoves(moves => ++moves)
  };

  useEffect(() => {
    setCards(preparedCards())    
  }, []);

  useEffect(()=> {
    if(opened.length === 2){
      if(cards[opened[0]].id === cards[opened[1]].id){
        setMatched(matched => [...matched, cards[opened[0]].id])
      }
      setTimeout(() => {
      setOpened([])
    }, 800)}
    if(matched.length*2 === cards.length && cards.length > 0){
      setTimeout(() => {
        setCards(preparedCards())
        setOpened([])
        setMatched([])
        setMoves(0)
      }, 2000)
    }
  }, [opened])

  

  return <div className="app">
    <p>
    {moves} <strong>{countMoves(moves)}</strong>
    </p>
    <div className="cards">
      {cards.map((card, index) => {
        let isFlipped = false;
        if(opened.includes(index) || matched.includes(card.id))isFlipped = true;
        return <FlipCard 
        card={card} 
        key={index} 
        isFlipped={isFlipped}
        flipCard={()=>flipCard(index)} 
        />
      })}
    </div>
  </div>;
}
