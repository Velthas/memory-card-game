import React, { useState, useEffect } from "react";

import CardContainer from "./card-container/CardContainer";
import Scoreboard from "./scoreboard/Scoreboard";

const Main = () => {
  const POKEDEX_START = 252;
  const POKEMON_AMOUNT = 15;

  const pokemon = [];

  const [clickedCards, setClickedCards] = useState([])
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const callAPI = async function () {
    const APIurl = "https://pokeapi.co/api/v2/pokemon/";
    const bounds = POKEDEX_START + POKEMON_AMOUNT;
    for(let i = POKEDEX_START; i <= bounds; i++ ) {
      const response = await fetch(APIurl + i, {mode: "cors"});
      const rawData = await response.json();
      const cardData = convertToCard(rawData)
      pokemon.push(cardData);
    }
  }

  const convertToCard = (data) => {
    const name = data.name[0].toUpperCase() + data.name.slice(1);
    const id = data.id;
    const sprite = data.sprites.front_default;

    return {name, id, sprite};
  }

  const init = async function () {
    await callAPI();
    setCards(pokemon)
  }

  const shuffleArray = (array) => {
    return array
      .map(value => ({value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value);
  }

  const playTurn = (card) => {
    if(clickedCards.length === clickedCards.filter(id => id !== card.id).length) {
      setClickedCards([...clickedCards].concat([card.id]));
      if(score === maxScore) setMaxScore(score + 1);
      setScore(score + 1);
      setCards(shuffleArray(cards));
    } else {
      setClickedCards([])
      setScore(0);
      setCards(shuffleArray(cards));
    }
  }

  useEffect(() => init(), []);

  return (
  <div id="main">
    <Scoreboard score={score} maxScore={maxScore} />
    <CardContainer cards={cards} playTurn={playTurn} />
  </div>
  )
}

export default Main;