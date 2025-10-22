import React from "react";
import { useSelector } from "react-redux";
import styles from "styles/UserInput.module.css";
import morphologyConfig from "data/morphologyConfig";

export function GapInput({ value, onChange, placeholder, width = "2em", dropValue , className}) {
  const enabled = useSelector((state) => state.morphology);

  const macronMap = { a: "ā", e: "ē", i: "ī", o: "ō", u: "ū", A: "Ā", E: "Ē", I: "Ī", O: "Ō", U: "Ū" };
  // ȳ and Ȳ don't exist with Gentium

  const handleChange = (e) => {
    let text = e.target.value;
    text = text.replace(/-([aeiouAEIOU])/g, (match, vowel) => {
      return macronMap[vowel];
    });
    onChange({ target: { value: text } });
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange} // adds macron accents
      placeholder={placeholder}
      // the second className below will come from Text.js and will allow formatting depending on right/wrong answer
      className={`${styles.gapInput} ${className || ""}`}
      // the color of the input depends on the value of the dropdown (Latin case)
      style={{ width, ...(enabled[dropValue] && { color: `var(--color-${dropValue})` }) }}
    />
  );
}

export function DropDown({ listType, value, onChange, className }) {
  const currentChapter = useSelector((state) => state.navigation.value.chapter);

  const lists = {
    case: [
      { value: "nominative", item: "nom" },
      { value: "accusative", item: "acc" },
      { value: "genitive", item: "gen" },
      { value: "dative", item: "dat" },
      { value: "ablative", item: "abl" },
      { value: "vocative", item: "voc" },
    ],
    gender: [
      { value: "masculine", item: "mas" },
      { value: "feminine", item: "fem" },
      { value: "neuter", item: "neu" },
    ],
    number: [
      { value: "singular", item: "sin" },
      { value: "plural", item: "plu" },
    ],
  };

  // Créer un map pour accès rapide aux infos de morphology
  const morphologyMap = {};
  morphologyConfig.forEach((item) => {
    morphologyMap[item.key] = item;
  });

  return (
    <select className={`${styles.dropDown} ${className || ""}`} value={value} onChange={onChange}>
      <option value="">—</option>
      {lists[listType]
        .filter((opt) => {
          const morphInfo = morphologyMap[opt.value];
          // Garde l'option si elle existe dans morphologyConfig ET si son chapitre d'intro <= currentChapter
          return morphInfo && morphInfo.fromChapter <= currentChapter;
        })
        .map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.item}
          </option>
        ))}
    </select>
  );
}
