import React from "react";
import { Container, RangeGroup, Range, CheckboxGroup, Label } from "./styles";

const FormFilter = () => {
  return (
    <Container>
      <RangeGroup>
        <Label>Score</Label>
        <Range>
          <Label for="from">From</Label>
          <input id="from" type="text" />
          <Label for="to">to</Label>
          <input id="to" type="text" />
        </Range>
      </RangeGroup>
      <CheckboxGroup>
        <Label>Class</Label>
        <input type="checkBox" id="filterA" name="filterClass" value="A" />
        <Label for="filterA">A</Label>

        <input type="checkBox" id="filterB" name="filterClass" value="B" />
        <Label for="filterB">B</Label>

        <input type="checkBox" id="filterC" name="filterClass" value="C" />
        <Label for="filterC">C</Label>
      </CheckboxGroup>
    </Container>
  );
};

export default FormFilter;
