import React from "react";
import { Button } from "../styles";

const Record = ({ studentName, score, studentClass }) => {
  return (
    <tr>
      <td>{studentName}</td>
      <td>{score}</td>
      <td>{studentClass}</td>
      <td>
        <Button>Delete</Button>
      </td>
    </tr>
  );
};

export default Record;
