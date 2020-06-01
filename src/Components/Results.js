import React from "react";
import { Container, Button } from "./index";

function Results({ score, restartGame }) {
  return (
    <div>
      <Container>
        <h3>RESULTS</h3>
        <p>Your score: {score}</p>
        <Button onClick={restartGame}>Play Again</Button>
      </Container>
    </div>
  );
}

export default Results;
