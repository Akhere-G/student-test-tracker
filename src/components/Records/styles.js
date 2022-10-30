import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  background-color: white;
  box-shadow: 1px 2px 3px #0008;
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  & thead {
    background-color: #8cf;
    font-size: 1.4rem;
  }

  & th,
  td {
    padding: 0.5rem;
  }

  & tr:nth-child(2n) {
    background-color: #8cf;
  }
`;

export const Button = styled.button`
  padding: 0.3rem;
  border: 1px solid black;
  border-radius: 3px;
  background-color: white;
  &:hover {
    cursor: pointer;
    background-color: #fcc;
  }
  transition: ease-in-out 300ms;
`;
