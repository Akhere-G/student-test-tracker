import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
  background-color: white;
  margin-bottom: 0;
`;

export const RangeGroup = styled.span`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Range = styled.span`
  display: flex;
  padding-top: 0.5rem;

  & label:nth-child(3) {
    padding-left: 1rem;
  }

  @media (min-width: 600px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  padding-right: 1rem;

  @media (min-width: 600px) {
    padding-bottom: 0.5rem;
  }
`;

export const CheckboxGroup = styled.span`
  padding: 1rem;
  display: flex;

  @media (min-width: 600px) {
    & label {
      padding-bottom: 0;
    }
  }
`;
