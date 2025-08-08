function add(input) {
  if (input === "") return 0;

  let delimiter = /,|\n/;
  let numbersString = input;

  // Custom delimiter case: starts with "//;\n1;2"
  if (input.startsWith("//")) {
    const lines = input.split("\n");
    const delimiterLine = lines[0];
    const delimiterSymbol = delimiterLine.slice(2); // after "//"
    delimiter = new RegExp(delimiterSymbol);
    numbersString = lines.slice(1).join("\n");
  }

  const numbers = numbersString
    .split(delimiter)
    .map((num) => parseInt(num, 10));

  const negatives = numbers.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numbers.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
