import React from "react";
import { Container, RangeGroup, Range, CheckboxGroup, Label } from "./styles";

const FormFilter = ({ filters, setFilters }) => {
  return (
    <Container>
      <RangeGroup>
        <Label>Score</Label>
        <Range>
          <Label htmlFor="from">From</Label>
          <input
            id="from"
            type="number"
            value={filters.from}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, from: e.target.value }))
            }
          />
          <Label htmlFor="to">to</Label>
          <input
            id="to"
            type="number"
            value={filters.to}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, to: e.target.value }))
            }
          />
        </Range>
      </RangeGroup>
      <CheckboxGroup>
        <Label>Class</Label>
        <input
          type="checkBox"
          id="filterA"
          value="A"
          checked={filters.studentClass.A}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              studentClass: { ...prev.studentClass, A: !prev.studentClass.A },
            }))
          }
        />
        <Label htmlFor="filterA">A</Label>

        <input
          type="checkBox"
          id="filterB"
          value="B"
          checked={filters.studentClass.B}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              studentClass: { ...prev.studentClass, B: !prev.studentClass.B },
            }))
          }
        />
        <Label htmlFor="filterB">B</Label>

        <input
          type="checkBox"
          id="filterC"
          value="C"
          checked={filters.studentClass.C}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              studentClass: { ...prev.studentClass, C: !prev.studentClass.C },
            }))
          }
        />
        <Label htmlFor="filterC">C</Label>
      </CheckboxGroup>
    </Container>
  );
};

export default FormFilter;
