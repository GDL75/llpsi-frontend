import React from "react";
import endings from "data/endings";

/**
 * Composant Conjugate
 * @param {string} radical - ex. "am"
 * @param {number} conjugation - 1 à 4
 * @param {string} voice - "active" ou "passive"
 * @param {string} aspect - "unfinished" (infectum) ou "finished" (perfectum)
 * @param {string} mood - "indicative" | "subjunctive" | "imperative"
 * @param {string} tense - "present" | "preterit" | "future" | "perfect" | "pqp"
 */
export default function Conjugate({
  radical,
  conjugation,
  voice = "active",
  aspect = "unfinished",
  mood = "indicative",
  tense = "present",
}) {
  const persons = ["1s", "2s", "3s", "1p", "2p", "3p"];

  // Choix du radical à utiliser
  let chosenRadical = radical;
  let specialCase = false;
  if (!Array.isArray(radical) || radical.length !== 3) {
    return;
  }
  if (aspect === "finished" && voice === "active") {
    chosenRadical = radical[1];
  } else if (aspect === "finished" && voice === "passive") {
    chosenRadical = radical[2]; specialCase=true
  } else {
    chosenRadical = radical[0];
  }

  // Récupération sécurisée des terminaisons
  const table = endings.verb?.conjugation?.[conjugation]?.[voice]?.[aspect]?.[mood]?.[tense];

  if (!table) {
    console.warn("Form not found for parameters:", {
      conjugation,
      voice,
      aspect,
      mood,
      tense,
    });
    return <div className="brick empty">—</div>;
  }

  return (
    <div className="brick">
      {persons.map((personKey, idx) => {
        const part1 = table[0]?.[idx] || "";
        const part2 = table[1]?.[idx] || "";
        const part3 = table[2]?.[idx] || "";

        return (
          <div key={personKey} className="brickRow">
            <span className="brickForm">
              <span className="verbForm">
                {part1 !== "-" && chosenRadical !== "" ? (
                  <>
                    <span>{chosenRadical}</span>
                    <span className="verbPart1">{part1}</span>
                    <span className="verbPart2">{part2}</span>
                    <span className="verbPart3">{part3}</span>
                  </>
                ) : (
                  <span>-</span>
                )}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
