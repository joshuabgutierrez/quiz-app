import React from "react";
import Question from "./Question";
import Options from "./Options";
import Container from ".";
import styled from "styled-components";

const StyledQuestionContainer = styled(Container)`
  margin: 1em auto;
`;

const QuestionContainer = ({
  question,
  correct_answer,
  incorrect_answers,
  handleIndex,
  handleScore
}) => {
  return (
    <StyledQuestionContainer>
      <Question question={question} />
      <Options
        correct_answer={correct_answer}
        incorrect_answers={incorrect_answers}
        handleIndex={handleIndex}
        handleScore={handleScore}
      />
    </StyledQuestionContainer>
  );
};

export default QuestionContainer;
