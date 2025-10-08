import React from "react";
import styles from "styles/Table.module.css";
import { useTranslation } from "data/translation/useTranslation";

export default function Table({ table, renderCell }) {
  if (!table || !table.cells || table.cells.length === 0) return null;

  const t = useTranslation();

  // On déduit les colonnes dynamiquement à partir des clés du premier objet
  const columns = Object.keys(table.cells[0]).filter(
    (key) => key !== "rowName"
  );

  // Couleur de la cellule en haut à gauche (elle ne peut aller directement en in-line style)
  const rootStyles = getComputedStyle(document.documentElement);
  const colorR1C1 = rootStyles
    .getPropertyValue(table.name.backgroundColor)
    .trim();

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th
            className={styles.headerCell}
            style={{ backgroundColor: colorR1C1 }}
          >
            {t(table.name.title)}
          </th>
          {columns.map((col) => (
            <th key={col} className={styles.headerCell}>
              {t(col)}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {table.cells.map((row, i) => (
          <tr key={i}>
            <td className={styles.rowHeader}>{t(row.rowName)}</td>
            {columns.map((col) => (
              <td key={col} className={styles.cell}>
                {renderCell
                  ? // 3 possible arguments: cell, row header, column header
                    renderCell(row[col], row.rowName, col)
                  : row[col]}{" "}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
