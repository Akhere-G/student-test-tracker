import React from "react";
import {
  Container,
  ButtonContainer,
  FormContainer,
  LeftButton,
  RightButton,
  NumberButton,
} from "./styles";

const Pagination = ({ paging, setPageNumber, setRecordsPerPage }) => {
  const { pageNumber, totalPages, recordsPerPage } = paging;

  let MiddleButtons = [];

  const handleClick = (i) => () => {
    setPageNumber(i);
  };

  const createMiddleButtons = (start, end) => {
    const MiddleButtons = [];
    for (let i = start; i < end; i = i + 1) {
      MiddleButtons.push(
        <NumberButton
          key={i}
          active={pageNumber === i}
          onClick={handleClick(i)}
        >
          {i}
        </NumberButton>
      );
    }
    return MiddleButtons;
  };

  const LeftEllipsis = (
    <NumberButton key="-2" dummy>
      ...
    </NumberButton>
  );

  const RightEllipsis = (
    <NumberButton key="-1" dummy>
      ...
    </NumberButton>
  );

  const FirstPage = (
    <NumberButton key={1} onClick={handleClick(1)}>
      1
    </NumberButton>
  );
  const LastPage = (
    <NumberButton key={totalPages} onClick={handleClick(totalPages)}>
      {totalPages}
    </NumberButton>
  );

  if (totalPages < 5) {
    MiddleButtons = createMiddleButtons(1, totalPages + 1);
  } else if (pageNumber === 1 || pageNumber === "") {
    MiddleButtons = createMiddleButtons(1, 4);
    MiddleButtons.push(RightEllipsis);
    MiddleButtons.push(LastPage);
  } else if (pageNumber === totalPages) {
    MiddleButtons = createMiddleButtons(pageNumber - 2, pageNumber + 1);
    MiddleButtons.unshift(LeftEllipsis);
    MiddleButtons.unshift(FirstPage);
  } else {
    MiddleButtons = [
      FirstPage,
      LeftEllipsis,
      <NumberButton key={pageNumber} active onClick={handleClick(pageNumber)}>
        {pageNumber}
      </NumberButton>,
      RightEllipsis,
      LastPage,
    ];
  }

  const atStart = pageNumber === 1;
  const atEnd = pageNumber === totalPages;
  return (
    <Container>
      <ButtonContainer>
        <LeftButton isDisabled={atStart} onClick={handleClick(pageNumber - 1)}>
          ←
        </LeftButton>
        {MiddleButtons}

        <RightButton isDisabled={atEnd} onClick={handleClick(pageNumber + 1)}>
          →
        </RightButton>
      </ButtonContainer>
      <FormContainer>
        <label htmlFor="pageNumber">Page</label>
        <input
          id="pageNumber"
          type="number"
          value={pageNumber}
          onChange={(e) => setPageNumber(e.target.value)}
        />
        <label htmlFor="recordsPerPage">records per page</label>
        <input
          id="recordsPerPage"
          type="number"
          value={recordsPerPage}
          onChange={(e) => setRecordsPerPage(e.target.value)}
        />
      </FormContainer>
    </Container>
  );
};

export default Pagination;
