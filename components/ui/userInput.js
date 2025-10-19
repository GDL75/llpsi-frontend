import React from "react";
import styles from "styles/userInput.module.css";

export function GapInput({ value, onChange, placeholder, width = "2em", dropValue }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.gapInput} ${styles[dropValue]}`}
      style={{ width }}
    />
  );
}

export function DropDown({ listType, value, onChange }) {
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

  return (
    <select className={styles.dropDown} value={value} onChange={onChange}>
      <option value="">—</option>
      {lists[listType].map((opt) => (
        <option
          key={opt.value}
          value={opt.value}
        >
          {opt.item}
        </option>
      ))}
    </select>
  );
}

export function GapField({ inputValue, onInputChange, placeholder, width, listType, dropValue, onDropChange }) {
  return (
    <div className={styles.gapField}>
      <GapInput
        value={inputValue}
        onChange={onInputChange}
        placeholder={placeholder}
        width={width}
        style={{ color: `var(--color-${dropValue})` }}
      />
      <DropDown listType={listType} value={dropValue} onChange={onDropChange} />
    </div>
  );
}
