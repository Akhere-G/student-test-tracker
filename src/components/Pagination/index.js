import React from "react";
import { Container, LeftButton, RightButton, NumberButton } from "./styles";
import PageNumbers from "./PageNumbers";

const Pagination = ({ paging, setPageNumber }) => {
  const { pageNumber, totalPages, recordsPerPage } = paging;

  let MiddleButtons = [];

  const handleClick = (i) => () => setPageNumber(i);

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

  const RightEllipsis = (
    <NumberButton key="-1" dummy>
      ...
    </NumberButton>
  );

  const LeftEllipsis = (
    <NumberButton key="-2" dummy>
      ...
    </NumberButton>
  );

  if (totalPages < 5) {
    MiddleButtons = createMiddleButtons(1, totalPages - 1);
  } else if (pageNumber === 1) {
    MiddleButtons = createMiddleButtons(1, 5);
    MiddleButtons.push(RightEllipsis);
  } else if (pageNumber === totalPages) {
    MiddleButtons = createMiddleButtons(pageNumber - 3, pageNumber + 1);
    MiddleButtons.unshift(LeftEllipsis);
  } else {
    MiddleButtons = [
      <NumberButton key={1} active onClick={handleClick(1)}>
        1
      </NumberButton>,
      LeftEllipsis,

      <NumberButton key={pageNumber} active onClick={handleClick(pageNumber)}>
        {pageNumber}
      </NumberButton>,
      RightEllipsis,

      <NumberButton key={totalPages} onClick={handleClick(totalPages)}>
        {totalPages}
      </NumberButton>,
    ];
  }

  const atStart = pageNumber === 1;
  const atEnd = pageNumber === totalPages;
  return (
    <Container>
      <LeftButton isDisabled={atStart} onClick={handleClick(pageNumber - 1)}>
        ←
      </LeftButton>
      {MiddleButtons}

      <RightButton isDisabled={atEnd} onClick={handleClick(pageNumber + 1)}>
        →
      </RightButton>
    </Container>
  );
};

export default Pagination;
