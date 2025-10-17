import React from "react";
import { useSelector } from "react-redux";
import styles from "styles/Vocabulary.module.css";
import { useTranslation } from "data/translation/useTranslation";
import { ordinalNumber } from "utils/numbers";
import WordSummary from "ui/WordSummary"

export default function Vocabulary({ data, openComment }) {
  const t = useTranslation();
  const language = useSelector((state) => state.settings.value.language);

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

  // --- 3️⃣ Colonnes : première = 3 premières catégories, deuxième = reste
  const firstCol = CATEGORY_ORDER.slice(0, 3);
  const secondCol = CATEGORY_ORDER.slice(3);
  const columns = [firstCol, secondCol];

  // --- 4️⃣ Rendu
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
                  <WordSummary word={word} />
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
