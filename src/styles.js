import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    justify-content: center;
    flex-direction: row;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
