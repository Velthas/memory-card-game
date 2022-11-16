import React from "react";
import Card from "./Card"

const CardContainer = ({cards}) => {
  return (
    <div>
      { cards.map((card) => <Card key={card.id} data={card} />) }
    </div>
  )
}

export default CardContainer;