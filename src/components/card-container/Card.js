import React from "react";
import styled from 'styled-components';

const Card = (props) => {
  const { playTurn, data } = props;
  const { name, sprite } = data;
  return (
    <PokeCard onClick={() => playTurn(data)}>
      <Sprite src={sprite} alt={name}></Sprite>
      <MonName>{name}</MonName>
    </PokeCard>
  )
}

const PokeCard = styled.div`
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;

  border: 6px solid #396bba;
  border-radius: 10px;

  background-color: #c1d5f9;
  box-shadow: 5px 5px 6px #d1d1d1;
`

const Sprite = styled.img`
  height: 150px;
`

const MonName = styled.h4`
  margin: 0px;

  font-family: sans-serif;
  font-size: 1.1rem;
  color: #282728;
`

export default Card;
