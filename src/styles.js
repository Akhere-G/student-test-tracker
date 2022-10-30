import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  max-width: 900px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: 600px) {
    justify-content: center;
    flex-direction: row;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  background-color: #48f;
  color: white;
  width: 100%;
  text-align: center;
`;
