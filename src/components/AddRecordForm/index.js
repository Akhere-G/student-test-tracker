import { useState } from "react";
import {
  Container,
  FormGroup,
  RadioGroup,
  Label,
  ErrorMessage,
} from "./styles";
import { v4 as uuid } from "uuid";
import React from "react";

const initialFormData = {
  studentName: "",
  score: "",
  studentClass: "A",
};

const validateFormData = (formData) => {
  const { studentName, score } = formData;

  if (!studentName.trim()) {
    return "Student name is missing";
  }

  if (!score.trim()) {
    return "Score is missing";
  }

  if (isNaN(score)) {
    return "Score is not a number";
  }

  return "";
};

const AddRecordForm = ({ addRecord }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const { studentName, score, studentClass } = formData;

    const newErrorMessage = validateFormData(formData);

    if (newErrorMessage) {
      setErrorMessage(newErrorMessage);
      return;
    }

    addRecord({ id: uuid(), studentName, score, studentClass });
    setFormData(initialFormData);
    setErrorMessage("");
  };

  return (
    <Container>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <FormGroup>
        <Label htmlFor="studentName">Student name</Label>
        <input
          id="studentName"
          type="text"
          value={formData.studentName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, studentName: e.target.value }))
          }
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="score">Score</Label>
        <input
          id="score"
          type="text"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, score: e.target.value }))
          }
          value={formData.score}
        />
      </FormGroup>

      <RadioGroup>
        <Label>Class</Label>
        <input
          type="radio"
          id="A"
          value="A"
          checked={formData.studentClass === "A"}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, studentClass: e.target.value }))
          }
        />
        <Label htmlFor="A">A</Label>

        <input
          type="radio"
          id="B"
          value="B"
          checked={formData.studentClass === "B"}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, studentClass: e.target.value }))
          }
        />
        <Label htmlFor="B">B</Label>

        <input
          type="radio"
          id="C"
          value="C"
          checked={formData.studentClass === "C"}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, studentClass: e.target.value }))
          }
        />
        <Label htmlFor="C">C</Label>
      </RadioGroup>

      <FormGroup>
        <button onClick={handleClick}>Create Record</button>
      </FormGroup>
    </Container>
  );
};

export default AddRecordForm;
