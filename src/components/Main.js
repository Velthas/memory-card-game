import React, { useState, useEffect } from "react";

import CardContainer from "./CardContainer/CardContainer";

const Main = () => {
  const POKEDEX_START = 252;
  const POKEMON_AMOUNT = 12;
  const pokemon = [];

  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);

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

  useEffect(() => init(), [])

  return <div>Hello!
    <CardContainer cards={cards} />
    {console.log(cards)}
  </div>
}

export default Main;