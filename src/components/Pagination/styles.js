import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  background: white;
  margin-bottom: 0;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const LeftButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem;

  background-color: ${({ isDisabled }) => (isDisabled ? "#aaa" : "white")};

  &:hover {
    background-color: ${({ isDisabled }) => (isDisabled ? "#aaa" : "#ccc")};
    cursor: ${({ isDisabled }) => (isDisabled ? "initial" : "pointer")};
  }
`;

export const RightButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem;

  background-color: ${({ isDisabled }) => (isDisabled ? "#aaa" : "white")};

  &:hover {
    background-color: ${({ isDisabled }) => (isDisabled ? "#aaa" : "#ccc")};
    cursor: ${({ isDisabled }) => (isDisabled ? "initial" : "pointer")};
  }
`;

export const NumberButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem;
  background-color: ${({ active }) => (active ? "#ccc" : "white")};

  &:hover {
    background-color: ${({ dummy }) => (dummy ? "white" : "#ccc")};
    cursor: ${({ dummy }) => (dummy ? "initial" : "pointer")};
  }
`;
