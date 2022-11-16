import React from "react";

const Card = (props) => {
  const {name, sprite} = props.data;
  return (
    <div>
      <img src={sprite}></img>
      <h4>{name}</h4>
    </div>
  )
}

export default Card;