import React from "react";
import styles from "styles/CustomRadio.module.css";

export default function CustomRadio({ label, value, name, checked, onChange }) {
  return (
    <label className={styles.radioLabel}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={styles.radioInput}
      />
      <span className={styles.customRadio}></span>
      {label}
    </label>
  );
}
