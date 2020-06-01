import React, { useState, useEffect } from "react";
import "./styles.css";
import QuestionContainer from "./Components/QuestionContainer";
import Home from "./Components/Home";
import styled from "styled-components";
import Results from "./Components/Results";

const StyledApp = styled.div`
  font-family: "Roboto";
`;

export default function App() {
  const [startGame, setStartGame] = useState(false);
  const [songs, setSongs] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple"
    )
      .then(response => response.json())
      .then(data => setSongs(data.results));
  }, []);

  const handleStartGame = () => {
    setStartGame(!startGame);
  };

  const handleIndex = () => {
    setIndex(prevIndex => prevIndex + 1);
  };

  const handleScore = points => {
    setScore(score + points);
  };

  const restartGame = () => {
    // Reset states
    // Show first question and so on
    setIndex(0);
    setScore(0);
  };

  return (
    <StyledApp>
      {startGame ? "" : <Home handleStartGame={handleStartGame} />}
      {startGame && index < songs.length ? (
        <QuestionContainer
          {...songs[index]}
          key={songs[index].correct_answer}
          handleIndex={handleIndex}
          handleScore={handleScore}
        />
      ) : (
        ""
      )}
      {index === 10 ? <Results score={score} restartGame={restartGame} /> : ""}
    </StyledApp>
  );
}
