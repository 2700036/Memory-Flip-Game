import React from 'react';

export default function FlipCard({card, isFlipped, flipCard}) {
  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} 
    onClick={!isFlipped ? flipCard : null}>
       <div className="inner">
        <div className="front">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${card.id}.jpg`}
            alt={card.name}
            // width="100%"
          />
        </div>
        <div className="back">?</div>
      </div>
    </div>
  )
}
