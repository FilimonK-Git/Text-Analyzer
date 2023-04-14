import React from "react";

export default function Table(freqDictionay) {
  return (
    <table>
      <thead>
        <tr>
          <th>Letter</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        {freqDictionay.tableData.map((letterFreq, index) => (
          <tr key={index}>
            <td>{letterFreq[0]}</td>
            <td>{letterFreq[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
