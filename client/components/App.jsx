import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Table from "./Table.jsx";

const App = () => {
  const [words, setWords] = useState("");
  const [letterCount, setLetterCount] = useState("");

  const processor = (inputString) => {
    // edge case: what if input is empty or contains non-english-letters, lower case? symbols: space new line...

    // console.log("inputString", inputString);
    if (!inputString) {
      alert("cant");
      return;
    }

    let filteredLetters = inputString
      .toLowerCase()
      .split("")
      .sort() // sort letters alphabetically
      .filter((char) => /[a-z]/.test(char)); // remove non alphabet chars

    let frequencyDictonary = {};

    filteredLetters.forEach((char) => {
      !frequencyDictonary[char]
        ? (frequencyDictonary[char] = 1)
        : frequencyDictonary[char]++;
    });

    // convert from key:val object to nested array: ex: {a:1, e:3} to [[a,1], [e,3]]
    frequencyDictonary = Object.entries(frequencyDictonary);
    setLetterCount(frequencyDictonary);
  };

  return (
    <div>
      <div> What would you like analyzed?</div>
      <textarea
        rows="10"
        cols="25"
        onChange={(e) => {
          setWords(e.target.value);
        }}
      ></textarea>
      <button
        onClick={() => {
          processor(words);
        }}
      >
        process
      </button>
      {letterCount ? <Table tableData={letterCount} /> : null}
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
