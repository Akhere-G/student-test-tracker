import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  & thead {
    background-color: #48f;
  }

  & th,
  td {
    padding: 0.5rem;
  }

  & tr:nth-child(2n) {
    background-color: #48f;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 0.3rem;
  border-radius: 3px;
  background-color: white;
  &:hover {
    cursor: pointer;
    background-color: #fcc;
  }
  transition: ease-in-out 300ms;
`;
