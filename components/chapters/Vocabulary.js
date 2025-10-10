import React from "react";
import { useSelector } from "react-redux";
import styles from "styles/Vocabulary.module.css";
import { useTranslation } from "data/translation/useTranslation";
import { useMorph } from "utils/useMorph";

export default function Vocabulary({ data, openLemma }) {
  const t = useTranslation();
  const m = useMorph();
  const currentChapter = useSelector((state) => state.navigation.value.chapter);

  const genderAbbreviation = {
    masculine: "m.",
    feminine: "f.",
    neuter: "n.",
    both: "m./f.",
  };

  const CATEGORY_ORDER = [
    "noun",
    "pronoun",
    "adjective",
    "verb",
    "adverb",
    "number",
    "preposition",
    "conjunction",
    "interjection",
  ];

  // --- 🔹 1. Grouper par type
  const groupedByType = CATEGORY_ORDER.reduce((acc, type) => {
    const items = data.filter((w) => w.type === type);
    if (items.length > 0) acc[type] = items;
    return acc;
  }, {});

  // --- 🔹 2. Sous-groupes (déclinaisons / conjugaisons)
  const getSubgroups = (type, words) => {
    if (["noun", "adjective", "verb"].includes(type)) {
      const keyMap = {
        noun: "declension",
        adjective: "class",
        verb: "conjugation",
      };
      const key = keyMap[type];
      const groups = {};

      words.forEach((w) => {
        const num = w[key] || 0;
        if (!groups[num]) groups[num] = [];
        groups[num].push(w);
      });

      return Object.entries(groups)
        .sort(([a], [b]) => a - b)
        .map(([num, words]) => {
          let title;
          if (num === "0") {
            title = type === "verb" ? "Irregular" : "Indeclinable";
          } else if (type === "verb") {
            title = `${num}ᵗʰ conjugation`;
          } else {
            title = `${num}ᵗʰ declension`;
          }
          return {
            title,
            words: words.sort((a, b) =>
              a.word.localeCompare(b.word, "la", { sensitivity: "base" })
            ),
          };
        });
    }

    return [
      {
        title: null,
        words: words.sort((a, b) =>
          a.word.localeCompare(b.word, "la", { sensitivity: "base" })
        ),
      },
    ];
  };

  // --- 🔹 3. Fonction isolée : rendu d’un mot
  const renderWord = (word) => {
    if (word.type === "noun") {
      return (
        <>
          {m({
            token: word.forms.cells[0].singular,
            morph: word.forms.cells[0].rowName,
            gender: word.gender,
          })}

          {currentChapter > 1 && (
            <>
              {", "}
              {m({
                token: word.forms.cells[2].singular,
                morph: word.forms.cells[2].rowName,
                gender: word.gender,
              })}
            </>
          )}

          {`, ${genderAbbreviation[word.gender]}`}
        </>
      );
    } else if (word.type === "adjective" || word.type === "pronoun") {
      return (
        <>
          {m({
            token: word.forms.cells[0].masculine,
            morph: "nominative",
            gender: "masculine",
          })}
          {", "}
          {m({
            token: word.forms.cells[0].feminine,
            morph: "nominative",
            gender: "feminine",
          })}
          {", "}
          {m({
            token: word.forms.cells[0].neuter,
            morph: "nominative",
            gender: "neuter",
          })}
        </>
      );
    } else if (word.type === "verb") {
      return word.llpsi;
    } else {
      return word.word;
    }
  };

  // --- 🔹 4. Rendu principal
  return (
    <div className={styles.vocabulary}>
      {Object.entries(groupedByType).map(([type, words]) => (
        <div key={type}>
          <h4>{t(type)}</h4>

          {getSubgroups(type, words).map((subgroup, i) => (
            <div key={i}>
              {subgroup.title && <h5>{subgroup.title}</h5>}

              {subgroup.words.map((word) => (
                <p
                  key={word.id}
                  className={styles.word}
                  onClick={() => openLemma(word)}
                  style={{ marginTop: "0px" }}
                >
                  {renderWord(word)}
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
