import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.1rem;
  .row {
    margin-top: 1.2rem;
    display: flex;
    justify-content: space-between;
    label {
      margin: 0 0.5rem;
    }
  }
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #49bcac;
  font-size: 1.1rem;
  color: #49bcac;
  margin: 1.5em 1em;
  padding: 0.5em 1em;
  cursor: pointer;
  &:hover {
    background: #49bcac;
    color: white;
  }
`;
