import React from "react";
import { Container, Table } from "./styles";
import Record from "./Record";

const Records = ({ records }) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Student name</th>
            <th>Score</th>
            <th>Class</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <Record key={record.id} {...record} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Records;
