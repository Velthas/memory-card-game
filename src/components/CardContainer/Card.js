import React from "react";

const Card = (props) => {
  const { playTurn, data } = props;
  const { name, sprite } = data;
  return (
    <div 
      onClick={() => playTurn(data)}
    >
      <img src={sprite}></img>
      <h4>{name}</h4>
    </div>
  )
}

export default Card;