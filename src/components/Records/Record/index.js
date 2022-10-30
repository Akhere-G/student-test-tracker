import React from "react";

const Record = ({ studentName, score, studentClass }) => {
  return (
    <tr>
      <td>{studentName}</td>
      <td>{score}</td>
      <td>{studentClass}</td>
      <td>
        <button>delete</button>
      </td>
    </tr>
  );
};

export default Record;
