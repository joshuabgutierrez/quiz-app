import React from "react";
import Container from ".";

function Results({ score }) {
  return (
    <div>
      <Container>
        <h3>Results</h3>
        <p>Your score: {score}</p>
        <button>Play Again</button>
      </Container>
    </div>
  );
}

export default Results;
