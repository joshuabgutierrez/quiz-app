import React from "react";
import styled from "styled-components";

const StyledOptionsContainer = styled.ul`
  display: grid;
  grid-template-columns: 2fr 2fr;
  margin: 0;
  padding: 0;
`;

const StyledOption = styled.li`
  list-style: none;
  margin: 0.5em;
  background-color: #5296a5;
  color: #fff;
  padding: 0.7em 0;
  text-align: center;
  border-radius: 5px;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #4a7c59;
  }
`;

const Options = ({ correct_answer, incorrect_answers }) => {
  const newArr = [correct_answer, ...incorrect_answers].sort();
  return (
    <StyledOptionsContainer>
      {newArr.map(answer => (
        <StyledOption key={answer}>{answer}</StyledOption>
      ))}
    </StyledOptionsContainer>
  );
};

export default Options;
