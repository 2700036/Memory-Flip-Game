import React from 'react';

export default function FlipCard({card}) {
  return (
    <div className="flip-card flipped">
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
