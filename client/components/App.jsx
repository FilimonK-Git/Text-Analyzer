import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Table from "./Table.jsx";

const App = () => {
  const [words, setWords] = useState("");
  const [letterCount, setLetterCount] = useState("");
  const [sortedAlpha, setSortedByAlpha] = useState("");
  const [sortedFreq, setSortedByFreq] = useState("");

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
      .filter((char) => /[a-z]/.test(char)); // remove non alphabet chars

    let frequencyDictonary = {};

    filteredLetters.forEach((char) => {
      !frequencyDictonary[char]
        ? (frequencyDictonary[char] = 1)
        : frequencyDictonary[char]++;
    });

    // convert from key:val object to nested array and sort by descending frequency: ex: {a:1, e:3} to [[e,3], [a,1]]
    frequencyDictonary = Object.entries(frequencyDictonary).sort(
      (a, b) => b[1] - a[1]
    );

    setLetterCount(frequencyDictonary);
  };

  const sortByAlpha = () => {
    setSortedByAlpha(letterCount.sort());
    setSortedByFreq("");
  };
  const sortByFreq = () => {
    setSortedByFreq(letterCount.sort((a, b) => b[1] - a[1]));
    setSortedByAlpha("");
  };

  useEffect(() => {
    // console.log("xxx", s);
  }, [letterCount, sortedAlpha, sortedFreq]);

  return (
    <div>
      <div> Enter text to process:</div>
      <textarea
        rows="10"
        cols="25"
        onChange={(e) => {
          setWords(e.target.value);
        }}
      ></textarea>
      <div>
        <button
          onClick={() => {
            processor(words);
          }}
        >
          process
        </button>
      </div>
      {letterCount ? (
        <Table
          tableData={letterCount}
          sortByAlpha={sortByAlpha}
          sortByFreq={sortByFreq}
        />
      ) : null}
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
