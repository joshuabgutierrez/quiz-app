import styled from "styled-components";
// Reusable components

export const Container = styled.div`
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 4em;
  max-width: 400px;
  width: 100%;
  margin: auto;
`;

export const Button = styled.button`
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
