import React from "react";
import { Container, Table, Th, NoRecords } from "./styles";
import Record from "./Record";

const Records = ({ records, deleteRecord, setSorting, sorting }) => {
  const { sortBy, asc } = sorting;

  const changeSort = (newSortBy) => () =>
    setSorting((prev) => {
      if (prev.sortBy === newSortBy) {
        return { ...prev, asc: !prev.asc };
      }
      return { sortBy: newSortBy, asc: true };
    });
  const sortByStudentName = changeSort("studentName");
  const sortByScore = changeSort("score");
  const sortByClass = changeSort("studentClass");

  const isSortingByStudentName = sortBy === "studentName";
  const isSortingByScore = sortBy === "score";
  const isSortingByStudentClass = sortBy === "studentClass";

  const headerSymbol = asc ? "↑" : "↓";

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
            <Th onClick={sortByStudentName} focusOn={isSortingByStudentName}>
              Student name {isSortingByStudentName ? headerSymbol : ""}
            </Th>
            <Th onClick={sortByScore} focusOn={isSortingByScore}>
              Score {isSortingByScore ? headerSymbol : ""}
            </Th>
            <Th onClick={sortByClass} focusOn={isSortingByStudentClass}>
              Class {isSortingByStudentClass ? headerSymbol : ""}
            </Th>
            <Th dummy></Th>
          </tr>
        </thead>
        <tbody>{RecordList}</tbody>
      </Table>
    </Container>
  );
};

export default Records;
