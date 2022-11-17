import React from "react";
import Card from "./Card"

const CardContainer = ({cards, playTurn}) => {
  return (
    <div>
      { cards.map((card) =>
          <Card  
            key={card.id} 
            data={card} 
            playTurn={playTurn}
          /> 
        ) 
      }
    </div>
  )
}

export default CardContainer;
