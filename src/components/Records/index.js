import React from "react";
import { Container, Table } from "./styles";
import Record from "./Record";
const records = [
  { id: 1, studentName: "Alan", score: 100, studentClass: "A" },
  { id: 2, studentName: "Jessica", score: 50, studentClass: "A" },
  { id: 3, studentName: "Sarah", score: 70, studentClass: "B" },
  { id: 4, studentName: "Ade", score: 80, studentClass: "B" },
  { id: 5, studentName: "Tariq", score: 60, studentClass: "C" },
  { id: 6, studentName: "Shaun", score: 100, studentClass: "C" },
];

const Records = () => {
  return (
    <Container>
      <Table>
        <thead>
          <th>Student name</th>
          <th>Score</th>
          <th>Class</th>
          <th></th>
        </thead>
        <tbody>
          {records.map((record) => (
            <Record {...record} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Records;
