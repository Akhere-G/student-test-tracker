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
  { id: 7, studentName: "Michaela", score: 10, studentClass: "C" },
  { id: 8, studentName: "Robin", score: 20, studentClass: "B" },
  { id: 9, studentName: "John", score: 30, studentClass: "A" },
];

const initialFilters = {
  from: "0",
  to: "100",
  studentClass: { A: true, B: true, C: true },
};

const App = () => {
  const [records, setRecords] = useState(initialRecords);
  const [filters, setFilters] = useState(initialFilters);

  const addRecord = (record) => {
    setRecords((prev) => [...prev, record]);
  };

  const deleteRecord = (id) => {
    setRecords((prev) => prev.filter((record) => id !== record.id));
  };

  const filteredRecords = records.filter((record) => {
    const { from, to, studentClass } = filters;
    if (record.score < from) {
      return false;
    }
    if (record.score > to) {
      return false;
    }
    if (!studentClass[record.studentClass]) {
      return false;
    }

    return true;
  });

  return (
    <Container>
      <h1>Student Records</h1>
      <Wrapper>
        <FormWrapper>
          <AddRecordForm addRecord={addRecord} />
          <FormFilter filters={filters} setFilters={setFilters} />
        </FormWrapper>
        <Records records={filteredRecords} deleteRecord={deleteRecord} />
      </Wrapper>
    </Container>
  );
};

export default App;
