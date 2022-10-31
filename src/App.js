import { useState, useEffect } from "react";
import { AddRecordForm, FormFilter, Records, Pagination } from "./components";

import { Container, Wrapper, FormWrapper, Title } from "./styles";

import { initialRecords } from "./data";

const initialFilters = {
  from: "0",
  to: "100",
  studentClass: { A: true, B: true, C: true },
};

const initialPaging = {
  recordsPerPage: 6,
  pageNumber: 1,
  totalPages: 1,
};

const getNewPaging = (records, previousPaging = initialPaging) => {
  const { recordsPerPage } = previousPaging;

  const numberOfRecords = records.length;

  if (numberOfRecords === 0) {
    return initialPaging;
  }
  const totalPages = Math.ceil(numberOfRecords / recordsPerPage);

  return { ...previousPaging, totalPages };
};

const App = () => {
  const [records, setRecords] = useState(initialRecords);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [sortedRecords, setSortedRecords] = useState([]);
  const [recordsOnCurrentPage, setRecordsOnCurrentPage] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [sorting, setSorting] = useState({ sortBy: "studentName", asc: false });
  const [paging, setPaging] = useState(getNewPaging(sortedRecords));

  useEffect(() => {
    const newFilteredRecords = records.filter((record) => {
      const { from, to, studentClass } = filters;
      return (
        record.score >= from &&
        record.score <= to &&
        studentClass[record.studentClass]
      );
    });

    setFilteredRecords(newFilteredRecords);
    setPaging((prev) => getNewPaging(newFilteredRecords, prev));
  }, [records, filters]);

  useEffect(() => {
    let newSortedRecords;
    if (sorting.sortBy === "studentName" && sorting.asc) {
      newSortedRecords = filteredRecords
        .slice()
        .sort((a, b) => a.studentName.localeCompare(b.studentName));
    } else if (sorting.sortBy === "studentName" && !sorting.asc) {
      newSortedRecords = filteredRecords
        .slice()
        .sort((a, b) => b.studentName.localeCompare(a.studentName));
    } else if (sorting.sortBy === "score" && sorting.asc) {
      newSortedRecords = filteredRecords
        .slice()
        .sort((a, b) => a.score - b.score);
    } else if (sorting.sortBy === "score" && !sorting.asc) {
      newSortedRecords = filteredRecords
        .slice()
        .sort((a, b) => b.score - a.score);
    } else if (sorting.sortBy === "studentClass" && sorting.asc) {
      newSortedRecords = filteredRecords
        .slice()
        .sort((a, b) => a.studentClass.localeCompare(b.studentClass));
    } else {
      newSortedRecords = filteredRecords
        .slice()
        .sort((a, b) => b.studentClass.localeCompare(a.studentClass));
    }
    setPaging((prev) => ({ ...prev, pageNumber: 1 }));
    setSortedRecords(newSortedRecords);
  }, [filteredRecords, sorting]);

  useEffect(() => {
    const a = getNewPaging(sortedRecords, paging);

    const { pageNumber, recordsPerPage } = a;

    const firstPageIndex = (pageNumber - 1) * recordsPerPage;
    const lastPageIndex = firstPageIndex + recordsPerPage - 1;

    const newRecordsOnCurrentPage = sortedRecords.slice(
      firstPageIndex,
      lastPageIndex + 1
    );

    setRecordsOnCurrentPage(newRecordsOnCurrentPage);
  }, [sortedRecords, paging]);

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
      <Container>
        <Wrapper>
          <FormWrapper>
            <Pagination paging={paging} setPageNumber={setPageNumber} />
            <AddRecordForm addRecord={addRecord} />
            <FormFilter filters={filters} setFilters={setFilters} />
          </FormWrapper>
          <Records
            records={recordsOnCurrentPage}
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
