import React from "react";
import { useMorph } from "utils/useMorph";
import styles from "styles/Noun.module.css";
import { useTranslation } from "data/translation/useTranslation";

export default function Noun({ data }) {
  const m = useMorph();
  const t = useTranslation();
  const genderClass =
    data.gender === "masculine"
      ? styles.masculine
      : data.gender === "feminine"
      ? styles.feminine
      : styles.neuter;

  return (
    <table className={styles.nounTable}>
      <thead>
        <tr>
          <th className={`${styles.headerCell} ${genderClass}`}>
            {t(data.gender)}
          </th>
          <th className={styles.headerCell}>{t("singular")}</th>
          <th className={styles.headerCell}>{t("plural")}</th>
        </tr>
      </thead>
      <tbody>
        {data.cases.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className={styles.caseCell}>{t(row.case)}</td>
            <td className={styles.formCell}>
              {m({ token: row.singular, morph: row.case })}
            </td>
            <td className={styles.formCell}>
              {m({ token: row.plural, morph: row.case })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
