import React from "react";
import { Container, Button } from "./index";

function Results({ score }) {
  return (
    <div>
      <Container>
        <h3>Results</h3>
        <p>Your score: {score}</p>
        <Button>Play Again</Button>
      </Container>
    </div>
  );
}

export default Results;
