const textProcessor_JestTest = (inputString) => {
  if (!inputString) {
    // handle edge case when user leaves text area blank
    return "Empty input";
  } else {
    let filteredLetters = inputString
      .toLowerCase()
      .split("")
      .filter((char) => /[a-z]/.test(char)); // filter out non alphabet chars

    let frequencyDictonary = {};

    if (filteredLetters.length === 0) {
      return "No english letters found in input";
    }

    filteredLetters.forEach((char) => {
      !frequencyDictonary[char]
        ? (frequencyDictonary[char] = 1)
        : frequencyDictonary[char]++;
    });

    // convert from key:val object to nested array and sort by descending frequency: ex: {a:1, e:3} to [[e,3], [a,1]]
    frequencyDictonary = Object.entries(frequencyDictonary).sort(
      (a, b) => b[1] - a[1]
    );

    return frequencyDictonary;
  }
};

describe("Text Processor function logic test", function () {
  test("should detect empty-input edge case", function () {
    expect(textProcessor_JestTest("")).toBe("Empty input");
    expect(textProcessor_JestTest()).toBe("Empty input");
  });
  test("should halt when no english letters are found in input", function () {
    expect(textProcessor_JestTest("123_@#$")).toBe(
      "No english letters found in input"
    );
    expect(textProcessor_JestTest(" ")).toBe(
      "No english letters found in input"
    );
  });
  test("should return correct frequency count", function () {
    expect(textProcessor_JestTest("abcd")).toEqual([
      ["a", 1],
      ["b", 1],
      ["c", 1],
      ["d", 1],
    ]);
    expect(textProcessor_JestTest("hello world")).toEqual([
      ["l", 3],
      ["o", 2],
      ["h", 1],
      ["e", 1],
      ["w", 1],
      ["r", 1],
      ["d", 1],
    ]);
    expect(textProcessor_JestTest(" Hello World_123!")).toEqual([
      ["l", 3],
      ["o", 2],
      ["h", 1],
      ["e", 1],
      ["w", 1],
      ["r", 1],
      ["d", 1],
    ]);
    expect(
      textProcessor_JestTest(
        "If this text analyzer is not working properly, this test should fail... which will make me sad :("
      )
    ).toEqual([
      ["i", 8],
      ["t", 7],
      ["s", 6],
      ["e", 6],
      ["l", 6],
      ["h", 5],
      ["a", 5],
      ["r", 4],
      ["o", 4],
      ["n", 3],
      ["w", 3],
      ["f", 2],
      ["y", 2],
      ["k", 2],
      ["p", 2],
      ["d", 2],
      ["m", 2],
      ["x", 1],
      ["z", 1],
      ["g", 1],
      ["u", 1],
      ["c", 1],
    ]);
  });
});
