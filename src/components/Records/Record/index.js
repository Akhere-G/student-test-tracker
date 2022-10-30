import React from "react";
import { Button } from "../styles";

const Record = ({ id, studentName, score, studentClass, deleteRecord }) => {
  const handleClick = () => {
    deleteRecord(id);
  };

  return (
    <tr>
      <td>{studentName}</td>
      <td>{score}</td>
      <td>{studentClass}</td>
      <td>
        <Button onClick={handleClick}>Delete</Button>
      </td>
    </tr>
  );
};

export default Record;
