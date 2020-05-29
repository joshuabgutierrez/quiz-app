import React from "react";
import styled from "styled-components";
import Container from "./index";

const StyledHeader = styled.header`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.12rem;
`;

const StyledStartQuizButton = styled.button`
  padding: 0.5em 0.8em;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #5296a5;
  color: #fff;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

const Home = ({ handleStartGame }) => (
  <Container>
    <StyledHeader>Welcome to my quiz</StyledHeader>
    <p>The following quizz contains 10 questions about music in general.</p>
    <StyledStartQuizButton onClick={handleStartGame}>
      Start Quiz
    </StyledStartQuizButton>
  </Container>
);

export default Home;
