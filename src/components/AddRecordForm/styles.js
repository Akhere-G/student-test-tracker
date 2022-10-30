import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  flex: 1;
  margin-top: 1rem;
  background: white;
`;

export const FormGroup = styled.span`
  padding: 1rem;
  display: flex;

  @media (min-width: 600px) {
    flex-direction: column;
  }
`;

export const RadioGroup = styled.span`
  padding: 1rem;
  display: flex;

  @media (min-width: 600px) {
    & label {
      padding-bottom: 0;
    }
  }
`;

export const Label = styled.label`
  padding-right: 1rem;

  @media (min-width: 600px) {
    padding-bottom: 0.5rem;
  }
`;
