import React from "react";
import styles from "styles/Table.module.css";
import { useTranslation } from "data/translation/useTranslation";

export default function Table({ table, type }) {
  if (!table || !table.cells || table.cells.length === 0) return null;

  const t = useTranslation();

  // On déduit les colonnes dynamiquement à partir des clés du premier objet
  const columns = Object.keys(table.cells[0]).filter(
    (key) => key !== "rowName"
  );

  // Custom color for column headers if they represent gender
  const rootStyles = getComputedStyle(document.documentElement);
  const colorGender = {
    masculine: rootStyles.getPropertyValue("--color-masculine").trim(),
    feminine: rootStyles.getPropertyValue("--color-feminine").trim(),
    neuter: rootStyles.getPropertyValue("--color-neuter").trim(),
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th
            className={styles.columnHeader}
            style={
              colorGender[table.r1c1] && {
                // if a gender -> background color
                backgroundColor: colorGender[table.r1c1],
              }
            }
          >
            {t(table.r1c1)}
          </th>
          {columns.map((col) => (
            <th
              key={col}
              className={styles.columnHeader}
              // if a gender -> background color :
              style={colorGender[col] && { backgroundColor: colorGender[col] }}
            >
              {t(col)}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {table.cells.map((row, i) => {
          if (row.separator) {
            return (
              <tr key={`sep-${i}`}>
                <td
                  colSpan={columns.length + 1}
                  style={{ borderBottom: "3px solid black" }}
                ></td>
              </tr>
            );
          }
          return (
            <tr key={i}>
              <td className={styles.rowHeader}>{t(row.rowName)}</td>
              {columns.map((col) => (
                <td key={col} className={styles.cell}>
                  {renderCell
                    ? renderCell(row[col], row.rowName, col)
                    : row[col]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
