import React, { useMemo } from "react";
import styles from "styles/Table.module.css";
import { useSelector } from "react-redux";
import { useTranslation } from "data/translation/useTranslation";
import { useMorph } from "utils/useMorph";
import morphologyConfig from "data/morphologyConfig";

export default function Table({ word }) {
  if (!word || !word.forms || word.forms.length === 0) return null;

  const currentChapter = useSelector((state) => state.navigation.value.chapter);
  const t = useTranslation();
  const m = useMorph();

  // --- Définition des entêtes selon le type
  let columnHeader = [];
  let rowHeader = [];

  if (word.type === "noun") {
    columnHeader = ["case", "singular", "plural"];
    rowHeader = [
      "nominative",
      "accusative",
      "genitive",
      "dative",
      "ablative",
      "vocative",
    ];
  } else if (word.type === "pronoun" || word.type === "adjective") {
    columnHeader = ["sing/plur", "masculine", "feminine", "neuter"];
    rowHeader = [
      "nominative",
      "accusative",
      "genitive",
      "dative",
      "ablative",
      "vocative",
      "nominative",
      "accusative",
      "genitive",
      "dative",
      "ablative",
      "vocative",
    ];
  } else {
    return null;
  }

  // --- Fonction utilitaire pour obtenir le chapitre minimal
  const chapFrom = (key) =>
    morphologyConfig.find((item) => item.key === key)?.fromChapter ?? 1;

  // --- Calcul des lignes visibles avec useMemo
  const visibleRows = useMemo(() => {
    return rowHeader
      .map((rowName, index) => {
        const isVisible = currentChapter >= chapFrom(rowName);
        return isVisible ? { rowName, rowIndex: index } : null;
      })
      .filter(Boolean);
  }, [rowHeader, currentChapter]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columnHeader.map((header, i) => (
            <th className={styles.columnHeader} key={i}>
              {t(header)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {visibleRows.map(({ rowName, rowIndex }) => (
          <tr key={rowIndex}>
            <td className={styles.rowHeader}>{t(rowName)}</td>
            {word.forms[rowIndex]?.map((cell, colIndex) => (
              <td
                className={`${styles.cell} ${
                  word.type === "noun"
                    ? styles[word.gender]
                    : styles[columnHeader[colIndex + 1]]
                }`}
                key={colIndex}
              >
                {m({
                  token: cell,
                  morph: rowName,
                  gender: word.gender,
                })}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
