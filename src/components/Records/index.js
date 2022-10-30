import React from "react";
import { Container, Table, NoRecords } from "./styles";
import Record from "./Record";

const Records = ({ records, deleteRecord }) => {
  let RecordList;

  if (records.length === 0) {
    RecordList = (
      <NoRecords>
        <td colSpan={4}>
          <h2>No Records</h2>
        </td>
      </NoRecords>
    );
  } else {
    RecordList = records.map((record) => (
      <Record key={record.id} {...record} deleteRecord={deleteRecord} />
    ));
  }
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
        <tbody>{RecordList}</tbody>
      </Table>
    </Container>
  );
};

export default Records;
