import React from "react";
import styled from "styled-components";
import { Container, Button } from "./index";

const StyledHeader = styled.header`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.12rem;
`;

const Home = ({ handleStartGame }) => (
  <Container>
    <StyledHeader>Welcome to my quiz</StyledHeader>
    <p>The following quizz contains 10 questions about music in general.</p>
    <Button onClick={handleStartGame}>Start Quiz</Button>
  </Container>
);

export default Home;
