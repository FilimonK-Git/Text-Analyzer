import React, { useEffect, useState } from "react";

export default function Table(prop) {
  return (
    <table className="sortable">
      <thead>
        <tr>
          <th
            style={{ cursor: "pointer", backgroundColor: "rgb(238, 243, 240)" }}
            onClick={() => {
              prop.sortByAlpha();
            }}
          >
            Letter
          </th>
          <th
            style={{ cursor: "pointer", backgroundColor: "rgb(238, 243, 240)" }}
            onClick={() => {
              prop.sortByFreq();
            }}
          >
            Frequency
          </th>
        </tr>
      </thead>
      <tbody>
        {prop.tableData.map((letterFreq, index) => (
          <tr key={index}>
            <td>{letterFreq[0]}</td>
            <td>{letterFreq[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
