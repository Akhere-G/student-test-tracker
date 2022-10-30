import { Container, FormGroup, RadioGroup, Label } from "./styles";

import React from "react";

const AddRecordForm = () => {
  return (
    <Container>
      <FormGroup>
        <Label for="name">Student name</Label>
        <input id="name" type="text" />
      </FormGroup>

      <FormGroup>
        <Label for="score">Score</Label>
        <input id="score" type="text" />
      </FormGroup>

      <RadioGroup>
        <Label>Class</Label>
        <input type="radio" id="A" name="class" value="A" />
        <Label for="A">A</Label>

        <input type="radio" id="B" name="class" value="B" />
        <Label for="B">B</Label>

        <input type="radio" id="C" name="class" value="C" />
        <Label for="C">C</Label>
      </RadioGroup>
    </Container>
  );
};

export default AddRecordForm;
