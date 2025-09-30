import React from "react";
import morphologyConfig from "assets/morphologyConfig";

/**
 * Génère un span JSX pour un mot latin avec classes morphologiques.
 * @param {string} text - Le mot, avec "-" pour séparer radical et désinence.
 * @param {string} code - Les codes abrégés, ex: "mas-nom", "sub".
 * @returns JSX.Element
 */
export function m(text, code) {
  // 1️⃣ Séparer radical et désinence
  let [radical, desinence] = text.split("-");
  // Si le mot se termine par "-", mais pas de désinence fournie
  if (text.endsWith("-") && !desinence) {
    desinence = "•";
  }

  // 2️⃣ Séparer les codes et retrouver les classes correspondantes
  const codes = code.split("-");
  const classes = codes
    .map((c) => morphologyConfig.find((m) => m.short === c))
    .filter(Boolean)
    .map((m) => m.key);

  const mainClass = classes[0] || "";
  const endingClass = classes[1] || "";

  // 3️⃣ Retourner le JSX
  if (!desinence) {
    return <span className={mainClass}>{radical}</span>;
  }

  return (
    <span className={mainClass}>
      {radical}
      <span className={endingClass}>{desinence}</span>
    </span>
  );
}
