import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  flex: 1;

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

  & td {
    padding: 0.5rem;
    border-bottom: #eee 0.4rem solid;
    background-color: white;
  }
`;

export const Th = styled.th`
  padding: 0.5rem;
  border-bottom: #eee 0.4rem solid;
  background-color: ${({ focusOn }) => (focusOn ? "#ddd" : "white")};
  transition: ease-in 150ms;
  &:hover {
    cursor: ${({ dummy }) => (dummy ? "initial" : "pointer")};
    background-color: ${({ dummy }) => (dummy ? "white" : "#ccc")};
  }
`;

export const Button = styled.button`
  &:hover {
    background-color: #fcc;
  }
`;

export const NoRecords = styled.tr`
  background: white;
  width: 100%;

  & td {
    padding: 5rem 1rem;
    margin: 0 auto;
    text-align: center;
  }
`;
