import React, { useState, useEffect } from "react";
import "./styles.css";
import QuestionContainer from "./Components/QuestionContainer";
import Home from "./Components/Home";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: "Roboto";
`;

export default function App() {
  const [startGame, setStartGame] = useState(false);
  const [songs, setSongs] = useState([]);

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

  return (
    <StyledApp>
      {startGame ? "" : <Home handleStartGame={handleStartGame} />}
      {startGame
        ? songs.map(song => (
            <QuestionContainer {...song} key={song.correct_answer} />
          ))
        : ""}
    </StyledApp>
  );
}
