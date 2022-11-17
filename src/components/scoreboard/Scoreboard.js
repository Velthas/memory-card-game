import React from "react";
import styled from "styled-components";

const Scoreboard = (props) => {
  const {score, maxScore} = props;

  return (
    <ScoreboardWrapper>
      <CurrentScore>{`Current Score: ${score}`}</CurrentScore>
      <MaxScore>{`Max Score: ${maxScore}`}</MaxScore>
    </ScoreboardWrapper>
  )
}

const ScoreboardWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;

  margin: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 15px;
  }
`

const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #282728;

  border-radius: 4px;
  font-size: 1.3rem;

  padding: 10px 25px;
  width: 150px;

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`

const CurrentScore = styled(Score)`
  background-color: #b2c7e9;
  border: 1px solid #a4b4cf;
`

const MaxScore = styled(Score)`
  background-color: #e9b2b2;
  border: 1px solid #cfa4a4;
`

export default Scoreboard;
