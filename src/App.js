import { useState } from "react";
import { AddRecordForm, FormFilter, Records } from "./components";

import { Container, Wrapper, FormWrapper } from "./styles";

const initialRecords = [
  { id: 1, studentName: "Alan", score: 100, studentClass: "A" },
  { id: 2, studentName: "Jessica", score: 50, studentClass: "A" },
  { id: 3, studentName: "Sarah", score: 70, studentClass: "B" },
  { id: 4, studentName: "Ade", score: 80, studentClass: "B" },
  { id: 5, studentName: "Tariq", score: 60, studentClass: "C" },
  { id: 6, studentName: "Shaun", score: 100, studentClass: "C" },
];

const App = () => {
  const [records, setRecords] = useState(initialRecords);

  const addRecord = (record) => {
    setRecords((prev) => [...prev, record]);
  };

  return (
    <Container>
      <h1>Student Records</h1>
      <Wrapper>
        <FormWrapper>
          <AddRecordForm addRecord={addRecord} />
          <FormFilter />
        </FormWrapper>
        <Records records={records} />
      </Wrapper>
    </Container>
  );
};

export default App;
