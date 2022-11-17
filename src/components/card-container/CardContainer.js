import React from "react";
import styled from 'styled-components';

import Card from "./Card";

const CardContainer = ({cards, playTurn}) => {
  return (
    <CardContainerDiv>
      { cards.map((card) =>
          <Card  
            key={card.id} 
            data={card} 
            playTurn={playTurn}
          /> 
        ) 
      }
    </CardContainerDiv>
  )
}

const CardContainerDiv = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 150px);
  
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 150px);
  }
`

export default CardContainer;
