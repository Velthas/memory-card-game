import React from "react";

const Scoreboard = (props) => {
  const {score, maxScore} = props;

  return (
    <div id="scoreboard">
      <div>{`Current Score: ${score}`}</div>
      <div>{`Max Score: ${maxScore}`}</div>
    </div>
  )
}

export default Scoreboard;