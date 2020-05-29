import React from "react";
import styled from "styled-components";

const StyledQuestion = styled.h3`
  text-align: center;
`;

const convertHtmlToText = html => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent;
};

const Question = ({ question }) => {
  const formattedQuestion = convertHtmlToText(question);

  return (
    <>
      <StyledQuestion>{formattedQuestion}</StyledQuestion>
    </>
  );
};

export default Question;
