import endings from "data/endings";

// adds the flexible endings to declinable words
export function addEnding({ word, case: _case, number, gender }) {
  // "case: _case" because "case" is a reserved keyword in js
  if (!word || !_case || !number) return "";

  // === Vérification des limitations st / pt ===
  if (word.limitation === "st" && number === "plural") return "-";
  if (word.limitation === "pt" && number === "singular") return "-";

  // === Gestion des noms ===
  if (word.type === "noun") {
    const endingSet = endings.declinable[word.endingsType];
    if (!endingSet) return word.id;

    // Radical : chaîne ou tableau
    let radical;

    if (Array.isArray(word.radical)) {
      // Cas particuliers : nominatif singulier ou vocatif singulier -> index 1
      if ((_case === "nominative" || _case === "vocative") && number === "singular") {
        radical = word.radical[1];
        return radical; // pas d'ending
      } else {
        radical = word.radical[0];
      }
    } else {
      radical = word.radical;
    }

    const ending = endingSet[_case]?.[number] ?? "";
    return radical + ending;
  }

  // === Gestion des adjectifs ===
  if (word.type === "adjective") {
    if (!gender) return ""; // obligatoire pour adjectif
    const genderIndexMap = { masculine: 0, feminine: 1, neuter: 2 };
    const idx = genderIndexMap[gender];
    const endingSet = endings.declinable[word.endingsType[idx]]; // index dans endingsType

    if (!endingSet) return word.radical[idx] ?? "";

    // Radical : chaîne ou tableau
    let radical;
    if (Array.isArray(word.radical)) {
      if ((_case === "nominative" || _case === "vocative") && number === "singular" && gender === "masculine") {
        radical = word.radical[1] ?? word.radical[0];
        return radical;
      } else {
        radical = word.radical[0] ?? "";
      }
    } else {
      radical = word.radical ?? "";
    }

    const ending = endingSet[_case]?.[number] ?? "";
    return radical + ending;
  }

  return "";
}
