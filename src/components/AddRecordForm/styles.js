import styled from "styled-components";

export const Container = styled.form`
  margin: 1rem;
  flex: 1;
  background: white;
  margin-bottom: 0;
  padding-bottom: 1rem;
`;

export const FormGroup = styled.span`
  padding: 1rem 1rem 0rem 1rem;
  display: flex;

  @media (min-width: 600px) {
    flex-direction: column;
  }
`;

export const RadioGroup = styled.span`
  padding: 1rem 1rem 0rem 1rem;

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

export const ErrorMessage = styled.p`
  padding-left: 1rem;
  padding-top: 1rem;
  color: #c00;
`;
