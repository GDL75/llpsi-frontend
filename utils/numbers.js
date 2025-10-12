// Converting a digital number to Roman number
export function romanNumber(num) {
  if (num < 0 || num > 3999) {
    throw new Error("The number should be between 0 and 3999");
  }

  if (num === 0) return "nulla";

  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (const { value, symbol } of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Get the ordinals of numbers < 10, depending on language and gender
export function ordinalNumber(num, language = "la", gender = "masculine") {
  if (language === "la") {
    return (
      <>
        {romanNumber(num)}
        <sup>{gender === "feminine" ? "a" : "o"}</sup>
      </>
    );
  }

  if (language === "fr") {
    return (
      <>
        {num}
        <sup>{num === 1 ? (gender === "masculine" ? "er" : "ère") : "ème"}</sup>
      </>
    );
  }

  // Pour l'anglais (nombres < 10)
  if (language === "en") {
    // Correction: c'était "fr" deux fois
    const suffixes = { 1: "st", 2: "nd", 3: "rd" };
    return (
      <>
        {num}
        <sup>{suffixes[num] || "th"}</sup>
      </>
    );
  }
}
