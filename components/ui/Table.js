import React, { useMemo } from "react";
import styles from "styles/Table.module.css";
import { useSelector } from "react-redux";
import { useTranslation } from "components/hooks/useTranslation";
import { useMorph } from "components/hooks/useMorph";
import morphologyConfig from "data/morphologyConfig";
import { addEnding } from "utils/addEnding";
import endings from "data/endings";
import Conjugate from "ui/Conjugate";

//--------------------------------------------------------------------------------------------
export function TableNoun({ word }) {
  const t = useTranslation();
  const m = useMorph();
  const currentChapter = useSelector((state) => state.navigation.value.chapter);

  if (!word || word.type !== "noun") return null;

  const rowHeader = ["nominative", "accusative", "genitive", "dative", "ablative", "vocative"];
  const columnHeader = ["case", "singular", "plural"];

  // Filtrage selon le chapitre
  const visibleRows = rowHeader
    .map((rowName, index) => {
      const morphRule = morphologyConfig.find((m) => m.key === rowName);
      const isVisible = !morphRule || currentChapter >= morphRule.fromChapter;
      return isVisible ? { rowName, rowIndex: index } : null;
    })
    .filter(Boolean);

  // Construction des cellules avec addEnding()
  const tableData = visibleRows.map(({ rowName }) => ({
    caseName: rowName,
    singular: addEnding({ word, case: rowName, number: "singular" }),
    plural: addEnding({ word, case: rowName, number: "plural" }),
  }));

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columnHeader.map((header, i) => (
            <th key={i} className={styles.columnHeader}>
              {t(header)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, i) => (
          <tr key={i}>
            <td className={styles.rowHeader}>{t(row.caseName)}</td>
            <td className={`${styles.cell} ${styles[word.gender]}`}>
              {m({
                token: row.singular,
                morph: row.caseName,
              })}
            </td>
            <td className={`${styles.cell} ${styles[word.gender]}`}>
              {m({
                token: row.plural,
                morph: row.caseName,
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

//--------------------------------------------------------------------------------------------
export function TableAdjPro({ word }) {
  const t = useTranslation();
  const m = useMorph();
  const currentChapter = useSelector((state) => state.navigation.value.chapter);

  if (!word || (word.type !== "adjective" && word.type !== "pronoun")) return null;

  const cases = ["nominative", "accusative", "genitive", "dative", "ablative", "vocative"];
  const rowHeader = [...cases, ...cases]; // twice : singular, then plural

  const columnHeader = [
    word.type === "adjective" ? "case" : "sing/plur",
    "masculine",
    "feminine",
    ...(currentChapter > 1 ? ["neuter"] : []),
  ];

  // --- Filtrage selon le chapitre
  const visibleRows = rowHeader
    .map((rowName, index) => {
      const morphRule = morphologyConfig.find((m) => m.key === rowName);
      const isVisible = !morphRule || currentChapter >= morphRule.fromChapter;
      return isVisible ? { rowName, rowIndex: index } : null;
    })
    .filter(Boolean);

  // --- Construction du tableau de données avec addEnding()
  let tableData = {};
  if (word.type === "adjective") {
    tableData = visibleRows.map(({ rowName, rowIndex }) => {
      const number = rowIndex < 6 ? "singular" : "plural";
      return {
        caseName: rowName,
        masculine: addEnding({
          word,
          case: rowName,
          gender: "masculine",
          number,
        }),
        feminine: addEnding({
          word,
          case: rowName,
          gender: "feminine",
          number,
        }),
        neuter: addEnding({
          word,
          case: rowName,
          gender: "neuter",
          number,
        }),
      };
    });
  } else {
    // it is then a pronoun
    tableData = visibleRows.map(({ rowName, rowIndex }) => {
      const number = rowIndex < 6 ? "singular" : "plural";
      return {
        caseName: rowName,
        masculine: word.forms[rowIndex][0],
        feminine: word.forms[rowIndex][1],
        neuter: word.forms[rowIndex][2],
      };
    });
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columnHeader.map((header, i) => (
            <th key={i} className={styles.columnHeader}>
              {t(header)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, i) => {
          const isEndOfSingular = i === visibleRows.length / 2 - 1;
          return (
            <tr key={i} className={isEndOfSingular ? styles.sectionDivider : undefined}>
              <td className={styles.rowHeader}>{t(row.caseName)}</td>
              <td className={`${styles.cell} ${styles.masculine}`}>
                {m({ token: row.masculine, morph: row.caseName })}
              </td>
              <td className={`${styles.cell} ${styles.feminine}`}>{m({ token: row.feminine, morph: row.caseName })}</td>
              {currentChapter > 1 && (
                <td className={`${styles.cell} ${styles.neuter}`}>{m({ token: row.neuter, morph: row.caseName })}</td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

//--------------------------------------------------------------------------------------------
export function TableVerb({ radical, conjugation, voice, aspect }) {
  const t = useTranslation();
  const data = endings.verb?.conjugation?.[conjugation]?.[voice]?.[aspect];
  if (!data) return <p>Pas de données pour cet aspect.</p>;

  const moods = Object.keys(data);
  const tenseSet = new Set();
  for (const mood of moods) {
    const tenses = Object.keys(data[mood]);
    tenses.forEach((t) => tenseSet.add(t));
  }
  const tenses = Array.from(tenseSet);
  const hasCombination = (mood, tense) => !!data?.[mood]?.[tense];

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          {moods.map((mood) => (
            <th key={mood} className={styles.columnHeader}>
              {t(mood)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tenses.map((tense) => (
          <tr key={tense}>
            <th className={styles.rowHeader}>{t(tense)}</th>
            {moods.map((mood) => {
              const exists = hasCombination(mood, tense);
              return (
                <td key={mood} className={exists ? styles.cell : `${styles.cell} ${styles.empty}`}>
                  {exists && (
                    <Conjugate
                      radical={radical}
                      conjugation={conjugation}
                      voice={voice}
                      aspect={aspect}
                      mood={mood}
                      tense={tense}
                    />
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
