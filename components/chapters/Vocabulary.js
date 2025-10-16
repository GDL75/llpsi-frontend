import React from "react";
import { useSelector } from "react-redux";
import styles from "styles/Vocabulary.module.css";
import { useTranslation } from "data/translation/useTranslation";
import { useMorph } from "utils/useMorph";
import { ordinalNumber } from "utils/numbers";
import { addEnding } from "utils/addEnding";

export default function Vocabulary({ data, openComment }) {
  const t = useTranslation();
  const m = useMorph();
  const currentChapter = useSelector((state) => state.navigation.value.chapter);
  const language = useSelector((state) => state.settings.value.language);

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

  // --- 1️⃣ Grouper par type
  const groupedByType = CATEGORY_ORDER.reduce((acc, type) => {
    const items = data.filter((w) => w.type === type);
    if (items.length > 0) acc[type] = items;
    return acc;
  }, {});

  // --- 2️⃣ Sous-groupes
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
          let title =
            num === "0"
              ? type === "verb"
                ? t("irregular")
                : t("indeclinable")
              : t(keyMap[type]);
          return {
            title,
            num,
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

  // --- 3️⃣ Rendu d’un mot
  const renderWord = (word) => {
    if (word.type === "noun") {
      return (
        <>
          {m({
            token: addEnding({ word, case: "nominative", number: "singular" }),
            morph: "nominative",
            gender: word.gender,
          })}
          {currentChapter > 1 && (
            <>
              {", "}
              {m({
                token: addEnding({
                  word,
                  case: "genitive",
                  number: "singular",
                }),
                morph: "genitive",
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
            token: addEnding({
              word,
              case: "nominative",
              number: "singular",
              gender: "masculine",
            }),
            morph: "nominative",
            gender: "masculine",
          })}
          ,{" "}
          {m({
            token: addEnding({
              word,
              case: "nominative",
              number: "singular",
              gender: "feminine",
            }),
            morph: "nominative",
            gender: "feminine",
          })}
          ,{" "}
          {m({
            token: addEnding({
              word,
              case: "nominative",
              number: "singular",
              gender: "neuter",
            }),
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

  // --- 4️⃣ Colonnes : première = 3 premières catégories, deuxième = reste
  const firstCol = CATEGORY_ORDER.slice(0, 3);
  const secondCol = CATEGORY_ORDER.slice(3);
  const columns = [firstCol, secondCol];

  // --- 5️⃣ Rendu
  const renderTypeBlock = (type) =>
    groupedByType[type] && (
      <div key={type}>
        <h4 style={{ "text-decoration": "underline" }}>{t(type)}</h4>
        {getSubgroups(type, groupedByType[type]).map((subgroup) => (
          <div key={`${type}-${subgroup.num}`}>
            {subgroup.title && (
              <h5>
                {subgroup.num > 0 &&
                  ordinalNumber(
                    Number(subgroup.num),
                    language,
                    "feminine"
                  )}{" "}
                {subgroup.title}
              </h5>
            )}
            {subgroup.words.map((word) => (
              <p key={word.id} className={styles.wordContainer}>
                <span className={styles.word} onClick={() => openComment(word)}>
                  {renderWord(word)}
                </span>
              </p>
            ))}
          </div>
        ))}
      </div>
    );

  return (
    <div className={styles.vocabColumns}>
      {columns.map((colTypes, colIndex) => (
        <div className={styles.column} key={colIndex}>
          {colTypes.map(renderTypeBlock)}
        </div>
      ))}
    </div>
  );
}
