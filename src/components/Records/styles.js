import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  background-color: white;

  @media (min-width: 600px) {
    margin-left: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  & thead {
    font-size: 1.4rem;
  }

  & th,
  td {
    padding: 0.5rem;
    border-bottom: #eee 0.4rem solid;
  }
`;

export const Button = styled.button`
  &:hover {
    background-color: #fcc;
  }
`;
