import { useState, useEffect } from "react";
import { AddRecordForm, FormFilter, Records, Pagination } from "./components";

import { Container, Wrapper, FormWrapper, Title } from "./styles";

import { initialRecords } from "./data";

const initialFilters = {
  from: "0",
  to: "100",
  studentClass: { A: true, B: true, C: true },
};

const initialPaging = { pageNumber: 1, totalPages: 1, recordsPerPage: 6 };

const App = () => {
  const [records, setRecords] = useState(initialRecords);
  const [filteredRecords, setFilteredRecords] = useState(initialRecords);
  const [filters, setFilters] = useState(initialFilters);
  const [sorting, setSorting] = useState({ sortBy: "studentName", asc: false });
  const [paging, setPaging] = useState(initialPaging);

  useEffect(() => {
    const { recordsPerPage } = paging;

    const numberOfRecords = filteredRecords.length;

    if (numberOfRecords === 0) {
      setPaging(initialPaging);
    }
    const totalPages = Math.ceil(numberOfRecords / recordsPerPage);

    setPaging((prev) => ({ ...prev, totalPages, pageNumber: 1 }));
  }, [filteredRecords]);

  useEffect(() => {
    const newFilteredRecords = records.filter((record) => {
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

    let sortedRecords;

    if (sorting.sortBy === "studentName" && sorting.asc) {
      sortedRecords = newFilteredRecords.sort((a, b) =>
        a.studentName.localeCompare(b.studentName)
      );
    } else if (sorting.sortBy === "studentName" && !sorting.asc) {
      sortedRecords = newFilteredRecords.sort((a, b) =>
        b.studentName.localeCompare(a.studentName)
      );
    } else if (sorting.sortBy === "score" && sorting.asc) {
      sortedRecords = newFilteredRecords.sort((a, b) => a.score - b.score);
    } else if (sorting.sortBy === "score" && !sorting.asc) {
      sortedRecords = newFilteredRecords.sort((a, b) => b.score - a.score);
    } else if (sorting.sortBy === "studentClass" && sorting.asc) {
      sortedRecords = newFilteredRecords.sort((a, b) =>
        a.studentClass.localeCompare(b.studentClass)
      );
    } else if (sorting.sortBy === "studentClass" && !sorting.asc) {
      sortedRecords = newFilteredRecords.sort((a, b) =>
        b.studentClass.localeCompare(a.studentClass)
      );
    }

    setFilteredRecords(sortedRecords);
  }, [filters, sorting]);

  const addRecord = (record) => {
    setRecords((prev) => [...prev, record]);
  };

  const deleteRecord = (id) => {
    setRecords((prev) => prev.filter((record) => id !== record.id));
  };

  const setPageNumber = (i) =>
    setPaging((prev) => ({
      ...prev,
      pageNumber: Math.min(Math.max(i, 1), prev.totalPages),
    }));
  //  ensures i is greater than 1 or smaller than totalPages or equal to either

  return (
    <>
      <Title>Student Records</Title>
      <pre>{JSON.stringify(paging, null, 2)}</pre>
      <Container>
        <Wrapper>
          <FormWrapper>
            <Pagination paging={paging} setPageNumber={setPageNumber} />
            <AddRecordForm addRecord={addRecord} />
            <FormFilter filters={filters} setFilters={setFilters} />
          </FormWrapper>
          <Records
            records={filteredRecords}
            deleteRecord={deleteRecord}
            setSorting={setSorting}
            sorting={sorting}
          />
        </Wrapper>
      </Container>
    </>
  );
};

export default App;
